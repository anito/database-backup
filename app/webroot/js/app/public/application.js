
/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});

/*!
 * jQuery Templates Plugin
 * http://github.com/jquery/jquery-tmpl
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */
(function( jQuery, undefined ){
    var oldManip = jQuery.fn.domManip, tmplItmAtt = "_tmplitem", htmlExpr = /^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,
        newTmplItems = {}, wrappedItems = {}, appendToTmplItems, topTmplItem = { key: 0, data: {} }, itemKey = 0, cloneIndex = 0, stack = [];

    function newTmplItem( options, parentItem, fn, data ) {
        // Returns a template item data structure for a new rendered instance of a template (a 'template item').
        // The content field is a hierarchical array of strings and nested items (to be
        // removed and replaced by nodes field of dom elements, once inserted in DOM).
        var newItem = {
            data: data || (parentItem ? parentItem.data : {}),
            _wrap: parentItem ? parentItem._wrap : null,
            tmpl: null,
            parent: parentItem || null,
            nodes: [],
            calls: tiCalls,
            nest: tiNest,
            wrap: tiWrap,
            html: tiHtml,
            update: tiUpdate
        };
        if ( options ) {
            jQuery.extend( newItem, options, { nodes: [], parent: parentItem } );
        }
        if ( fn ) {
            // Build the hierarchical content to be used during insertion into DOM
            newItem.tmpl = fn;
            newItem._ctnt = newItem._ctnt || newItem.tmpl( jQuery, newItem );
            newItem.key = ++itemKey;
            // Keep track of new template item, until it is stored as jQuery Data on DOM element
            (stack.length ? wrappedItems : newTmplItems)[itemKey] = newItem;
        }
        return newItem;
    }

    // Override appendTo etc., in order to provide support for targeting multiple elements. (This code would disappear if integrated in jquery core).
    jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function( name, original ) {
        jQuery.fn[ name ] = function( selector ) {
            var ret = [], insert = jQuery( selector ), elems, i, l, tmplItems,
                parent = this.length === 1 && this[0].parentNode;

            appendToTmplItems = newTmplItems || {};
            if ( parent && parent.nodeType === 11 && parent.childNodes.length === 1 && insert.length === 1 ) {
                insert[ original ]( this[0] );
                ret = this;
            } else {
                for ( i = 0, l = insert.length; i < l; i++ ) {
                    cloneIndex = i;
                    elems = (i > 0 ? this.clone(true) : this).get();
                    jQuery.fn[ original ].apply( jQuery(insert[i]), elems );
                    ret = ret.concat( elems );
                }
                cloneIndex = 0;
                ret = this.pushStack( ret, name, insert.selector );
            }
            tmplItems = appendToTmplItems;
            appendToTmplItems = null;
            jQuery.tmpl.complete( tmplItems );
            return ret;
        };
    });

    jQuery.fn.extend({
        // Use first wrapped element as template markup.
        // Return wrapped set of template items, obtained by rendering template against data.
        tmpl: function( data, options, parentItem ) {
            return jQuery.tmpl( this[0], data, options, parentItem );
        },

        // Find which rendered template item the first wrapped DOM element belongs to
        tmplItem: function() {
            return jQuery.tmplItem( this[0] );
        },
        
        tmplElement: function() {
            return jQuery.tmplElement( this[0] );
        },

        // Consider the first wrapped element as a template declaration, and get the compiled template or store it as a named template.
        template: function( name ) {
            return jQuery.template( name, this[0] );
        },

        domManip: function( args, table, callback, options ) {
            // This appears to be a bug in the appendTo, etc. implementation
            // it should be doing .call() instead of .apply(). See #6227
            if ( args[0] && args[0].nodeType ) {
                var dmArgs = jQuery.makeArray( arguments ), argsLength = args.length, i = 0, tmplItem;
                while ( i < argsLength && !(tmplItem = jQuery.data( args[i++], "tmplItem" ))) {}
                if ( argsLength > 1 ) {
                    dmArgs[0] = [jQuery.makeArray( args )];
                }
                if ( tmplItem && cloneIndex ) {
                    dmArgs[2] = function( fragClone ) {
                        // Handler called by oldManip when rendered template has been inserted into DOM.
                        jQuery.tmpl.afterManip( this, fragClone, callback );
                    };
                }
                oldManip.apply( this, dmArgs );
            } else {
                oldManip.apply( this, arguments );
            }
            cloneIndex = 0;
            if ( !appendToTmplItems ) {
                jQuery.tmpl.complete( newTmplItems );
            }
            return this;
        }
    });

    jQuery.extend({
        // Return wrapped set of template items, obtained by rendering template against data.
        tmpl: function( tmpl, data, options, parentItem ) {
            var ret, topLevel = !parentItem;
            if ( topLevel ) {
                // This is a top-level tmpl call (not from a nested template using {{tmpl}})
                parentItem = topTmplItem;
                if ( typeof tmpl != "function" )
                tmpl = jQuery.template[tmpl] || jQuery.template( null, tmpl );
                wrappedItems = {}; // Any wrapped items will be rebuilt, since this is top level
            } else if ( !tmpl ) {
                // The template item is already associated with DOM - this is a refresh.
                // Re-evaluate rendered template for the parentItem
                tmpl = parentItem.tmpl;
                newTmplItems[parentItem.key] = parentItem;
                parentItem.nodes = [];
                if ( parentItem.wrapped ) {
                    updateWrapped( parentItem, parentItem.wrapped );
                }
                // Rebuild, without creating a new template item
                return jQuery( build( parentItem, null, parentItem.tmpl( jQuery, parentItem ) ));
            }
            if ( !tmpl ) {
                return []; // Could throw...
            }
            if ( typeof data === "function" ) {
                data = data.call( parentItem || {} );
            }
            if ( options && options.wrapped ) {
                updateWrapped( options, options.wrapped );
            }
            ret = jQuery.isArray( data ) ? 
                jQuery.map( data, function( dataItem ) {
                    return dataItem ? newTmplItem( options, parentItem, tmpl, dataItem ) : null;
                }) :
                [ newTmplItem( options, parentItem, tmpl, data ) ];
            return topLevel ? jQuery( build( parentItem, null, ret ) ) : ret;
        },

        // Return rendered template item for an element.
        tmplItem: function( elem ) {
            var tmplItem;
            if ( elem instanceof jQuery ) {
                elem = elem[0];
            }
            while ( elem && elem.nodeType === 1 && !(tmplItem = jQuery.data( elem, "tmplItem" )) && (elem = elem.parentNode) ) {}
            return tmplItem || topTmplItem;
        },
        
        tmplElement: function( elem ) {
            var tmplItem;
            if ( elem instanceof jQuery ) {
                elem = elem[0];
            }
            while ( elem && elem.nodeType === 1 && !jQuery.data( elem, "tmplItem" ) && (elem = elem.parentNode) ) {}
            return elem;
        },

        // Set:
        // Use $.template( name, tmpl ) to cache a named template,
        // where tmpl is a template string, a script element or a jQuery instance wrapping a script element, etc.
        // Use $( "selector" ).template( name ) to provide access by name to a script block template declaration.

        // Get:
        // Use $.template( name ) to access a cached template.
        // Also $( selectorToScriptBlock ).template(), or $.template( null, templateString )
        // will return the compiled template, without adding a name reference.
        // If templateString includes at least one HTML tag, $.template( templateString ) is equivalent
        // to $.template( null, templateString )
        template: function( name, tmpl ) {
            if (tmpl) {
                // Compile template and associate with name
                if ( typeof tmpl === "string" ) {
                    // This is an HTML string being passed directly in.
                    tmpl = buildTmplFn( tmpl )
                } else if ( tmpl instanceof jQuery ) {
                    tmpl = tmpl[0] || {};
                }
                if ( tmpl.nodeType ) {
                    // If this is a template block, use cached copy, or generate tmpl function and cache.
                    tmpl = jQuery.data( tmpl, "tmpl" ) || jQuery.data( tmpl, "tmpl", buildTmplFn( tmpl.innerHTML ));
                }
                return typeof name === "string" ? (jQuery.template[name] = tmpl) : tmpl;
            }
            // Return named compiled template
            return name ? (typeof name !== "string" ? jQuery.template( null, name ): 
                (jQuery.template[name] || 
                    // If not in map, treat as a selector. (If integrated with core, use quickExpr.exec) 
                    jQuery.template( null, htmlExpr.test( name ) ? name : jQuery( name )))) : null; 
        },

        encode: function( text ) {
            // Do HTML encoding replacing < > & and ' and " by corresponding entities.
            return ("" + text).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;");
        }
    });

    jQuery.extend( jQuery.tmpl, {
        tag: {
            "tmpl": {
                _default: { $2: "null" },
                open: "if($notnull_1){_=_.concat($item.nest($1,$2));}"
                // tmpl target parameter can be of type function, so use $1, not $1a (so not auto detection of functions)
                // This means that {{tmpl foo}} treats foo as a template (which IS a function). 
                // Explicit parens can be used if foo is a function that returns a template: {{tmpl foo()}}.
            },
            "wrap": {
                _default: { $2: "null" },
                open: "$item.calls(_,$1,$2);_=[];",
                close: "call=$item.calls();_=call._.concat($item.wrap(call,_));"
            },
            "each": {
                _default: { $2: "$index, $value" },
                open: "if($notnull_1){$.each($1a,function($2){with(this){",
                close: "}});}"
            },
            "if": {
                open: "if(($notnull_1) && $1a){",
                close: "}"
            },
            "else": {
                _default: { $1: "true" },
                open: "}else if(($notnull_1) && $1a){"
            },
            "html": {
                // Unecoded expression evaluation. 
                open: "if($notnull_1){_.push($1a);}"
            },
            "=": {
                // Encoded expression evaluation. Abbreviated form is ${}.
                _default: { $1: "$data" },
                open: "if($notnull_1){_.push($.encode($1a));}"
            },
            "!": {
                // Comment tag. Skipped by parser
                open: ""
            }
        },

        // This stub can be overridden, e.g. in jquery.tmplPlus for providing rendered events
        complete: function( items ) {
            newTmplItems = {};
        },

        // Call this from code which overrides domManip, or equivalent
        // Manage cloning/storing template items etc.
        afterManip: function afterManip( elem, fragClone, callback ) {
            // Provides cloned fragment ready for fixup prior to and after insertion into DOM
            var content = fragClone.nodeType === 11 ?
                jQuery.makeArray(fragClone.childNodes) :
                fragClone.nodeType === 1 ? [fragClone] : [];

            // Return fragment to original caller (e.g. append) for DOM insertion
            callback.call( elem, fragClone );

            // Fragment has been inserted:- Add inserted nodes to tmplItem data structure. Replace inserted element annotations by jQuery.data.
            storeTmplItems( content );
            cloneIndex++;
        }
    });

    //========================== Private helper functions, used by code above ==========================

    function build( tmplItem, nested, content ) {
        // Convert hierarchical content into flat string array 
        // and finally return array of fragments ready for DOM insertion
        var frag, ret = content ? jQuery.map( content, function( item ) {
            return (typeof item === "string") ? 
                // Insert template item annotations, to be converted to jQuery.data( "tmplItem" ) when elems are inserted into DOM.
                (tmplItem.key ? item.replace( /(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g, "$1 " + tmplItmAtt + "=\"" + tmplItem.key + "\" $2" ) : item) :
                // This is a child template item. Build nested template.
                build( item, tmplItem, item._ctnt );
        }) : 
        // If content is not defined, insert tmplItem directly. Not a template item. May be a string, or a string array, e.g. from {{html $item.html()}}. 
        tmplItem;
        if ( nested ) {
            return ret;
        }

        // top-level template
        ret = ret.join("");

        // Support templates which have initial or final text nodes, or consist only of text
        // Also support HTML entities within the HTML markup.
        ret.replace( /^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/, function( all, before, middle, after) {
            frag = jQuery( middle ).get();

            storeTmplItems( frag );
            if ( before ) {
                frag = unencode( before ).concat(frag);
            }
            if ( after ) {
                frag = frag.concat(unencode( after ));
            }
        });
        return frag ? frag : unencode( ret );
    }

    function unencode( text ) {
        // Use createElement, since createTextNode will not render HTML entities correctly
        var el = document.createElement( "div" );
        el.innerHTML = text;
        return jQuery.makeArray(el.childNodes);
    }

    // Generate a reusable function that will serve to render a template against data
    function buildTmplFn( markup ) {
        return new Function("jQuery","$item",
            "var $=jQuery,call,_=[],$data=$item.data;" +

            // Introduce the data as local variables using with(){}
            "with($data){_.push('" +

            // Convert the template into pure JavaScript
            jQuery.trim(markup)
                .replace( /([\\'])/g, "\\$1" )
                .replace( /[\r\t\n]/g, " " )
                .replace( /\$\{([^\}]*)\}/g, "{{= $1}}" )
                .replace( /\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,
                function( all, slash, type, fnargs, target, parens, args ) {
                    var tag = jQuery.tmpl.tag[ type ], def, expr, exprAutoFnDetect;
                    if ( !tag ) {
                        throw "Template command not found: " + type;
                    }
                    def = tag._default || [];
                    if ( parens && !/\w$/.test(target)) {
                        target += parens;
                        parens = "";
                    }
                    if ( target ) {
                        target = unescape( target ); 
                        args = args ? ("," + unescape( args ) + ")") : (parens ? ")" : "");
                        // Support for target being things like a.toLowerCase();
                        // In that case don't call with template item as 'this' pointer. Just evaluate...
                        expr = parens ? (target.indexOf(".") > -1 ? target + parens : ("(" + target + ").call($data" + args)) : target;
                        exprAutoFnDetect = parens ? expr : "(typeof(" + target + ")==='function'?(" + target + ").call($item):(" + target + "))";
                    } else {
                        exprAutoFnDetect = expr = def.$1 || "null";
                    }
                    fnargs = unescape( fnargs );
                    return "');" + 
                        tag[ slash ? "close" : "open" ]
                            .split( "$notnull_1" ).join( target ? "typeof(" + target + ")!=='undefined' && (" + target + ")!=null" : "true" )
                            .split( "$1a" ).join( exprAutoFnDetect )
                            .split( "$1" ).join( expr )
                            .split( "$2" ).join( fnargs ?
                                fnargs.replace( /\s*([^\(]+)\s*(\((.*?)\))?/g, function( all, name, parens, params ) {
                                    params = params ? ("," + params + ")") : (parens ? ")" : "");
                                    return params ? ("(" + name + ").call($item" + params) : all;
                                })
                                : (def.$2||"")
                            ) +
                        "_.push('";
                }) +
            "');}return _;"
        );
    }
    function updateWrapped( options, wrapped ) {
        // Build the wrapped content. 
        options._wrap = build( options, true, 
            // Suport imperative scenario in which options.wrapped can be set to a selector or an HTML string.
            jQuery.isArray( wrapped ) ? wrapped : [htmlExpr.test( wrapped ) ? wrapped : jQuery( wrapped ).html()]
        ).join("");
    }

    function unescape( args ) {
        return args ? args.replace( /\\'/g, "'").replace(/\\\\/g, "\\" ) : null;
    }
    function outerHtml( elem ) {
        var div = document.createElement("div");
        div.appendChild( elem.cloneNode(true) );
        return div.innerHTML;
    }

    // Store template items in jQuery.data(), ensuring a unique tmplItem data data structure for each rendered template instance.
    function storeTmplItems( content ) {
        var keySuffix = "_" + cloneIndex, elem, elems, newClonedItems = {}, i, l, m;
        for ( i = 0, l = content.length; i < l; i++ ) {
            if ( (elem = content[i]).nodeType !== 1 ) {
                continue;
            }
            elems = elem.getElementsByTagName("*");
            for ( m = elems.length - 1; m >= 0; m-- ) {
                processItemKey( elems[m] );
            }
            processItemKey( elem );
        }
        function processItemKey( el ) {
            var pntKey, pntNode = el, pntItem, tmplItem, key;
            // Ensure that each rendered template inserted into the DOM has its own template item,
            if ( (key = el.getAttribute( tmplItmAtt ))) {
                while ( pntNode.parentNode && (pntNode = pntNode.parentNode).nodeType === 1 && !(pntKey = pntNode.getAttribute( tmplItmAtt ))) { }
                if ( pntKey !== key ) {
                    // The next ancestor with a _tmplitem expando is on a different key than this one.
                    // So this is a top-level element within this template item
                    // Set pntNode to the key of the parentNode, or to 0 if pntNode.parentNode is null, or pntNode is a fragment.
                    pntNode = pntNode.parentNode ? (pntNode.nodeType === 11 ? 0 : (pntNode.getAttribute( tmplItmAtt ) || 0)) : 0;
                    if ( !(tmplItem = newTmplItems[key]) ) {
                        // The item is for wrapped content, and was copied from the temporary parent wrappedItem.
                        tmplItem = wrappedItems[key];
                        tmplItem = newTmplItem( tmplItem, newTmplItems[pntNode]||wrappedItems[pntNode], null, true );
                        tmplItem.key = ++itemKey;
                        newTmplItems[itemKey] = tmplItem;
                    }
                    if ( cloneIndex ) {
                        cloneTmplItem( key );
                    }
                }
                el.removeAttribute( tmplItmAtt );
            } else if ( cloneIndex && (tmplItem = jQuery.data( el, "tmplItem" )) ) {
                // This was a rendered element, cloned during append or appendTo etc.
                // TmplItem stored in jQuery data has already been cloned in cloneCopyEvent. We must replace it with a fresh cloned tmplItem.
                cloneTmplItem( tmplItem.key );
                newTmplItems[tmplItem.key] = tmplItem;
                pntNode = jQuery.data( el.parentNode, "tmplItem" );
                pntNode = pntNode ? pntNode.key : 0;
            }
            if ( tmplItem ) {
                pntItem = tmplItem;
                // Find the template item of the parent element. 
                // (Using !=, not !==, since pntItem.key is number, and pntNode may be a string)
                while ( pntItem && pntItem.key != pntNode ) { 
                    // Add this element as a top-level node for this rendered template item, as well as for any
                    // ancestor items between this item and the item of its parent element
                    pntItem.nodes.push( el );
                    pntItem = pntItem.parent;
                }
                // Delete content built during rendering - reduce API surface area and memory use, and avoid exposing of stale data after rendering...
                delete tmplItem._ctnt;
                delete tmplItem._wrap;
                // Store template item as jQuery data on the element
                jQuery.data( el, "tmplItem", tmplItem );
            }
            function cloneTmplItem( key ) {
                key = key + keySuffix;
                tmplItem = newClonedItems[key] = 
                    (newClonedItems[key] || newTmplItem( tmplItem, newTmplItems[tmplItem.parent.key + keySuffix] || tmplItem.parent, null, true ));
            }
        }
    }

    //---- Helper functions for template item ----

    function tiCalls( content, tmpl, data, options ) {
        if ( !content ) {
            return stack.pop();
        }
        stack.push({ _: content, tmpl: tmpl, item:this, data: data, options: options });
    }

    function tiNest( tmpl, data, options ) {
        // nested template, using {{tmpl}} tag
        return jQuery.tmpl( jQuery.template( tmpl ), data, options, this );
    }

    function tiWrap( call, wrapped ) {
        // nested template, using {{wrap}} tag
        var options = call.options || {};
        options.wrapped = wrapped;
        // Apply the template, which may incorporate wrapped content, 
        return jQuery.tmpl( jQuery.template( call.tmpl ), call.data, options, call.item );
    }

    function tiHtml( filter, textOnly ) {
        var wrapped = this._wrap;
        return jQuery.map(
            jQuery( jQuery.isArray( wrapped ) ? wrapped.join("") : wrapped ).filter( filter || "*" ),
            function(e) {
                return textOnly ?
                    e.innerText || e.textContent :
                    e.outerHTML || outerHtml(e);
            });
    }

    function tiUpdate() {
        var coll = this.nodes;
        jQuery.tmpl( null, null, null, this).insertBefore( coll[0] );
        jQuery( coll ).remove();
    }
})( jQuery );
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.jade = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = function merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = merge(attrs, a[i]);
    }
    return attrs;
  }
  var ac = a['class'];
  var bc = b['class'];

  if (ac || bc) {
    ac = ac || [];
    bc = bc || [];
    if (!Array.isArray(ac)) ac = [ac];
    if (!Array.isArray(bc)) bc = [bc];
    a['class'] = ac.concat(bc).filter(nulls);
  }

  for (var key in b) {
    if (key != 'class') {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Filter null `val`s.
 *
 * @param {*} val
 * @return {Boolean}
 * @api private
 */

function nulls(val) {
  return val != null && val !== '';
}

/**
 * join array as classes.
 *
 * @param {*} val
 * @return {String}
 */
exports.joinClasses = joinClasses;
function joinClasses(val) {
  return (Array.isArray(val) ? val.map(joinClasses) :
    (val && typeof val === 'object') ? Object.keys(val).filter(function (key) { return val[key]; }) :
    [val]).filter(nulls).join(' ');
}

/**
 * Render the given classes.
 *
 * @param {Array} classes
 * @param {Array.<Boolean>} escaped
 * @return {String}
 */
exports.cls = function cls(classes, escaped) {
  var buf = [];
  for (var i = 0; i < classes.length; i++) {
    if (escaped && escaped[i]) {
      buf.push(exports.escape(joinClasses([classes[i]])));
    } else {
      buf.push(joinClasses(classes[i]));
    }
  }
  var text = joinClasses(buf);
  if (text.length) {
    return ' class="' + text + '"';
  } else {
    return '';
  }
};


exports.style = function (val) {
  if (val && typeof val === 'object') {
    return Object.keys(val).map(function (style) {
      return style + ':' + val[style];
    }).join(';');
  } else {
    return val;
  }
};
/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = function attr(key, val, escaped, terse) {
  if (key === 'style') {
    val = exports.style(val);
  }
  if ('boolean' == typeof val || null == val) {
    if (val) {
      return ' ' + (terse ? key : key + '="' + key + '"');
    } else {
      return '';
    }
  } else if (0 == key.indexOf('data') && 'string' != typeof val) {
    if (JSON.stringify(val).indexOf('&') !== -1) {
      console.warn('Since Jade 2.0.0, ampersands (`&`) in data attributes ' +
                   'will be escaped to `&amp;`');
    };
    if (val && typeof val.toISOString === 'function') {
      console.warn('Jade will eliminate the double quotes around dates in ' +
                   'ISO form after 2.0.0');
    }
    return ' ' + key + "='" + JSON.stringify(val).replace(/'/g, '&apos;') + "'";
  } else if (escaped) {
    if (val && typeof val.toISOString === 'function') {
      console.warn('Jade will stringify dates in ISO form after 2.0.0');
    }
    return ' ' + key + '="' + exports.escape(val) + '"';
  } else {
    if (val && typeof val.toISOString === 'function') {
      console.warn('Jade will stringify dates in ISO form after 2.0.0');
    }
    return ' ' + key + '="' + val + '"';
  }
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} escaped
 * @return {String}
 */
exports.attrs = function attrs(obj, terse){
  var buf = [];

  var keys = Object.keys(obj);

  if (keys.length) {
    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i]
        , val = obj[key];

      if ('class' == key) {
        if (val = joinClasses(val)) {
          buf.push(' ' + key + '="' + val + '"');
        }
      } else {
        buf.push(exports.attr(key, val, false, terse));
      }
    }
  }

  return buf.join('');
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var jade_encode_html_rules = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;'
};
var jade_match_html = /[&<>"]/g;

function jade_encode_char(c) {
  return jade_encode_html_rules[c] || c;
}

exports.escape = jade_escape;
function jade_escape(html){
  var result = String(html).replace(jade_match_html, jade_encode_char);
  if (result === '' + html) return html;
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the jade in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @api private
 */

exports.rethrow = function rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || require('fs').readFileSync(filename, 'utf8')
  } catch (ex) {
    rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Jade') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};

exports.DebugItem = function DebugItem(lineno, filename) {
  this.lineno = lineno;
  this.filename = filename;
}

},{"fs":2}],2:[function(require,module,exports){

},{}]},{},[1])(1)
});

(function(/*! Stitch !*/) {
  if (!this.require) {
    var modules = {}, cache = {}, require = function(name, root) {
      var path = expand(root, name), indexPath = expand(path, './index'), module, fn;
      module   = cache[path] || cache[indexPath]
      if (module) {
        return module.exports;
      } else if (fn = modules[path] || modules[path = indexPath]) {
        module = {id: path, exports: {}};
        try {
          cache[path] = module;
          fn(module.exports, function(name) {
            return require(name, dirname(path));
          }, module);
          return module.exports;
        } catch (err) {
          delete cache[path];
          throw err;
        }
      } else {
        throw 'module ' + name + ' not found';
      }
    }, expand = function(root, name) {
      var results = [], parts, part;
      if (/^..?(\/|$)/.test(name)) {
        parts = [root, name].join('/').split('/');
      } else {
        parts = name.split('/');
      }
      for (var i = 0, length = parts.length; i < length; i++) {
        part = parts[i];
        if (part == '..') {
          results.pop();
        } else if (part != '.' && part != '') {
          results.push(part);
        }
      }
      return results.join('/');
    }, dirname = function(path) {
      return path.split('/').slice(0, -1).join('/');
    };
    this.require = function(name) {
      return require(name, '');
    }
    this.require.define = function(bundle) {
      for (var key in bundle)
        modules[key] = bundle[key];
    };
    this.require.modules = modules;
    this.require.cache   = cache;
  }
  return this.require.define;
}).call(this)({
  
  "spine/index": function(exports, require, module) { module.exports = require('./lib/spine'); },"spine/lib/spine": function(exports, require, module) { // Generated by CoffeeScript 1.10.0

/*
Spine.js MVC library
Released under the MIT License
 */

(function() {
  var $, Controller, Events, Log, Model, Module, Spine, createObject, makeArray, moduleKeywords,
    slice = [].slice,
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Events = {
    bind: function(ev, callback) {
      var base, evs, j, len, name;
      evs = ev.split(' ');
      if (!this.hasOwnProperty('_callbacks')) {
        this._callbacks || (this._callbacks = {});
      }
      for (j = 0, len = evs.length; j < len; j++) {
        name = evs[j];
        (base = this._callbacks)[name] || (base[name] = []);
        this._callbacks[name].push(callback);
      }
      return this;
    },
    one: function(ev, callback) {
      var handler;
      return this.bind(ev, handler = function() {
        this.unbind(ev, handler);
        return callback.apply(this, arguments);
      });
    },
    trigger: function() {
      var args, callback, ev, j, len, list, ref;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      ev = args.shift();
      list = (ref = this._callbacks) != null ? ref[ev] : void 0;
      if (!list) {
        return;
      }
      for (j = 0, len = list.length; j < len; j++) {
        callback = list[j];
        if (callback.apply(this, args) === false) {
          break;
        }
      }
      return true;
    },
    listenTo: function(obj, ev, callback) {
      obj.bind(ev, callback);
      this.listeningTo || (this.listeningTo = []);
      this.listeningTo.push({
        obj: obj,
        ev: ev,
        callback: callback
      });
      return this;
    },
    listenToOnce: function(obj, ev, callback) {
      var handler, listeningToOnce;
      listeningToOnce = this.listeningToOnce || (this.listeningToOnce = []);
      obj.bind(ev, handler = function() {
        var i, idx, j, len, lt;
        idx = -1;
        for (i = j = 0, len = listeningToOnce.length; j < len; i = ++j) {
          lt = listeningToOnce[i];
          if (lt.obj === obj) {
            if (lt.ev === ev && lt.callback === handler) {
              idx = i;
            }
          }
        }
        obj.unbind(ev, handler);
        if (idx !== -1) {
          listeningToOnce.splice(idx, 1);
        }
        return callback.apply(this, arguments);
      });
      listeningToOnce.push({
        obj: obj,
        ev: ev,
        callback: handler
      });
      return this;
    },
    stopListening: function(obj, events, callback) {
      var e, ev, evts, idx, j, k, l, len, len1, len2, len3, listeningTo, lt, m, n, ref, ref1, ref2;
      if (arguments.length === 0) {
        ref = [this.listeningTo, this.listeningToOnce];
        for (j = 0, len = ref.length; j < len; j++) {
          listeningTo = ref[j];
          if (!(listeningTo != null ? listeningTo.length : void 0)) {
            continue;
          }
          for (k = 0, len1 = listeningTo.length; k < len1; k++) {
            lt = listeningTo[k];
            lt.obj.unbind(lt.ev, lt.callback);
          }
        }
        this.listeningTo = void 0;
        this.listeningToOnce = void 0;
      } else if (obj) {
        events = events ? events.split(' ') : [void 0];
        ref1 = [this.listeningTo, this.listeningToOnce];
        for (l = 0, len2 = ref1.length; l < len2; l++) {
          listeningTo = ref1[l];
          if (!listeningTo) {
            continue;
          }
          for (m = 0, len3 = events.length; m < len3; m++) {
            ev = events[m];
            for (idx = n = ref2 = listeningTo.length - 1; ref2 <= 0 ? n <= 0 : n >= 0; idx = ref2 <= 0 ? ++n : --n) {
              lt = listeningTo[idx];
              if (lt.obj !== obj) {
                continue;
              }
              if (callback && lt.callback !== callback) {
                continue;
              }
              if ((!ev) || (ev === lt.ev)) {
                lt.obj.unbind(lt.ev, lt.callback);
                if (idx !== -1) {
                  listeningTo.splice(idx, 1);
                }
              } else if (ev) {
                evts = lt.ev.split(' ');
                if (indexOf.call(evts, ev) >= 0) {
                  evts = (function() {
                    var len4, p, results;
                    results = [];
                    for (p = 0, len4 = evts.length; p < len4; p++) {
                      e = evts[p];
                      if (e !== ev) {
                        results.push(e);
                      }
                    }
                    return results;
                  })();
                  lt.ev = $.trim(evts.join(' '));
                  lt.obj.unbind(ev, lt.callback);
                }
              }
            }
          }
        }
      }
      return this;
    },
    unbind: function(ev, callback) {
      var cb, evs, i, j, k, len, len1, list, name, ref;
      if (arguments.length === 0) {
        this._callbacks = {};
        return this;
      }
      if (!ev) {
        return this;
      }
      evs = ev.split(' ');
      for (j = 0, len = evs.length; j < len; j++) {
        name = evs[j];
        list = (ref = this._callbacks) != null ? ref[name] : void 0;
        if (!list) {
          continue;
        }
        if (!callback) {
          delete this._callbacks[name];
          continue;
        }
        for (i = k = 0, len1 = list.length; k < len1; i = ++k) {
          cb = list[i];
          if (!(cb === callback)) {
            continue;
          }
          list = list.slice();
          list.splice(i, 1);
          this._callbacks[name] = list;
          break;
        }
      }
      return this;
    }
  };

  Events.on = Events.bind;

  Events.off = Events.unbind;

  Log = {
    trace: true,
    logPrefix: '(App)',
    log: function() {
      var args;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      if (!this.trace) {
        return;
      }
      if (this.logPrefix) {
        args.unshift(this.logPrefix);
      }
      if (typeof console !== "undefined" && console !== null) {
        if (typeof console.log === "function") {
          console.log.apply(console, args);
        }
      }
      return this;
    }
  };

  moduleKeywords = ['included', 'extended'];

  Module = (function() {
    Module.include = function(obj) {
      var key, ref, value;
      if (!obj) {
        throw new Error('include(obj) requires obj');
      }
      for (key in obj) {
        value = obj[key];
        if (indexOf.call(moduleKeywords, key) < 0) {
          this.prototype[key] = value;
        }
      }
      if ((ref = obj.included) != null) {
        ref.apply(this);
      }
      return this;
    };

    Module.extend = function(obj) {
      var key, ref, value;
      if (!obj) {
        throw new Error('extend(obj) requires obj');
      }
      for (key in obj) {
        value = obj[key];
        if (indexOf.call(moduleKeywords, key) < 0) {
          this[key] = value;
        }
      }
      if ((ref = obj.extended) != null) {
        ref.apply(this);
      }
      return this;
    };

    Module.proxy = function(func) {
      return (function(_this) {
        return function() {
          return func.apply(_this, arguments);
        };
      })(this);
    };

    Module.prototype.proxy = function(func) {
      return (function(_this) {
        return function() {
          return func.apply(_this, arguments);
        };
      })(this);
    };

    function Module() {
      if (typeof this.init === "function") {
        this.init.apply(this, arguments);
      }
    }

    return Module;

  })();

  Model = (function(superClass) {
    extend(Model, superClass);

    Model.extend(Events);

    Model.include(Events);

    Model.records = [];

    Model.irecords = {};

    Model.attributes = [];

    Model.configure = function() {
      var attributes, name;
      name = arguments[0], attributes = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      this.className = name;
      this.deleteAll();
      if (attributes.length) {
        this.attributes = attributes;
      }
      this.attributes && (this.attributes = makeArray(this.attributes));
      this.attributes || (this.attributes = []);
      this.unbind();
      return this;
    };

    Model.toString = function() {
      return this.className + "(" + (this.attributes.join(", ")) + ")";
    };

    Model.find = function(id, notFound) {
      var ref;
      if (notFound == null) {
        notFound = this.notFound;
      }
      return ((ref = this.irecords[id]) != null ? ref.clone() : void 0) || (typeof notFound === "function" ? notFound(id) : void 0);
    };

    Model.findAll = function(ids, notFound) {
      var id, j, len, results;
      results = [];
      for (j = 0, len = ids.length; j < len; j++) {
        id = ids[j];
        if (this.find(id, notFound)) {
          results.push(this.find(id));
        }
      }
      return results;
    };

    Model.notFound = function(id) {
      return null;
    };

    Model.exists = function(id) {
      return Boolean(this.irecords[id]);
    };

    Model.addRecord = function(record, idx) {
      var root;
      if (root = this.irecords[record.id || record.cid]) {
        root.refresh(record);
      } else {
        record.id || (record.id = record.cid);
        this.irecords[record.id] = this.irecords[record.cid] = record;
        if (idx !== void 0) {
          this.records.splice(idx, 0, record);
        } else {
          this.records.push(record);
        }
      }
      return record;
    };

    Model.refresh = function(values, options) {
      var j, len, record, records, result;
      if (options == null) {
        options = {};
      }
      if (options.clear) {
        this.deleteAll();
      }
      records = this.fromJSON(values);
      if (!Array.isArray(records)) {
        records = [records];
      }
      for (j = 0, len = records.length; j < len; j++) {
        record = records[j];
        this.addRecord(record);
      }
      this.sort();
      result = this.cloneArray(records);
      this.trigger('refresh', result, options);
      return result;
    };

    Model.select = function(callback) {
      var j, len, record, ref, results;
      ref = this.records;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        record = ref[j];
        if (callback(record)) {
          results.push(record.clone());
        }
      }
      return results;
    };

    Model.findByAttribute = function(name, value) {
      var j, len, record, ref;
      ref = this.records;
      for (j = 0, len = ref.length; j < len; j++) {
        record = ref[j];
        if (record[name] === value) {
          return record.clone();
        }
      }
      return null;
    };

    Model.findAllByAttribute = function(name, value) {
      return this.select(function(item) {
        return item[name] === value;
      });
    };

    Model.each = function(callback) {
      var j, len, record, ref, results;
      ref = this.records;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        record = ref[j];
        results.push(callback(record.clone()));
      }
      return results;
    };

    Model.all = function() {
      return this.cloneArray(this.records);
    };

    Model.slice = function(begin, end) {
      if (begin == null) {
        begin = 0;
      }
      return this.cloneArray(this.records.slice(begin, end));
    };

    Model.first = function(end) {
      var ref;
      if (end == null) {
        end = 1;
      }
      if (end > 1) {
        return this.cloneArray(this.records.slice(0, end));
      } else {
        return (ref = this.records[0]) != null ? ref.clone() : void 0;
      }
    };

    Model.last = function(begin) {
      var ref;
      if (typeof begin === 'number') {
        return this.cloneArray(this.records.slice(-begin));
      } else {
        return (ref = this.records[this.records.length - 1]) != null ? ref.clone() : void 0;
      }
    };

    Model.count = function() {
      return this.records.length;
    };

    Model.deleteAll = function() {
      this.records = [];
      return this.irecords = {};
    };

    Model.destroyAll = function(options) {
      var j, len, record, ref, results;
      ref = this.records;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        record = ref[j];
        results.push(record.destroy(options));
      }
      return results;
    };

    Model.update = function(id, atts, options) {
      return this.find(id).updateAttributes(atts, options);
    };

    Model.create = function(atts, options) {
      var record;
      record = new this(atts);
      return record.save(options);
    };

    Model.destroy = function(id, options) {
      var ref;
      return (ref = this.find(id)) != null ? ref.destroy(options) : void 0;
    };

    Model.change = function(callbackOrParams) {
      if (typeof callbackOrParams === 'function') {
        return this.bind('change', callbackOrParams);
      } else {
        return this.trigger.apply(this, ['change'].concat(slice.call(arguments)));
      }
    };

    Model.fetch = function(callbackOrParams) {
      if (typeof callbackOrParams === 'function') {
        return this.bind('fetch', callbackOrParams);
      } else {
        return this.trigger.apply(this, ['fetch'].concat(slice.call(arguments)));
      }
    };

    Model.toJSON = function() {
      return this.records;
    };

    Model.beforeFromJSON = function(objects) {
      return objects;
    };

    Model.fromJSON = function(objects) {
      var j, len, results, value;
      if (!objects) {
        return;
      }
      if (typeof objects === 'string') {
        objects = JSON.parse(objects);
      }
      objects = this.beforeFromJSON(objects);
      if (Array.isArray(objects)) {
        results = [];
        for (j = 0, len = objects.length; j < len; j++) {
          value = objects[j];
          if (value instanceof this) {
            results.push(value);
          } else {
            results.push(new this(value));
          }
        }
        return results;
      } else {
        if (objects instanceof this) {
          return objects;
        }
        return new this(objects);
      }
    };

    Model.fromForm = function() {
      var ref;
      return (ref = new this).fromForm.apply(ref, arguments);
    };

    Model.sort = function() {
      if (this.comparator) {
        this.records.sort(this.comparator);
      }
      return this;
    };

    Model.cloneArray = function(array) {
      var j, len, results, value;
      results = [];
      for (j = 0, len = array.length; j < len; j++) {
        value = array[j];
        results.push(value.clone());
      }
      return results;
    };

    Model.idCounter = 0;

    Model.uid = function(prefix) {
      var uid;
      if (prefix == null) {
        prefix = '';
      }
      uid = prefix + this.idCounter++;
      if (this.exists(uid)) {
        uid = this.uid(prefix);
      }
      return uid;
    };

    function Model(atts) {
      Model.__super__.constructor.apply(this, arguments);
      if ((this.constructor.uuid != null) && typeof this.constructor.uuid === 'function') {
        this.cid = this.constructor.uuid();
        if (!this.id) {
          this.id = this.cid;
        }
      } else {
        this.cid = (atts != null ? atts.cid : void 0) || this.constructor.uid('c-');
      }
      if (atts) {
        this.load(atts);
      }
    }

    Model.prototype.isNew = function() {
      return !this.exists();
    };

    Model.prototype.isValid = function() {
      return !this.validate();
    };

    Model.prototype.validate = function() {};

    Model.prototype.load = function(atts) {
      var key, value;
      if (atts.id) {
        this.id = atts.id;
      }
      for (key in atts) {
        value = atts[key];
        if (key === '_callbacks') {
          continue;
        }
        if (typeof this[key] === 'function') {
          if (typeof value === 'function') {
            continue;
          }
          this[key](value);
        } else {
          this[key] = value;
        }
      }
      return this;
    };

    Model.prototype.attributes = function() {
      var j, key, len, ref, result;
      result = {};
      ref = this.constructor.attributes;
      for (j = 0, len = ref.length; j < len; j++) {
        key = ref[j];
        if (key in this) {
          if (typeof this[key] === 'function') {
            result[key] = this[key]();
          } else {
            result[key] = this[key];
          }
        }
      }
      if (this.id) {
        result.id = this.id;
      }
      return result;
    };

    Model.prototype.eql = function(rec) {
      return rec && rec.constructor === this.constructor && ((rec.cid === this.cid) || (rec.id && rec.id === this.id));
    };

    Model.prototype.save = function(options) {
      var error, record;
      if (options == null) {
        options = {};
      }
      if (options.validate === true) {
        error = this.validate();
        if (error) {
          this.trigger('error', this, error);
          return false;
        }
      }
      this.trigger('beforeSave', this, options);
      record = this.isNew() ? this.create(options) : this.update(options);
      this.stripCloneAttrs();
      this.trigger('save', record, options);
      return record;
    };

    Model.prototype.stripCloneAttrs = function() {
      var key, value;
      if (this.hasOwnProperty('cid')) {
        return;
      }
      for (key in this) {
        if (!hasProp.call(this, key)) continue;
        value = this[key];
        if (indexOf.call(this.constructor.attributes, key) >= 0) {
          delete this[key];
        }
      }
      return this;
    };

    Model.prototype.updateAttribute = function(name, value, options) {
      var atts;
      atts = {};
      atts[name] = value;
      return this.updateAttributes(atts, options);
    };

    Model.prototype.updateAttributes = function(atts, options) {
      this.load(atts);
      return this.save(options);
    };

    Model.prototype.changeID = function(id) {
      var records;
      if (id === this.id) {
        return;
      }
      records = this.constructor.irecords;
      records[id] = records[this.id];
      if (this.cid !== this.id) {
        delete records[this.id];
      }
      return this.id = id;
    };

    Model.prototype.remove = function(options) {
      var i, j, len, record, records;
      if (options == null) {
        options = {};
      }
      records = this.constructor.records.slice(0);
      for (i = j = 0, len = records.length; j < len; i = ++j) {
        record = records[i];
        if (!(this.eql(record))) {
          continue;
        }
        records.splice(i, 1);
        break;
      }
      this.constructor.records = records;
      if (options.clear) {
        delete this.constructor.irecords[this.id];
        return delete this.constructor.irecords[this.cid];
      }
    };

    Model.prototype.destroy = function(options) {
      if (options == null) {
        options = {};
      }
      if (options.clear == null) {
        options.clear = true;
      }
      this.trigger('beforeDestroy', this, options);
      this.remove(options);
      this.destroyed = true;
      this.trigger('destroy', this, options);
      this.trigger('change', this, 'destroy', options);
      if (this.listeningTo) {
        this.stopListening();
      }
      this.unbind();
      return this;
    };

    Model.prototype.dup = function(newRecord) {
      var atts, record;
      if (newRecord == null) {
        newRecord = true;
      }
      atts = this.attributes();
      if (newRecord) {
        delete atts.id;
      } else {
        atts.cid = this.cid;
      }
      record = new this.constructor(atts);
      if (!newRecord) {
        this._callbacks && (record._callbacks = this._callbacks);
      }
      return record;
    };

    Model.prototype.clone = function() {
      return createObject(this);
    };

    Model.prototype.reload = function() {
      var original;
      if (this.isNew()) {
        return this;
      }
      original = this.constructor.find(this.id);
      this.load(original.attributes());
      return original;
    };

    Model.prototype.refresh = function(atts) {
      atts = this.constructor.fromJSON(atts);
      if (atts.id && this.id !== atts.id) {
        this.changeID(atts.id);
      }
      this.constructor.irecords[this.id].load(atts);
      this.trigger('refresh', this);
      this.trigger('change', this, 'refresh');
      return this;
    };

    Model.prototype.toJSON = function() {
      return this.attributes();
    };

    Model.prototype.toString = function() {
      return "<" + this.constructor.className + " (" + (JSON.stringify(this)) + ")>";
    };

    Model.prototype.fromForm = function(form) {
      var checkbox, j, k, key, l, len, len1, len2, name, name1, ref, ref1, ref2, result;
      result = {};
      ref = $(form).find('[type=checkbox]:not([value])');
      for (j = 0, len = ref.length; j < len; j++) {
        checkbox = ref[j];
        result[checkbox.name] = $(checkbox).prop('checked');
      }
      ref1 = $(form).find('[type=checkbox][name$="[]"]');
      for (k = 0, len1 = ref1.length; k < len1; k++) {
        checkbox = ref1[k];
        name = checkbox.name.replace(/\[\]$/, '');
        result[name] || (result[name] = []);
        if ($(checkbox).prop('checked')) {
          result[name].push(checkbox.value);
        }
      }
      ref2 = $(form).serializeArray();
      for (l = 0, len2 = ref2.length; l < len2; l++) {
        key = ref2[l];
        result[name1 = key.name] || (result[name1] = key.value);
      }
      return this.load(result);
    };

    Model.prototype.exists = function() {
      return this.constructor.exists(this.id);
    };

    Model.prototype.update = function(options) {
      var clone, records;
      this.trigger('beforeUpdate', this, options);
      records = this.constructor.irecords;
      records[this.id].load(this.attributes());
      this.constructor.sort();
      clone = records[this.id].clone();
      clone.trigger('update', clone, options);
      clone.trigger('change', clone, 'update', options);
      return clone;
    };

    Model.prototype.create = function(options) {
      var clone, record;
      this.trigger('beforeCreate', this, options);
      this.id || (this.id = this.cid);
      record = this.dup(false);
      this.constructor.addRecord(record, options.idx);
      this.constructor.sort();
      clone = record.clone();
      clone.trigger('create', clone, options);
      clone.trigger('change', clone, 'create', options);
      return clone;
    };

    Model.prototype.bind = function() {
      var record;
      record = this.constructor.irecords[this.id] || this;
      return Events.bind.apply(record, arguments);
    };

    Model.prototype.one = function() {
      var record;
      record = this.constructor.irecords[this.id] || this;
      return Events.one.apply(record, arguments);
    };

    Model.prototype.unbind = function() {
      var record;
      record = this.constructor.irecords[this.id] || this;
      return Events.unbind.apply(record, arguments);
    };

    Model.prototype.trigger = function() {
      var ref;
      Events.trigger.apply(this, arguments);
      if (arguments[0] === 'refresh') {
        return true;
      }
      return (ref = this.constructor).trigger.apply(ref, arguments);
    };

    return Model;

  })(Module);

  Model.prototype.on = Model.prototype.bind;

  Model.prototype.off = Model.prototype.unbind;

  Controller = (function(superClass) {
    extend(Controller, superClass);

    Controller.include(Events);

    Controller.include(Log);

    Controller.prototype.eventSplitter = /^(\S+)\s*(.*)$/;

    Controller.prototype.tag = 'div';

    function Controller(options) {
      this.release = bind(this.release, this);
      var context, key, parent_prototype, ref, value;
      this.options = options;
      ref = this.options;
      for (key in ref) {
        value = ref[key];
        this[key] = value;
      }
      if (!this.el) {
        this.el = document.createElement(this.tag);
      }
      this.el = $(this.el);
      if (this.className) {
        this.el.addClass(this.className);
      }
      if (this.attributes) {
        this.el.attr(this.attributes);
      }
      if (!this.events) {
        this.events = this.constructor.events;
      }
      if (!this.elements) {
        this.elements = this.constructor.elements;
      }
      context = this;
      while (parent_prototype = context.constructor.__super__) {
        if (parent_prototype.events) {
          this.events = $.extend({}, parent_prototype.events, this.events);
        }
        if (parent_prototype.elements) {
          this.elements = $.extend({}, parent_prototype.elements, this.elements);
        }
        context = parent_prototype;
      }
      if (this.events) {
        this.delegateEvents(this.events);
      }
      if (this.elements) {
        this.refreshElements();
      }
      Controller.__super__.constructor.apply(this, arguments);
    }

    Controller.prototype.release = function() {
      this.trigger('release', this);
      this.el.remove();
      this.unbind();
      return this.stopListening();
    };

    Controller.prototype.$ = function(selector) {
      return this.el.find(selector);
    };

    Controller.prototype.delegateEvents = function(events) {
      var eventName, key, match, method, results, selector;
      results = [];
      for (key in events) {
        method = events[key];
        if (typeof method === 'function') {
          method = (function(_this) {
            return function(method) {
              return function() {
                method.apply(_this, arguments);
                return true;
              };
            };
          })(this)(method);
        } else {
          if (!this[method]) {
            throw new Error(method + " doesn't exist");
          }
          method = (function(_this) {
            return function(method) {
              return function() {
                _this[method].apply(_this, arguments);
                return true;
              };
            };
          })(this)(method);
        }
        match = key.match(this.eventSplitter);
        eventName = match[1];
        selector = match[2];
        if (selector === '') {
          results.push(this.el.bind(eventName, method));
        } else {
          results.push(this.el.on(eventName, selector, method));
        }
      }
      return results;
    };

    Controller.prototype.refreshElements = function() {
      var key, ref, results, value;
      ref = this.elements;
      results = [];
      for (key in ref) {
        value = ref[key];
        results.push(this[value] = this.$(key));
      }
      return results;
    };

    Controller.prototype.delay = function(func, timeout) {
      return setTimeout(this.proxy(func), timeout || 0);
    };

    Controller.prototype.html = function(element) {
      this.el.html(element.el || element);
      this.refreshElements();
      return this.el;
    };

    Controller.prototype.append = function() {
      var e, elements, ref;
      elements = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      elements = (function() {
        var j, len, results;
        results = [];
        for (j = 0, len = elements.length; j < len; j++) {
          e = elements[j];
          results.push(e.el || e);
        }
        return results;
      })();
      (ref = this.el).append.apply(ref, elements);
      this.refreshElements();
      return this.el;
    };

    Controller.prototype.appendTo = function(element) {
      this.el.appendTo(element.el || element);
      this.refreshElements();
      return this.el;
    };

    Controller.prototype.prepend = function() {
      var e, elements, ref;
      elements = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      elements = (function() {
        var j, len, results;
        results = [];
        for (j = 0, len = elements.length; j < len; j++) {
          e = elements[j];
          results.push(e.el || e);
        }
        return results;
      })();
      (ref = this.el).prepend.apply(ref, elements);
      this.refreshElements();
      return this.el;
    };

    Controller.prototype.replace = function(element) {
      var previous, ref, ref1;
      element = element.el || element;
      if (typeof element === "string") {
        element = $.trim(element);
      }
      ref1 = [this.el, $(((ref = $.parseHTML(element)) != null ? ref[0] : void 0) || element)], previous = ref1[0], this.el = ref1[1];
      previous.replaceWith(this.el);
      this.delegateEvents(this.events);
      this.refreshElements();
      return this.el;
    };

    return Controller;

  })(Module);

  $ = (typeof window !== "undefined" && window !== null ? window.jQuery : void 0) || (typeof window !== "undefined" && window !== null ? window.Zepto : void 0) || function(element) {
    return element;
  };

  createObject = Object.create || function(o) {
    var Func;
    Func = function() {};
    Func.prototype = o;
    return new Func();
  };

  makeArray = function(args) {
    return Array.prototype.slice.call(args, 0);
  };

  Spine = this.Spine = {};

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Spine;
  }

  Spine.version = '1.6.2';

  Spine.$ = $;

  Spine.Events = Events;

  Spine.Log = Log;

  Spine.Module = Module;

  Spine.Controller = Controller;

  Spine.Model = Model;

  Module.extend.call(Spine, Events);

  Module.create = Module.sub = Controller.create = Controller.sub = Model.sub = function(instances, statics) {
    var Result;
    Result = (function(superClass) {
      extend(Result, superClass);

      function Result() {
        return Result.__super__.constructor.apply(this, arguments);
      }

      return Result;

    })(this);
    if (instances) {
      Result.include(instances);
    }
    if (statics) {
      Result.extend(statics);
    }
    if (typeof Result.unbind === "function") {
      Result.unbind();
    }
    return Result;
  };

  Model.setup = function(name, attributes) {
    var Instance;
    if (attributes == null) {
      attributes = [];
    }
    Instance = (function(superClass) {
      extend(Instance, superClass);

      function Instance() {
        return Instance.__super__.constructor.apply(this, arguments);
      }

      return Instance;

    })(this);
    Instance.configure.apply(Instance, [name].concat(slice.call(attributes)));
    return Instance;
  };

  Spine.Class = Module;

}).call(this);

//# sourceMappingURL=spine.js.map
 },"spine/lib/ajax": function(exports, require, module) { // Generated by CoffeeScript 1.10.0
(function() {
  var $, Ajax, Base, Collection, Extend, GenerateURL, Include, Model, Queue, Singleton, Spine,
    slice = [].slice,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = this.Spine || require('spine');

  $ = Spine.$;

  Model = Spine.Model;

  Queue = $({});

  Ajax = {
    getURL: function(object) {
      if (object.className != null) {
        return this.generateURL(object);
      } else {
        return this.generateURL(object, encodeURIComponent(object.id));
      }
    },
    getCollectionURL: function(object) {
      return this.generateURL(object);
    },
    getScope: function(object) {
      return (typeof object.scope === "function" ? object.scope() : void 0) || object.scope;
    },
    getCollection: function(object) {
      if (object.url !== object.generateURL) {
        if (typeof object.url === 'function') {
          return object.url();
        } else {
          return object.url;
        }
      } else if (object.className != null) {
        return object.className.toLowerCase() + 's';
      }
    },
    generateURL: function() {
      var args, collection, object, path, scope;
      object = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      collection = Ajax.getCollection(object) || Ajax.getCollection(object.constructor);
      scope = Ajax.getScope(object) || Ajax.getScope(object.constructor);
      args.unshift(collection);
      args.unshift(scope);
      path = args.join('/');
      path = path.replace(/(\/\/)/g, "/");
      path = path.replace(/^\/|\/$/g, "");
      if (path.indexOf("../") !== 0) {
        return Model.host + "/" + path;
      } else {
        return path;
      }
    },
    enabled: true,
    disable: function(callback) {
      var e, error1;
      if (this.enabled) {
        this.enabled = false;
        try {
          return callback();
        } catch (error1) {
          e = error1;
          throw e;
        } finally {
          this.enabled = true;
        }
      } else {
        return callback();
      }
    },
    queue: function(request) {
      if (request) {
        return Queue.queue(request);
      } else {
        return Queue.queue();
      }
    },
    clearQueue: function() {
      return this.queue([]);
    },
    config: {
      loadMethod: 'GET',
      updateMethod: 'PUT',
      createMethod: 'POST',
      destroyMethod: 'DELETE'
    }
  };

  Base = (function() {
    function Base() {}

    Base.prototype.defaults = {
      dataType: 'json',
      processData: false,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    };

    Base.prototype.queue = Ajax.queue;

    Base.prototype.ajax = function(params, defaults) {
      return $.ajax(this.ajaxSettings(params, defaults));
    };

    Base.prototype.ajaxQueue = function(params, defaults, record) {
      var deferred, jqXHR, parallel, promise, request, settings;
      jqXHR = null;
      deferred = $.Deferred();
      promise = deferred.promise();
      if (!Ajax.enabled) {
        return promise;
      }
      settings = this.ajaxSettings(params, defaults);
      parallel = settings.parallel !== void 0 ? settings.parallel : settings.type === 'GET';
      request = function(next) {
        var ref, reject, resolve;
        if ((record != null ? record.id : void 0) != null) {
          if (settings.url == null) {
            settings.url = Ajax.getURL(record);
          }
          if ((ref = settings.data) != null) {
            ref.id = record.id;
          }
        }
        if (typeof settings.data !== 'string' && settings.processData !== true) {
          settings.data = JSON.stringify(settings.data);
        }
        resolve = function() {
          return deferred.resolve.apply(this, slice.call(arguments).concat([settings]));
        };
        reject = function() {
          return deferred.reject.apply(this, slice.call(arguments).concat([settings]));
        };
        jqXHR = $.ajax(settings);
        jqXHR.done(resolve);
        jqXHR.fail(reject);
        jqXHR.then(next, next);
        if (parallel) {
          return Queue.dequeue();
        }
      };
      promise.abort = function(statusText) {
        var index;
        if (jqXHR) {
          return jqXHR.abort(statusText);
        }
        index = $.inArray(request, this.queue());
        if (index > -1) {
          this.queue().splice(index, 1);
        }
        deferred.rejectWith(settings.context || settings, [promise, statusText, '']);
        return promise;
      };
      this.queue(request);
      return promise;
    };

    Base.prototype.ajaxSettings = function(params, defaults) {
      return $.extend({}, this.defaults, defaults, params);
    };

    return Base;

  })();

  Collection = (function(superClass) {
    extend(Collection, superClass);

    function Collection(model) {
      this.model = model;
      this.failResponse = bind(this.failResponse, this);
      this.recordsResponse = bind(this.recordsResponse, this);
    }

    Collection.prototype.find = function(id, params, options) {
      var record;
      if (options == null) {
        options = {};
      }
      record = new this.model({
        id: id
      });
      return this.ajaxQueue(params, {
        type: options.method || Ajax.config.loadMethod,
        url: options.url || Ajax.getURL(record),
        parallel: options.parallel
      }).done(this.recordsResponse(options)).fail(this.failResponse(options));
    };

    Collection.prototype.all = function(params, options) {
      if (options == null) {
        options = {};
      }
      return this.ajaxQueue(params, {
        type: options.method || Ajax.config.loadMethod,
        url: options.url || Ajax.getURL(this.model),
        parallel: options.parallel
      }).done(this.recordsResponse(options)).fail(this.failResponse(options));
    };

    Collection.prototype.fetch = function(params, options) {
      var id;
      if (params == null) {
        params = {};
      }
      if (options == null) {
        options = {};
      }
      if (id = params.id) {
        delete params.id;
        return this.find(id, params, options).done((function(_this) {
          return function(record) {
            return _this.model.refresh(record, options);
          };
        })(this));
      } else {
        return this.all(params, options).done((function(_this) {
          return function(records) {
            return _this.model.refresh(records, options);
          };
        })(this));
      }
    };

    Collection.prototype.recordsResponse = function(options) {
      return (function(_this) {
        return function(data, status, xhr, settings) {
          var ref;
          _this.model.trigger('ajaxSuccess', null, status, xhr, settings);
          return (ref = options.done) != null ? ref.call(_this.model, settings) : void 0;
        };
      })(this);
    };

    Collection.prototype.failResponse = function(options) {
      return (function(_this) {
        return function(xhr, statusText, error, settings) {
          var ref;
          _this.model.trigger('ajaxError', null, xhr, statusText, error, settings);
          return (ref = options.fail) != null ? ref.call(_this.model, settings) : void 0;
        };
      })(this);
    };

    return Collection;

  })(Base);

  Singleton = (function(superClass) {
    extend(Singleton, superClass);

    function Singleton(record1) {
      this.record = record1;
      this.failResponse = bind(this.failResponse, this);
      this.recordResponse = bind(this.recordResponse, this);
      this.model = this.record.constructor;
    }

    Singleton.prototype.reload = function(params, options) {
      if (options == null) {
        options = {};
      }
      return this.ajaxQueue(params, {
        type: options.method || Ajax.config.loadMethod,
        url: options.url,
        parallel: options.parallel
      }, this.record).done(this.recordResponse(options)).fail(this.failResponse(options));
    };

    Singleton.prototype.create = function(params, options) {
      if (options == null) {
        options = {};
      }
      return this.ajaxQueue(params, {
        type: options.method || Ajax.config.createMethod,
        contentType: 'application/json',
        data: this.record.toJSON(),
        url: options.url || Ajax.getCollectionURL(this.record),
        parallel: options.parallel
      }).done(this.recordResponse(options)).fail(this.failResponse(options));
    };

    Singleton.prototype.update = function(params, options) {
      if (options == null) {
        options = {};
      }
      return this.ajaxQueue(params, {
        type: options.method || Ajax.config.updateMethod,
        contentType: 'application/json',
        data: this.record.toJSON(),
        url: options.url,
        parallel: options.parallel
      }, this.record).done(this.recordResponse(options)).fail(this.failResponse(options));
    };

    Singleton.prototype.destroy = function(params, options) {
      if (options == null) {
        options = {};
      }
      return this.ajaxQueue(params, {
        type: options.method || Ajax.config.destroyMethod,
        url: options.url,
        parallel: options.parallel
      }, this.record).done(this.recordResponse(options)).fail(this.failResponse(options));
    };

    Singleton.prototype.recordResponse = function(options) {
      return (function(_this) {
        return function(data, status, xhr, settings) {
          var ref;
          if ((data != null) && Object.getOwnPropertyNames(data).length && !_this.record.destroyed) {
            _this.record.refresh(data, {
              ajax: false
            });
          }
          _this.record.trigger('ajaxSuccess', _this.record, _this.model.fromJSON(data), status, xhr, settings);
          return (ref = options.done) != null ? ref.call(_this.record, settings) : void 0;
        };
      })(this);
    };

    Singleton.prototype.failResponse = function(options) {
      return (function(_this) {
        return function(xhr, statusText, error, settings) {
          var ref;
          switch (settings.type) {
            case 'POST':
              _this.createFailed();
              break;
            case 'DELETE':
              _this.destroyFailed();
          }
          _this.record.trigger('ajaxError', _this.record, xhr, statusText, error, settings);
          return (ref = options.fail) != null ? ref.call(_this.record, settings) : void 0;
        };
      })(this);
    };

    Singleton.prototype.createFailed = function() {
      return this.record.remove({
        clear: true
      });
    };

    Singleton.prototype.destroyFailed = function() {
      this.record.destroyed = false;
      return this.record.constructor.refresh(this.record);
    };

    return Singleton;

  })(Base);

  Model.host = '';

  GenerateURL = {
    include: function() {
      var args;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      args.unshift(encodeURIComponent(this.id));
      return Ajax.generateURL.apply(Ajax, [this].concat(slice.call(args)));
    },
    extend: function() {
      var args;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      return Ajax.generateURL.apply(Ajax, [this].concat(slice.call(args)));
    }
  };

  Include = {
    ajax: function() {
      return new Singleton(this);
    },
    generateURL: GenerateURL.include,
    url: GenerateURL.include
  };

  Extend = {
    ajax: function() {
      return new Collection(this);
    },
    generateURL: GenerateURL.extend,
    url: GenerateURL.extend
  };

  Model.Ajax = {
    extended: function() {
      this.fetch(this.ajaxFetch);
      this.change(this.ajaxChange);
      this.extend(Extend);
      return this.include(Include);
    },
    ajaxFetch: function() {
      var ref;
      return (ref = this.ajax()).fetch.apply(ref, arguments);
    },
    ajaxChange: function(record, type, options) {
      var base;
      if (options == null) {
        options = {};
      }
      if (options.ajax === false) {
        return;
      }
      return typeof (base = record.ajax())[type] === "function" ? base[type](options.ajax, options) : void 0;
    }
  };

  Model.Ajax.Methods = {
    extended: function() {
      this.extend(Extend);
      return this.include(Include);
    }
  };

  Ajax.defaults = Base.prototype.defaults;

  Ajax.Base = Base;

  Ajax.Singleton = Singleton;

  Ajax.Collection = Collection;

  Spine.Ajax = Ajax;

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Ajax;
  }

}).call(this);

//# sourceMappingURL=ajax.js.map
 },"spine/lib/route": function(exports, require, module) { // Generated by CoffeeScript 1.10.0
(function() {
  var $, Path, Route, Spine, escapeRegExp, hashStrip, namedParam, splatParam,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty,
    slice = [].slice;

  Spine = this.Spine || require('spine');

  $ = Spine.$;

  hashStrip = /^#*/;

  namedParam = /:([\w\d]+)/g;

  splatParam = /\*([\w\d]+)/g;

  escapeRegExp = /[-[\]{}()+?.,\\^$|#\s]/g;

  Path = (function(superClass) {
    extend(Path, superClass);

    function Path(path, callback) {
      var match;
      this.names = [];
      this.path = path;
      this.callback = callback;
      if (typeof path === 'string') {
        namedParam.lastIndex = 0;
        while ((match = namedParam.exec(path)) !== null) {
          this.names.push(match[1]);
        }
        splatParam.lastIndex = 0;
        while ((match = splatParam.exec(path)) !== null) {
          this.names.push(match[1]);
        }
        path = path.replace(escapeRegExp, '\\$&').replace(namedParam, '([^\/]*)').replace(splatParam, '(.*?)');
        this.route = new RegExp("^" + path + "$");
      } else {
        this.route = path;
      }
    }

    Path.prototype.match = function(path, options) {
      var i, j, len, match, param, params;
      if (options == null) {
        options = {};
      }
      if (!(match = this.route.exec(path))) {
        return false;
      }
      options.match = match;
      params = match.slice(1);
      if (this.names.length) {
        for (i = j = 0, len = params.length; j < len; i = ++j) {
          param = params[i];
          options[this.names[i]] = param;
        }
      }
      Route.trigger('before', this);
      return this.callback.call(null, options) !== false;
    };

    return Path;

  })(Spine.Module);

  Route = (function(superClass) {
    var ref;

    extend(Route, superClass);

    Route.extend(Spine.Events);

    Route.historySupport = ((ref = window.history) != null ? ref.pushState : void 0) != null;

    Route.options = {
      trigger: true,
      history: false,
      shim: false,
      replace: false,
      redirect: false
    };

    Route.routers = [];

    Route.setup = function(options) {
      if (options == null) {
        options = {};
      }
      this.options = $.extend({}, this.options, options);
      if (this.options.history) {
        this.history = this.historySupport && this.options.history;
      }
      if (this.options.shim) {
        return;
      }
      if (this.history) {
        $(window).bind('popstate', this.change);
      } else {
        $(window).bind('hashchange', this.change);
      }
      return this.change();
    };

    Route.unbind = function() {
      var unbindResult;
      unbindResult = Spine.Events.unbind.apply(this, arguments);
      if (arguments.length > 0) {
        return unbindResult;
      }
      if (this.options.shim) {
        return;
      }
      if (this.history) {
        return $(window).unbind('popstate', this.change);
      } else {
        return $(window).unbind('hashchange', this.change);
      }
    };

    Route.navigate = function() {
      var args, lastArg, options, path, routes;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      options = {};
      lastArg = args[args.length - 1];
      if (typeof lastArg === 'object') {
        options = args.pop();
      } else if (typeof lastArg === 'boolean') {
        options.trigger = args.pop();
      }
      options = $.extend({}, this.options, options);
      path = args.join('/');
      if (this.path === path) {
        return;
      }
      this.path = path;
      if (options.trigger) {
        this.trigger('navigate', this.path);
        routes = this.matchRoutes(this.path, options);
        if (!routes.length) {
          if (typeof options.redirect === 'function') {
            return options.redirect.apply(this, [this.path, options]);
          } else {
            if (options.redirect === true) {
              this.redirect(this.path);
            }
          }
        }
      }
      if (options.shim) {
        return true;
      } else if (this.history && options.replace) {
        return history.replaceState({}, document.title, this.path);
      } else if (this.history) {
        return history.pushState({}, document.title, this.path);
      } else {
        return window.location.hash = this.path;
      }
    };

    Route.create = function() {
      var router;
      router = new this;
      this.routers.push(router);
      return router;
    };

    Route.add = function(path, callback) {
      return this.router.add(path, callback);
    };

    Route.prototype.add = function(path, callback) {
      var key, results, value;
      if (typeof path === 'object' && !(path instanceof RegExp)) {
        results = [];
        for (key in path) {
          value = path[key];
          results.push(this.add(key, value));
        }
        return results;
      } else {
        return this.routes.push(new Path(path, callback));
      }
    };

    Route.prototype.destroy = function() {
      var r;
      this.routes.length = 0;
      return this.constructor.routers = (function() {
        var j, len, ref1, results;
        ref1 = this.constructor.routers;
        results = [];
        for (j = 0, len = ref1.length; j < len; j++) {
          r = ref1[j];
          if (r !== this) {
            results.push(r);
          }
        }
        return results;
      }).call(this);
    };

    Route.getPath = function() {
      var path;
      if (this.history) {
        path = window.location.pathname;
        if (path.substr(0, 1) !== '/') {
          path = '/' + path;
        }
      } else {
        path = window.location.hash;
        path = path.replace(hashStrip, '');
      }
      return path;
    };

    Route.getHost = function() {
      return window.location.protocol + "//" + window.location.host;
    };

    Route.change = function() {
      var path;
      path = Route.getPath();
      if (path === Route.path) {
        return;
      }
      Route.path = path;
      return Route.matchRoutes(Route.path);
    };

    Route.matchRoutes = function(path, options) {
      var j, len, match, matches, ref1, router;
      matches = [];
      ref1 = this.routers.concat([this.router]);
      for (j = 0, len = ref1.length; j < len; j++) {
        router = ref1[j];
        match = router.matchRoute(path, options);
        if (match) {
          matches.push(match);
        }
      }
      if (matches.length) {
        this.trigger('change', matches, path);
      }
      return matches;
    };

    Route.redirect = function(path) {
      return window.location = path;
    };

    function Route() {
      this.routes = [];
    }

    Route.prototype.matchRoute = function(path, options) {
      var j, len, ref1, route;
      ref1 = this.routes;
      for (j = 0, len = ref1.length; j < len; j++) {
        route = ref1[j];
        if (route.match(path, options)) {
          return route;
        }
      }
    };

    Route.prototype.trigger = function() {
      var args, ref1;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      args.splice(1, 0, this);
      return (ref1 = this.constructor).trigger.apply(ref1, args);
    };

    return Route;

  })(Spine.Module);

  Route.router = new Route;

  Spine.Controller.include({
    route: function(path, callback) {
      if (this.router instanceof Spine.Route) {
        return this.router.add(path, this.proxy(callback));
      } else {
        return Spine.Route.add(path, this.proxy(callback));
      }
    },
    routes: function(routes) {
      var key, results, value;
      results = [];
      for (key in routes) {
        value = routes[key];
        results.push(this.route(key, value));
      }
      return results;
    },
    navigate: function() {
      return Spine.Route.navigate.apply(Spine.Route, arguments);
    }
  });

  Route.Path = Path;

  Spine.Route = Route;

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Route;
  }

}).call(this);

//# sourceMappingURL=route.js.map
 },"spine/lib/manager": function(exports, require, module) { // Generated by CoffeeScript 1.10.0
(function() {
  var $, Spine,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty,
    slice = [].slice,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Spine = this.Spine || require('spine');

  $ = Spine.$;

  Spine.Manager = (function(superClass) {
    extend(Manager, superClass);

    Manager.include(Spine.Events);

    function Manager() {
      this.controllers = [];
      this.bind('change', this.change);
      this.add.apply(this, arguments);
    }

    Manager.prototype.add = function() {
      var cont, controllers, i, len, results;
      controllers = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      results = [];
      for (i = 0, len = controllers.length; i < len; i++) {
        cont = controllers[i];
        results.push(this.addOne(cont));
      }
      return results;
    };

    Manager.prototype.addOne = function(controller) {
      controller.bind('active', (function(_this) {
        return function() {
          var args;
          args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          return _this.trigger.apply(_this, ['change', controller].concat(slice.call(args)));
        };
      })(this));
      controller.bind('release', (function(_this) {
        return function() {
          var c;
          return _this.controllers = (function() {
            var i, len, ref, results;
            ref = this.controllers;
            results = [];
            for (i = 0, len = ref.length; i < len; i++) {
              c = ref[i];
              if (c !== controller) {
                results.push(c);
              }
            }
            return results;
          }).call(_this);
        };
      })(this));
      return this.controllers.push(controller);
    };

    Manager.prototype.deactivate = function() {
      return this.trigger.apply(this, ['change', false].concat(slice.call(arguments)));
    };

    Manager.prototype.change = function() {
      var args, cont, current, i, len, ref;
      current = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      ref = this.controllers;
      for (i = 0, len = ref.length; i < len; i++) {
        cont = ref[i];
        if (cont !== current) {
          cont.deactivate.apply(cont, args);
        }
      }
      if (current) {
        return current.activate.apply(current, args);
      }
    };

    return Manager;

  })(Spine.Module);

  Spine.Controller.include({
    active: function() {
      var args;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      if (typeof args[0] === 'function') {
        this.bind('active', args[0]);
      } else {
        args.unshift('active');
        this.trigger.apply(this, args);
      }
      return this;
    },
    isActive: function() {
      return this.el.hasClass('active');
    },
    activate: function() {
      this.el.addClass('active');
      return this;
    },
    deactivate: function() {
      this.el.removeClass('active');
      return this;
    }
  });

  Spine.Stack = (function(superClass) {
    extend(Stack, superClass);

    Stack.prototype.controllers = {};

    Stack.prototype.routes = {};

    Stack.prototype.className = 'spine stack';

    function Stack() {
      this.release = bind(this.release, this);
      var fn, key, ref, ref1, ref2, value;
      Stack.__super__.constructor.apply(this, arguments);
      this.manager = new Spine.Manager;
      this.router = (ref = Spine.Route) != null ? ref.create() : void 0;
      ref1 = this.controllers;
      for (key in ref1) {
        value = ref1[key];
        if (this[key] != null) {
          throw Error("'@" + key + "' already assigned");
        }
        this[key] = new value({
          stack: this
        });
        this.add(this[key]);
      }
      ref2 = this.routes;
      fn = (function(_this) {
        return function(key, value) {
          var callback;
          if (typeof value === 'function') {
            callback = value;
          }
          callback || (callback = function() {
            var ref3;
            return (ref3 = _this[value]).active.apply(ref3, arguments);
          });
          return _this.route(key, callback);
        };
      })(this);
      for (key in ref2) {
        value = ref2[key];
        fn(key, value);
      }
      if (this["default"]) {
        this[this["default"]].active();
      }
    }

    Stack.prototype.add = function(controller) {
      this.manager.add(controller);
      return this.append(controller);
    };

    Stack.prototype.release = function() {
      var ref;
      if ((ref = this.router) != null) {
        ref.destroy();
      }
      return Stack.__super__.release.apply(this, arguments);
    };

    return Stack;

  })(Spine.Controller);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Spine.Manager;
  }

  if (typeof module !== "undefined" && module !== null) {
    module.exports.Stack = Spine.Stack;
  }

}).call(this);

//# sourceMappingURL=manager.js.map
 },"spine/lib/local": function(exports, require, module) { // Generated by CoffeeScript 1.10.0
(function() {
  var Spine;

  Spine = this.Spine || require('spine');

  Spine.Model.Local = {
    extended: function() {
      var e, error, testLocalStorage;
      testLocalStorage = 'spine' + new Date().getTime();
      try {
        localStorage.setItem(testLocalStorage, testLocalStorage);
        localStorage.removeItem(testLocalStorage);
      } catch (error) {
        e = error;
        return;
      }
      this.change(this.saveLocal);
      return this.fetch(this.loadLocal);
    },
    saveLocal: function() {
      var result;
      result = JSON.stringify(this);
      return localStorage[this.className] = result;
    },
    loadLocal: function(options) {
      var result;
      if (options == null) {
        options = {};
      }
      if (!options.hasOwnProperty('clear')) {
        options.clear = true;
      }
      result = localStorage[this.className];
      return this.refresh(result || [], options);
    }
  };

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Spine.Model.Local;
  }

}).call(this);

//# sourceMappingURL=local.js.map
 },"admin": function(exports, require, module) { (function() {
  var $, Category, CategoryEditView, Clipboard, Config, Drag, Extender, Flash, LoaderView, LoginView, Main, MainView, MissingView, ModalActionView, ModalSimpleView, Model, OverviewView, PhotosTrash, PreviewView, Product, ProductEditView, ProductsTrash, Root, Settings, ShowView, Sidebar, Spine, SpineDragItem, Toolbar, ToolbarView, TrustamiView, UploadEditView, User,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Model = Spine.Model;

  User = require('models/user');

  Config = require('models/config');

  Drag = require('extensions/drag');

  Product = require('models/product');

  Root = require('models/root');

  PhotosTrash = require('models/photos_trash');

  ProductsTrash = require('models/products_trash');

  Category = require('models/category');

  Toolbar = require("models/toolbar");

  Settings = require('models/settings');

  Flash = require("models/flash");

  Clipboard = require("models/clipboard");

  ProductsTrash = require("models/products_trash");

  MainView = require("controllers/main_view");

  TrustamiView = require("controllers/trustami_view");

  LoginView = require("controllers/login_view");

  LoaderView = require("controllers/loader_view");

  Sidebar = require("controllers/sidebar");

  ShowView = require("controllers/show_view");

  ModalSimpleView = require("controllers/modal_simple_view");

  ModalActionView = require("controllers/modal_action_view");

  ToolbarView = require("controllers/toolbar_view");

  LoginView = require("controllers/login_view");

  ProductEditView = require("controllers/product_edit_view");

  UploadEditView = require("controllers/upload_edit_view");

  CategoryEditView = require("controllers/category_edit_view");

  OverviewView = require('controllers/overview_view');

  PreviewView = require('controllers/preview_view');

  MissingView = require("controllers/missing_view");

  Extender = require('extensions/controller_extender');

  SpineDragItem = require('models/drag_item');

  require('spine/lib/route');

  require('spine/lib/manager');

  require("extensions/manager");

  Main = (function(superClass) {
    extend(Main, superClass);

    Main.extend(Drag);

    Main.extend(Extender);

    Main.prototype.elements = {
      '#fileupload': 'uploader',
      '#preview': 'previewEl',
      '#main': 'mainEl',
      '#sidebar': 'sidebarEl',
      '#show': 'showEl',
      '#overview': 'overviewEl',
      '#sidebar .flickr': 'sidebarFlickrEl',
      '#missing': 'missingEl',
      '#ga': 'categoryEl',
      '#al': 'productEl',
      '#fu': 'uploadEl',
      '#loader': 'loaderEl',
      '#login': 'loginEl',
      '#modal-category': 'slideshowEl',
      '#show .content': 'content',
      '.vdraggable': 'vDrag',
      '.hdraggable': 'hDrag',
      '.vdivide': 'vDragHandle',
      '.hdivide': 'hDragHandle',
      '.status-symbol img': 'statusIcon',
      '.status-text': 'statusText',
      '.status-symbol': 'statusSymbol',
      '.toolbar-three': 'trustamiEl'
    };

    Main.prototype.events = {
      'click [class*="-trigger-edit"]': 'activateEditor',
      'click': 'delegateFocus',
      'keyup': 'key',
      'keydown': 'key'
    };

    function Main() {
      Main.__super__.constructor.apply(this, arguments);
      this.version = "2.0.0";
      this.autoupload = true;
      this.useDragImage = false;
      this.intro = true;
      this.sidebarInitWidth = 430;
      Spine.dragItem = SpineDragItem.create();
      this.CONFIRM = {
        'REMOVE': function(options) {
          if (options.plural) {
            return '\nSollen ' + options.type + ' ' + $().brace(options.length) + ' wirklich entfernt werden?\n\n';
          } else {
            return '\nSoll ' + options.type + ' "' + options.name + '" wirklich entfernt werden?\n\n';
          }
        },
        'DELETE': function(options) {
          if (options.plural) {
            return '\nSollen ' + options.type + ' ' + $().brace(options.length) + ' in den Papierkorb verschoben werden?\n\n';
          } else {
            return '\nSoll ' + options.type + ' "' + options.name + '" in den Papierkorb verschoben werden?\n\n';
          }
        },
        'DESTROY': function(options) {
          if (options.plural) {
            return '\nSollen ' + options.type + ' ' + $().brace(options.length) + ' endgültig gelöscht werden?\n\n';
          } else {
            return '\nSoll ' + options.type + ' "' + options.name + '" endgültig gelöscht werden?\n\n';
          }
        },
        'REMOVE_AND_DELETE': function(options) {
          if (options.plural) {
            return '\nSollen ' + options.type + ' ' + $().brace(options.length) + ' entfernt und in den Papierkorb verschoben werden?\n\n';
          } else {
            return '\nSoll ' + options.type + ' "' + options.name + '" entfernt und in den Papierkorb verschoben werden?\n\n';
          }
        },
        'NOCAT': function(options) {
          return '\nKeine Kategorie ausgwählt.\n\n';
        },
        'EMPTYTRASH': function(options) {
          return '\nSoll der Papierkorb geleert werden?\n\n';
        },
        'DESTROY_CATEGORY': function(options) {
          return '\nSoll die Kategorie "' + options.name + '" entfernt werden?\n\n';
        },
        'DESTROY_CATEGORY_NOT_ALLOWED': function(options) {
          return '\nGeschützte Kategorie!\n\n';
        },
        'NO_VALID_CATEGORY': function(options) {
          return '\nDiese Kategorie unterstützt diese Funktion nicht!\n\n';
        },
        'NO_FAVORITE_FOR_IGNORED': function(options) {
          return '\nAusgeblendeter Artikel kann kein Produkt des Tages sein!\n\n';
        },
        'NO_IGNORE_FOR_FAVORITE': function(options) {
          return '\nEin Produkt des Tages kann nicht ausgeblendet werden!\n\n';
        },
        'METHOD_NOT_SUPPORTED': function(options) {
          return '\nFunktion momentan nicht verfügbar!\n\n';
        },
        'NO_CAT_FOR_UPLOAD': function(options) {
          return '\nEs ist momentan kein Produkt ausgewählt!\n\nUm den Upload abzuschliessen, markiere ein Produkt und klicke anschliessend unten auf "Start".\n\n';
        }
      };
      this.ALBUM_SINGLE_MOVE = this.createImage('/img/cursor_folder_1.png');
      this.ALBUM_DOUBLE_MOVE = this.createImage('/img/cursor_folder_3.png');
      this.IMAGE_SINGLE_MOVE = this.createImage('/img/cursor_images_1.png');
      this.IMAGE_DOUBLE_MOVE = this.createImage('/img/cursor_images_3.png');
      this.ignoredHashes = ['slideshow', 'preview', 'flickr', 'logout'];
      this.arr = ['false', 'fitness', 'outdoor', 'specials', 'tools'];
      $(window).bind('hashchange', this.proxy(this.storeHash));
      User.bind('pinger', this.proxy(this.validate));
      Clipboard.fetch();
      Clipboard.destroyAll();
      Settings.one('refresh', this.proxy(this.refreshSettings));
      Settings.one('change', this.proxy(this.changeSettings));
      $('#modal-category').bind('hidden', this.proxy(this.hideSlideshow));
      this.modalView = new ModalSimpleView;
      this.trustamiView = new TrustamiView({
        el: this.trustamiEl
      });
      this.sidebar = new Sidebar({
        el: this.sidebarEl,
        externalClass: '.optSidebar'
      });
      this.loginView = new LoginView({
        el: this.loginEl
      });
      this.mainView = new MainView({
        el: this.mainEl
      });
      this.loaderView = new LoaderView({
        el: this.loaderEl
      });
      this.showView = new ShowView({
        el: this.showEl,
        activeControl: 'btnCategory',
        sidebar: this.sidebar,
        parent: this
      });
      this.overviewView = new OverviewView({
        el: this.overviewEl
      });
      this.previewView = new PreviewView({
        el: this.previewEl
      });
      this.missingView = new MissingView({
        el: this.missingEl
      });
      this.category = new CategoryEditView({
        el: this.categoryEl,
        externalClass: '.optCategory'
      });
      this.product = new ProductEditView({
        el: this.productEl,
        externalClass: '.optProduct'
      });
      this.upload = new UploadEditView({
        el: this.uploadEl,
        parent: this.showView,
        externalClass: '.optUpload'
      });
      this.slideshowView = this.showView.slideshowView;
      this.vmanager = new Spine.Manager(this.sidebar);
      this.vmanager.external = this.showView.toolbarOne;
      this.vmanager.initDrag(this.vDrag, {
        initSize: (function(_this) {
          return function() {
            return _this.sidebarInitWidth;
          };
        })(this),
        sleep: true,
        disabled: false,
        axis: 'x',
        min: function() {
          return 20;
        },
        tol: function() {
          return 50;
        },
        max: (function(_this) {
          return function() {
            return _this.el.width() / 2;
          };
        })(this),
        goSleep: (function(_this) {
          return function() {
            return _this.sidebar.inner.hide();
          };
        })(this),
        awake: (function(_this) {
          return function() {
            return _this.sidebar.inner.show();
          };
        })(this)
      });
      this.hmanager = new Spine.Manager(this.category, this.product, this.upload);
      this.hmanager.external = this.showView.toolbarOne;
      this.hmanager.initDrag(this.hDrag, {
        initSize: (function(_this) {
          return function() {
            return _this.el.height() * 0.4;
          };
        })(this),
        disabled: false,
        axis: 'y',
        min: function() {
          return 50;
        },
        sleep: true,
        max: (function(_this) {
          return function() {
            return _this.el.height() / 1.5;
          };
        })(this),
        goSleep: function() {},
        awake: function() {}
      });
      this.modal = {
        exists: false
      };
      this.appManager = new Spine.Manager(this.mainView, this.loaderView);
      this.contentManager = new Spine.Manager(this.overviewView, this.showView);
      this.hmanager.bind('awake', (function(_this) {
        return function() {
          return _this.showView.trigger('awake');
        };
      })(this));
      this.hmanager.bind('sleep', (function(_this) {
        return function() {
          return _this.showView.trigger('sleep');
        };
      })(this));
      this.hmanager.bind('change', this.proxy(this.changeEditCanvas));
      this.appManager.bind('change', this.proxy(this.changeMainCanvas));
      this.contentManager.bind('change', this.proxy(this.changeContentCanvas));
      Category.bind('current', this.proxy(this.changeBackground));
      this.bind('canvas', this.proxy(this.canvas));
      this.product.trigger('active');
      this.loaderView.trigger('active');
      this.initializeFileupload();
      this.initRoot();
      this.routes({
        '/category/:cid/:pid/iid/:iid': function(params) {
          var buffer;
          Model.Root.updateSelection(params.cid || []);
          Category.updateSelection(params.pid || []);
          Product.updateSelection(params.iid || []);
          buffer = Photo.renderBuffer();
          return this.showView.trigger('active', this.showView.photosView, buffer || Photo.buffer);
        },
        '/category/:cid/:pid/:iid': function(params) {
          var buffer;
          Model.Root.updateSelection(params.cid || []);
          if (params.pid === 'pid') {
            Category.updateSelection(params.iid || []);
            buffer = Product.renderBuffer();
            return this.showView.trigger('active', this.showView.productsView, buffer || Product.buffer);
          } else {
            Category.updateSelection(params.pid || []);
            Product.updateSelection(params.iid || []);
            buffer = Photo.renderBuffer();
            return this.showView.trigger('active', this.showView.photoView, buffer || Photo.buffer);
          }
        },
        '/category/:cid/:pid': function(params) {
          var buffer;
          if (params.cid === 'cid') {
            buffer = Category.renderBuffer();
            this.showView.trigger('active', this.showView.categoriesView, buffer || Category.buffer);
            return Model.Root.updateSelection(params.pid || []);
          } else {
            Model.Root.updateSelection(params.cid || []);
            Category.updateSelection(params.pid || []);
            Product.updateSelection([]);
            buffer = Photo.renderBuffer();
            return this.showView.trigger('active', this.showView.photosView, buffer || Photo.buffer);
          }
        },
        '/category/:cid': function(params) {
          var buffer;
          Model.Root.updateSelection(params.cid || []);
          Category.updateSelection();
          buffer = Product.renderBuffer();
          return this.showView.trigger('active', this.showView.productsView, buffer || Product.buffer);
        },
        '/category/*': function() {
          Root.updateSelection([]);
          return this.showView.trigger('active', this.showView.categoriesView);
        },
        '/overview/*': function() {
          return this.overviewView.trigger('active');
        },
        '/search/:sid': function(params) {
          this.sidebar.filter({}, params.sid);
          return this.showView.trigger('active', this.showView.productsView);
        },
        '/trash/products/:id': function(params) {
          var items;
          items = Product.filter(true, {
            func: 'selectDeleted'
          });
          return this.showView.trigger('active', this.showView.productsTrashView, items);
        },
        '/trash/photos/:id': function(params) {
          var items;
          items = Photo.filter(true, {
            func: 'selectDeleted'
          });
          return this.showView.trigger('active', this.showView.photosTrashView, items);
        },
        '/wait/*glob': function(params) {
          return this.showView.trigger('active', this.showView.waitView);
        },
        '/*glob': function(params) {
          return this.navigate('/overview', '');
        }
      });
      this.loadToolbars();
      this.defaultSettings = {
        welcomeScreen: false,
        test: true
      };
    }

    Main.prototype.initRoot = function() {
      var root;
      root = new Model.Root();
      root.save();
      return Model.Root.current(root);
    };

    Main.prototype.validate = function(user, json) {
      var intro, jsid, settings, usid, valid;
      valid = (usid = user.sessionid) && (jsid = json.sessionid) && (usid === jsid);
      if (!valid) {
        return User.logout();
      } else {
        this.user = User.user = user;
        user.tmi = json.tmi;
        user.save();
        settings = this.loadUserSettings(user.id);
        this.initLocation(settings);
        this.setInterval(10000);
        this.delay(this.setupView, 500);
        if ((intro = settings.intro) == null) {
          settings.updateAttributes({
            intro: !intro
          });
          intro = true;
        }
        return this.startScript(false);
      }
    };

    Main.prototype.startScript = function(b) {
      setTimeout(function() {
        return App.sidebar.toggleDraghandle();
      }, 2500);
      setTimeout(function() {
        return App.showView.toggleDraghandle();
      }, 3500);
      setTimeout(function() {
        return App.previewView.togglePreview();
      }, 4500);
      if (!b) {
        return;
      }
      setTimeout(function() {
        return App.sidebar.toggleDraghandle();
      }, 4500);
      setTimeout(function() {
        return App.sidebar.toggleDraghandle();
      }, 5500);
      setTimeout(function() {
        return App.showView.toggleDraghandle();
      }, 6500);
      setTimeout(function() {
        return App.showView.toggleDraghandle();
      }, 7500);
      setTimeout(function() {
        return App.vDragHandle.addClass('fire puls');
      }, 9000);
      setTimeout(function() {
        return App.vDragHandle.removeClass('fire puls');
      }, 12000);
      setTimeout(function() {
        return App.hDragHandle.addClass('fire puls');
      }, 9000);
      setTimeout(function() {
        return App.hDragHandle.removeClass('fire puls');
      }, 12000);
      return setTimeout(function() {
        return alert('Intro abschalten über Extras -> Intro-Quatsch');
      }, 13000);
    };

    Main.prototype.loadUserSettings = function(id) {
      var settings;
      Settings.fetch();
      if (!(settings = Settings.findByAttribute('user_id', id))) {
        Spine.trigger('show:wait', {
          small: true,
          header: false,
          body: '<h3>Welcome</h3><br>to<br><h4>HA Lehmann Admin</h4><h2>Beta</h2>',
          footer: false
        });
        settings = Settings.create({
          user_id: id,
          autoupload: this.autoupload,
          intro: this.intro
        });
      }
      return settings;
    };

    Main.prototype.initLocation = function(settings) {
      var h, hash;
      if (location.hash) {
        return;
      }
      hash = (h = settings.hash) ? h : '#/overview/';
      return this.navigate(hash);
    };

    Main.prototype.setInterval = function(time) {
      var callback, func;
      callback = (function(_this) {
        return function(json) {
          var sessionid, success;
          json = $.parseJSON(json);
          success = json.success;
          sessionid = json.sessionid;
          _this.user.sessionid = sessionid;
          return _this.user.save();
        };
      })(this);
      func = (function(_this) {
        return function() {
          return _this.user.isValid(callback);
        };
      })(this);
      if (this.user) {
        if (this.uuid) {
          clearInterval(this.uuid);
        }
        this.uuid = User.uuid();
        return this.uuid = setInterval(func, time);
      }
    };

    Main.prototype.test = function() {
      return console.log('Test');
    };

    Main.prototype.storeHash = function() {
      var hash, settings;
      if (!(settings = Settings.loadSettings())) {
        return;
      }
      hash = location.hash;
      if (!this.ignoredHashes.contains(hash)) {
        settings.previousHash = settings.hash;
      }
      settings.hash = hash;
      return settings.save();
    };

    Main.prototype.fullscreen = function() {
      return Spine.trigger('chromeless', true);
    };

    Main.prototype.changeBackground = function(cat) {
      var arr, c, i, len, res;
      arr = this.arr;
      res = this.getData(cat, arr);
      for (i = 0, len = arr.length; i < len; i++) {
        c = arr[i];
        this.el.removeClass(c);
      }
      return this.el.addClass(res);
    };

    Main.prototype.notify = function(text) {
      return this.modalView.render({
        small: true,
        body: function() {
          return require("views/notify")({
            text: text
          });
        }
      }).show();
    };

    Main.prototype.refreshSettings = function(records) {};

    Main.prototype.changeSettings = function(rec) {};

    Main.prototype.setupView = function() {
      this.log('setup View');
      Spine.unbind('uri:alldone');
      this.mainView.trigger('active');
      this.mainView.el.hide();
      return this.statusSymbol.fadeOut('slow', this.proxy(this.finalizeView));
    };

    Main.prototype.finalizeView = function() {
      this.loginView.render();
      return this.mainView.el.fadeIn(500);
    };

    Main.prototype.startPage = function() {
      var ref;
      return;
      if (!/^#\/category\//.test(location.hash)) {
        return this.navigate('/category', (ref = Category.first()) != null ? ref.id : void 0);
      }
    };

    Main.prototype.canvas = function(controller) {
      return controller.trigger('active');
    };

    Main.prototype.changeMainCanvas = function(controller) {};

    Main.prototype.changeContentCanvas = function(controller, b) {
      var _1, c, i, len, ref;
      this.controllers = (function() {
        var i, len, ref, results;
        ref = this.contentManager.controllers;
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          c = ref[i];
          if (c !== controller) {
            results.push(c);
          }
        }
        return results;
      }).call(this);
      ref = this.controllers;
      for (i = 0, len = ref.length; i < len; i++) {
        c = ref[i];
        c.el.removeClass('in');
      }
      _1 = (function(_this) {
        return function() {
          return controller.el.addClass('in');
        };
      })(this);
      return window.setTimeout((function(_this) {
        return function() {
          return _1();
        };
      })(this), 500);
    };

    Main.prototype.changeEditCanvas = function(controller) {};

    Main.prototype.initializeFileupload = function() {
      return this.uploader.fileupload({
        autoUpload: true,
        singleFileUploads: false,
        sequentialUploads: true,
        pasteZone: false,
        maxFileSize: 10000000,
        maxNumberOfFiles: 20,
        acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
        getFilesFromResponse: function(data) {
          var file, i, len, ref, res;
          res = [];
          ref = data.files;
          for (i = 0, len = ref.length; i < len; i++) {
            file = ref[i];
            res.push(file);
          }
          return res;
        }
      });
    };

    Main.prototype.loadToolbars = function() {
      return Toolbar.load();
    };

    Main.prototype.activateEditor = function(e) {
      var el, test;
      el = $(e.currentTarget);
      test = el.prop('class');
      if (/\bcat-trigger*/.test(test)) {
        this.category.trigger('active');
      } else if (/\bpro-trigger*/.test(test)) {
        this.product.trigger('active');
      } else if (/\bpho-trigger*/.test(test)) {
        this.upload.trigger('active');
      }
      e.stopPropagation();
      return e.preventDefault();
    };

    Main.prototype.getData = function(s) {
      var a, i, len, ref, ret, test;
      test = function(s, a) {
        var found, matcher;
        matcher = new RegExp(".*" + a + ".*", "g");
        return found = matcher.test(s);
      };
      ref = this.arr;
      for (i = 0, len = ref.length; i < len; i++) {
        a = ref[i];
        if (test(s, a)) {
          ret = a;
        }
      }
      return ret;
    };

    Main.prototype.confirm = function(phrase, options, mode) {
      var defaults;
      if (options == null) {
        options = {};
      }
      if (mode == null) {
        mode = 'confirm';
      }
      defaults = {
        plural: false
      };
      options = $().extend(defaults, options);
      if (window[mode].call(null, this.CONFIRM[phrase](options))) {
        return true;
      }
    };

    Main.prototype.key = function(e) {
      var code, el, isFormfield, type;
      code = e.charCode || e.keyCode;
      type = e.type;
      el = $(document.activeElement);
      isFormfield = $().isFormElement(el);
      if (type !== 'keydown') {
        return;
      }
      switch (code) {
        case 8:
          if (!isFormfield) {
            return e.preventDefault();
          }
          break;
        case 9:
          if (!isFormfield) {
            this.sidebar.toggleDraghandle();
            return e.preventDefault();
          }
          break;
        case 13:
          if (!isFormfield) {
            this.delegateFocus(e, this.showView);
            return e.preventDefault();
          }
          break;
        case 27:
          if (!isFormfield) {
            if (this.overviewView.isActive()) {
              this.delegateFocus(e, this.overviewView);
            } else {
              this.delegateFocus(e, this.showView);
            }
            return e.preventDefault();
          }
          break;
        case 32:
          if (!isFormfield) {
            if (this.overviewView.isActive()) {
              this.delegateFocus(e, this.overviewView);
            } else {
              this.delegateFocus(e, this.showView);
            }
            return e.preventDefault();
          }
          break;
        case 37:
          if (!isFormfield) {
            if (this.overviewView.isActive()) {
              this.delegateFocus(e, this.overviewView);
            } else {
              this.delegateFocus(e, this.showView.current);
            }
            return e.preventDefault();
          }
          break;
        case 38:
          if (!isFormfield) {
            this.delegateFocus(e, this.showView.current);
            return e.preventDefault();
          }
          break;
        case 39:
          if (!isFormfield) {
            if (this.overviewView.isActive()) {
              this.delegateFocus(e, this.overviewView);
            } else {
              this.delegateFocus(e, this.showView.current);
            }
            return e.preventDefault();
          }
          break;
        case 40:
          if (!isFormfield) {
            this.delegateFocus(e, this.showView.current);
            return e.preventDefault();
          }
          break;
        case 65:
          if (!isFormfield) {
            this.delegateFocus(e, this.showView.current);
            return e.preventDefault();
          }
          break;
        case 73:
          if (!isFormfield) {
            this.delegateFocus(e, this.showView.current);
            return e.preventDefault();
          }
          break;
        case 77:
          if (!isFormfield) {
            this.delegateFocus(e, this.showView);
            return e.preventDefault();
          }
          break;
        case 86:
          if (isFormfield) {
            if (e.metaKey || e.ctrlKey) {
              return e.stopPropagation();
            }
          }
      }
    };

    Main.prototype.delegateFocus = function(e, controller) {
      var el;
      if (controller == null) {
        controller = this.showView;
      }
      el = $(document.activeElement);
      if ($().isFormElement(el)) {
        return;
      }
      return controller.focus();
    };

    return Main;

  })(Spine.Controller);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Main;
  }

}).call(this);
 },"controllers/categories_header": function(exports, require, module) { (function() {
  var $, CategoriesHeader, CategoriesProduct, Category, Extender, Photo, Product, ProductsPhoto, Spine,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Category = require('models/category');

  Product = require('models/product');

  Photo = require('models/photo');

  CategoriesProduct = require('models/categories_product');

  ProductsPhoto = require('models/products_photo');

  Extender = require('extensions/controller_extender');

  CategoriesHeader = (function(superClass) {
    extend(CategoriesHeader, superClass);

    CategoriesHeader.extend(Extender);

    function CategoriesHeader() {
      CategoriesHeader.__super__.constructor.apply(this, arguments);
      this.bind('active', this.proxy(this.active));
      Category.bind('change', this.proxy(this.render));
      Category.bind('refresh', this.proxy(this.render));
      Category.bind('change:current', this.proxy(this.render));
      Product.bind('change', this.proxy(this.render));
      Product.bind('change:collection', this.proxy(this.render));
      Photo.bind('refresh', this.proxy(this.render));
    }

    CategoriesHeader.prototype.render = function() {
      return this.html(this.template({
        model: Category,
        modelProduct: Product,
        modelPhoto: Photo,
        modelGas: CategoriesProduct,
        modelAps: ProductsPhoto,
        author: User.first().name
      }));
    };

    CategoriesHeader.prototype.count = function() {
      return Category.count();
    };

    CategoriesHeader.prototype.active = function() {
      return this.render();
    };

    CategoriesHeader.prototype.goUp = function(e) {
      this.navigate('/overview', '');
      e.preventDefault();
      return e.stopPropagation();
    };

    return CategoriesHeader;

  })(Spine.Controller);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = CategoriesHeader;
  }

}).call(this);
 },"controllers/categories_list": function(exports, require, module) { (function() {
  var $, CategoriesList, CategoriesProduct, Category, Drag, Extender, Photo, ProductsPhoto, Root, Spine,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty,
    slice = [].slice;

  Spine = require("spine");

  $ = Spine.$;

  Root = require("models/root");

  Category = require('models/category');

  Photo = require('models/photo');

  CategoriesProduct = require('models/categories_product');

  ProductsPhoto = require('models/products_photo');

  Drag = require('extensions/drag');

  Extender = require('extensions/controller_extender');

  require('extensions/tmpl');

  CategoriesList = (function(superClass) {
    extend(CategoriesList, superClass);

    CategoriesList.extend(Extender);

    CategoriesList.prototype.events = {
      'click .dropdown-toggle': 'dropdownToggle',
      'click .delete': 'deleteCategory',
      'click .zoom': 'zoom'
    };

    function CategoriesList() {
      CategoriesList.__super__.constructor.apply(this, arguments);
      Product.bind('change:collection', this.proxy(this.renderRelated));
      Category.bind('change', this.proxy(this.renderOne));
      Category.bind('destroy', this.proxy(this.testEmpty));
      CategoriesProduct.bind('change', this.proxy(this.renderOneRelated));
      Photo.bind('destroy', this.proxy(this.renderRelated));
      Product.bind('destroy', this.proxy(this.renderRelated));
      Root.bind('change:selection', this.proxy(this.exposeSelection));
    }

    CategoriesList.prototype.test = function() {
      var args;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      return console.log(args);
    };

    CategoriesList.prototype.renderOneRelated = function(ga) {
      var category;
      category = Category.find(ga.category_id);
      if (category) {
        return this.updateTemplate(category);
      }
    };

    CategoriesList.prototype.renderRelated = function() {
      if (!this.parent.isActive()) {
        return;
      }
      this.log('renderRelated');
      return this.updateTemplates();
    };

    CategoriesList.prototype.renderOne = function(item, mode) {
      this.log('renderOne');
      switch (mode) {
        case 'create':
          this.wipe();
          this.append(this.template(item));
          this.reorder(item);
          this.delay(this.proxy(this.exposeSelection), 2000);
          break;
        case 'update':
          this.updateTemplate(item);
          $('.dropdown-toggle', this.el).dropdown();
          this.reorder(item);
          this.exposeSelection();
          break;
        case 'destroy':
          this.exposeSelection();
      }
      return this.el;
    };

    CategoriesList.prototype.render = function(items, mode) {
      var ref, ref1, ref2, s;
      if (!items.length) {
        s = (s = ((ref = this.model.record) != null ? ref.screenname : void 0) || (s = ((ref1 = this.model.record) != null ? ref1.name : void 0) || (s = (ref2 = this.model.record) != null ? ref2.title : void 0))) != null ? 'in ' + s + ' nichts los - kein Moos' : 'nichts los hier. Brutal...';
        this.renderEmpty(s);
        return this.el;
      }
      this.html(this.template(items));
      this.exposeSelection();
      $('.dropdown-toggle', this.el).dropdown();
      this.el.sortable('categories');
      return this.el;
    };

    CategoriesList.prototype.updateTemplates = function() {
      var category, j, len, ref, results;
      this.log('updateTemplates');
      ref = Category.records;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        category = ref[j];
        results.push(this.updateTemplate(category));
      }
      return results;
    };

    CategoriesList.prototype.updateTemplate = function(item) {
      var active, hot, innerEl, itemEl, style, tmplItem;
      itemEl = this.children().forItem(item);
      active = itemEl.hasClass('active');
      hot = itemEl.hasClass('hot');
      innerEl = $('.thumbnail', itemEl);
      style = innerEl.attr('style');
      tmplItem = innerEl.tmplItem();
      tmplItem.data = item;
      if (typeof tmplItem.update === "function") {
        tmplItem.update();
      }
      itemEl.attr('id', item.id);
      itemEl.toggleClass('active', active);
      itemEl.toggleClass('hot', hot);
      innerEl.attr('style', style);
      return this.el.sortable();
    };

    CategoriesList.prototype.reorder = function(item) {
      var children, id, idxAfterSort, idxBeforeSort, index, newEl, oldEl;
      id = item.id;
      index = function(id, list) {
        var i, itm, j, len;
        for (i = j = 0, len = list.length; j < len; i = ++j) {
          itm = list[i];
          if (itm.id === id) {
            return i;
          }
        }
        return i;
      };
      children = this.children();
      oldEl = this.children().forItem(item);
      idxBeforeSort = this.children().index(oldEl);
      idxAfterSort = index(id, Category.all().sort(Category.sortByOrder));
      newEl = $(children[idxAfterSort]);
      if (idxBeforeSort < idxAfterSort) {
        return newEl.after(oldEl);
      } else if (idxBeforeSort > idxAfterSort) {
        return newEl.before(oldEl);
      }
    };

    CategoriesList.prototype.dropdownToggle = function(e) {
      var el;
      e.preventDefault();
      e.stopPropagation();
      el = $(e.currentTarget);
      return el.dropdown();
    };

    CategoriesList.prototype.zoom = function(e) {
      var cid, item, pid, ref;
      item = e.type === 'click' ? $(e.currentTarget).item() : this.models.record;
      if (cid = item != null ? item.id : void 0) {
        this.navigate('/category', cid, pid = (pid = (ref = Category.record) != null ? ref.selectionList().first() : void 0) ? 'pid/' + pid : null);
      } else {
        this.navigate('/category', '');
      }
      e.stopPropagation();
      return e.preventDefault();
    };

    CategoriesList.prototype.back = function(e) {
      e.stopPropagation();
      e.preventDefault();
      return this.navigate('/overview', '');
    };

    CategoriesList.prototype.deleteCategory = function(e) {
      var el, item;
      e.stopPropagation();
      e.preventDefault();
      item = $(e.currentTarget).item();
      el = $(e.currentTarget).parents('.item');
      if (item) {
        return Spine.trigger('delete:category', item.id);
      }
    };

    return CategoriesList;

  })(Spine.Controller);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = CategoriesList;
  }

}).call(this);
 },"controllers/categories_view": function(exports, require, module) { (function() {
  var $, CategoriesList, CategoriesProduct, CategoriesView, Category, Drag, Extender, ProductsPhoto, Root, Spine,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Drag = require('extensions/drag');

  Root = require('models/root');

  Category = require('models/category');

  CategoriesProduct = require('models/categories_product');

  CategoriesList = require("controllers/categories_list");

  ProductsPhoto = require('models/products_photo');

  Extender = require('extensions/controller_extender');

  CategoriesView = (function(superClass) {
    extend(CategoriesView, superClass);

    CategoriesView.extend(Drag);

    CategoriesView.extend(Extender);

    CategoriesView.prototype.elements = {
      '.items': 'items'
    };

    CategoriesView.prototype.events = {
      'click': 'clearSelection',
      'click .item': 'click',
      'mousemove .item': 'infoUp',
      'mouseleave .item': 'infoBye',
      'dragend': 'dragend',
      'dragstart': 'dragstart',
      'drop       ': 'drop',
      'dragover   ': 'dragover',
      'dragenter  ': 'dragenter',
      'sortupdate': 'sortupdate'
    };

    CategoriesView.prototype.headerTemplate = function(items) {
      return $("#headerCategoryTemplate").tmpl(items);
    };

    CategoriesView.prototype.template = function(items) {
      return $("#categoriesTemplate").tmpl(items);
    };

    function CategoriesView() {
      this.infoBye = bind(this.infoBye, this);
      this.infoUp = bind(this.infoUp, this);
      CategoriesView.__super__.constructor.apply(this, arguments);
      this.bind('active', this.proxy(this.active));
      this.list = new CategoriesList({
        el: this.items,
        template: this.template,
        parent: this
      });
      this.header.template = this.headerTemplate;
      this.viewport = this.list.el;
      Category.one('refresh', this.proxy(this.render));
      Category.bind('beforeSave', this.proxy(this.createProtected));
      Category.bind('beforeDestroy', this.proxy(this.beforeDestroy));
      Category.bind('destroy', this.proxy(this.destroy));
      Category.bind('refresh:category', this.proxy(this.render));
      this.bind('drag:start', this.proxy(this.dragStart));
      this.bind('drag:enter', this.proxy(this.dragEnter));
      this.bind('drag:over', this.proxy(this.dragOver));
      this.bind('drag:leave', this.proxy(this.dragLeave));
      this.bind('drag:drop', this.proxy(this.dragDrop));
    }

    CategoriesView.prototype.render = function(items) {
      items = Category.records.sort(Category.sortByOrder);
      return this.list.render(items);
    };

    CategoriesView.prototype.active = function(items) {
      App.showView.trigger('change:toolbarOne', ['Default']);
      App.showView.trigger('change:toolbarTwo', ['Trustami']);
      return this.render(items);
    };

    CategoriesView.prototype.click = function(e) {
      var item;
      item = $(e.currentTarget).item();
      return this.select(e, item.id);
    };

    CategoriesView.prototype.select = function(e, ids) {
      if (ids == null) {
        ids = [];
      }
      if (!Array.isArray(ids)) {
        ids = [ids];
      }
      this.navigate('/category', 'cid', ids[0]);
      this.model.updateSelection(ids);
      return e.stopPropagation();
    };

    CategoriesView.prototype.beforeDestroy = function(item) {
      if (!item.isValid()) {
        return;
      }
      return this.list.findModelElement(item).detach();
    };

    CategoriesView.prototype.destroy = function(item) {
      var ref;
      if (item) {
        if (((ref = Category.record) != null ? ref.id : void 0) === (item != null ? item.id : void 0)) {
          Category.current();
        }
        item.removeSelectionID();
        Root.removeFromSelection(item.id);
      }
      if (Category.count()) {
        if (!/^#\/category\//.test(location.hash)) {
          return this.navigate('/category', Category.first().id);
        }
      }
    };

    CategoriesView.prototype.newAttributes = function() {
      if (User.first()) {
        return {
          name: 'New Name',
          user_id: User.first().id,
          author: User.first().name
        };
      } else {
        return User.ping();
      }
    };

    CategoriesView.prototype.createProtected = function(item) {
      var key, ref, results, val;
      ref = Category["protected"];
      results = [];
      for (key in ref) {
        val = ref[key];
        if (!Category.findByAttribute('name', key)) {
          item.name = key;
          item.screenname = val.screenname;
          break;
        } else {
          results.push(void 0);
        }
      }
      return results;
    };

    CategoriesView.prototype.sortupdate = function(e, o) {
      var cb;
      cb = (function(_this) {
        return function() {
          Category.trigger('change:collection', Category.record);
          return _this.render();
        };
      })(this);
      return this.list.children().each(function(index) {
        var item;
        item = $(this).item();
        if (item) {
          if (parseInt(item.order) !== index) {
            item.order = index;
            return item.save({
              done: cb
            });
          }
        }
      });
    };

    CategoriesView.prototype.infoUp = function(e) {
      var el;
      el = $(e.currentTarget);
      return $('.glyphicon-set.fade', el).addClass('in').removeClass('out');
    };

    CategoriesView.prototype.infoBye = function(e) {
      var el, set;
      el = $(e.currentTarget);
      return set = $('.glyphicon-set.fade', el).addClass('out').removeClass('in');
    };

    return CategoriesView;

  })(Spine.Controller);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = CategoriesView;
  }

}).call(this);
 },"controllers/category_edit_view": function(exports, require, module) { (function() {
  var $, Category, CategoryEditView, Extender, KeyEnhancer, Root, Spine,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  KeyEnhancer = require('extensions/key_enhancer');

  Extender = require('extensions/controller_extender');

  Category = require("models/category");

  Root = require("models/root");

  CategoryEditView = (function(superClass) {
    extend(CategoryEditView, superClass);

    CategoryEditView.extend(Extender);

    CategoryEditView.prototype.elements = {
      '.content': 'content'
    };

    CategoryEditView.prototype.events = {
      'keyup': 'saveOnKeyup'
    };

    CategoryEditView.prototype.template = function(item) {
      return $('#editCategoryTemplate').tmpl(item);
    };

    function CategoryEditView() {
      CategoryEditView.__super__.constructor.apply(this, arguments);
      this.bind('active', this.proxy(this.active));
      Category.bind('current', this.proxy(this.change));
    }

    CategoryEditView.prototype.active = function() {
      return this.render();
    };

    CategoryEditView.prototype.change = function(item) {
      this.current = item;
      return this.render();
    };

    CategoryEditView.prototype.change_ = function(item) {
      this.current = item;
      return this.render();
    };

    CategoryEditView.prototype.render = function() {
      if (this.current) {
        this.content.html(this.template(this.current));
      } else {
        this.renderEmpty('Keine Kategorie ausgewählt', 'content');
      }
      return this.el;
    };

    CategoryEditView.prototype.save = function(el) {
      var atts, category;
      this.log('save');
      if (category = Category.record) {
        atts = (typeof el.serializeForm === "function" ? el.serializeForm() : void 0) || this.el.serializeForm();
        return category.updateChangedAttributes(atts);
      }
    };

    CategoryEditView.prototype.saveOnKeyup = function(e) {
      var code;
      this.log('saveOnEnter');
      code = e.charCode || e.keyCode;
      switch (code) {
        case 32:
          e.stopPropagation();
          break;
        case 9:
          e.stopPropagation();
      }
      return this.save(this.el);
    };

    CategoryEditView.prototype.createCategory = function() {
      return Spine.trigger('create:category');
    };

    CategoryEditView.prototype.click = function(e) {};

    return CategoryEditView;

  })(Spine.Controller);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = CategoryEditView;
  }

}).call(this);
 },"controllers/flickr_view": function(exports, require, module) { (function() {
  var $, Extender, FlickrView, Settings, Spine, ToolbarView,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty,
    slice = [].slice;

  Spine = require('spine');

  $ = Spine.$;

  ToolbarView = require("controllers/toolbar_view");

  Settings = require("models/settings");

  Extender = require('extensions/controller_extender');

  FlickrView = (function(superClass) {
    extend(FlickrView, superClass);

    FlickrView.extend(Extender);

    FlickrView.prototype.elements = {
      '.links': 'links',
      '.content': 'content',
      '.toolbarOne': 'toolbarOneEl',
      '.toolbarTwo': 'toolbarTwoEl'
    };

    FlickrView.prototype.events = {
      'click button.close': 'close',
      'click .recent': 'navRecent',
      'click .inter': 'navInter',
      'click .links': 'click',
      'click .opt-Prev': 'prevPage',
      'click .opt-Next': 'nextPage'
    };

    FlickrView.prototype.template = function(items) {
      return $('#flickrTemplate').tmpl(items);
    };

    FlickrView.prototype.toolsTemplate = function(items) {
      return $("#toolsTemplate").tmpl(items);
    };

    FlickrView.prototype.introTemplate = function() {
      return $('#flickrIntroTemplate').tmpl();
    };

    function FlickrView() {
      this.doneResponse = bind(this.doneResponse, this);
      FlickrView.__super__.constructor.apply(this, arguments);
      this.bind('active', this.proxy(this.active));
      this.type = 'recent';
      this.perpage = 100;
      this.spec = {
        recent: {
          min: 1,
          page: 1,
          pages: 5,
          per_page: this.perpage
        },
        inter: {
          min: 1,
          page: 1,
          pages: 5,
          per_page: this.perpage
        }
      };
      this.toolbar_one = new ToolbarView({
        el: this.toolbarOneEl,
        template: this.toolsTemplate
      });
      this.toolbar_two = new ToolbarView({
        el: this.toolbarTwoEl,
        template: this.toolsTemplate
      });
      this.bind('flickr:recent', this.proxy(this.recent));
      this.bind('flickr:inter', this.proxy(this.interestingness));
    }

    FlickrView.prototype.render = function(items) {
      if (items) {
        this.content.html(this.template(items));
      } else {
        this.content.html(this.introTemplate());
        this.toolbarOneEl.empty();
      }
      return this.changeToolbar(this.toolbar_two, ['Close']);
    };

    FlickrView.prototype.active = function() {
      if (arguments.length) {
        return this.setup(arguments[0], arguments[1]);
      } else {
        return this.render();
      }
    };

    FlickrView.prototype.url = function() {
      var protocol;
      protocol = window.location.protocol === 'https:' ? 'https://secure' : 'http://api';
      protocol = 'https://secure';
      return protocol + '.flickr.com/services/rest/';
    };

    FlickrView.prototype.data = {
      format: 'json',
      method: 'flickr.activity.userPhotos',
      api_key: '1cb992dd2b14ba97327aea602e3922e6'
    };

    FlickrView.prototype.setup = function(mode, page) {
      var options, toolsList_one, toolsList_two;
      this.log('setup');
      this.type = mode;
      switch (mode) {
        case 'recent':
          toolsList_one = ['FlickrRecent'];
          toolsList_two = ['Close'];
          options = {
            page: page || this.spec[mode].page,
            method: 'flickr.photos.getRecent'
          };
          this.changeToolbar(this.toolbar_one, toolsList_one);
          break;
        case 'inter':
          toolsList_one = ['FlickrInter'];
          toolsList_two = ['Close'];
          options = {
            page: page || this.spec[mode].page,
            method: 'flickr.interestingness.getList'
          };
          this.changeToolbar(this.toolbar_one, toolsList_one);
          break;
        default:
          return this.render();
      }
      options = $().extend(this.spec[mode], options);
      return this.ajax(options);
    };

    FlickrView.prototype.ajax = function(options) {
      var data;
      this.log('ajax');
      data = $().extend(this.data, options);
      return $.ajax({
        url: this.url(),
        data: data,
        dataType: 'jsonp',
        jsonp: 'jsoncallback'
      }).done(this.doneResponse).fail(this.failResponse);
    };

    FlickrView.prototype.doneResponse = function(result) {
      this.updateSpecs(result);
      return this.render(result.photos.photo);
    };

    FlickrView.prototype.failResponse = function() {
      var args;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      return this.log(args);
    };

    FlickrView.prototype.changeToolbar = function(tb, list) {
      tb.change(list);
      return this.refreshElements();
    };

    FlickrView.prototype.click = function(e) {
      var links, options, target;
      e.stopPropagation();
      e.preventDefault();
      target = $(e.target).parent()[0];
      options = {
        index: target
      };
      links = $('a', this.links);
      return blueimp.Category(links, options);
    };

    FlickrView.prototype.prevPage = function(e) {
      var t, type;
      e.stopPropagation();
      e.preventDefault();
      type = this.type;
      this.spec[type].page = (t = (this.spec[type].page || 1) - 1) >= 1 ? t : 1;
      return this.navigate('/flickr', type, this.spec[type].page);
    };

    FlickrView.prototype.nextPage = function(e) {
      var t, type;
      e.stopPropagation();
      e.preventDefault();
      type = this.type;
      this.spec[type].page = (t = (this.spec[type].page || 1) + 1) <= this.spec[type].pages ? t : this.spec[type].pages;
      return this.navigate('/flickr', type, this.spec[type].page);
    };

    FlickrView.prototype.details = function(type) {
      var page, perpage;
      page = Number(this.spec[type].page);
      perpage = Number(this.spec[type].per_page);
      return {
        from: ((page - 1) * perpage) + 1,
        to: ((page - 1) * perpage) + perpage
      };
    };

    FlickrView.prototype.updateSpecs = function(res) {
      var type;
      type = this.type;
      $().extend(this.spec[type], res.photos);
      return delete this.spec[type].photo;
    };

    FlickrView.prototype.recent = function(page) {
      return this.setup('recent', page);
    };

    FlickrView.prototype.interestingness = function(page) {
      return this.setup('inter', page);
    };

    FlickrView.prototype.navRecent = function(e) {
      e.stopPropagation();
      e.preventDefault();
      return this.navigate('/flickr', 'recent/1');
    };

    FlickrView.prototype.navInter = function(e) {
      e.stopPropagation();
      e.preventDefault();
      return this.navigate('/flickr', 'inter/1');
    };

    FlickrView.prototype.close = function(e) {
      var previousHash;
      e.preventDefault();
      e.stopPropagation();
      if (previousHash = Settings.loadSettings().previousHash) {
        return location.hash = previousHash;
      } else {
        return this.navigate('/categories/');
      }
    };

    return FlickrView;

  })(Spine.Controller);

  module.exports = FlickrView;

}).call(this);
 },"controllers/homepage_list": function(exports, require, module) { (function() {
  var $, HomepageList, Spine,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  require('extensions/tmpl');

  HomepageList = (function(superClass) {
    extend(HomepageList, superClass);

    HomepageList.prototype.elements = {
      '.pricing__item': 'item'
    };

    HomepageList.prototype.events = {
      'click .pricing__item img': 'click'
    };

    HomepageList.prototype.template = function(item) {
      return $('#norbuPricingTemplate').tmpl(item);
    };

    function HomepageList() {
      HomepageList.__super__.constructor.apply(this, arguments);
    }

    HomepageList.prototype.render = function(items) {
      this.html(this.template(items));
      this.refreshElements();
      return this.el;
    };

    HomepageList.prototype.click = function(e) {
      var item;
      item = $(e.currentTarget).parents('.pricing__item').item();
      return this.navigate('/item', item.id);
    };

    return HomepageList;

  })(Spine.Controller);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = HomepageList;
  }

}).call(this);
 },"controllers/homepage_view": function(exports, require, module) { (function() {
  var $, CategoriesProduct, Category, Extender, HomepageList, HomepageView, Spine, UriHelper,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Category = require('models/category');

  CategoriesProduct = require('models/categories_product');

  Extender = require('extensions/controller_extender');

  UriHelper = require('extensions/uri_helper');

  HomepageList = require('controllers/homepage_list');

  HomepageView = (function(superClass) {
    extend(HomepageView, superClass);

    HomepageView.prototype.elements = {
      '.items': 'items'
    };

    HomepageView.extend(Extender);

    HomepageView.extend(UriHelper);

    function HomepageView() {
      HomepageView.__super__.constructor.apply(this, arguments);
      this.bind('active', this.proxy(this.active));
      this.list = new HomepageList({
        el: this.items,
        parent: this
      });
      Category.one('refresh', this.proxy(this.active));
      Spine.bind('refresh:one', this.proxy(this.refreshOne));
      Spine.bind('refresh:complete', this.proxy(this.render));
    }

    HomepageView.prototype.active = function() {
      var cat;
      cat = Category.current(Category.findByAttribute('name', this.categoryName));
      return this.change(cat);
    };

    HomepageView.prototype.change = function(cat) {
      Spine.trigger('active:category', cat);
      this.current = cat;
      return this.render();
    };

    HomepageView.prototype.refreshOne = function() {
      return this.tracker = [Photo.one('refresh', this.proxy(this.untrackBinds)), Description.one('refresh', this.proxy(this.untrackBinds)), Product.one('refresh', this.proxy(this.untrackBinds)), Category.one('refresh', this.proxy(this.untrackBinds))];
    };

    HomepageView.prototype.untrackBinds = function(arr) {
      this.tracker.pop();
      if (!this.tracker.length) {
        return Spine.trigger('refresh:complete');
      }
    };

    HomepageView.prototype.render = function() {
      var j, len, p, product, products, results;
      if (!this.current) {
        return;
      }
      products = Category.publishedProducts(this.current.id);
      this.list.render(products);
      results = [];
      for (j = 0, len = products.length; j < len; j++) {
        product = products[j];
        this.callDeferred(p = product.photos(), this.uriSettings(300, 300), this.proxy(this.callback));
        if (p.length > 1) {
          results.push(pricingSlider(product.id));
        } else {
          results.push(void 0);
        }
      }
      return results;
    };

    HomepageView.prototype.callback = function(json, items) {
      var idx, j, jsn, key, len, res, result, results, ret, val;
      result = (function() {
        var j, len, results;
        results = [];
        for (j = 0, len = json.length; j < len; j++) {
          jsn = json[j];
          ret = (function() {
            var results1;
            results1 = [];
            for (key in jsn) {
              val = jsn[key];
              results1.push({
                src: val.src,
                id: key
              });
            }
            return results1;
          })();
          results.push(ret[0]);
        }
        return results;
      })();
      results = [];
      for (idx = j = 0, len = result.length; j < len; idx = ++j) {
        res = result[idx];
        results.push(this.snap(res, result.length, idx));
      }
      return results;
    };

    HomepageView.prototype.snap = function(res, l, i) {
      var img, imgEl;
      imgEl = $('#' + res.id + ' img', this.el);
      img = this.createImage();
      img.imgEl = imgEl;
      img.l = l;
      img.i = i;
      img.me = this;
      img.res = res;
      img.onload = this.onLoad;
      img.onerror = this.onError;
      return img.src = res.src;
    };

    HomepageView.prototype.onLoad = function() {
      this.imgEl.attr('src', this.src).removeClass('load').addClass('in');
      if (this.i === this.l - 1) {
        return this.me.log('all loaded');
      }
    };

    HomepageView.prototype.onError = function(e) {
      throw 'unable to load image (Homepage)';
    };

    return HomepageView;

  })(Spine.Controller);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = HomepageView;
  }

}).call(this);
 },"controllers/info": function(exports, require, module) { (function() {
  var $, Info, Spine,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Info = (function(superClass) {
    extend(Info, superClass);

    function Info() {
      this.position = bind(this.position, this);
      Info.__super__.constructor.apply(this, arguments);
      this.el.addClass('away').removeClass('in');
      this.parent = this.el.parent();
    }

    Info.prototype.render = function(item) {
      this.html(this.template(item));
      return this.el;
    };

    Info.prototype.up = function(e) {
      var bye, item, ref;
      bye = (function(_this) {
        return function() {
          return _this.bye();
        };
      })(this);
      item = $(e.currentTarget).item();
      clearTimeout(this.timer);
      clearTimeout(this.timer_);
      this.timer = setTimeout(bye, 2000);
      this.el.removeClass('away').addClass('in');
      if (!(this.current && ((ref = this.current) != null ? ref.id : void 0) === item.id)) {
        this.current = item;
        this.render(this.current);
      }
      return this.position(e);
    };

    Info.prototype.bye = function() {
      var stop;
      if (!this.current) {
        return;
      }
      stop = (function(_this) {
        return function() {
          return _this.stop();
        };
      })(this);
      this.el.removeClass('in');
      clearTimeout(this.timer_);
      return this.timer_ = setTimeout(stop, 200);
    };

    Info.prototype.stop = function() {
      this.el.addClass('away');
      return this.current = null;
    };

    Info.prototype.position = function(e) {
      var h, info_h, info_w, maxx, maxy, minx, posx, posy, s, t, w, x_offset, y_offset;
      info_h = this.el.innerHeight();
      info_w = this.el.innerWidth();
      w = $(window).width();
      h = $(window).height();
      t = $(window).scrollTop();
      s = this.parent.scrollTop();
      x_offset = 10;
      y_offset = 10;
      posx = e.pageX + x_offset - this.parent.offset().left;
      posy = e.pageY + y_offset - this.parent.offset().top + s;
      maxx = posx + info_w;
      minx = posx - info_w;
      maxy = posy + info_h;
      if (maxx >= w) {
        posx = e.pageX - info_w - x_offset;
      }
      if (maxy >= (h + t)) {
        posy = e.pageY - info_h - y_offset;
      }
      return this.el.css({
        top: posy + 'px',
        left: posx + 'px'
      });
    };

    return Info;

  })(Spine.Controller);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Info;
  }

}).call(this);
 },"controllers/loader_view": function(exports, require, module) { (function() {
  var $, Extender, LoaderView, Spine,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Extender = require('extensions/controller_extender');

  LoaderView = (function(superClass) {
    extend(LoaderView, superClass);

    LoaderView.extend(Extender);

    function LoaderView() {
      LoaderView.__super__.constructor.apply(this, arguments);
      this.bind('active', this.proxy(this.active));
    }

    LoaderView.prototype.active = function() {};

    return LoaderView;

  })(Spine.Controller);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = LoaderView;
  }

}).call(this);
 },"controllers/login_view": function(exports, require, module) { (function() {
  var $, LoginView, Spine, User,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  User = require('models/user');

  LoginView = (function(superClass) {
    extend(LoginView, superClass);

    LoginView.prototype.elements = {
      'button': 'logoutEl'
    };

    LoginView.prototype.events = {
      'click .opt-logout': 'logout',
      'click .opt-trace': 'toggleTrace'
    };

    function LoginView() {
      LoginView.__super__.constructor.apply(this, arguments);
    }

    LoginView.prototype.template = function() {
      return $('#loginTemplate').tmpl({
        user: User.first(),
        trace: !Spine.isProduction
      });
    };

    LoginView.prototype.logout = function() {
      return User.logout();
    };

    LoginView.prototype.toggleTrace = function() {
      Spine.isProduction = localStorage.isProduction = localStorage.isProduction === 'false';
      this.render();
      if (confirm('Entwickler Modus: ' + (Spine.isProduction ? 'Aus' : 'An') + '\n\Die Anwendung muss neu gestartet werden.\n\nFortfahren mit OK')) {
        $(window).off();
        return User.redirect('logout');
      }
    };

    LoginView.prototype.render = function() {
      return this.html(this.template());
    };

    return LoginView;

  })(Spine.Controller);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = LoginView;
  }

}).call(this);
 },"controllers/main_view": function(exports, require, module) { (function() {
  var $, Extender, MainView, Model, Spine,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Model = Spine.Model;

  Extender = require('extensions/controller_extender');

  MainView = (function(superClass) {
    extend(MainView, superClass);

    MainView.extend(Extender);

    function MainView() {
      MainView.__super__.constructor.apply(this, arguments);
      this.bind('active', this.proxy(this.active));
    }

    MainView.prototype.active = function() {};

    return MainView;

  })(Spine.Controller);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = MainView;
  }

}).call(this);
 },"controllers/missing_view": function(exports, require, module) { (function() {
  var $, MissingView, Spine,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  MissingView = (function(superClass) {
    extend(MissingView, superClass);

    MissingView.prototype.events = {
      'click .relocate': 'relocate'
    };

    MissingView.prototype.template = function(item) {
      return $("#missingViewTemplate").tmpl();
    };

    function MissingView() {
      MissingView.__super__.constructor.apply(this, arguments);
      this.bind('active', this.proxy(this.active));
    }

    MissingView.prototype.active = function() {
      return this.render();
    };

    MissingView.prototype.render = function(item) {
      return this.html(this.template());
    };

    MissingView.prototype.relocate = function(e) {
      e.preventDefault();
      return this.navigate('/overview', '');
    };

    return MissingView;

  })(Spine.Controller);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = MissingView;
  }

}).call(this);
 },"controllers/modal_2_button_view": function(exports, require, module) { (function() {
  var $, Modal2ButtonView, Spine,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Modal2ButtonView = (function(superClass) {
    extend(Modal2ButtonView, superClass);

    Modal2ButtonView.prototype.elements = {
      '.modal-header': 'header',
      '.modal-body': 'body',
      '.modal-footer': 'footer'
    };

    Modal2ButtonView.prototype.events = {
      'click .btnAlt': 'close',
      'click .btnOk': 'yes'
    };

    Modal2ButtonView.prototype.template = function(item) {
      return $('#modal2ButtonTemplate').tmpl(item);
    };

    function Modal2ButtonView() {
      Modal2ButtonView.__super__.constructor.apply(this, arguments);
      this.el.modal({
        show: false
      });
      this.defaults = {
        header: 'Default Header Text',
        body: 'Default Body Text',
        footer: 'Default Footer Text'
      };
    }

    Modal2ButtonView.prototype.render = function() {
      this.html(this.template(this.options));
      return this.el;
    };

    Modal2ButtonView.prototype.show = function(options) {
      var el;
      this.options = $.extend(this.defaults, options);
      return el = this.render().modal('show');
    };

    Modal2ButtonView.prototype.yes = function(e) {
      return this.el.modal('hide');
    };

    Modal2ButtonView.prototype.close = function(e) {
      return this.el.modal('hide');
    };

    return Modal2ButtonView;

  })(Spine.Controller);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Modal2ButtonView;
  }

}).call(this);
 },"controllers/modal_action_view": function(exports, require, module) { (function() {
  var $, ModalActionView, Spine,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  ModalActionView = (function(superClass) {
    extend(ModalActionView, superClass);

    ModalActionView.prototype.elements = {
      '.modal-header': 'header',
      '.modal-body': 'body',
      '.modal-footer': 'footer'
    };

    ModalActionView.prototype.events = {
      'click .btnAlt': 'close',
      'click .btnOk': 'yes'
    };

    ModalActionView.prototype.template = function(item) {
      return $('#modalActionTemplate').tmpl(item);
    };

    function ModalActionView() {
      ModalActionView.__super__.constructor.apply(this, arguments);
      this.el.modal({
        show: false
      });
      this.defaults = {
        header: 'Default Header Text',
        body: 'Default Body Text',
        footer: 'Default Footer Text'
      };
      $('.nav-tabs').button();
    }

    ModalActionView.prototype.render = function() {
      this.html(this.template(this.options));
      return this.el;
    };

    ModalActionView.prototype.show = function(options) {
      var el;
      this.options = $.extend(this.defaults, options);
      return el = this.render().modal('show');
    };

    ModalActionView.prototype.yes = function(e) {};

    ModalActionView.prototype.close = function(e) {};

    return ModalActionView;

  })(Spine.Controller);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = ModalActionView;
  }

}).call(this);
 },"controllers/modal_simple_view": function(exports, require, module) { (function() {
  var $, ModalSimpleView, Spine,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  ModalSimpleView = (function(superClass) {
    extend(ModalSimpleView, superClass);

    ModalSimpleView.prototype.elements = {
      '.modal-header': 'header',
      '.modal-body': 'body',
      '.modal-footer': 'footer'
    };

    ModalSimpleView.prototype.events = {
      'click .opt-ShowAllProducts': 'allProducts',
      'click .opt-AddPhotos': 'addPhotos',
      'click .opt-CreateProduct': 'createProduct',
      'click .btnClose': 'close',
      'hidden.bs.modal': 'hiddenmodal',
      'show.bs.modal': 'showmodal',
      'shown.bs.modal': 'shownmodal',
      'keydown': 'keydown'
    };

    ModalSimpleView.prototype.template = function(item) {
      return $('#modalSimpleTemplate').tmpl(item);
    };

    function ModalSimpleView() {
      var modalOptions, renderOptions;
      ModalSimpleView.__super__.constructor.apply(this, arguments);
      this.el = $('#modal-view');
      modalOptions = {
        keyboard: true,
        show: false
      };
      renderOptions = {
        css: 'default',
        small: true,
        header: 'Default Header',
        body: 'Default Body Text',
        footer: {
          footerButtonText: 'schliessen'
        }
      };
      this.renderOptions = this.renderOptions ? $.extend(renderOptions, this.renderOptions) : renderOptions;
      if (this.modalOptions) {
        $.extend(modalOptions, this.modalOptions);
      }
      this.el.modal(modalOptions);
    }

    ModalSimpleView.prototype.render = function() {
      this.html(this.template(this.renderOptions));
      return this.el;
    };

    ModalSimpleView.prototype.show = function() {
      return this.render().modal('show');
    };

    ModalSimpleView.prototype.close = function(e) {
      return this.el.modal('hide');
    };

    ModalSimpleView.prototype.allProducts = function() {
      return this.navigate('/category', '');
    };

    ModalSimpleView.prototype.addPhotos = function(e) {
      return Spine.trigger('photos:add');
    };

    ModalSimpleView.prototype.createProduct = function() {
      return Spine.trigger('create:product');
    };

    ModalSimpleView.prototype.hiddenmodal = function() {
      return this.log('hiddenmodal...');
    };

    ModalSimpleView.prototype.showmodal = function() {
      return this.log('showmodal...');
    };

    ModalSimpleView.prototype.shownmodal = function() {
      return this.log('shownmodal...');
    };

    ModalSimpleView.prototype.keydown = function(e) {
      var code;
      this.log('keydown');
      code = e.charCode || e.keyCode;
      this.log(code);
      switch (code) {
        case 32:
          return e.stopPropagation();
        case 9:
          return e.stopPropagation();
        case 27:
          return e.stopPropagation();
        case 13:
          this.close();
          return e.stopPropagation();
      }
    };

    return ModalSimpleView;

  })(Spine.Controller);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = ModalSimpleView;
  }

}).call(this);
 },"controllers/overview_header": function(exports, require, module) { (function() {
  var $, OverviewHeader, Spine,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require('spine');

  $ = Spine.$;

  OverviewHeader = (function(superClass) {
    extend(OverviewHeader, superClass);

    function OverviewHeader() {
      OverviewHeader.__super__.constructor.apply(this, arguments);
      this.bind('active', this.proxy(this.active));
    }

    OverviewHeader.prototype.template = function() {
      return $('#overviewHeaderTemplate').tmpl();
    };

    OverviewHeader.prototype.render = function() {
      return this.html(this.template());
    };

    OverviewHeader.prototype.active = function() {
      return this.render();
    };

    return OverviewHeader;

  })(Spine.Controller);

  module.exports = OverviewHeader;

}).call(this);
 },"controllers/overview_view": function(exports, require, module) { (function() {
  var $, CategoriesProduct, Description, Extender, OverviewView, Photo, Product, Recent, Settings, Spine, UriHelper,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Recent = require('models/recent');

  Photo = require('models/photo');

  Product = require('models/product');

  CategoriesProduct = require('models/categories_product');

  Description = require('models/product');

  Settings = require('models/settings');

  Extender = require('extensions/controller_extender');

  UriHelper = require('extensions/uri_helper');

  require('extensions/tmpl');

  OverviewView = (function(superClass) {
    extend(OverviewView, superClass);

    OverviewView.extend(UriHelper);

    OverviewView.extend(Extender);

    OverviewView.prototype.elements = {
      '#overview-carousel': 'carousel',
      '.recents .carousel-item': 'recentsItems',
      '.recents .item': 'recentsItem',
      '.summary': 'summary'
    };

    OverviewView.prototype.events = {
      'click button.close': 'close',
      'click .item': 'showPhoto',
      'keyup': 'keyup',
      'click .opt-ShowProductsTrash': 'showProductsTrash',
      'click .opt-ShowUnpublishedProducts': 'showUnpublishedProducts',
      'click .opt-ShowUnusedProducts': 'showUnusedProducts',
      'click .opt-ShowAllCategories:not(.disabled)': 'showCategories',
      'click .opt-ShowAllProducts:not(.disabled)': 'showProductMasters',
      'click .opt-ShowAllPhotos:not(.disabled)': 'showPhotoMasters'
    };

    OverviewView.prototype.template = function(photos, products) {
      return $("#overviewTemplate").tmpl({
        photos: photos,
        summary: {
          categories: Category.all(),
          photos: Photo.all(),
          products: Product.filter(true),
          published: CategoriesProduct.publishedProductsAll(true),
          unpublished: CategoriesProduct.unpublishedProducts(true),
          others: CategoriesProduct.otherProducts(true),
          trashed: Product.filter(true, {
            func: 'selectDeleted'
          })
        },
        counter: function() {
          var li;
          li = [];
          li = li.concat([li.length, li.length + 1]);
          return li;
        }
      });
    };

    OverviewView.prototype.toolsTemplate = function(items) {
      return $("#toolsTemplate").tmpl(items);
    };

    function OverviewView() {
      OverviewView.__super__.constructor.apply(this, arguments);
      this.bind('active', this.proxy(this.active));
      this.el.data({
        current: Recent
      });
      this.max = 42;
      this.bind('render:toolbar', this.proxy(this.renderToolbar));
      this.carouselOptions = {
        keyboard: true,
        paused: true
      };
      this.carousel.data('bs.carousel');
      this.carousel.carousel(this.carouselOptions);
      Recent.bind('refresh', this.proxy(this.render));
    }

    OverviewView.prototype.active = function() {
      return this.loadRecent();
    };

    OverviewView.prototype.loadRecent = function() {
      return Recent.loadRecent(this.max, this.proxy(this.parse));
    };

    OverviewView.prototype.parse = function(json) {
      var i, item, len, recents;
      recents = [];
      for (i = 0, len = json.length; i < len; i++) {
        item = json[i];
        recents.push(item['Photo']);
      }
      return Recent.refresh(recents, {
        clear: true
      });
    };

    OverviewView.prototype.renderAux = function() {
      return this.loadRecent();
    };

    OverviewView.prototype.render = function(tests) {
      var i, items, len, photo, photos, products, test;
      items = [];
      for (i = 0, len = tests.length; i < len; i++) {
        test = tests[i];
        if (photo = Photo.find(test.id)) {
          items.push(photo);
        }
      }
      products = this.getProducts();
      this.html(this.template(items, products));
      this.callDeferred(items, this.uriSettings(70, 70), this.proxy(this.callbackRecents));
      photos = this.getProductPhotos();
      return this.callDeferred(photos, this.uriSettings(300, 300), this.proxy(this.callbackPreview));
    };

    OverviewView.prototype.showProductsTrash = function() {
      return this.navigate('/trash/products', '');
    };

    OverviewView.prototype.showUnpublishedProducts = function(e) {
      e.preventDefault();
      return Product.trigger('show:unpublished');
    };

    OverviewView.prototype.showUnusedProducts = function(e) {
      e.preventDefault();
      return Product.trigger('show:unused');
    };

    OverviewView.prototype.callbackRecents = function(json) {
      var i, id, img, jsn, len, photoEl, results, src;
      results = [];
      for (i = 0, len = json.length; i < len; i++) {
        jsn = json[i];
        for (id in jsn) {
          id;
        }
        src = jsn[id].src;
        photoEl = $('[data-id=' + id + ']', this.recentsItems);
        img = new Image;
        img.me = this;
        img.element = photoEl;
        img.src = src;
        results.push(img.onload = this.imageLoad);
      }
      return results;
    };

    OverviewView.prototype.callbackPreview = function(json, items) {
      var i, jsn, key, len, res, result, results, ret, val;
      result = (function() {
        var i, len, results;
        results = [];
        for (i = 0, len = json.length; i < len; i++) {
          jsn = json[i];
          ret = (function() {
            var results1;
            results1 = [];
            for (key in jsn) {
              val = jsn[key];
              results1.push({
                src: val.src,
                id: key
              });
            }
            return results1;
          })();
          results.push(ret[0]);
        }
        return results;
      })();
      results = [];
      for (i = 0, len = result.length; i < len; i++) {
        res = result[i];
        results.push(this.snap(res));
      }
      return results;
    };

    OverviewView.prototype.snap = function(res) {
      var img, imgEl;
      imgEl = $('[data-image-id=' + res.id + '] img', this.el);
      img = this.createImage();
      img.imgEl = imgEl;
      img.me = this;
      img.res = res;
      img.onload = this.onLoad;
      img.onerror = this.onError;
      return img.src = res.src;
    };

    OverviewView.prototype.onLoad = function() {
      this.imgEl.attr('src', this.src);
      return this.imgEl.addClass('in');
    };

    OverviewView.prototype.onError = function(e) {
      return this.me.log('image could not be loaded');
    };

    OverviewView.prototype.getProducts = function() {
      var i, item, len, ref, results;
      ref = Product.records;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        item = ref[i];
        results.push({
          product: item,
          descriptions: Description.filterSortByOrder(item.id),
          photo: Product.photos(item.id).first()
        });
      }
      return results;
    };

    OverviewView.prototype.getProductPhotos = function() {
      var photos;
      photos = [];
      $('[data-image-id]', this.el).each(function(index) {
        var item;
        if (item = $(this).item()) {
          return photos.push(item);
        }
      });
      return photos;
    };

    OverviewView.prototype.imageLoad = function() {
      var css;
      this.me.log('loaded');
      css = 'url(' + this.src + ')';
      return this.element.css({
        'backgroundImage': css,
        'backgroundPosition': 'center, center'
      });
    };

    OverviewView.prototype.showPhoto = function(e) {
      var index;
      return;
      return index = this.recentsItem.index($(e.currentTarget));
    };

    OverviewView.prototype.error = function(xhr, statusText, error) {
      this.log(xhr);
      return this.record.trigger('ajaxError', xhr, statusText, error);
    };

    OverviewView.prototype.showCategories = function() {
      var cid, ref;
      return this.navigate('/category', cid = (cid = (ref = Category.record) != null ? ref.id : void 0) ? 'cid/' + cid : null);
    };

    OverviewView.prototype.showProductMasters = function() {
      return this.navigate('/category', '');
    };

    OverviewView.prototype.showPhotoMasters = function() {
      return this.navigate('/category', '/');
    };

    OverviewView.prototype.close = function(e) {
      var first, previousHash, ref;
      previousHash = Model.Settings.loadSettings().previousHash;
      if (previousHash !== location.hash) {
        this.navigate(previousHash);
      } else {
        this.navigate('#/category', (first = (ref = Category.first()) != null ? ref.id : void 0) ? first : '');
      }
      e.preventDefault();
      return e.stopPropagation();
    };

    OverviewView.prototype.keyup = function(e) {
      var code, paused;
      code = e.charCode || e.keyCode;
      this.log('keyup', code);
      this.carousel.data('bs.carousel') || this.carousel.carousel(this.carouselOptions);
      switch (code) {
        case 27:
          return this.close(e);
        case 32:
          paused = this.carousel.data('bs.carousel').paused;
          if (paused) {
            this.carousel.carousel('next');
            return this.carousel.carousel('cycle');
          } else {
            return this.carousel.carousel('pause');
          }
          break;
        case 39:
          return this.carousel.carousel('next');
        case 37:
          return this.carousel.carousel('prev');
      }
    };

    return OverviewView;

  })(Spine.Controller);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = OverviewView;
  }

}).call(this);
 },"controllers/photo_edit_view": function(exports, require, module) { (function() {
  var $, Extender, KeyEnhancer, Photo, PhotoEditView, ProductsPhoto, Spine,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Photo = require('models/photo');

  KeyEnhancer = require('extensions/key_enhancer');

  Extender = require('extensions/controller_extender');

  ProductsPhoto = require('models/products_photo');

  PhotoEditView = (function(superClass) {
    extend(PhotoEditView, superClass);

    PhotoEditView.extend(Extender);

    PhotoEditView.prototype.elements = {
      '.content': 'content'
    };

    PhotoEditView.prototype.events = {
      'click': 'click',
      'keyup': 'saveOnKeyup'
    };

    PhotoEditView.prototype.template = function(item) {
      return $('#editPhotoTemplate').tmpl(item);
    };

    function PhotoEditView() {
      this.saveOnKeyup = bind(this.saveOnKeyup, this);
      PhotoEditView.__super__.constructor.apply(this, arguments);
      this.current = false;
      this.bind('active', this.proxy(this.active));
      Photo.bind('current', this.proxy(this.change));
    }

    PhotoEditView.prototype.change = function(item) {
      this.current = item;
      return this.render();
    };

    PhotoEditView.prototype.render = function() {
      var info;
      if (this.current) {
        this.content.html(this.template(this.current));
      } else {
        if (!(Product.selectionList().length && !Product.count())) {
          info = '<label class="invite"><span class="enlightened">Kein Foto ausgewählt</span></label>';
        }
        this.content.html($("#noSelectionTemplate").tmpl({
          type: info || ''
        }));
      }
      return this.el;
    };

    PhotoEditView.prototype.save = function(el) {
      var atts;
      if (this.current) {
        atts = (typeof el.serializeForm === "function" ? el.serializeForm() : void 0) || this.el.serializeForm();
        return this.current.updateChangedAttributes(atts);
      }
    };

    PhotoEditView.prototype.saveOnKeyup = function(e) {
      var code;
      code = e.charCode || e.keyCode;
      switch (code) {
        case 32:
          e.stopPropagation();
          break;
        case 9:
          e.stopPropagation();
      }
      return this.save(this.el);
    };

    PhotoEditView.prototype.click = function(e) {};

    return PhotoEditView;

  })(Spine.Controller);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = PhotoEditView;
  }

}).call(this);
 },"controllers/photo_header": function(exports, require, module) { (function() {
  var $, CategoriesProduct, Category, Extender, PhotoHeader, Product, ProductsPhoto, Spine,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Product = require('models/product');

  Category = require('models/category');

  ProductsPhoto = require('models/products_photo');

  CategoriesProduct = require('models/categories_product');

  Extender = require('extensions/controller_extender');

  PhotoHeader = (function(superClass) {
    extend(PhotoHeader, superClass);

    PhotoHeader.extend(Extender);

    PhotoHeader.prototype.events = {
      'click .gal': 'backToCategories',
      'click .alb': 'backToProducts',
      'click .pho': 'backToPhotos'
    };

    PhotoHeader.prototype.template = function(item) {
      return $("#headerPhotoTemplate").tmpl(item);
    };

    function PhotoHeader() {
      PhotoHeader.__super__.constructor.apply(this, arguments);
      this.bind('active', this.proxy(this.active));
      Photo.bind('current', this.proxy(this.render));
      Category.bind('change', this.proxy(this.render));
      Product.bind('change', this.proxy(this.render));
      Photo.bind('change', this.proxy(this.render));
    }

    PhotoHeader.prototype.render = function() {
      return this.html(this.template({
        model: Product,
        category: Category.record,
        product: Product.record,
        photo: Photo.record,
        modelProduct: Product,
        modelPhoto: Photo,
        modelGas: CategoriesProduct,
        modelAps: ProductsPhoto,
        count: this.count(),
        author: User.first().name,
        zoomed: true
      }));
    };

    PhotoHeader.prototype.count = function() {
      if (Product.record) {
        return ProductsPhoto.filter(Product.record.id, {
          associationForeignKey: 'product_id'
        }).length;
      } else {
        return Photo.count();
      }
    };

    PhotoHeader.prototype.active = function() {
      return this.render();
    };

    PhotoHeader.prototype.backToCategories = function(e) {
      this.navigate('/category', '');
      return e.preventDefault();
    };

    PhotoHeader.prototype.backToProducts = function(e) {
      var ref;
      this.navigate('/category', ((ref = Category.record) != null ? ref.id : void 0) || '');
      return e.preventDefault();
    };

    PhotoHeader.prototype.backToPhotos = function(e) {
      var ref, ref1;
      this.navigate('/category', ((ref = Category.record) != null ? ref.id : void 0) || '', ((ref1 = Category.record) != null ? ref1.selectionList().first() : void 0) || '');
      return e.preventDefault();
    };

    PhotoHeader.prototype.goUp = function(e) {
      var ref;
      this.navigate('/category', Category.record.id || '', ((ref = Category.record) != null ? ref.selectionList().first() : void 0) || '');
      return e.preventDefault();
    };

    PhotoHeader.prototype.drop = function(e) {
      e.stopPropagation();
      return e.preventDefault();
    };

    return PhotoHeader;

  })(Spine.Controller);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = PhotoHeader;
  }

}).call(this);
 },"controllers/photo_list": function(exports, require, module) { (function() {
  var $, Extender, PhotoList, Product, ProductsPhoto, Spine,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Product = require('models/product');

  Extender = require('extensions/controller_extender');

  ProductsPhoto = require('models/products_photo');

  require('extensions/tmpl');

  PhotoList = (function(superClass) {
    extend(PhotoList, superClass);

    PhotoList.extend(Extender);

    PhotoList.prototype.events = {
      'click .rotate-cw': 'rotateCW',
      'click .rotate-ccw': 'rotateCCW',
      'click .zoom': 'zoom',
      'click .rotate': 'rotate'
    };

    function PhotoList() {
      PhotoList.__super__.constructor.apply(this, arguments);
      ProductsPhoto.bind('beforeDestroy', this.proxy(this.back));
    }

    PhotoList.prototype.rotateCW = function(e) {
      var item;
      item = $(e.currentTarget).item();
      Spine.trigger('rotate', item, -90);
      e.stopPropagation();
      return e.preventDefault();
    };

    PhotoList.prototype.rotateCCW = function(e) {
      var item;
      item = $(e.currentTarget).item();
      Spine.trigger('rotate', item, 90);
      e.stopPropagation();
      return e.preventDefault();
    };

    PhotoList.prototype.back = function() {
      var iid, ref, ref1, ref2;
      return this.navigate('/category', ((ref = Category.record) != null ? ref.id : void 0) || '', ((ref1 = Category.record) != null ? typeof ref1.selectionList === "function" ? ref1.selectionList().first() : void 0 : void 0) || '', iid = (iid = (ref2 = Product.record) != null ? typeof ref2.selectionList === "function" ? ref2.selectionList().first() : void 0 : void 0) ? 'iid/' + iid : null);
    };

    PhotoList.prototype.zoom = function(e) {};

    PhotoList.prototype.rotate = function(e) {
      return this.rotate(e);
    };

    return PhotoList;

  })(Spine.Controller);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = PhotoList;
  }

}).call(this);
 },"controllers/photo_view": function(exports, require, module) { (function() {
  var $, Drag, Extender, Info, PhotoList, PhotoView, Product, ProductsPhoto, Spine,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Product = require('models/product');

  ProductsPhoto = require('models/products_photo');

  PhotoList = require('controllers/photo_list');

  Info = require('controllers/info');

  Drag = require('extensions/drag');

  Extender = require('extensions/controller_extender');

  require('extensions/tmpl');

  PhotoView = (function(superClass) {
    extend(PhotoView, superClass);

    PhotoView.extend(Drag);

    PhotoView.extend(Extender);

    PhotoView.prototype.elements = {
      '.hoverinfo': 'infoEl',
      '.items': 'itemsEl',
      '.item': 'item'
    };

    PhotoView.prototype.events = {
      'mousemove  .item': 'infoUp',
      'mouseleave .item': 'infoBye',
      'dragstart  .item': 'stopInfo',
      'dragstart .item': 'dragstart',
      'drop .item': 'drop',
      'click .dropdown-toggle': 'dropdownToggle',
      'click .delete': 'deletePhoto'
    };

    PhotoView.prototype.template = function(item) {
      return $('#photoTemplate').tmpl(item);
    };

    PhotoView.prototype.infoTemplate = function(item) {
      return $('#photoInfoTemplate').tmpl(item);
    };

    function PhotoView() {
      this.stopInfo = bind(this.stopInfo, this);
      this.infoBye = bind(this.infoBye, this);
      this.infoUp = bind(this.infoUp, this);
      this.callback = bind(this.callback, this);
      PhotoView.__super__.constructor.apply(this, arguments);
      this.currentId = 0;
      this.bind('active', this.proxy(this.active));
      this.list = new PhotoList({
        el: this.itemsEl,
        parent: this
      });
      this.list.listener = this.parent.photosView.list;
      this.type = 'Photo';
      this.info = new Info({
        el: this.infoEl,
        template: this.infoTemplate
      });
      this.viewport = this.itemsEl;
      Photo.one('refresh', this.proxy(this.refresh));
      Product.bind('change:collection', this.proxy(this.refresh));
      Photo.bind('change:current', this.proxy(this.changeNavigation));
    }

    PhotoView.prototype.change = function(a, b) {
      var changed;
      changed = !(this.currentId === b[0]);
      if (changed) {
        this.log(b[0]);
        this.currentId = b[0];
        return this.render(Photo.find(b));
      }
    };

    PhotoView.prototype.changeNavigation = function(rec, changed) {
      var ref, ref1;
      if (!this.isActive()) {
        return;
      }
      if (changed) {
        return this.navigate('/category', ((ref = Category.record) != null ? ref.id : void 0) || '', ((ref1 = Category.record) != null ? typeof ref1.selectionList === "function" ? ref1.selectionList().first() : void 0 : void 0) || '', rec.id);
      }
    };

    PhotoView.prototype.render = function(item) {
      if (item == null) {
        item = Photo.record;
      }
      this.itemsEl.html(this.template(item));
      $('.dropdown-toggle', this.el).dropdown();
      this.uri(item);
      return this.el;
    };

    PhotoView.prototype.active = function() {
      App.showView.trigger('change:toolbarOne', ['Default']);
      App.showView.trigger('change:toolbarTwo', ['Trustami']);
      return this.render();
    };

    PhotoView.prototype.refresh = function() {
      return this.render();
    };

    PhotoView.prototype.params = function() {
      return {
        width: 600,
        height: 451,
        square: 2,
        force: false
      };
    };

    PhotoView.prototype.uri = function(item, mode) {
      if (mode == null) {
        mode = 'html';
      }
      this.log('uri');
      return Photo.uri(this.params(), (function(_this) {
        return function(xhr, record) {
          return _this.callback(xhr, item);
        };
      })(this), [item]);
    };

    PhotoView.prototype.callback = function(json, item) {
      var img, jsn, searchJSON;
      this.log('callback');
      img = new Image;
      img.onload = this.imageLoad;
      searchJSON = function(id) {
        var i, itm, len;
        for (i = 0, len = json.length; i < len; i++) {
          itm = json[i];
          if (itm[id]) {
            return itm[id];
          }
        }
      };
      jsn = searchJSON(item.id);
      if (jsn) {
        img.tmb = $('.thumbnail', this.el);
        img.container = this.itemsEl.removeClass('in');
        return img.src = jsn.src;
      }
    };

    PhotoView.prototype.imageLoad = function() {
      var container, h, img, tmb, w;
      tmb = this.tmb;
      container = this.container;
      w = this.width;
      h = this.height;
      if (h > w) {
        this.height = '100%';
        this.width = 'auto';
      }
      img = $(this);
      tmb.html(img);
      return container.addClass('in');
    };

    PhotoView.prototype.dropdownToggle = function(e) {
      var el;
      el = $(e.currentTarget);
      el.dropdown('toggle');
      e.preventDefault();
      return e.stopPropagation();
    };

    PhotoView.prototype.deletePhoto = function(e) {
      var item, ref;
      item = $(e.currentTarget).item();
      if ((item != null ? (ref = item.constructor) != null ? ref.className : void 0 : void 0) !== 'Photo') {
        return;
      }
      Spine.trigger('delete:photos', [item.id], this.proxy(this.list.back));
      this.stopInfo(e);
      e.stopPropagation();
      return e.preventDefault();
    };

    PhotoView.prototype.infoUp = function(e) {
      var el;
      this.info.up(e);
      el = $('.glyphicon-set', $(e.currentTarget)).addClass('in').removeClass('out');
      return e.preventDefault();
    };

    PhotoView.prototype.infoBye = function(e) {
      var el;
      this.info.bye();
      el = $('.glyphicon-set', $(e.currentTarget)).addClass('out').removeClass('in');
      return e.preventDefault();
    };

    PhotoView.prototype.stopInfo = function(e) {
      return this.info.bye();
    };

    return PhotoView;

  })(Spine.Controller);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = PhotoView;
  }

}).call(this);
 },"controllers/photos_add_list": function(exports, require, module) { (function() {
  var $, CategoriesProduct, Category, Extender, Model, Photo, PhotoExtender, PhotosAddList, Product, ProductsPhoto, Spine, UriHelper,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Model = Spine.Model;

  Category = require('models/category');

  Product = require('models/product');

  Photo = require('models/photo');

  ProductsPhoto = require('models/products_photo');

  CategoriesProduct = require('models/categories_product');

  Extender = require('extensions/controller_extender');

  PhotoExtender = require('extensions/photo_extender');

  UriHelper = require('extensions/uri_helper');

  require('extensions/tmpl');

  PhotosAddList = (function(superClass) {
    extend(PhotosAddList, superClass);

    PhotosAddList.extend(UriHelper);

    PhotosAddList.extend(Extender);

    PhotosAddList.extend(PhotoExtender);

    PhotosAddList.prototype.elements = {
      '.thumbnail': 'thumbEl'
    };

    function PhotosAddList() {
      PhotosAddList.__super__.constructor.apply(this, arguments);
    }

    PhotosAddList.prototype.render = function(items) {
      var sorted;
      if (items.length) {
        sorted = items.sort(Product.sortByReverseOrder);
        this.html(this.template(items));
        this.proxy(this.size(App.showView.sOutValue));
        this.callDeferred(sorted, this.uriSettings(300, 300), this.proxy(this.callback));
      } else {
        this.html('<span class="enlightened">Es gibt nichts hinzuzufügen.</span>');
      }
      return this.el;
    };

    PhotosAddList.prototype.exposeSelection = function(selection) {
      var el, i, id, len, results;
      this.deselect();
      results = [];
      for (i = 0, len = selection.length; i < len; i++) {
        id = selection[i];
        el = $('#' + id, this.el);
        results.push(el.addClass("active hot"));
      }
      return results;
    };

    return PhotosAddList;

  })(Spine.Controller);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = PhotosAddList;
  }

}).call(this);
 },"controllers/photos_add_view": function(exports, require, module) { (function() {
  var $, CategoriesProduct, Category, Drag, Extender, Info, PhotosAddList, PhotosAddView, Product, ProductsPhoto, Spine, User,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require('spine');

  $ = Spine.$;

  Drag = require('extensions/drag');

  User = require("models/user");

  Product = require('models/product');

  Category = require('models/category');

  CategoriesProduct = require('models/categories_product');

  ProductsPhoto = require('models/products_photo');

  Info = require('controllers/info');

  PhotosAddList = require('controllers/photos_add_list');

  User = require('models/user');

  Extender = require('extensions/controller_extender');

  require('extensions/tmpl');

  PhotosAddView = (function(superClass) {
    extend(PhotosAddView, superClass);

    PhotosAddView.extend(Extender);

    PhotosAddView.prototype.elements = {
      '.items': '_items'
    };

    PhotosAddView.prototype.events = {
      'click .item': 'click',
      'click .opt-AddExecute:not(.disabled)': 'add',
      'click .opt-SelectInv:not(.disabled)': 'selectInv',
      'click .opt-SelectAll:not(.disabled)': 'selectAll',
      'keyup': 'keyup'
    };

    PhotosAddView.prototype.template = function(items) {
      return $('#addTemplate').tmpl({
        title: 'Select photos',
        type: 'photos',
        disabled: true,
        contains: !!this.items.length,
        container: Product.record
      });
    };

    PhotosAddView.prototype.subTemplate = function(items, options) {
      return $("#photosTemplate").tmpl(items, options);
    };

    PhotosAddView.prototype.footerTemplate = function(selection) {
      return $('#footerTemplate').tmpl({
        disabled: !selection.length,
        contains: !!this.items.length
      });
    };

    function PhotosAddView() {
      PhotosAddView.__super__.constructor.apply(this, arguments);
      this.thumbSize = 100;
      this.visible = false;
      this.modal = this.el.modal({
        show: this.visible,
        backdrop: true
      });
      this.modal.bind('show.bs.modal', this.proxy(this.modalShow));
      this.modal.bind('shown.bs.modal', this.proxy(this.modalShown));
      this.modal.bind('hide.bs.modal', this.proxy(this.modalHide));
      this.list = new PhotosAddList({
        template: this.subTemplate,
        parent: this.parent
      });
      Spine.bind('photos:add', this.proxy(this.show));
    }

    PhotosAddView.prototype.render = function(items) {
      this.html(this.template(this.items = items));
      this.itemsEl = $('.items', this.el);
      this.list.el = this.itemsEl;
      return this.list.render(items);
    };

    PhotosAddView.prototype.renderFooter = function(list) {
      this.footer = $('.modal-footer', this.el);
      return this.footer.html(this.footerTemplate(list));
    };

    PhotosAddView.prototype.show = function() {
      var list, product, records;
      product = Product.record;
      list = ProductsPhoto.photos(product.id).toId();
      records = Photo.filter(list, {
        func: 'idExcludeSelect'
      });
      this.render(records, product);
      return this.el.modal('show');
    };

    PhotosAddView.prototype.hide = function() {
      return this.el.modal('hide');
    };

    PhotosAddView.prototype.modalShow = function(e) {
      Spine.trigger('slider:change', this.thumbSize);
      this.preservedList = Product.selectionList().slice(0);
      return this.selectionList = [];
    };

    PhotosAddView.prototype.modalShown = function(e) {
      return this.log('shown');
    };

    PhotosAddView.prototype.modalHide = function(e) {
      return Spine.trigger('slider:change', App.showView.sOutValue);
    };

    PhotosAddView.prototype.click = function(e) {
      var item;
      e.stopPropagation();
      e.preventDefault();
      item = $(e.currentTarget).item();
      return this.select(item.id, this.isMeta(e));
    };

    PhotosAddView.prototype.select = function(items, exclusive) {
      var i, item, len;
      if (items == null) {
        items = [];
      }
      if (!Array.isArray(items)) {
        items = [items];
      }
      if (exclusive) {
        this.selectionList = [];
      }
      for (i = 0, len = items.length; i < len; i++) {
        item = items[i];
        this.selectionList.addRemove(item);
      }
      this.renderFooter(this.selectionList);
      return this.list.exposeSelection(this.selectionList);
    };

    PhotosAddView.prototype.selectAll = function(e) {
      var list;
      list = this.all();
      this.select(list, true);
      return e.stopPropagation();
    };

    PhotosAddView.prototype.selectInv = function(e) {
      var list;
      list = this.all();
      this.select(list);
      return e.stopPropagation();
    };

    PhotosAddView.prototype.all = function() {
      var items, list, root;
      root = this.itemsEl;
      items = root.children('.item');
      if (!(root && items.length)) {
        return;
      }
      list = [];
      items.each(function(index, el) {
        var item;
        item = $(this).item();
        return list.unshift(item.id);
      });
      return list;
    };

    PhotosAddView.prototype.add = function() {
      var photos;
      photos = Photo.toRecords(this.selectionList);
      Photo.trigger('create:join', photos, Product.record);
      return this.hide();
    };

    PhotosAddView.prototype.keyup = function(e) {
      var code;
      code = e.charCode || e.keyCode;
      this.log('PhotosAddView:keyupCode: ' + code);
      switch (code) {
        case 65:
          if (e.metaKey || e.ctrlKey) {
            this.selectAll(e);
            e.stopPropagation();
            return e.preventDefault();
          }
          break;
        case 73:
          if (e.metaKey || e.ctrlKey) {
            this.selectInv(e);
            e.preventDefault();
            return e.stopPropagation();
          }
      }
    };

    return PhotosAddView;

  })(Spine.Controller);

  module.exports = PhotosAddView;

}).call(this);
 },"controllers/photos_header": function(exports, require, module) { (function() {
  var $, CategoriesProduct, Category, Extender, Photo, PhotosHeader, Product, ProductsPhoto, Spine, User,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Category = require('models/category');

  Product = require('models/product');

  Photo = require('models/photo');

  User = require('models/user');

  CategoriesProduct = require('models/categories_product');

  ProductsPhoto = require('models/products_photo');

  Extender = require('extensions/controller_extender');

  PhotosHeader = (function(superClass) {
    extend(PhotosHeader, superClass);

    PhotosHeader.extend(Extender);

    PhotosHeader.prototype.events = {
      'click .gal': 'backToCategories',
      'click .alb': 'backToProducts'
    };

    PhotosHeader.prototype.template = function(item) {
      return $("#headerPhotosTemplate").tmpl(item);
    };

    function PhotosHeader() {
      PhotosHeader.__super__.constructor.apply(this, arguments);
      this.bind('active', this.proxy(this.active));
      Photo.bind('current', this.proxy(this.render));
    }

    PhotosHeader.prototype.backToCategories = function(e) {
      this.log('backToCategories');
      this.navigate('/category', '');
      return e.preventDefault();
    };

    PhotosHeader.prototype.backToProducts = function(e) {
      var ref;
      this.log('backToProducts');
      this.navigate('/category', ((ref = Category.record) != null ? ref.id : void 0) || '');
      return e.preventDefault();
    };

    PhotosHeader.prototype.goUp = function(e) {
      this.navigate('/category', Category.record.id || '');
      e.preventDefault();
      return e.stopPropagation();
    };

    PhotosHeader.prototype.change = function() {
      return this.render();
    };

    PhotosHeader.prototype.render = function() {
      return this.html(this.template({
        model: Product,
        category: Category.record,
        product: Product.record,
        photo: Photo.record,
        modelProduct: Product,
        modelPhoto: Photo,
        modelGas: CategoriesProduct,
        modelAps: ProductsPhoto,
        count: this.count(),
        author: User.first().name
      }));
    };

    PhotosHeader.prototype.count = function() {
      if (Product.record) {
        return ProductsPhoto.filter(Product.record.id, {
          associationForeignKey: 'product_id'
        }).length;
      } else {
        return Photo.filter();
      }
    };

    PhotosHeader.prototype.active = function() {
      return this.render();
    };

    return PhotosHeader;

  })(Spine.Controller);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = PhotosHeader;
  }

}).call(this);
 },"controllers/photos_list": function(exports, require, module) { (function() {
  var $, Drag, Extender, Photo, PhotoExtender, PhotosList, Product, ProductsPhoto, Spine, ToolbarView, UriHelper,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Photo = require('models/photo');

  Product = require('models/product');

  ProductsPhoto = require('models/products_photo');

  ToolbarView = require("controllers/toolbar_view");

  Extender = require('extensions/controller_extender');

  Drag = require('extensions/drag');

  UriHelper = require('extensions/uri_helper');

  PhotoExtender = require('extensions/photo_extender');

  require('extensions/tmpl');

  PhotosList = (function(superClass) {
    extend(PhotosList, superClass);

    PhotosList.extend(Drag);

    PhotosList.extend(Extender);

    PhotosList.extend(PhotoExtender);

    PhotosList.extend(UriHelper);

    PhotosList.prototype.elements = {
      '.thumbnail': 'thumbEl',
      '.toolbar': 'toolbarEl'
    };

    PhotosList.prototype.events = {
      'click .opt-AddPhotos': 'addPhotos',
      'click .dropdown-toggle': 'dropdownToggle',
      'click .delete': 'deletePhoto',
      'click .zoom': 'zoom',
      'click .rotate-cw': 'rotateCW',
      'click .rotate-ccw': 'rotateCCW',
      'click .original': 'original'
    };

    PhotosList.prototype.selectFirst = true;

    function PhotosList() {
      PhotosList.__super__.constructor.apply(this, arguments);
      this.toolbar = new ToolbarView({
        el: this.toolbarEl
      });
      this.add = this.html;
      Spine.bind('slider:start', this.proxy(this.sliderStart));
      Spine.bind('slider:change', this.proxy(this.size));
      Spine.bind('rotate', this.proxy(this.rotate));
      Product.bind('ajaxError', Product.errorHandler);
      Product.bind('change:selection', this.proxy(this.exposeSelection));
      ProductsPhoto.bind('change', this.proxy(this.changeRelated));
    }

    PhotosList.prototype.changeRelated = function(item, mode) {
      var el;
      if (!Product.record) {
        return;
      }
      if (Product.record.id !== item['product_id']) {
        return;
      }
      if (!(item = Photo.find(item['photo_id']))) {
        return;
      }
      this.log('changeRelated');
      switch (mode) {
        case 'create':
          this.wipe();
          this.el.prepend(this.template(item));
          this.refreshElements();
          this.size(App.showView.sOutValue);
          this.el.sortable('destroy').sortable('photo');
          $('.dropdown-toggle', this.el).dropdown();
          this.callDeferred([item], this.uriSettings(300, 300), this.proxy(this.callback));
          break;
        case 'destroy':
          el = this.findModelElement(item);
          el.detach();
          break;
        case 'update':
          this.updateTemplate(item);
          this.el.sortable('destroy').sortable('photo');
      }
      this.refreshElements();
      return this.el;
    };

    PhotosList.prototype.render = function(items, mode) {
      var ref, ref1, ref2, s, sorted;
      if (items == null) {
        items = [];
      }
      if (mode == null) {
        mode = 'html';
      }
      this.log('PhotosList::render ' + mode);
      if (!items.length) {
        s = (s = ((ref = this.model.record) != null ? ref.screenname : void 0) || (s = ((ref1 = this.model.record) != null ? ref1.name : void 0) || (s = (ref2 = this.model.record) != null ? ref2.title : void 0))) != null ? 'in ' + s + ' nichts los - kein Moos' : 'nichts los hier. Brutal...';
        this.renderEmpty(s);
        return this.el;
      }
      sorted = items.sort(Product.sortByReverseOrder);
      this[mode](this.template(sorted));
      this.proxy(this.size(App.showView.sOutValue));
      this.exposeSelection();
      $('.dropdown-toggle', this.el).dropdown();
      this.callDeferred(sorted, this.uriSettings(300, 300), this.proxy(this.callback));
      return this.el;
    };

    PhotosList.prototype.renderAll = function() {
      var items, sorted;
      items = Photo.all();
      if (items.length) {
        this.activateRecord();
        this.html(this.template(sorted));
        this.el.sortable('destroy').sortable('photo');
        this.size(App.showView.sOutValue);
        sorted = Product.sortByReverseOrder(items);
      }
      return this.el;
    };

    PhotosList.prototype.photos = function(mode) {
      var product;
      if (mode === 'add' || !Product.record) {
        return Photo.all();
      } else if (product = Product.find(mode)) {
        return product.photos();
      } else if (Product.record) {
        return Product.record.photos();
      }
    };

    PhotosList.prototype.dropdownToggle = function(e) {
      var el;
      el = $(e.currentTarget);
      el.dropdown();
      e.preventDefault();
      return e.stopPropagation();
    };

    PhotosList.prototype.original = function(e) {
      var id;
      id = $(e.currentTarget).item().id;
      Product.selection[0].global.update([id]);
      this.navigate('/category', '/');
      e.preventDefault();
      return e.stopPropagation();
    };

    PhotosList.prototype.deletePhoto = function(e) {
      var item, ref;
      this.log('deletePhoto');
      item = $(e.currentTarget).item();
      if ((item != null ? (ref = item.constructor) != null ? ref.className : void 0 : void 0) !== 'Photo') {
        return;
      }
      Spine.trigger('delete:photos', [item.id]);
      e.stopPropagation();
      return e.preventDefault();
    };

    PhotosList.prototype.zoom = function(e) {
      var item, ref, ref1;
      item = e.type === 'click' ? $(e.currentTarget).item() : this.models.record;
      this.navigate('/category', ((ref = Category.record) != null ? ref.id : void 0) || '', ((ref1 = Category.record) != null ? typeof ref1.selectionList === "function" ? ref1.selectionList().first() : void 0 : void 0) || '', item.id || null);
      e.stopPropagation();
      return e.preventDefault();
    };

    PhotosList.prototype.back = function(e) {
      var pid, ref, ref1;
      this.navigate('/category', ((ref = Category.record) != null ? ref.id : void 0) || '', pid = (pid = (ref1 = Category.record) != null ? typeof ref1.selectionList === "function" ? ref1.selectionList().first() : void 0 : void 0) ? 'pid/' + pid : null);
      e.preventDefault();
      return e.stopPropagation();
    };

    PhotosList.prototype.initSelectable = function() {
      var options;
      options = {
        helper: 'clone'
      };
      return this.el.selectable();
    };

    PhotosList.prototype.addPhotos = function(e) {
      e.stopPropagation();
      e.preventDefault();
      return Spine.trigger('photos:add');
    };

    PhotosList.prototype.sliderStart = function() {
      return this.refreshElements();
    };

    PhotosList.prototype.rotateCW = function(e) {
      var item;
      item = $(e.currentTarget).item();
      this.log(item);
      Spine.trigger('rotate', item, -90);
      e.stopPropagation();
      return e.preventDefault();
    };

    PhotosList.prototype.rotateCCW = function(e) {
      var item;
      item = $(e.currentTarget).item();
      this.log(item);
      Spine.trigger('rotate', item, 90);
      e.stopPropagation();
      return e.preventDefault();
    };

    PhotosList.prototype.rotate = function(item, val) {
      var callback, i, ids, items, len, options;
      if (val == null) {
        val = 90;
      }
      if (item) {
        items = [item];
      } else {
        ids = Product.selectionList().slice(0);
        items = ids.length ? Photo.toRecords(ids.add(item != null ? item.id : void 0)) : void 0;
      }
      options = {
        val: val
      };
      callback = (function(_this) {
        return function(items) {
          var alb, albs, photo, products, res;
          products = [];
          res = (function() {
            var i, j, len, len1, results;
            results = [];
            for (i = 0, len = items.length; i < len; i++) {
              item = items[i];
              photo = Photo.find(item['Photo']['id']);
              photo.clearCache();
              albs = photo.products();
              for (j = 0, len1 = albs.length; j < len1; j++) {
                alb = albs[j];
                products.add(alb.id);
              }
              results.push(photo);
            }
            return results;
          })();
          _this.callDeferred(res, _this.uriSettings(300, 300), _this.proxy(_this.callback));
          products = Product.toRecords(products);
          Product.trigger('change:collection', products);
          return Photo.trigger('develop', items);
        };
      })(this);
      for (i = 0, len = items.length; i < len; i++) {
        item = items[i];
        $('#' + item.id + '>.thumbnail', this.el).removeClass('in');
      }
      Photo.develop('rotate', options, callback, items);
      return false;
    };

    return PhotosList;

  })(Spine.Controller);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = PhotosList;
  }

}).call(this);
 },"controllers/photos_trash_header": function(exports, require, module) { (function() {
  var $, Category, Extender, PhotosTrashHeader, Spine,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Category = require('models/category');

  Extender = require('extensions/controller_extender');

  PhotosTrashHeader = (function(superClass) {
    extend(PhotosTrashHeader, superClass);

    PhotosTrashHeader.extend(Extender);

    PhotosTrashHeader.prototype.template = function(items) {
      return $("#headerPhotosTrashTemplate").tmpl(items);
    };

    function PhotosTrashHeader() {
      PhotosTrashHeader.__super__.constructor.apply(this, arguments);
      this.bind('active', this.proxy(this.active));
    }

    PhotosTrashHeader.prototype.render = function(item) {
      return this.html(this.template(item));
    };

    PhotosTrashHeader.prototype.active = function() {
      return this.render();
    };

    return PhotosTrashHeader;

  })(Spine.Controller);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = PhotosTrashHeader;
  }

}).call(this);
 },"controllers/photos_trash_view": function(exports, require, module) { (function() {
  var $, Controller, Drag, Extender, PhotoExtender, PhotosTrash, PhotosTrashView, Spine, UriHelper, User,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Controller = Spine.Controller;

  Drag = require('extensions/drag');

  User = require("models/user");

  PhotosTrash = require("models/photos_trash");

  Extender = require('extensions/controller_extender');

  PhotoExtender = require('extensions/photo_extender');

  UriHelper = require('extensions/uri_helper');

  PhotosTrashView = (function(superClass) {
    extend(PhotosTrashView, superClass);

    PhotosTrashView.extend(Drag);

    PhotosTrashView.extend(Extender);

    PhotosTrashView.extend(PhotoExtender);

    PhotosTrashView.extend(UriHelper);

    PhotosTrashView.prototype.elements = {
      '.items': 'items'
    };

    PhotosTrashView.prototype.events = {
      'click': 'clearSelection',
      'click .item': 'click',
      'click .dropdown-toggle': 'dropdownToggle',
      'click .opt-destroy': 'destroyPhoto',
      'click .opt-recover': 'recoverPhoto',
      'mousemove .item': 'in',
      'mouseleave .item': 'out',
      'dragstart ': 'dragstart',
      'dragend': 'dragend',
      'drop': 'drop',
      'dragover   ': 'dragover',
      'dragenter  ': 'dragenter',
      'keyup': 'keyup'
    };

    PhotosTrashView.prototype.template = function(items) {
      return $("#photosTrashTemplate").tmpl(items);
    };

    function PhotosTrashView() {
      this.out = bind(this.out, this);
      this["in"] = bind(this["in"], this);
      PhotosTrashView.__super__.constructor.apply(this, arguments);
      this.bind('active', this.proxy(this.active));
      Photo.bind('destroy:trash', this.proxy(this.destroy));
      PhotosTrash.bind('change:selection', this.proxy(this.exposeSelection));
      Photo.bind('beforeDestroy', this.proxy(this.beforeDestroy));
      Photo.bind('destroy:photos', this.proxy(this.destroyPhotos));
      Photo.bind('refresh', this.proxy(this.initTrash));
      Photo.bind('inbound:trash', this.proxy(this.inbound));
      Photo.bind('outbound:trash', this.proxy(this.outbound));
      Photo.bind('empty:trash', this.proxy(this.emptyTrash));
      Spine.bind('refresh:one', this.proxy(this.refreshOne));
    }

    PhotosTrashView.prototype.initTrash = function(items) {
      var i, item, len, results, trash;
      results = [];
      for (i = 0, len = items.length; i < len; i++) {
        item = items[i];
        if (!item.deleted) {
          continue;
        }
        trash = new PhotosTrash({
          id: item.id
        });
        trash.save();
        results.push(item.bind('update destroy', this.proxy(this.watch)));
      }
      return results;
    };

    PhotosTrashView.prototype.refreshOne = function() {
      return Photo.one('refresh', this.proxy(this.refresh));
    };

    PhotosTrashView.prototype.refresh = function() {
      var items;
      items = Photo.filter(true, {
        func: 'selectDeleted'
      });
      return this.render(items);
    };

    PhotosTrashView.prototype.render = function(items) {
      this.items.html(this.template(items));
      this.proxy(this.size(App.showView.sOutValue));
      $('.dropdown-toggle', this.el).dropdown();
      this.callDeferred(items, this.uriSettings(300, 300), this.proxy(this.callback));
      return this.el;
    };

    PhotosTrashView.prototype.active = function(items) {
      this.render(items);
      App.showView.trigger('change:toolbarOne', ['Default', 'Help']);
      return App.showView.trigger('change:toolbarTwo', ['Speichern']);
    };

    PhotosTrashView.prototype.inbound = function(photos) {
      var i, len, photo;
      if (!Array.isArray(photos)) {
        photos = [photos];
      }
      for (i = 0, len = photos.length; i < len; i++) {
        photo = photos[i];
        photo.deleted = true;
        photo.save();
        Photo.trigger('trashed', photo);
      }
      return this.initTrash(photos);
    };

    PhotosTrashView.prototype.outbound = function(item) {};

    PhotosTrashView.prototype.watch = function(item) {
      var trash;
      if (!item.deleted || item.destroyed) {
        trash = PhotosTrash.find(item.id);
        console.log(trash);
        trash.destroy();
        Photo.trigger('outbound:trash');
        return this.remove(item);
      }
    };

    PhotosTrashView.prototype.dropdownToggle = function(e) {
      var el;
      el = $(e.currentTarget);
      el.dropdown();
      e.stopPropagation();
      return e.preventDefault();
    };

    PhotosTrashView.prototype.recoverPhoto = function(e) {
      var item;
      e.stopPropagation();
      item = $(e.currentTarget).item();
      item.deleted = false;
      return item.save();
    };

    PhotosTrashView.prototype.destroyPhoto = function(e) {
      var id, item;
      e.stopPropagation();
      item = $(e.currentTarget).item();
      if (id = item != null ? item.id : void 0) {
        return this.destroyPhotos(e, id);
      }
    };

    PhotosTrashView.prototype.destroyPhotos = function(e, ids, callback) {
      var i, len, photo, photos, res;
      if (ids == null) {
        ids = this.model.selectionList();
      }
      this.log('destroyPhotos');
      if (!Array.isArray(ids)) {
        ids = [ids];
      }
      photos = Photo.toRecords(ids);
      for (i = 0, len = photos.length; i < len; i++) {
        photo = photos[i];
        if (photo.deleted) {
          if (res || (res = App.confirm('DESTROY', this.humanize(photos)))) {
            Photo.trigger('destroy:trash', photo);
            continue;
          } else {
            break;
          }
        }
      }
      if (typeof callback === 'function') {
        return callback.call();
      }
    };

    PhotosTrashView.prototype.beforeDestroy = function(photo) {
      var i, len, photos, product, products, results;
      this.log('beforeDestroy');
      return;
      photo.unbind('released:fromTrash');
      photo.removeSelectionID();
      products = ProductsPhoto.products(photo.id);
      results = [];
      for (i = 0, len = products.length; i < len; i++) {
        product = products[i];
        product.removeFromSelection(photo.id);
        photo.removeSelectionID();
        photos = ProductsPhoto.photos(product.id).toId();
        results.push(Photo.trigger('destroy:join', photos, product));
      }
      return results;
    };

    PhotosTrashView.prototype.destroyPhotos_ = function(ids, callback) {
      var el, i, len, photo, photos, product;
      this.log('destroyPhoto');
      if (!Array.isArray(ids)) {
        ids = [ids];
      }
      this.stopInfo();
      ids = ids || Product.selectionList().slice(0);
      photos = Photo.toRecords(ids);
      for (i = 0, len = photos.length; i < len; i++) {
        photo = photos[i];
        el = this.list.findModelElement(photo);
        el.removeClass('in');
        if (product = Product.record) {
          this.destroyJoin({
            photos: [photo],
            product: product
          });
        } else {
          photo.destroy();
        }
      }
      if (typeof callback === 'function') {
        return callback.call();
      }
    };

    PhotosTrashView.prototype.destroy = function(items) {
      var i, item, len, results;
      this.log('destroy');
      if (!Array.isArray(items)) {
        items = [items];
      }
      results = [];
      for (i = 0, len = items.length; i < len; i++) {
        item = items[i];
        results.push(item.destroy());
      }
      return results;
    };

    PhotosTrashView.prototype.emptyTrash = function(items) {
      var i, item, len, results;
      if (App.confirm('EMPTYTRASH')) {
        results = [];
        for (i = 0, len = items.length; i < len; i++) {
          item = items[i];
          results.push(item.destroy());
        }
        return results;
      }
    };

    PhotosTrashView.prototype.click = function(e) {
      var item;
      item = $(e.currentTarget).item();
      this.select(e, item.id);
      return e.stopPropagation();
    };

    PhotosTrashView.prototype.select = function(e, ids) {
      var list;
      if (ids == null) {
        ids = [];
      }
      list = this.model.selectionList().slice(0);
      if (!Array.isArray(ids)) {
        ids = [ids];
      }
      if (this.isMeta(e)) {
        list.addRemove(ids);
      } else {
        list = ids.slice(0);
      }
      this.model.updateSelection(list);
      return e.stopPropagation();
    };

    PhotosTrashView.prototype.back = function(e) {
      var iid, ref, ref1, ref2;
      return this.navigate('/category', ((ref = Category.record) != null ? ref.id : void 0) || '', ((ref1 = Category.record) != null ? typeof ref1.selectionList === "function" ? ref1.selectionList().first() : void 0 : void 0) || '', iid = (iid = (ref2 = Product.record) != null ? typeof ref2.selectionList === "function" ? ref2.selectionList().first() : void 0 : void 0) ? 'iid/' + iid : null);
    };

    PhotosTrashView.prototype["in"] = function(e) {
      var el;
      el = $(e.currentTarget);
      return $('.glyphicon-set.fade', el).addClass('in').removeClass('out');
    };

    PhotosTrashView.prototype.out = function(e) {
      var el, set;
      el = $(e.currentTarget);
      return set = $('.glyphicon-set.fade', el).addClass('out').removeClass('in');
    };

    PhotosTrashView.prototype.keyup = function(e) {
      var code;
      code = e.charCode || e.keyCode;
      switch (code) {
        case 8:
          this.destroyPhotos(e);
          e.preventDefault();
          return e.stopPropagation();
      }
    };

    return PhotosTrashView;

  })(Spine.Controller);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = PhotosTrashView;
  }

}).call(this);
 },"controllers/photos_view": function(exports, require, module) { (function() {
  var $, CategoriesProduct, Category, Controller, Drag, Extender, Info, Photo, PhotosList, PhotosView, Product, ProductsPhoto, Spine,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Controller = Spine.Controller;

  Product = require('models/product');

  Photo = require('models/photo');

  ProductsPhoto = require('models/products_photo');

  Category = require('models/category');

  CategoriesProduct = require('models/categories_product');

  Info = require('controllers/info');

  PhotosList = require('controllers/photos_list');

  Drag = require('extensions/drag');

  Extender = require('extensions/controller_extender');

  require('extensions/tmpl');

  PhotosView = (function(superClass) {
    extend(PhotosView, superClass);

    PhotosView.extend(Drag);

    PhotosView.extend(Extender);

    PhotosView.prototype.elements = {
      '.hoverinfo': 'infoEl',
      '.items': 'itemsEl'
    };

    PhotosView.prototype.events = {
      'click': 'clearSelection',
      'click .item': 'click',
      'sortupdate .items': 'sortupdate',
      'dragstart .item': 'dragstart',
      'dragstart': 'stopInfo',
      'dragover .item': 'dragover',
      'drop': 'drop',
      'mousemove .item': 'infoUp',
      'mouseleave  .item': 'infoBye'
    };

    PhotosView.prototype.template = function(items) {
      return $('#photosTemplate').tmpl(items);
    };

    PhotosView.prototype.preloaderTemplate = function() {
      return $('#preloaderTemplate').tmpl();
    };

    PhotosView.prototype.headerTemplate = function(items) {
      return $("#headerPhotosTemplate").tmpl(items);
    };

    PhotosView.prototype.infoTemplate = function(item) {
      return $('#photoInfoTemplate').tmpl(item);
    };

    function PhotosView() {
      this.stopInfo = bind(this.stopInfo, this);
      PhotosView.__super__.constructor.apply(this, arguments);
      this.bind('active', this.proxy(this.active));
      this.current = this.el.data('modelName').record;
      this.info = new Info({
        el: this.infoEl,
        template: this.infoTemplate
      });
      this.list = new PhotosList({
        el: this.itemsEl,
        template: this.template,
        parent: this
      });
      this.header.template = this.headerTemplate;
      this.viewport = this.list.el;
      this.bind('drag:drop', this.proxy(this.dragDrop));
      ProductsPhoto.bind('destroy', this.proxy(this.destroyProductsPhoto));
      ProductsPhoto.bind('beforeDestroy', this.proxy(this.beforeDestroyProductsPhoto));
      CategoriesProduct.bind('destroy', this.proxy(this.backToProductView));
      Spine.bind('refresh:one', this.proxy(this.refreshOne));
      Photo.bind('create', this.proxy(this.add));
      Photo.bind('create:join', this.proxy(this.createJoin));
      Photo.bind('destroy:join', this.proxy(this.destroyJoin));
      Photo.bind('ajaxError', Photo.errorHandler);
      Photo.bind('trashed', this.proxy(this.remove));
      Spine.bind('delete:photos', this.proxy(this.deletePhotos));
      Spine.bind('loading:done', this.proxy(this.refresh));
    }

    PhotosView.prototype.refreshOne = function() {
      return Product.one('refresh', this.proxy(this.refresh));
    };

    PhotosView.prototype.refresh = function() {
      return this.render(Photo.renderBuffer(true));
    };

    PhotosView.prototype.render = function(items, mode) {
      if (mode == null) {
        mode = 'html';
      }
      this.list.render(items);
      if (Product.record) {
        this.list.sortable('photo');
      }
      return this.el;
    };

    PhotosView.prototype.active = function(items, options) {
      var b1, b2;
      b1 = this.eql.call(this.parent);
      b2 = this.eql_();
      if (b1 && b2) {
        return;
      }
      App.showView.trigger('change:toolbarOne', ['Default', 'Slider', App.showView.initSlider]);
      App.showView.trigger('change:toolbarTwo', ['Trustami']);
      this.parent.scrollTo(this.models.record);
      return this.render(items);
    };

    PhotosView.prototype.update = function(items) {
      var i, item, len, results, tmplItem;
      if (!Product.record) {
        return;
      }
      this.list.children().each(function(index) {
        var ap, item, t;
        item = $(this).item();
        ap = ProductsPhoto.fromPhotoId(item.id);
        if (!ap) {
          return;
        }
        ap.order = index;
        ap.save({
          ajax: false
        });
        return t = c.update(item);
      });
      results = [];
      for (i = 0, len = items.length; i < len; i++) {
        item = items[i];
        results.push(tmplItem = this.list.update(item));
      }
      return results;
    };

    PhotosView.prototype.activateRecord = function(ids) {
      if (!ids) {
        ids = [];
      }
      if (!Array.isArray(ids)) {
        ids = [ids];
      }
      return Photo.current(ids[0]);
    };

    PhotosView.prototype.click = function(e) {
      var item;
      App.showView.trigger('change:toolbarOne');
      item = $(e.currentTarget).item();
      return this.select(e, item.id);
    };

    PhotosView.prototype.select = function(e, ids) {
      var list, ref, ref1;
      if (ids == null) {
        ids = [];
      }
      list = this.model.selectionList().slice(0);
      if (!Array.isArray(ids)) {
        ids = [ids];
      }
      if (this.isMeta(e)) {
        list.addRemove(ids);
      } else {
        list = ids.slice(0);
      }
      if (this.isActive()) {
        if (list.length) {
          this.navigate('/category', ((ref = Category.record) != null ? ref.id : void 0) || '', Product.record.id || '', 'iid', list[0]);
        } else {
          this.navigate('/category', ((ref1 = Category.record) != null ? ref1.id : void 0) || '', Product.record.id || '');
        }
      }
      this.model.updateSelection(list);
      return e.stopPropagation();
    };

    PhotosView.prototype.select_ = function(e, ids) {
      var isMeta, list;
      if (ids == null) {
        ids = [];
      }
      isMeta = e.metaKey || e.ctrlKey || e.shiftKey;
      if (!Array.isArray(ids)) {
        ids = [ids];
      }
      if (isMeta && e.type === 'click') {
        list = this.model.selectionList();
        list.addRemove(ids);
      } else {
        list = ids.slice(0);
      }
      this.model.updateSelection(list);
      return e.stopPropagation();
    };

    PhotosView.prototype.clearPhotoCache = function() {
      return Photo.clearCache();
    };

    PhotosView.prototype.beforeDestroyProductsPhoto = function(ap) {
      var product;
      product = Product.find(ap.product_id);
      return product.removeFromSelection(ap.photo_id);
    };

    PhotosView.prototype.destroy = function(item) {
      var el;
      el = this.list.findModelElement(item);
      el.detach();
      if (!Photo.count()) {
        return this.render();
      }
    };

    PhotosView.prototype.destroyProductsPhoto = function(ap) {
      var photos;
      photos = ProductsPhoto.photos(ap.product_id);
      if (!photos.length) {
        return this.render(null, 'html');
      }
    };

    PhotosView.prototype.deletePhoto_ = function(ids, callback) {
      return App.confirm('METHOD_NOT_SUPPORTED', null, 'alert');
    };

    PhotosView.prototype.deletePhotos = function(ids, callback) {
      var i, j, len, len1, photo, photos, prod, prods, product, res1, res2, res3, res4, results;
      this.log('deletePhotos');
      if (!Array.isArray(ids)) {
        ids = [ids];
      }
      this.stopInfo();
      photos = Photo.toRecords(ids);
      results = [];
      for (i = 0, len = photos.length; i < len; i++) {
        photo = photos[i];
        if (photo.deleted) {
          Photo.trigger('destroy:photos', ids);
          break;
        }
        prods = ProductsPhoto.products(photo.id);
        if (!(product = Product.record)) {
          if (prods.length) {
            if (res1 || (res1 = App.confirm('REMOVE_AND_DELETE', this.humanize(photos)))) {
              for (j = 0, len1 = prods.length; j < len1; j++) {
                prod = prods[j];
                this.destroyJoin({
                  photos: photo,
                  product: prod
                });
              }
              Photo.trigger('inbound:trash', photo);
              continue;
            } else {
              break;
            }
          } else {
            if (res2 || (res2 = App.confirm('DELETE', this.humanize(photos)))) {
              Photo.trigger('inbound:trash', photo);
              continue;
            } else {
              break;
            }
          }
        } else {
          if (prods.length === 1) {
            if (res3 || (res3 = App.confirm('DELETE', this.humanize(photos)))) {
              this.destroyJoin({
                photos: photo,
                product: product
              });
              Photo.trigger('inbound:trash', photo);
              continue;
            } else {
              break;
            }
          } else {
            if (res4 || (res4 = App.confirm('REMOVE', this.humanize(photos)))) {
              this.destroyJoin({
                photos: photo,
                product: product
              });
              continue;
            } else {
              break;
            }
          }
        }
      }
      return results;
    };

    PhotosView.prototype.save = function(item) {};

    PhotosView.prototype.addProductsPhoto = function(ap) {
      var el, photo;
      if (photo = Photo.find(ap.photo_id)) {
        el = this.list.findModelElement(photo);
      }
      if (el.length) {
        return;
      }
      return this.add(photo);
    };

    PhotosView.prototype.add = function(photos) {
      if (!Array.isArray(photos)) {
        photos = [photos];
      }
      Product.updateSelection(photos.toId());
      if (!Product.record) {
        this.list.wipe();
        this.render(photos, 'append');
        return this.list.el.sortable('destroy').sortable('photos');
      }
    };

    PhotosView.prototype.createJoin = function(photos, target, cb) {
      Photo.createJoin(photos, target, cb);
      Photo.trigger('activate', photos.last());
      return target.updateSelection(photos.toId());
    };

    PhotosView.prototype.destroyJoin = function(options, callback) {
      var photos, product;
      this.log('destroyJoin');
      product = options.product;
      photos = options.photos;
      if (!Array.isArray(photos)) {
        photos = [photos];
      }
      if (!product) {
        return;
      }
      Photo.destroyJoin(photos, product, callback);
      return product.updateSelection();
    };

    PhotosView.prototype.sortupdate = function(e) {
      var f;
      this.log('sortupdate');
      f = this.list.children().length - 1;
      this.list.children().each(function(index) {
        var ap, idx, item;
        idx = f - index;
        item = $(this).item();
        if (item && Product.record) {
          ap = ProductsPhoto.fromPhotoId(item.id);
          if (ap && parseInt(ap.order) !== idx) {
            ap.order = idx;
            ap.silentUpdate();
          }
          return Product.record.invalid = true;
        }
      });
      return Product.record.save();
    };

    PhotosView.prototype.backToProductView = function(ga) {
      var category;
      if (!this.isActive()) {
        return;
      }
      if (category = Category.find(ga.category_id)) {
        return this.navigate('/category', category.id);
      }
    };

    PhotosView.prototype.infoUp = function(e) {
      var el;
      this.info.up(e);
      return el = $('.glyphicon-set', $(e.currentTarget)).addClass('in').removeClass('out');
    };

    PhotosView.prototype.infoBye = function(e) {
      var el;
      this.info.bye(e);
      return el = $('.glyphicon-set', $(e.currentTarget)).addClass('out').removeClass('in');
    };

    PhotosView.prototype.stopInfo = function(e) {
      return this.info.bye(e);
    };

    PhotosView.prototype.dragComplete = function() {
      return this.list.exposeSelection();
    };

    return PhotosView;

  })(Spine.Controller);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = PhotosView;
  }

}).call(this);
 },"controllers/preview_view": function(exports, require, module) { (function() {
  var $, CategoriesProduct, Extender, Model, PreviewView, Product, ProductsPhoto, Spine, UriHelper,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Model = Spine.Model;

  Product = require('models/product');

  ProductsPhoto = require('models/products_photo');

  CategoriesProduct = require('models/categories_product');

  UriHelper = require('extensions/uri_helper');

  Extender = require('extensions/controller_extender');

  require('spine/lib/local');

  PreviewView = (function(superClass) {
    extend(PreviewView, superClass);

    PreviewView.extend(Extender);

    PreviewView.extend(UriHelper);

    PreviewView.prototype.elements = {
      '.preview': 'preview',
      '.items': 'items',
      '.inner': 'inner',
      '.expander': 'expander',
      '.content': 'contentEl'
    };

    PreviewView.prototype.events = {
      'click a[href]': 'followLink',
      'click .expander': 'expand',
      'click .item-content': 'expand'
    };

    PreviewView.prototype.template = function(item) {
      return $('#norbuPricingTemplate').tmpl(item);
    };

    function PreviewView() {
      this.callback = bind(this.callback, this);
      PreviewView.__super__.constructor.apply(this, arguments);
      Product.bind('create update destroy', this.proxy(this.change));
      Product.bind('current', this.proxy(this.change));
      Photo.bind('develop', this.proxy(this.developed));
      Description.bind('change', this.proxy(this.render));
      ProductsPhoto.bind('update destroy', this.proxy(this.changedRelatedPhoto));
      Category.bind('change:selection', this.proxy(this.dimmPreview));
      CategoriesProduct.bind('update', this.proxy(this.changeRelatedProduct));
      CategoriesProduct.bind('destroy', this.proxy(this.change));
      this.createDummy();
      this.render();
    }

    PreviewView.prototype.newAttributes = function() {
      return {
        title: 'Semper Fi',
        id: '12345',
        price: '1.000.000,00',
        subtitle: 'Keep smiling & semper fi'
      };
    };

    PreviewView.prototype.createDummy = function() {
      this.dummy = new Product(this.newAttributes());
      return this.dummy.save({
        ajax: false
      });
    };

    PreviewView.prototype.developed = function(photos) {
      var photo;
      photo = photos[0].Photo;
      return this.callDeferred(photo, this.uriSettings(300, 300), this.callback);
    };

    PreviewView.prototype.change = function(item) {
      if ((item != null ? item.destroyed : void 0) || !item) {
        this.current = this.dummy;
      } else {
        this.current = Product.record;
      }
      if (item.id === Product.record.id) {
        return this.render();
      }
    };

    PreviewView.prototype.changedRelatedPhoto = function(item) {
      item = Product.find(item.product_id);
      if (item !== this.current) {
        return this.change(item);
      }
    };

    PreviewView.prototype.changeRelatedProduct = function(item) {
      item = Product.find(item.product_id);
      return this.change(item);
    };

    PreviewView.prototype.render = function() {
      var p;
      if (!this.current) {
        return;
      }
      this.contentEl.html(this.template(this.current));
      this.callDeferred(p = this.current.photos(), this.uriSettings(300, 300), this.callback);
      if (p.length > 1) {
        return pricingSlider(this.current.id);
      }
    };

    PreviewView.prototype.callback = function(json, items) {
      var i, jsn, key, len, res, result, results, ret, val;
      result = (function() {
        var i, len, results;
        results = [];
        for (i = 0, len = json.length; i < len; i++) {
          jsn = json[i];
          ret = (function() {
            var results1;
            results1 = [];
            for (key in jsn) {
              val = jsn[key];
              results1.push({
                src: val.src,
                id: key
              });
            }
            return results1;
          })();
          results.push(ret[0]);
        }
        return results;
      })();
      results = [];
      for (i = 0, len = result.length; i < len; i++) {
        res = result[i];
        results.push(this.snap(res));
      }
      return results;
    };

    PreviewView.prototype.snap = function(res) {
      var img, imgEl;
      imgEl = $('#' + res.id + ' img', this.el);
      img = this.createImage();
      img.imgEl = imgEl;
      img["this"] = this;
      img.res = res;
      img.onload = this.onLoad;
      img.onerror = this.onError;
      return img.src = res.src;
    };

    PreviewView.prototype.onLoad = function() {
      return this.imgEl.attr('src', this.src).removeClass('load').addClass('in');
    };

    PreviewView.prototype.onError = function(e) {
      return this["this"].snap(this.res);
    };

    PreviewView.prototype.click = function(e) {
      if (parent.hasClass('open')) {
        return;
      }
      return this.exapand(e);
    };

    PreviewView.prototype.togglePreview = function() {
      return this.expander.click();
    };

    PreviewView.prototype.dimmPreview = function(sel) {
      var dimm;
      dimm = !!sel.length;
      return this.preview.toggleClass('over', dimm);
    };

    PreviewView.prototype.expand = function(e) {
      var parent;
      parent = $(e.target).closest('li');
      parent.toggleClass('open');
      return e.preventDefault();
    };

    return PreviewView;

  })(Spine.Controller);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = PreviewView;
  }

}).call(this);
 },"controllers/product_edit_view": function(exports, require, module) { (function() {
  var $, CategoriesProduct, Extender, KeyEnhancer, ProductEditView, Spine, SubEditViewDescription, SubEditViewProduct, SubNoProduct, ToolbarView,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  KeyEnhancer = require('extensions/key_enhancer');

  Extender = require('extensions/controller_extender');

  CategoriesProduct = require('models/categories_product');

  ToolbarView = require("controllers/toolbar_view");

  SubEditViewProduct = require('controllers/sub_edit_view_product');

  SubEditViewDescription = require('controllers/sub_edit_view_description');

  SubNoProduct = require('controllers/sub_no_product');

  ProductEditView = (function(superClass) {
    extend(ProductEditView, superClass);

    ProductEditView.extend(Extender);

    ProductEditView.prototype.elements = {
      '.content': 'content',
      '.product': 'productEl',
      '.description': 'descriptionEl',
      '.noproduct': 'noProductEl',
      'button.opt-EditorProduct': 'btnProduct',
      'button.opt-EditorDescription': 'btnDescription'
    };

    ProductEditView.prototype.events = {
      'click .opt-EditorProduct': 'changeViewProduct',
      'click .opt-EditorDescription': 'changeViewDescription'
    };

    function ProductEditView() {
      ProductEditView.__super__.constructor.apply(this, arguments);
      this.bind('active', this.proxy(this.active));
      this.productView = new SubEditViewProduct({
        el: this.productEl,
        parent: this,
        btn: this.btnProduct
      });
      this.descriptionView = new SubEditViewDescription({
        el: this.descriptionEl,
        parent: this,
        btn: this.btnDescription
      });
      this.noProductView = new SubNoProduct({
        el: this.noProductEl,
        parent: this
      });
      this.manager = new Spine.Manager(this.productView, this.descriptionView, this.noProductView);
      this.activeController = this.productView;
      this.manager.bind('change', this.proxy(this.changedController));
      Product.bind('current', this.proxy(this.currentProduct));
      CategoriesProduct.bind('destroy, update', this.proxy(this.changeRelated));
      Product.bind('destroy', this.proxy(this.change));
    }

    ProductEditView.prototype.active = function() {
      return this.render();
    };

    ProductEditView.prototype.change = function(item) {
      if (item && (item != null ? item.destroyed : void 0)) {
        this.current = null;
      } else {
        this.current = item;
      }
      return this.render();
    };

    ProductEditView.prototype.changeRelated = function(item) {
      var product, ref;
      if (item.product_id !== ((ref = Product.record) != null ? ref.id : void 0)) {
        return;
      }
      product = Category.product(item.category_id, item.product_id);
      return this.change(product);
    };

    ProductEditView.prototype.currentProduct = function(item) {
      var cat, ref;
      if (item.id !== ((ref = Product.record) != null ? ref.id : void 0)) {
        return;
      }
      if (cat = Category.record) {
        item = Category.product(cat.id, item.id);
      }
      return this.change(item);
    };

    ProductEditView.prototype.changedController = function(controller) {
      var c, i, len, ref, ref1, ref2;
      ref = this.manager.controllers;
      for (i = 0, len = ref.length; i < len; i++) {
        c = ref[i];
        if (c !== controller) {
          if ((ref1 = c.btn) != null) {
            ref1.removeClass('active');
          }
        }
      }
      return (ref2 = controller.btn) != null ? ref2.addClass('active') : void 0;
    };

    ProductEditView.prototype.render = function() {
      if (this.current) {
        this.activeController.trigger('active');
      } else {
        this.noProductView.trigger('active');
      }
      return this.el;
    };

    ProductEditView.prototype.changeViewProduct = function(e) {
      var el;
      el = $(e.currentTarget);
      this.el.find('button.active').removeClass('active');
      this.activeController = this.productView;
      if (this.current) {
        return this.activeController.trigger('active', el);
      }
    };

    ProductEditView.prototype.changeViewDescription = function(e) {
      var el;
      el = $(e.currentTarget);
      this.el.find('button.active').removeClass('active');
      this.activeController = this.descriptionView;
      if (this.current) {
        return this.activeController.trigger('active', el);
      }
    };

    ProductEditView.prototype.click = function(e) {};

    return ProductEditView;

  })(Spine.Controller);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = ProductEditView;
  }

}).call(this);
 },"controllers/products_add_list": function(exports, require, module) { (function() {
  var $, CategoriesProduct, Category, Extender, Model, Photo, Product, ProductExtender, ProductsAddList, ProductsPhoto, Spine, UriHelper,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Model = Spine.Model;

  Category = require('models/category');

  Product = require('models/product');

  Photo = require('models/photo');

  ProductsPhoto = require('models/products_photo');

  CategoriesProduct = require('models/categories_product');

  Extender = require('extensions/controller_extender');

  ProductExtender = require('extensions/product_extender');

  UriHelper = require('extensions/uri_helper');

  require('extensions/tmpl');

  ProductsAddList = (function(superClass) {
    extend(ProductsAddList, superClass);

    ProductsAddList.extend(UriHelper);

    ProductsAddList.extend(Extender);

    ProductsAddList.extend(ProductExtender);

    function ProductsAddList() {
      ProductsAddList.__super__.constructor.apply(this, arguments);
    }

    ProductsAddList.prototype.render = function(items) {
      if (items.length) {
        this.html(this.template(items));
        this.renderBackgrounds(items);
      } else {
        this.renderEmpty('Es gibt nichts hinzuzufügen.');
      }
      return this.el;
    };

    ProductsAddList.prototype.exposeSelection = function(selection) {
      var el, i, id, len, results;
      this.deselect();
      results = [];
      for (i = 0, len = selection.length; i < len; i++) {
        id = selection[i];
        el = $('#' + id, this.el);
        results.push(el.addClass("active hot"));
      }
      return results;
    };

    return ProductsAddList;

  })(Spine.Controller);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = ProductsAddList;
  }

}).call(this);
 },"controllers/products_add_view": function(exports, require, module) { (function() {
  var $, CategoriesProduct, Category, Controller, Drag, Extender, Info, Product, ProductsAddList, ProductsAddView, ProductsPhoto, Spine, User,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require('spine');

  $ = Spine.$;

  Controller = Spine.Controller;

  Drag = require('extensions/drag');

  User = require("models/user");

  Product = require('models/product');

  Category = require('models/category');

  CategoriesProduct = require('models/categories_product');

  ProductsPhoto = require('models/products_photo');

  Info = require('controllers/info');

  ProductsAddList = require('controllers/products_add_list');

  User = require('models/user');

  Extender = require('extensions/controller_extender');

  require('extensions/tmpl');

  ProductsAddView = (function(superClass) {
    extend(ProductsAddView, superClass);

    ProductsAddView.extend(Extender);

    ProductsAddView.prototype.events = {
      'click .item': 'click',
      'click .opt-AddExecute:not(.disabled)': 'add',
      'click .opt-SelectInv:not(.disabled)': 'selectInv',
      'click .opt-SelectAll:not(.disabled)': 'selectAll',
      'keyup': 'keyup'
    };

    ProductsAddView.prototype.template = function(items) {
      return $('#addTemplate').tmpl({
        title: 'Select products',
        type: 'products',
        disabled: true,
        contains: !!items.length,
        container: Category.record
      });
    };

    ProductsAddView.prototype.subTemplate = function(items, options) {
      return $("#productsTemplate").tmpl(items, options);
    };

    ProductsAddView.prototype.footerTemplate = function(selection) {
      return $('#footerTemplate').tmpl({
        disabled: !selection.length,
        contains: !!this.items.length
      });
    };

    function ProductsAddView() {
      ProductsAddView.__super__.constructor.apply(this, arguments);
      this.visible = false;
      this.modal = this.el.modal({
        show: this.visible,
        backdrop: true
      });
      this.list = new ProductsAddList({
        template: this.subTemplate,
        parent: this.parent,
        modal: true
      });
      this.modal.bind('show.bs.modal', this.proxy(this.modalShow));
      this.modal.bind('hide.bs.modal', this.proxy(this.modalHide));
      Spine.bind('products:add', this.proxy(this.show));
    }

    ProductsAddView.prototype.render = function(items) {
      this.html(this.template(this.items = items));
      this.itemsEl = $('.items', this.el);
      this.list.el = this.itemsEl;
      return this.list.render(items);
    };

    ProductsAddView.prototype.renderFooter = function(selection) {
      this.footer = $('.modal-footer', this.el);
      return this.footer.html(this.footerTemplate(selection));
    };

    ProductsAddView.prototype.show = function() {
      var list, records;
      list = CategoriesProduct.products(Category.record.id).toId();
      records = Product.filter(list, {
        func: 'idExcludeSelect'
      });
      this.render(records);
      return this.el.modal('show');
    };

    ProductsAddView.prototype.hide = function() {
      return this.el.modal('hide');
    };

    ProductsAddView.prototype.modalShow = function(e) {
      this.preservedList = Category.selectionList().slice(0);
      return this.selectionList = [];
    };

    ProductsAddView.prototype.modalHide = function(e) {};

    ProductsAddView.prototype.click = function(e) {
      var item;
      e.stopPropagation();
      item = $(e.currentTarget).item();
      return this.select(item.id);
    };

    ProductsAddView.prototype.select = function(items, all) {
      var i, item, len;
      if (items == null) {
        items = [];
      }
      if (!Array.isArray(items)) {
        items = [items];
      }
      if (all) {
        this.selectionList = [];
      }
      for (i = 0, len = items.length; i < len; i++) {
        item = items[i];
        this.selectionList.addRemove(item);
      }
      this.renderFooter(this.selectionList);
      return this.list.exposeSelection(this.selectionList);
    };

    ProductsAddView.prototype.selectAll = function(e) {
      var list;
      list = this.all();
      this.select(list, true);
      e.preventDefault();
      return e.stopPropagation();
    };

    ProductsAddView.prototype.selectInv = function(e) {
      var list;
      list = this.all();
      this.select(list);
      e.preventDefault();
      return e.stopPropagation();
    };

    ProductsAddView.prototype.all = function() {
      var items, list, root;
      list = [];
      root = this.itemsEl;
      items = $('.item', root);
      items.each(function(index, el) {
        var item;
        item = $(this).item();
        return list.unshift(item.id);
      });
      return list;
    };

    ProductsAddView.prototype.add = function() {
      Product.trigger('create:join', Product.toRecords(this.selectionList), Category.record);
      return this.hide();
    };

    ProductsAddView.prototype.keyup = function(e) {
      var code;
      code = e.charCode || e.keyCode;
      this.log('PhotosAddView:keyupCode: ' + code);
      switch (code) {
        case 65:
          if (e.metaKey || e.ctrlKey) {
            this.selectAll(e);
            e.stopPropagation();
            return e.preventDefault();
          }
          break;
        case 73:
          if (e.metaKey || e.ctrlKey) {
            this.selectInv(e);
            e.preventDefault();
            return e.stopPropagation();
          }
      }
    };

    return ProductsAddView;

  })(Spine.Controller);

  module.exports = ProductsAddView;

}).call(this);
 },"controllers/products_header": function(exports, require, module) { (function() {
  var $, CategoriesProduct, Category, Extender, Photo, Product, ProductsHeader, ProductsPhoto, Spine,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Category = require('models/category');

  Product = require('models/product');

  Photo = require('models/photo');

  CategoriesProduct = require('models/categories_product');

  ProductsPhoto = require('models/products_photo');

  Extender = require('extensions/controller_extender');

  ProductsHeader = (function(superClass) {
    extend(ProductsHeader, superClass);

    ProductsHeader.extend(Extender);

    ProductsHeader.prototype.events = {
      'click .gal': 'backToCategories'
    };

    function ProductsHeader() {
      ProductsHeader.__super__.constructor.apply(this, arguments);
      this.bind('active', this.proxy(this.active));
      Category.bind('change', this.proxy(this.render));
      CategoriesProduct.bind('change', this.proxy(this.render));
      Category.bind('change:selection', this.proxy(this.render));
      Product.bind('refresh', this.proxy(this.render));
      Product.bind('change', this.proxy(this.render));
      Product.bind('change:current', this.proxy(this.render));
      Product.bind('change:collection', this.proxy(this.render));
    }

    ProductsHeader.prototype.render = function() {
      this.html(this.template({
        model: Category,
        modelProduct: Product,
        modelPhoto: Photo,
        modelGas: CategoriesProduct,
        modelAps: ProductsPhoto,
        category: Category.record,
        product: Product.record,
        photo: Photo.record,
        author: User.first().name
      }));
      return this.refreshElements();
    };

    ProductsHeader.prototype.count = function() {
      var filterOptions;
      if (Category.record) {
        filterOptions = {
          model: 'Category'
        };
        return Product.filterRelated(Category.record.id, filterOptions).length;
      } else {
        return Product.filter();
      }
    };

    ProductsHeader.prototype.backToCategories = function(e) {
      this.navigate('/category', '');
      return e.preventDefault();
    };

    ProductsHeader.prototype.goUp = function(e) {
      this.navigate('/category', '');
      e.preventDefault();
      return e.stopPropagation();
    };

    ProductsHeader.prototype.active = function() {
      return this.render();
    };

    return ProductsHeader;

  })(Spine.Controller);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = ProductsHeader;
  }

}).call(this);
 },"controllers/products_list": function(exports, require, module) { (function() {
  var $, CategoriesProduct, Category, Drag, Extender, Model, Photo, Product, ProductExtender, ProductsList, ProductsPhoto, Spine, UriHelper,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Model = Spine.Model;

  ProductsPhoto = require('models/products_photo');

  Category = require('models/category');

  Product = require('models/product');

  Photo = require('models/photo');

  Extender = require('extensions/controller_extender');

  ProductExtender = require('extensions/product_extender');

  CategoriesProduct = require('models/categories_product');

  UriHelper = require('extensions/uri_helper');

  Drag = require('extensions/drag');

  require('extensions/tmpl');

  ProductsList = (function(superClass) {
    extend(ProductsList, superClass);

    ProductsList.extend(Drag);

    ProductsList.extend(Extender);

    ProductsList.extend(ProductExtender);

    ProductsList.extend(UriHelper);

    ProductsList.prototype.events = {
      'click .dropdown-toggle': 'dropdownToggle',
      'click .opt-AddProducts': 'addProducts',
      'click .opt-delete': 'deleteProduct',
      'click .opt-ignored': 'ignoreProduct',
      'click .opt-original': 'original',
      'click .opt-favorite': 'toggleFavorite',
      'click .zoom': 'zoom'
    };

    function ProductsList() {
      ProductsList.__super__.constructor.apply(this, arguments);
      this.widows = [];
      this.add = this.html;
      Product.bind('update', this.proxy(this.updateTemplate));
      Product.bind("ajaxError", Product.errorHandler);
      CategoriesProduct.bind('change', this.proxy(this.changeRelated));
      CategoriesProduct.bind('destroy', this.proxy(this.testEmpty));
      Product.bind('change:collection', this.proxy(this.renderBackgrounds));
      Category.bind('change:selection', this.proxy(this.exposeSelection));
    }

    ProductsList.prototype.changedProducts = function(category) {};

    ProductsList.prototype.changeRelated = function(item, mode) {
      var product;
      if (!(this.parent && this.parent.isActive())) {
        return;
      }
      if (!Category.record) {
        return;
      }
      if (Category.record.id !== item['category_id']) {
        return;
      }
      product = Product.find(item['product_id']);
      product = this.mixinOne(product);
      switch (mode) {
        case 'create':
          this.wipe().append(this.template(product));
          this.renderBackgrounds(product);
          this.el.sortable('destroy').sortable();
          $('.dropdown-toggle', this.el).dropdown();
          break;
        case 'update':
          this.updateTemplate(product);
      }
      this.refreshElements();
      return this.el;
    };

    ProductsList.prototype.mixin = function(items) {
      var i, item, len, results;
      results = [];
      for (i = 0, len = items.length; i < len; i++) {
        item = items[i];
        results.push(this.mixinOne(item));
      }
      return results;
    };

    ProductsList.prototype.mixinOne = function(item) {
      var atts, ga;
      if (!Category.record) {
        return item;
      }
      ga = CategoriesProduct.productExists(item.id, Category.record.id);
      if (ga) {
        atts = ga != null ? ga.mixinAttributes(item) : void 0;
        item.silentUpdate(atts);
        return item;
      }
      return item;
    };

    ProductsList.prototype.render = function(items, mode) {
      var ref, ref1, ref2, s;
      if (items == null) {
        items = [];
      }
      if (mode == null) {
        mode = "html";
      }
      this.log('render', mode);
      if (!items.length) {
        s = (s = ((ref = this.model.record) != null ? ref.screenname : void 0) || (s = ((ref1 = this.model.record) != null ? ref1.name : void 0) || (s = (ref2 = this.model.record) != null ? ref2.title : void 0))) != null ? 'in ' + s + ' nichts los - kein Moos' : 'nichts los hier. Brutal...';
        this.renderEmpty(s);
        return this.el;
      }
      items = this.mixin(items);
      this[mode](this.template(items));
      this.renderBackgrounds(items);
      this.exposeSelection();
      $('.dropdown-toggle', this.el).dropdown();
      return this.el;
    };

    ProductsList.prototype.original = function(e) {
      var id;
      id = $(e.currentTarget).item().id;
      Category.selection[0].global.update([id]);
      this.navigate('/category', '');
      e.preventDefault();
      return e.stopPropagation();
    };

    ProductsList.prototype.toggleFavorite = function(e) {
      var cat, favorite, favorites, i, isFavorite, item, len;
      if ((cat = Category.record) && (!Category["protected"][cat != null ? cat.name : void 0])) {
        App.confirm('NO_VALID_CATEGORY', null, 'alert');
        return;
      }
      item = $(e.currentTarget).item();
      isFavorite = item.favorite;
      if (!isFavorite && item.ignored) {
        App.confirm('NO_FAVORITE_FOR_IGNORED', null, 'alert');
        return;
      }
      favorites = Product.findAllByAttribute('favorite', true);
      for (i = 0, len = favorites.length; i < len; i++) {
        favorite = favorites[i];
        favorite.updateAttributes({
          'favorite': false
        });
      }
      item.updateAttributes({
        'favorite': !isFavorite
      });
      e.preventDefault();
      return e.stopPropagation();
    };

    ProductsList.prototype.zoom = function(e) {
      var iid, item, ref;
      item = e.type === 'click' ? $(e.currentTarget).item() : this.models.record;
      this.parent.stopInfo();
      this.navigate('/category', ((ref = Category.record) != null ? ref.id : void 0) || '', (item != null ? item.id : void 0) || '', iid = (iid = typeof item.selectionList === "function" ? item.selectionList().first() : void 0) ? 'iid/' + iid : null);
      e.preventDefault();
      return e.stopPropagation();
    };

    ProductsList.prototype.back = function(e) {
      var cid, ref;
      this.navigate('/category', cid = (cid = (ref = Category.record) != null ? ref.id : void 0) ? 'cid/' + cid : null);
      e.preventDefault();
      return e.stopPropagation();
    };

    ProductsList.prototype.dropdownToggle = function(e) {
      var el;
      el = $(e.currentTarget);
      el.dropdown();
      return e.preventDefault();
    };

    ProductsList.prototype.ignoreProduct = function(e) {
      var category, product;
      product = $(e.currentTarget).item();
      category = this.parent.model.record;
      Spine.trigger('product:ignore', product, category);
      e.stopPropagation();
      return e.preventDefault();
    };

    ProductsList.prototype.deleteProduct = function(e) {
      var item, ref;
      this.log('deleteProduct');
      item = $(e.currentTarget).item();
      if ((item != null ? (ref = item.constructor) != null ? ref.className : void 0 : void 0) !== 'Product') {
        return;
      }
      Spine.trigger('delete:products', [item.id]);
      e.stopPropagation();
      return e.preventDefault();
    };

    ProductsList.prototype.addProducts = function(e) {
      this.log('add');
      return Spine.trigger('products:add');
    };

    return ProductsList;

  })(Spine.Controller);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = ProductsList;
  }

}).call(this);
 },"controllers/products_trash_header": function(exports, require, module) { (function() {
  var $, Category, Extender, ProductsTrashHeader, Spine,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Category = require('models/category');

  Extender = require('extensions/controller_extender');

  ProductsTrashHeader = (function(superClass) {
    extend(ProductsTrashHeader, superClass);

    ProductsTrashHeader.extend(Extender);

    ProductsTrashHeader.prototype.template = function(items) {
      return $("#headerProductTrashTemplate").tmpl(items);
    };

    function ProductsTrashHeader() {
      ProductsTrashHeader.__super__.constructor.apply(this, arguments);
      this.bind('active', this.proxy(this.active));
    }

    ProductsTrashHeader.prototype.render = function(item) {
      return this.html(this.template(item));
    };

    ProductsTrashHeader.prototype.active = function() {
      return this.render();
    };

    return ProductsTrashHeader;

  })(Spine.Controller);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = ProductsTrashHeader;
  }

}).call(this);
 },"controllers/products_trash_view": function(exports, require, module) { (function() {
  var $, CategoriesProduct, Controller, Drag, Extender, ProductExtender, Products, ProductsPhoto, ProductsTrash, ProductsTrashView, Spine, UriHelper, User,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Controller = Spine.Controller;

  Drag = require('extensions/drag');

  User = require("models/user");

  ProductsTrash = require("models/products_trash");

  CategoriesProduct = require("models/categories_product");

  Products = require("models/product");

  ProductsPhoto = require("models/products_photo");

  Extender = require('extensions/controller_extender');

  ProductExtender = require('extensions/product_extender');

  UriHelper = require('extensions/uri_helper');

  ProductsTrashView = (function(superClass) {
    extend(ProductsTrashView, superClass);

    ProductsTrashView.extend(UriHelper);

    ProductsTrashView.extend(Drag);

    ProductsTrashView.extend(Extender);

    ProductsTrashView.extend(ProductExtender);

    ProductsTrashView.prototype.elements = {
      '.items': 'items'
    };

    ProductsTrashView.prototype.events = {
      'click': 'clearSelection',
      'click .item': 'click',
      'click .dropdown-toggle': 'dropdownToggle',
      'click .opt-destroy': 'destroyProduct',
      'click .opt-recover': 'recoverProduct',
      'mousemove .item': 'in',
      'mouseleave .item': 'out',
      'dragstart ': 'dragstart',
      'dragend': 'dragend',
      'drop': 'drop',
      'dragover   ': 'dragover',
      'dragenter  ': 'dragenter',
      'keyup': 'keyup'
    };

    ProductsTrashView.prototype.template = function(items, options) {
      return $("#productsTrashTemplate").tmpl(items, options);
    };

    function ProductsTrashView() {
      this.out = bind(this.out, this);
      this["in"] = bind(this["in"], this);
      ProductsTrashView.__super__.constructor.apply(this, arguments);
      this.bind('active', this.proxy(this.active));
      Product.bind('beforeDestroy', this.proxy(this.beforeDestroy));
      Product.bind('destroy:trash', this.proxy(this.destroy));
      Product.bind('inbound:trash', this.proxy(this.inbound));
      Product.bind('outbound:trash', this.proxy(this.outbound));
      Product.bind('destroy:products', this.proxy(this.destroyProducts));
      Product.bind('empty:trash', this.proxy(this.emptyTrash));
      Product.bind('refresh', this.proxy(this.initTrash));
      ProductsTrash.bind('change:selection', this.proxy(this.exposeSelection));
      Spine.bind('refresh:one', this.proxy(this.refreshOne));
      this.bind('drag:start', this.proxy(this.dragStart));
      this.bind('drag:enter', this.proxy(this.dragEnter));
      this.bind('drag:over', this.proxy(this.dragOver));
      this.bind('drag:leave', this.proxy(this.dragLeave));
      this.bind('drag:drop', this.proxy(this.dragDrop));
    }

    ProductsTrashView.prototype.initTrash = function(items) {
      var i, item, len, results, trash;
      results = [];
      for (i = 0, len = items.length; i < len; i++) {
        item = items[i];
        if (!item.deleted) {
          continue;
        }
        trash = new ProductsTrash({
          id: item.id
        });
        trash.save();
        results.push(item.bind('update destroy', this.proxy(this.watch)));
      }
      return results;
    };

    ProductsTrashView.prototype.refreshOne = function() {
      return Product.one('refresh', this.proxy(this.refresh));
    };

    ProductsTrashView.prototype.refresh = function() {
      var items;
      items = Product.filter(true, {
        func: 'selectDeleted'
      });
      return this.render(items);
    };

    ProductsTrashView.prototype.render = function(items) {
      this.items.html(this.template(items));
      this.log(items);
      this.renderBackgrounds(items);
      return this.el;
    };

    ProductsTrashView.prototype.active = function(items) {
      this.render(items);
      App.showView.trigger('change:toolbarOne', ['Default', 'Help']);
      return App.showView.trigger('change:toolbarTwo', ['Speichern']);
    };

    ProductsTrashView.prototype.inbound = function(products) {
      var i, len, product;
      if (!Array.isArray(products)) {
        products = [products];
      }
      for (i = 0, len = products.length; i < len; i++) {
        product = products[i];
        product.deleted = true;
        product.save();
        Product.trigger('trashed', product);
      }
      return this.initTrash(products);
    };

    ProductsTrashView.prototype.outbound = function(item) {};

    ProductsTrashView.prototype.watch = function(item) {
      var trash;
      if (!item.deleted || item.destroyed) {
        trash = ProductsTrash.find(item.id);
        trash.destroy();
        Product.trigger('outbound:trash');
        return this.remove(item);
      }
    };

    ProductsTrashView.prototype.dropdownToggle = function(e) {
      var el;
      el = $(e.currentTarget);
      el.dropdown();
      e.stopPropagation();
      return e.preventDefault();
    };

    ProductsTrashView.prototype.recoverProduct = function(e) {
      var item;
      e.stopPropagation();
      item = $(e.currentTarget).item();
      item.deleted = false;
      return item.save();
    };

    ProductsTrashView.prototype.destroyProduct = function(e) {
      var id, item;
      e.stopPropagation();
      item = $(e.currentTarget).item();
      if (id = item != null ? item.id : void 0) {
        return this.destroyProducts(e, id);
      }
    };

    ProductsTrashView.prototype.destroyProducts = function(e, ids, callback) {
      var i, len, product, products, res, results;
      if (ids == null) {
        ids = this.model.selectionList();
      }
      this.log('destroyProducts');
      if (!Array.isArray(ids)) {
        ids = [ids];
      }
      products = Product.toRecords(ids);
      results = [];
      for (i = 0, len = products.length; i < len; i++) {
        product = products[i];
        if (product.deleted) {
          if (res || (res = App.confirm('DESTROY', this.humanize(products)))) {
            Product.trigger('destroy:trash', product);
            continue;
          } else {
            break;
          }
        } else {
          results.push(void 0);
        }
      }
      return results;
    };

    ProductsTrashView.prototype.beforeDestroy = function(product) {
      var categories, category, i, len, photos, results;
      this.log('beforeDestroy');
      product.unbind('released:fromTrash');
      product.removeSelectionID();
      categories = CategoriesProduct.categories(product.id);
      results = [];
      for (i = 0, len = categories.length; i < len; i++) {
        category = categories[i];
        category.removeFromSelection(product.id);
        photos = ProductsPhoto.photos(product.id).toId();
        results.push(Photo.trigger('destroy:join', photos, product));
      }
      return results;
    };

    ProductsTrashView.prototype.destroy = function(items) {
      var i, item, len, results;
      this.log('destroy');
      if (!Array.isArray(items)) {
        items = [items];
      }
      results = [];
      for (i = 0, len = items.length; i < len; i++) {
        item = items[i];
        results.push(item.destroy());
      }
      return results;
    };

    ProductsTrashView.prototype.emptyTrash = function(items) {
      var i, item, len, results;
      if (App.confirm('EMPTYTRASH')) {
        results = [];
        for (i = 0, len = items.length; i < len; i++) {
          item = items[i];
          results.push(item.destroy());
        }
        return results;
      }
    };

    ProductsTrashView.prototype.click = function(e) {
      var item;
      item = $(e.currentTarget).item();
      this.select(e, item.id);
      return e.stopPropagation();
    };

    ProductsTrashView.prototype.select = function(e, ids) {
      var list;
      if (ids == null) {
        ids = [];
      }
      list = this.model.selectionList().slice(0);
      if (!Array.isArray(ids)) {
        ids = [ids];
      }
      if (this.isMeta(e)) {
        list.addRemove(ids);
      } else {
        list = ids.slice(0);
      }
      this.model.updateSelection(list);
      return e.stopPropagation();
    };

    ProductsTrashView.prototype.back = function(e) {
      var cid, pid, ref, ref1;
      if (cid = (ref = Category.record) != null ? ref.id : void 0) {
        return this.navigate('/category', cid, pid = ((ref1 = Category.record) != null ? ref1.selectionList().first() : void 0) ? 'pid/' + pid : '');
      } else {
        return this.navigate('/category', '');
      }
    };

    ProductsTrashView.prototype["in"] = function(e) {
      var el;
      el = $(e.currentTarget);
      return $('.glyphicon-set.fade', el).addClass('in').removeClass('out');
    };

    ProductsTrashView.prototype.out = function(e) {
      var el, set;
      el = $(e.currentTarget);
      return set = $('.glyphicon-set.fade', el).addClass('out').removeClass('in');
    };

    ProductsTrashView.prototype.keyup = function(e) {
      var code;
      code = e.charCode || e.keyCode;
      switch (code) {
        case 8:
          this.destroyProducts(e);
          e.preventDefault();
          return e.stopPropagation();
      }
    };

    return ProductsTrashView;

  })(Spine.Controller);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = ProductsTrashView;
  }

}).call(this);
 },"controllers/products_view": function(exports, require, module) { (function() {
  var $, CategoriesProduct, Category, Controller, Drag, Extender, Info, Product, ProductsList, ProductsPhoto, ProductsView, Spine, User,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Controller = Spine.Controller;

  Drag = require('extensions/drag');

  User = require("models/user");

  Product = require('models/product');

  Category = require('models/category');

  CategoriesProduct = require('models/categories_product');

  ProductsPhoto = require('models/products_photo');

  Info = require('controllers/info');

  ProductsList = require('controllers/products_list');

  Extender = require('extensions/controller_extender');

  User = require('models/user');

  require('extensions/tmpl');

  ProductsView = (function(superClass) {
    extend(ProductsView, superClass);

    ProductsView.extend(Drag);

    ProductsView.extend(Extender);

    ProductsView.prototype.elements = {
      '.hoverinfo': 'infoEl',
      '.header .hoverinfo': 'headerEl',
      '.items': 'itemsEl'
    };

    ProductsView.prototype.events = {
      'click': 'clearSelection',
      'click      .item': 'click',
      'dragstart ': 'dragstart',
      'dragstart': 'stopInfo',
      'dragend': 'dragend',
      'drop': 'drop',
      'dragover   ': 'dragover',
      'dragenter  ': 'dragenter',
      'sortupdate .items': 'sortupdate',
      'mousemove .item': 'infoUp',
      'mouseleave .item': 'infoBye'
    };

    ProductsView.prototype.productsTemplate = function(items, options) {
      return $("#productsTemplate").tmpl(items, options);
    };

    ProductsView.prototype.headerTemplate = function(items) {
      return $("#headerProductTemplate").tmpl(items);
    };

    ProductsView.prototype.infoTemplate = function(item) {
      return $('#productInfoTemplate').tmpl(item);
    };

    function ProductsView() {
      this.stopInfo = bind(this.stopInfo, this);
      this.infoBye = bind(this.infoBye, this);
      this.infoUp = bind(this.infoUp, this);
      ProductsView.__super__.constructor.apply(this, arguments);
      this.bind('active', this.proxy(this.active));
      this.info = new Info({
        el: this.infoEl,
        template: this.infoTemplate
      });
      this.list = new ProductsList({
        el: this.itemsEl,
        template: this.productsTemplate,
        parent: this
      });
      this.header.template = this.headerTemplate;
      this.viewport = this.list.el;
      CategoriesProduct.bind('beforeDestroy', this.proxy(this.beforeDestroyCategoriesProduct));
      CategoriesProduct.bind('destroy', this.proxy(this.destroyCategoriesProduct));
      CategoriesProduct.bind('ignored', this.proxy(this.ignoreProduct));
      Spine.bind('refresh:one', this.proxy(this.refreshOne));
      Product.bind('create', this.proxy(this.create));
      Product.bind('ajaxError', Product.errorHandler);
      Product.bind('create:join', this.proxy(this.createJoin));
      Product.bind('destroy:join', this.proxy(this.destroyJoin));
      Product.bind('change:collection', this.proxy(this.renderBackgrounds));
      Product.bind('show:unpublished', this.proxy(this.showUnpublished));
      Product.bind('show:unused', this.proxy(this.showUnused));
      Product.bind('trashed', this.proxy(this.remove));
      Spine.bind('reorder', this.proxy(this.reorder));
      Spine.bind('create:product', this.proxy(this.createProduct));
      Spine.bind('loading:start', this.proxy(this.loadingStart));
      Spine.bind('loading:done', this.proxy(this.loadingDone));
      Spine.bind('loading:fail', this.proxy(this.loadingFail));
      Spine.bind('delete:products', this.proxy(this.deleteProducts));
      this.bind('drag:start', this.proxy(this.dragStart));
      this.bind('drag:enter', this.proxy(this.dragEnter));
      this.bind('drag:over', this.proxy(this.dragOver));
      this.bind('drag:leave', this.proxy(this.dragLeave));
      this.bind('drag:drop', this.proxy(this.dragDrop));
      $(this.views).queue('fx');
    }

    ProductsView.prototype.deactivate = function() {
      this.el.removeClass('active');
      return this;
    };

    ProductsView.prototype.refreshOne = function() {
      return Product.one('refresh', this.proxy(this.refresh));
    };

    ProductsView.prototype.refresh = function() {
      return this.render(Product.renderBuffer(true));
    };

    ProductsView.prototype.render = function(items, mode) {
      if (mode == null) {
        mode = 'html';
      }
      this.list.render(items, mode);
      if (Category.record) {
        this.list.sortable('product');
      }
      return this.el;
    };

    ProductsView.prototype.active = function(items, options) {
      var b1, b2;
      b1 = this.eql.call(this.parent);
      b2 = this.eql_();
      if (b1 && b2) {
        return;
      }
      App.showView.trigger('change:toolbarOne', ['Default']);
      App.showView.trigger('change:toolbarTwo', ['Trustami']);
      this.render(items);
      return this.parent.scrollTo(this.models.record);
    };

    ProductsView.prototype.resetInvalid = function(products) {
      var alb, j, len, results;
      results = [];
      for (j = 0, len = products.length; j < len; j++) {
        alb = products[j];
        if (alb.invalid) {
          alb.invalid = false;
          results.push(alb.save({
            ajax: false
          }));
        } else {
          results.push(void 0);
        }
      }
      return results;
    };

    ProductsView.prototype.activateRecord = function(ids) {
      if (!ids) {
        ids = [];
      }
      if (!Array.isArray(ids)) {
        ids = [ids];
      }
      return Product.current(ids[0]);
    };

    ProductsView.prototype.showUnpublished = function() {
      var ga, gas, item, items, j, len;
      gas = CategoriesProduct.unpublishedProducts(true);
      items = [];
      for (j = 0, len = gas.length; j < len; j++) {
        ga = gas[j];
        if (item = Product.find(ga.product_id)) {
          items.push(item);
        }
      }
      this.navigate('/category', '');
      return this.render(items);
    };

    ProductsView.prototype.showUnused = function() {
      var items;
      items = Product.unusedProducts(true);
      this.navigate('/category', '');
      return this.render(items);
    };

    ProductsView.prototype.newAttributes = function() {
      var ref, user_id;
      if (user_id = (ref = User.first()) != null ? ref.id : void 0) {
        return {
          title: this.productName(),
          subtitle: '',
          notes: '',
          link: '',
          author: User.first().name,
          invalid: true,
          ignored: true,
          favorite: false,
          user_id: user_id,
          order: Product.count()
        };
      } else {
        return User.ping();
      }
    };

    ProductsView.prototype.productName = function(proposal) {
      if (proposal == null) {
        proposal = 'New Product ' + (function() {
          var i, index, s;
          s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
          index = (i = Product.count() + 1) < s.length ? i : i % s.length;
          return s.split('')[index];
        })();
      }
      Product.each((function(_this) {
        return function(record) {
          if (record.title === proposal) {
            return proposal = _this.productName(proposal + proposal.split(' ')[1][0]);
          }
        };
      })(this));
      return proposal;
    };

    ProductsView.prototype.create = function(record) {
      return record.updateSelectionID();
    };

    ProductsView.prototype.createProduct = function(target, options) {
      var cb, product;
      if (target == null) {
        target = Category.record;
      }
      if (options == null) {
        options = {};
      }
      cb = function(record, ido) {
        var func;
        if (target) {
          record.createJoin(target);
          func = function() {
            return target.updateSelection(record.id);
          };
        } else {
          func = function() {
            var ref;
            return Category.updateSelection([record.id], (ref = Category.record) != null ? ref.id : void 0);
          };
        }
        this.navigate('/category', (target != null ? target.id : void 0) || '', 'pid', product.id);
        setTimeout(func, 100);
        $().extend(options, {
          product: record
        });
        if (options.photos) {
          Photo.trigger('create:join', options.photos, record, cb);
          cb = (function(_this) {
            return function() {
              var origin;
              if (origin = options.deleteFromOrigin) {
                return Photo.trigger('destroy:join', options.photos, origin);
              }
            };
          })(this);
        }
        if (options.deferred) {
          options.deferred.notify(record);
        }
        if (options.cb) {
          return options.cb.apply(this, [record, options.deferred]);
        }
      };
      if (!Category.record) {
        return App.confirm('NOCAT', null, 'alert');
      }
      product = new Product(this.newAttributes());
      product.one('ajaxSuccess', this.proxy(cb));
      product.save();
      return product;
    };

    ProductsView.prototype.beforeDestroyCategoriesProduct = function(ga) {
      var category, product;
      category = Category.find(ga.category_id);
      if (category) {
        category.removeFromSelection(ga.product_id);
      }
      return product = Product.find(ga.product_id);
    };

    ProductsView.prototype.destroyCategoriesProduct = function(ga) {};

    ProductsView.prototype.ignoreProduct = function(ga, ignored) {
      this.log('ignoreProduct');
      ga.ignored = ignored;
      return ga.save();
    };

    ProductsView.prototype.deleteProducts = function(ids, callback) {
      var cat, category, cats, j, k, len, len1, product, products, res1, res2, res3, res4, results;
      this.log('deleteProduct');
      if (!Array.isArray(ids)) {
        ids = [ids];
      }
      this.stopInfo();
      ids = Category.selectionList().slice(0);
      products = Product.toRecords(ids);
      results = [];
      for (j = 0, len = products.length; j < len; j++) {
        product = products[j];
        if (product.deleted) {
          Product.trigger('destroy:products', ids);
          break;
        }
        cats = CategoriesProduct.categories(product.id);
        if (!(category = Category.record)) {
          if (cats.length) {
            if (res1 || (res1 = App.confirm('REMOVE_AND_DELETE', this.humanize(products)))) {
              for (k = 0, len1 = cats.length; k < len1; k++) {
                cat = cats[k];
                this.destroyJoin(product, cat);
              }
              Product.trigger('inbound:trash', product);
              continue;
            } else {
              break;
            }
          } else {
            if (res2 || (res2 = App.confirm('DELETE', this.humanize(products)))) {
              Product.trigger('inbound:trash', product);
              continue;
            } else {
              break;
            }
          }
        } else {
          if (cats.length === 1) {
            if (res3 || (res3 = App.confirm('DELETE', this.humanize(products)))) {
              this.destroyJoin(product, category);
              Product.trigger('inbound:trash', product);
              continue;
            } else {
              break;
            }
          } else {
            if (res4 || (res4 = App.confirm('REMOVE', this.humanize(products)))) {
              this.destroyJoin(product, category);
              continue;
            } else {
              break;
            }
          }
        }
      }
      return results;
    };

    ProductsView.prototype.createJoin = function(products, category, callback) {
      Product.createJoin(products, category, callback);
      return category.updateSelection(products.toId());
    };

    ProductsView.prototype.destroyJoin = function(products, category) {
      var callback;
      this.log('destroyJoin');
      callback = function() {};
      if (!Product.isArray(products)) {
        products = [products];
      }
      return Product.destroyJoin(products, category, callback);
    };

    ProductsView.prototype.loadingStart = function(product) {
      var el;
      if (!this.isActive()) {
        return;
      }
      if (!product) {
        return;
      }
      el = this.itemsEl.children().forItem(product);
      $('.glyphicon-set', el).addClass('in');
      return $('.downloading', el).removeClass('hide').addClass('in');
    };

    ProductsView.prototype.loadingDone = function(product) {
      var el;
      if (!this.isActive()) {
        return;
      }
      if (!product) {
        return;
      }
      el = this.itemsEl.children().forItem(product);
      $('.glyphicon-set', el).removeClass('in');
      return $('.downloading', el).removeClass('in').addClass('hide');
    };

    ProductsView.prototype.loadingFail = function(product, error) {
      var el, err;
      if (!this.isActive()) {
        return;
      }
      err = error.errorThrown;
      el = this.itemsEl.children().forItem(product);
      $('.glyphicon-set', el).removeClass('in');
      return $('.downloading', el).addClass('error').tooltip('destroy').tooltip({
        title: err
      }).tooltip('show');
    };

    ProductsView.prototype.renderBackgrounds = function(products) {
      if (!this.isActive()) {
        return;
      }
      return this.list.renderBackgrounds(products);
    };

    ProductsView.prototype.sortupdate = function(e, o) {
      var cb;
      cb = function() {
        return Category.trigger('change:collection', Category.record);
      };
      this.list.children().each(function(index) {
        var ga, item;
        item = $(this).item();
        if (item && Category.record) {
          ga = CategoriesProduct.filter(item.id, {
            func: 'selectProduct'
          })[0];
          if (ga && parseInt(ga.order) !== index) {
            ga.order = index;
            return ga.silentUpdate();
          }
        }
      });
      return Category.record.save({
        done: cb
      });
    };

    ProductsView.prototype.reorder = function(category) {
      if (category.id === Category.record.id) {
        return this.render(Product.renderBuffer());
      }
    };

    ProductsView.prototype.click = function(e, excl) {
      var item;
      item = $(e.currentTarget).item();
      return this.select(e, item.id);
    };

    ProductsView.prototype.select = function(e, ids) {
      var list, ref, ref1;
      if (ids == null) {
        ids = [];
      }
      if (!Array.isArray(ids)) {
        ids = [ids];
      }
      if ((this.isMeta(e)) && e.type === 'click') {
        list = this.model.selectionList().slice(0);
        list.addRemove(ids);
      } else {
        list = ids.slice(0);
      }
      if (list.length) {
        this.navigate('/category', ((ref = Category.record) != null ? ref.id : void 0) || '', 'pid', list[0]);
      } else {
        this.navigate('/category', ((ref1 = Category.record) != null ? ref1.id : void 0) || '');
      }
      this.model.updateSelection(list);
      return e.stopPropagation();
    };

    ProductsView.prototype.infoUp = function(e) {
      var el;
      this.info.up(e);
      el = $(e.currentTarget);
      return $('.glyphicon-set.fade', el).addClass('in').removeClass('out');
    };

    ProductsView.prototype.infoBye = function(e) {
      var el, set;
      this.info.bye(e);
      el = $(e.currentTarget);
      return set = $('.glyphicon-set.fade', el).addClass('out').removeClass('in');
    };

    ProductsView.prototype.stopInfo = function(e) {
      return this.info.bye(e);
    };

    ProductsView.prototype.dropComplete = function(e) {
      return this.log('dropComplete');
    };

    return ProductsView;

  })(Spine.Controller);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = ProductsView;
  }

}).call(this);
 },"controllers/refresh_view": function(exports, require, module) { (function() {
  var $, Category, Description, Photo, Product, RefreshView, Spine,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Category = require('models/category');

  Product = require('models/product');

  Photo = require('models/photo');

  Description = require('models/description');

  RefreshView = (function(superClass) {
    extend(RefreshView, superClass);

    RefreshView.prototype.elements = {
      'button': 'logoutEl'
    };

    RefreshView.prototype.events = {
      'click .opt-Refresh': 'refresh'
    };

    RefreshView.prototype.template = function(icon) {
      if (icon == null) {
        icon = 'repeat';
      }
      return $('#refreshTemplate').tmpl({
        icon: icon
      });
    };

    function RefreshView() {
      RefreshView.__super__.constructor.apply(this, arguments);
      Spine.bind('refresh:all', this.proxy(this.refresh));
    }

    RefreshView.prototype.refresh = function(e) {
      this.render('cloud-download');
      Spine.trigger('refresh:one');
      this.fetchAll();
      if (e != null) {
        e.stopPropagation();
      }
      return e != null ? e.preventDefault() : void 0;
    };

    RefreshView.prototype.render = function(icon) {
      return this.html(this.template(icon));
    };

    RefreshView.prototype.fetchAll = function() {
      Photo.fetch(null, {
        clear: true
      });
      Product.fetch(null, {
        clear: true
      });
      Category.fetch(null, {
        clear: true
      });
      return Description.fetch(null, {
        clear: true
      });
    };

    return RefreshView;

  })(Spine.Controller);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = RefreshView;
  }

}).call(this);
 },"controllers/show_view": function(exports, require, module) { (function() {
  var $, CategoriesHeader, CategoriesProduct, CategoriesView, Category, Clipboard, Controller, Drag, Extender, ModalSimpleView, Model, MysqlAjax, Photo, PhotoHeader, PhotoView, PhotosAddView, PhotosHeader, PhotosTrash, PhotosTrashHeader, PhotosTrashView, PhotosView, Product, ProductsAddView, ProductsHeader, ProductsPhoto, ProductsTrash, ProductsTrashHeader, ProductsTrashView, ProductsView, Root, ShowView, Spine, ToolbarView, WaitView,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty,
    slice = [].slice,
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  Spine = require("spine");

  $ = Spine.$;

  Model = Spine.Model;

  Controller = Spine.Controller;

  Root = require('models/root');

  Category = require('models/category');

  Product = require('models/product');

  Photo = require('models/photo');

  ProductsPhoto = require('models/products_photo');

  ProductsTrash = require('models/products_trash');

  PhotosTrash = require('models/photos_trash');

  CategoriesProduct = require('models/categories_product');

  Clipboard = require("models/clipboard");

  ToolbarView = require("controllers/toolbar_view");

  WaitView = require("controllers/wait_view");

  ProductsView = require("controllers/products_view");

  PhotosHeader = require('controllers/photos_header');

  PhotosView = require('controllers/photos_view');

  PhotoHeader = require('controllers/photo_header');

  PhotoView = require('controllers/photo_view');

  ProductsHeader = require('controllers/products_header');

  ProductsTrashView = require('controllers/products_trash_view');

  ProductsTrashHeader = require('controllers/products_trash_header');

  PhotosTrashView = require('controllers/photos_trash_view');

  PhotosTrashHeader = require('controllers/photos_trash_header');

  ProductsAddView = require('controllers/products_add_view');

  PhotosAddView = require('controllers/photos_add_view');

  CategoriesView = require('controllers/categories_view');

  CategoriesHeader = require('controllers/categories_header');

  ModalSimpleView = require("controllers/modal_simple_view");

  Extender = require('extensions/controller_extender');

  Drag = require('extensions/drag');

  MysqlAjax = require('extensions/mysql_ajax');

  require('spine/lib/manager');

  ShowView = (function(superClass) {
    extend(ShowView, superClass);

    ShowView.extend(Drag);

    ShowView.extend(Extender);

    ShowView.extend(MysqlAjax);

    ShowView.prototype.elements = {
      '#fileupload': 'uploader',
      '#views .views': 'views',
      '.contents': 'contents',
      '.items': 'lists',
      '.header .categories': 'categoriesHeaderEl',
      '.header .products': 'productsHeaderEl',
      '.header .photos': 'photosHeaderEl',
      '.header .photo': 'photoHeaderEl',
      '.header .photos-trash': 'photosTrashHeaderEl',
      '.header .products-trash': 'productsTrashHeaderEl',
      '.opt-EditCategory': 'btnEditCategory',
      '.opt-Category .ui-icon': 'btnCategory',
      '.opt-AutoUpload': 'btnAutoUpload',
      '.opt-Previous': 'btnPrevious',
      '.opt-Sidebar': 'btnSidebar',
      '.opt-FullScreen': 'btnFullScreen',
      '.opt-Save': 'btnSave',
      '.toolbar-one': 'toolbarOneEl',
      '.toolbar-two': 'toolbarTwoEl',
      '.props': 'propsEl',
      '.content.photos-trash': 'photosTrashEl',
      '.content.products-trash': 'productsTrashEl',
      '.content.categories': 'categoriesEl',
      '.content.products': 'productsEl',
      '.content.photos': 'photosEl',
      '.content.photo': 'photoEl',
      '.content.wait': 'waitEl',
      '#modal-action': 'modalActionEl',
      '#modal-addProduct': 'modalAddProductEl',
      '#modal-addPhoto': 'modalAddPhotoEl',
      '.slider': 'slider',
      '.opt-Product': 'btnProduct',
      '.opt-Category': 'btnCategory',
      '.opt-Photo': 'btnPhoto',
      '.opt-Upload': 'btnUpload'
    };

    ShowView.prototype.events = {
      'click .dropdown-toggle:not(.disabled)': 'dropdown',
      'click a[href]:not(.disabled)': 'followLink',
      'click .opt-MysqlDump:not(.disabled)': 'mysqlDump',
      'click .opt-MysqlRestore:not(.disabled)': 'mysqlRestore',
      'click .opt-ShowProducts:not(.disabled)': 'showProducts',
      'click .opt-ShowPhotos:not(.disabled)': 'showPhotos',
      'click .opt-ShowPhoto:not(.disabled)': 'showPhoto',
      'click .opt-AutoUpload:not(.disabled)': 'toggleAutoUpload',
      'click .opt-Previous:not(.disabled)': 'back',
      'click .opt-Sidebar:not(.disabled)': 'toggleSidebar',
      'click .opt-FullScreen:not(.disabled)': 'toggleFullScreen',
      'click .opt-CreateCategory:not(.disabled)': 'createCategory',
      'click .opt-CreateProduct:not(.disabled)': 'createProduct',
      'click .opt-DuplicateProducts:not(.disabled)': 'duplicateProducts',
      'click .opt-ToggleVisible:not(.disabled)': 'toggleVisible',
      'click .opt-CopyProductsToNewCategory:not(.disabled)': 'copyProductsToNewCategory',
      'click .opt-CopyPhotosToNewProduct:not(.disabled)': 'copyPhotosToNewProduct',
      'click .opt-CopyPhoto:not(.disabled)': 'copyPhoto',
      'click .opt-CutPhoto:not(.disabled)': 'cutPhoto',
      'click .opt-PastePhoto:not(.disabled)': 'pastePhoto',
      'click .opt-CopyProduct:not(.disabled)': 'copyProduct',
      'click .opt-CutProduct:not(.disabled)': 'cutProduct',
      'click .opt-PasteProduct:not(.disabled)': 'pasteProduct',
      'click .opt-EmptyProduct:not(.disabled)': 'emptyProduct',
      'click .opt-EmptyPhotosTrash:not(.disabled)': 'emptyPhotosTrash',
      'click .opt-EmptyProductsTrash:not(.disabled)': 'emptyProductsTrash',
      'click .opt-IntroQuatsch:not(.disabled)': 'toggleIntroQuatsch',
      'click .opt-CreatePhoto:not(.disabled)': 'createPhoto',
      'click .opt-DestroyEmptyProducts:not(.disabled)': 'destroyEmptyProducts',
      'click .opt-DeleteCategory:not(.disabled)': 'deleteCategory',
      'click .opt-DeleteProduct:not(.disabled)': 'deleteProduct',
      'click .opt-DeletePhoto:not(.disabled)': 'deletePhoto',
      'click .opt-Category:not(.disabled)': 'toggleCategoryShow',
      'click .opt-Rotate-cw:not(.disabled)': 'rotatePhotoCW',
      'click .opt-Rotate-ccw:not(.disabled)': 'rotatePhotoCCW',
      'click .opt-Product:not(.disabled)': 'toggleProductShow',
      'click .opt-Photo:not(.disabled)': 'togglePhotoShow',
      'click .opt-Upload:not(.disabled)': 'toggleUploadShow',
      'click .opt-UploadDialogue:not(.disabled)': 'uploadDialogue',
      'click .opt-ShowOverview:not(.disabled)': 'showOverview',
      'click .opt-ShowCategories:not(.disabled)': 'showCategories',
      'click .opt-ShowAllProducts:not(.disabled)': 'showProductMasters',
      'click .opt-AddProducts:not(.disabled)': 'showProductMastersAdd',
      'click .opt-ShowAllPhotos:not(.disabled)': 'showPhotoMasters',
      'click .opt-AddPhotos:not(.disabled)': 'showPhotoMastersAdd',
      'click .opt-ActionCancel:not(.disabled)': 'cancelAdd',
      'click .opt-ShowPhotoSelection:not(.disabled)': 'showPhotoSelection',
      'click .opt-ShowProductSelection:not(.disabled)': 'showProductSelection',
      'click .opt-SelectAll:not(.disabled)': 'selectAll',
      'click .opt-SelectNone.btn:not(.disabled)': 'selectNone',
      'click .opt-SelectNone:not(.btn):not(.disabled)': 'deselect',
      'click .opt-SelectInv:not(.disabled)': 'selectInv',
      'click .opt-CloseDraghandle:not(.disabled)': 'toggleDraghandle',
      'click .opt-Help:not(.disabled)': 'help',
      'click .opt-Version:not(.disabled)': 'version',
      'click .opt-Prev:not(.disabled)': 'prev',
      'click .opt-ShowProductsTrash:not(.disabled)': 'showProductsTrash',
      'click .opt-ShowPhotosTrash:not(.disabled)': 'showPhotosTrash',
      'click .opt-ShowFavorite:not(.disabled)': 'showFavorite',
      'dblclick .draghandle': 'toggleDraghandle',
      'hidden.bs.modal': 'hiddenmodal',
      'keydown': 'keydown',
      'keyup': 'keyup'
    };

    function ShowView() {
      this.sliderSlide = bind(this.sliderSlide, this);
      this.initSlider = bind(this.initSlider, this);
      ShowView.__super__.constructor.apply(this, arguments);
      this.bind('active', this.proxy(this.active));
      this.silent = true;
      this.toolbarOne = new ToolbarView({
        el: this.toolbarOneEl
      });
      this.toolbarTwo = new ToolbarView({
        el: this.toolbarTwoEl
      });
      this.categoriesHeader = new CategoriesHeader({
        el: this.categoriesHeaderEl
      });
      this.productsHeader = new ProductsHeader({
        el: this.productsHeaderEl,
        parent: this
      });
      this.photosHeader = new PhotosHeader({
        el: this.photosHeaderEl,
        parent: this
      });
      this.photoHeader = new PhotoHeader({
        el: this.photoHeaderEl,
        parent: this
      });
      this.categoriesView = new CategoriesView({
        el: this.categoriesEl,
        assocControl: 'opt-Category',
        header: this.categoriesHeader,
        parent: this
      });
      this.productsView = new ProductsView({
        el: this.productsEl,
        header: this.productsHeader,
        parentModel: Category,
        parent: this
      });
      this.photosView = new PhotosView({
        el: this.photosEl,
        header: this.photosHeader,
        parentModel: Product,
        parent: this
      });
      this.photoView = new PhotoView({
        el: this.photoEl,
        header: this.photoHeader,
        photosView: this.photosView,
        parent: this,
        parentModel: Photo
      });
      this.productsTrashHeader = new ProductsTrashHeader({
        el: this.productsTrashHeaderEl
      });
      this.photosTrashHeader = new PhotosTrashHeader({
        el: this.photosTrashHeaderEl
      });
      this.productsTrashView = new ProductsTrashView({
        el: this.productsTrashEl,
        header: this.productsTrashHeader,
        parent: this
      });
      this.photosTrashView = new PhotosTrashView({
        el: this.photosTrashEl,
        header: this.photosTrashHeader,
        parent: this
      });
      this.productsAddView = new ProductsAddView({
        el: this.modalAddProductEl,
        parent: this.productsView
      });
      this.photosAddView = new PhotosAddView({
        el: this.modalAddPhotoEl,
        parent: this.photosView
      });
      this.waitView = new WaitView({
        el: this.waitEl,
        parent: this
      });
      this.bind('change:toolbarOne', this.proxy(this.changeToolbarOne));
      this.bind('change:toolbarTwo', this.proxy(this.changeToolbarTwo));
      this.bind('activate:editview', this.proxy(this.activateEditView));
      this.toolbarOne.bind('refresh', this.proxy(this.refreshToolbar));
      this.bind('awake', this.proxy(this.awake));
      this.bind('sleep', this.proxy(this.sleep));
      Category.bind('change:current', this.proxy(this.toggleClassAll));
      Product.bind('change:current', this.proxy(this.toggleClassAll));
      Category.bind('change', this.proxy(this.changeToolbarOne));
      Category.bind('change:selection', this.proxy(this.refreshToolbars));
      Product.bind('change:selection', this.proxy(this.refreshToolbars));
      CategoriesProduct.bind('change', this.proxy(this.refreshToolbars));
      ProductsTrash.bind('change:selection', this.proxy(this.refreshToolbars));
      PhotosTrash.bind('change:selection', this.proxy(this.refreshToolbars));
      CategoriesProduct.bind('error', this.proxy(this.error));
      CategoriesProduct.bind('destroy', this.proxy(this.removeJoinedProductElement));
      ProductsPhoto.bind('destroy', this.proxy(this.removeJoinedPhotoElement));
      ProductsPhoto.bind('error', this.proxy(this.error));
      ProductsPhoto.bind('create destroy', this.proxy(this.refreshToolbars));
      Product.bind('change', this.proxy(this.changeToolbarOne));
      Photo.bind('change', this.proxy(this.changeToolbarOne));
      Photo.bind('refresh', this.proxy(this.refreshToolbars));
      Product.bind('current', this.proxy(this.refreshToolbars));
      Spine.bind('products:copy', this.proxy(this.copyProducts));
      Spine.bind('photos:copy', this.proxy(this.copyPhotos));
      Spine.bind('product:ignore', this.proxy(this.ignoreProduct));
      this.current = this.controller = this.productsView;
      this.sOutValue = 160;
      this.sliderRatio = 50;
      this.thumbSize = 240;
      this.canvasManager = new Spine.Manager(this.categoriesView, this.productsView, this.photosView, this.photoView, this.photosTrashView, this.productsTrashView);
      this.headerManager = new Spine.Manager(this.categoriesHeader, this.productsHeader, this.photosHeader, this.photoHeader, this.photosTrashHeader, this.productsTrashHeader);
      this.canvasManager.bind('change', this.proxy(this.changeCanvas));
      this.headerManager.bind('change', this.proxy(this.changeHeader));
      this.trigger('change:toolbarOne');
      Category.bind('current', this.proxy(this.scrollTo));
      Product.bind('current', this.proxy(this.scrollTo));
      Photo.bind('current', this.proxy(this.scrollTo));
      Model.Settings.bind('change', this.proxy(this.changeSettings));
      Model.Settings.bind('refresh', this.proxy(this.refreshSettings));
    }

    ShowView.prototype.dropdown = function(e) {
      var el;
      el = $(e.target);
      el.dropdown('toggle');
      return e.stopPropagation();
    };

    ShowView.prototype.active = function(controller, params) {
      var ref;
      this.log('active');
      if (controller) {
        controller.trigger('active', params);
        if ((ref = controller.header) != null) {
          ref.trigger('active');
        }
        return this.activated(controller).focus();
      }
    };

    ShowView.prototype.activated = function(controller) {
      var c, p;
      if (!this.current.subview) {
        p = this.previous = this.current;
      }
      c = this.current = this.controller = controller;
      this.currentHeader = controller.header;
      this.prevLocation = location.hash;
      this.el.data('current', {
        model: controller.model,
        models: controller.models
      });
      return this.controller;
    };

    ShowView.prototype.changeCanvas = function(controller, args) {
      return this.transform(controller, this.previous, this.current);
    };

    ShowView.prototype.transform = function(controller, pContr, cContr) {
      var c, cm, e, fadein, i, len, pm, ref;
      try {
        cm = cContr.model.className;
        pm = pContr.model.className;
      } catch (error) {
        e = error;
      }
      this.controllers = (function() {
        var i, len, ref, results;
        ref = this.canvasManager.controllers;
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          c = ref[i];
          if (c !== controller) {
            results.push(c);
          }
        }
        return results;
      }).call(this);
      ref = this.controllers;
      for (i = 0, len = ref.length; i < len; i++) {
        c = ref[i];
        $('.items', this.el).removeClass('in3');
      }
      fadein = (function(_this) {
        return function() {
          var viewport;
          viewport = controller.viewport || controller.el;
          return viewport.addClass('in3');
        };
      })(this);
      return window.setTimeout((function(_this) {
        return function() {
          return fadein();
        };
      })(this), 500);
    };

    ShowView.prototype.resetSelection = function(controller) {};

    ShowView.prototype.changeHeader = function(controller) {};

    ShowView.prototype.changeToolbarOne = function(list) {
      this.toolbarOne.change(list);
      this.toolbarTwo.refresh();
      return this.refreshElements();
    };

    ShowView.prototype.changeToolbarTwo = function(list) {
      this.toolbarTwo.change(list);
      return this.refreshElements();
    };

    ShowView.prototype.refreshToolbar = function(toolbar, lastControl) {};

    ShowView.prototype.refreshToolbars = function() {
      this.log('refreshToolbars');
      this.toolbarOne.refresh();
      return this.toolbarTwo.refresh();
    };

    ShowView.prototype.renderViewControl = function(controller) {
      return App[controller].trigger('active');
    };

    ShowView.prototype.createCategory = function(e) {
      Spine.trigger('create:category');
      return e.preventDefault();
    };

    ShowView.prototype.createPhoto = function(e) {
      Spine.trigger('create:photo');
      return e.preventDefault();
    };

    ShowView.prototype.createProduct = function() {
      return Spine.trigger('create:product');
    };

    ShowView.prototype.copyProducts = function(products, category) {
      return Product.trigger('create:join', products, category);
    };

    ShowView.prototype.copyPhotos = function(photos, product) {
      return Photo.trigger('create:join', photos, product);
    };

    ShowView.prototype.copyProductsToNewCategory = function() {
      return this.productsToCategory(Category.selectionList().slice(0));
    };

    ShowView.prototype.copyPhotosToNewProduct = function() {
      return this.photosToProduct(Product.selectionList().slice(0));
    };

    ShowView.prototype.duplicateStart = function() {};

    ShowView.prototype.donecallback = function(rec) {};

    ShowView.prototype.failcallback = function(t) {};

    ShowView.prototype.progresscallback = function(rec) {};

    ShowView.prototype.duplicateProducts = function() {
      this.deferred = $.Deferred();
      return $.when(this.duplicateProductsDeferred()).then(this.donecallback, this.failcallback, this.progresscallback);
    };

    ShowView.prototype.duplicateProductsDeferred = function() {
      var deferred, i, id, len, list;
      deferred = this.deferred || (this.deferred = $.Deferred());
      list = Category.selectionList();
      for (i = 0, len = list.length; i < len; i++) {
        id = list[i];
        this.duplicateProduct(id);
      }
      return deferred.promise();
    };

    ShowView.prototype.duplicateProduct = function(id) {
      var callback, photos, product;
      if (!(product = Product.find(id))) {
        return;
      }
      callback = (function(_this) {
        return function(a, def) {
          return _this.deferred.always(function() {
            return this.log('completed with success ' + a.id);
          });
        };
      })(this);
      photos = product.photos().toId();
      return this.photosToProduct(photos, callback);
    };

    ShowView.prototype.duplicateProduct_new = function(id) {
      var descr, newProduct, options, product, productPhotos, target;
      if (!(product = Product.find(id))) {
        return;
      }
      target = Category.record;
      productPhotos = ProductsPhoto.productsPhotos(product.id);
      descr = product.descriptions();
      options = {
        ajax: false,
        validate: false
      };
      newProduct = product.dup(true, options);
      productPhotos = ProductsPhoto.duplicate(productPhotos, {
        'product_id': newProduct.id
      }, options);
      if (Category.record) {
        Product.createJoin(newProduct, Category.record);
      }
      newProduct.save();
      if (Category.record) {
        Category.record.save();
      }
      return this.log(newProduct);
    };

    ShowView.prototype.productsToCategory = function(products, category) {
      return Spine.trigger('create:category', {
        products: products,
        category: category,
        deleteFromOrigin: false,
        relocate: true
      });
    };

    ShowView.prototype.photosToProduct = function(photos, callback) {
      var target;
      target = Category.record;
      return Spine.trigger('create:product', target, {
        photos: photos,
        deleteFromOrigin: false,
        relocate: true,
        deferred: this.deferred,
        cb: callback
      });
    };

    ShowView.prototype.createProductCopy = function(products, target) {
      var i, id, len, photos;
      if (products == null) {
        products = Category.selectionList();
      }
      if (target == null) {
        target = Category.record;
      }
      this.log('createProductCopy');
      for (i = 0, len = products.length; i < len; i++) {
        id = products[i];
        if (Product.find(id)) {
          photos = Product.photos(id).toId();
          Spine.trigger('create:product', target({
            photos: photos
          }));
        }
      }
      if (target) {
        target.updateSelection(products);
        return this.navigate('/category', target.id);
      } else {
        return this.showProductMasters();
      }
    };

    ShowView.prototype.createProductMove = function(products, target) {
      var i, id, len, photos;
      if (products == null) {
        products = Category.selectionList();
      }
      if (target == null) {
        target = Category.record;
      }
      for (i = 0, len = products.length; i < len; i++) {
        id = products[i];
        if (Product.find(id)) {
          photos = Product.photos(id).toId();
          Spine.trigger('create:product', target({
            photos: photos,
            from: Product.record
          }));
        }
      }
      if (Category.record) {
        return this.navigate('/category', target.id);
      } else {
        return this.showProductMasters();
      }
    };

    ShowView.prototype.removeJoinedProductElement = function(cp) {
      var item;
      if ((item = Product.find(cp.product_id)) && cp.category_id === Category.record.id) {
        return this.controller.remove(item);
      }
    };

    ShowView.prototype.removeJoinedPhotoElement = function(cp) {
      var item;
      if (item = Photo.find(cp.photo_id)) {
        return this.remove(item);
      }
    };

    ShowView.prototype.emptyProduct = function(e) {
      var aid, ap, aps, i, j, len, len1, product, products;
      products = Category.selectionList();
      for (i = 0, len = products.length; i < len; i++) {
        aid = products[i];
        if (product = Product.find(aid)) {
          aps = ProductsPhoto.filter(product.id, {
            associationForeignKey: 'product_id'
          });
          for (j = 0, len1 = aps.length; j < len1; j++) {
            ap = aps[j];
            ap.destroy();
          }
        }
        Product.trigger('change:collection', product);
      }
      return e.preventDefault();
    };

    ShowView.prototype.emptyProductsTrash = function() {
      var items;
      items = Product.filter(true, {
        func: 'selectDeleted'
      });
      return Product.trigger('empty:trash', items);
    };

    ShowView.prototype.emptyPhotosTrash = function() {
      var items;
      items = Photo.filter(true, {
        func: 'selectDeleted'
      });
      return Photo.trigger('empty:trash', items);
    };

    ShowView.prototype.editCategory = function(e) {
      return Spine.trigger('edit:category');
    };

    ShowView.prototype.editProduct = function(e) {
      return Spine.trigger('edit:product');
    };

    ShowView.prototype.destroyEmptyProducts = function(e) {
      var i, len, product, products, results;
      products = Product.findEmpties();
      results = [];
      for (i = 0, len = products.length; i < len; i++) {
        product = products[i];
        results.push(product.destroy());
      }
      return results;
    };

    ShowView.prototype.deleteSelected = function(e) {
      var models;
      this.log('deleteSelected');
      models = this.controller.models;
      return this['delete' + models.className]();
    };

    ShowView.prototype.deleteCategory = function(e) {
      var id, ref;
      if (!(id = (ref = Category.record) != null ? ref.id : void 0)) {
        return;
      }
      return Spine.trigger('delete:category', id);
    };

    ShowView.prototype.deleteProduct = function(e) {
      var model;
      model = App.showView.current.model;
      return Spine.trigger('delete:products', model.selectionList());
    };

    ShowView.prototype.deletePhoto = function(e) {
      var model;
      model = App.showView.current.model;
      return Spine.trigger('delete:photos', model.selectionList());
    };

    ShowView.prototype.toggleCategoryShow = function(e) {
      this.trigger('activate:editview', 'category', e.target);
      return e.preventDefault();
    };

    ShowView.prototype.toggleProductShow = function(e) {
      this.trigger('activate:editview', 'product', e.target);
      this.refreshToolbars();
      return e.preventDefault();
    };

    ShowView.prototype.togglePhotoShow = function(e) {
      this.trigger('activate:editview', 'upload', e.target);
      this.refreshToolbars();
      return e.preventDefault();
    };

    ShowView.prototype.toggleUploadShow = function(e) {
      this.trigger('activate:editview', 'upload', e.target);
      this.refreshToolbars();
      e.preventDefault();
      return e.stopPropagation();
    };

    ShowView.prototype.toggleCategory = function(e) {
      this.changeToolbarOne(['Category']);
      this.refreshToolbars();
      return e.preventDefault();
    };

    ShowView.prototype.toggleProduct = function(e) {
      this.changeToolbarOne(['Product']);
      this.refreshToolbars();
      return e.preventDefault();
    };

    ShowView.prototype.togglePhoto = function(e) {
      this.changeToolbarOne(['Photos', 'Slider']);
      return this.refreshToolbars();
    };

    ShowView.prototype.toggleUpload = function(e) {
      this.changeToolbarOne(['Upload']);
      return this.refreshToolbars();
    };

    ShowView.prototype.toggleSidebar = function() {
      return App.sidebar.toggleDraghandle();
    };

    ShowView.prototype.toggleFullScreen = function() {
      this.toggleFullScreen();
      return this.refreshToolbars();
    };

    ShowView.prototype.toggleFullScreen = function(activate) {
      var isActive, root;
      root = document.documentElement;
      if (activate || !(isActive = this.fullScreenEnabled())) {
        if (root.webkitRequestFullScreen) {
          root.webkitRequestFullScreen(window.Element.ALLOW_KEYBOARD_INPUT);
        } else if (root.mozRequestFullScreen) {
          root.mozRequestFullScreen();
        }
      } else {
        (document.webkitCancelFullScreen || document.mozCancelFullScreen || $.noop).apply(document);
      }
      return this.fullScreenEnabled();
    };

    ShowView.prototype.fullScreenEnabled = function() {
      return !!window.fullScreen;
    };

    ShowView.prototype.toggleDraghandle = function() {
      return this.animateView();
    };

    ShowView.prototype.toggleAutoUpload = function() {
      var active, args, b, settings;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      settings = Model.Settings.loadSettings();
      b = args.length ? args[0] : !settings.autoupload;
      active = settings.autoupload = !!b;
      this.uploader.fileupload('option', 'autoUpload', active);
      settings.save();
      return this.refreshToolbars();
    };

    ShowView.prototype.toggleIntroQuatsch = function(e) {
      var active, b, settings;
      settings = Model.Settings.loadSettings();
      b = !settings.intro;
      active = settings.intro = !!b;
      settings.save();
      return this.refreshToolbars();
    };

    ShowView.prototype.refreshSettings = function(records) {
      var settings;
      if (settings = Model.Settings.loadSettings()) {
        this.changeSettings(settings);
      }
      return this.refreshToolbars();
    };

    ShowView.prototype.changeSettings = function(rec) {
      var active;
      active = rec.autoupload;
      $('#fileupload').fileupload('option', 'autoUpload', active);
      return this.refreshToolbars();
    };

    ShowView.prototype.isAutoUpload = function() {
      return $('#fileupload').fileupload('option', 'autoUpload');
    };

    ShowView.prototype.activateEditView = function(controller) {
      App[controller].trigger('active');
      return this.openView();
    };

    ShowView.prototype.closeView = function() {
      if (!App.hmanager.el.hasClass('open')) {
        return;
      }
      return this.animateView({
        close: true
      });
    };

    ShowView.prototype.openView = function(val) {
      if (val == null) {
        val = '300';
      }
      if (App.hmanager.el.hasClass('open')) {
        return;
      }
      return this.animateView({
        open: val
      });
    };

    ShowView.prototype.animateView = function(options) {
      var height, isOpen, min, speed;
      min = 25;
      options = $().extend({
        open: false
      }, options);
      speed = options.close || options.open ? 800 : 700;
      if (options.open) {
        App.hmanager.el.removeClass('open');
        App.hmanager.el.addClass('forcedopen');
      }
      isOpen = function() {
        return App.hmanager.el.hasClass('open');
      };
      height = function() {
        var h;
        h = !isOpen() ? parseInt(options.open || App.hmanager.currentDim) : parseInt(min);
        return h;
      };
      return this.views.animate({
        height: height() + 'px'
      }, speed, function() {
        var args;
        args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
        if ($(this).height() === min) {
          return $(this).removeClass('open forcedopen');
        } else {
          return $(this).addClass('open');
        }
      });
    };

    ShowView.prototype.awake = function() {
      return this.views.addClass('open');
    };

    ShowView.prototype.sleep = function() {
      return this.animateView();
    };

    ShowView.prototype.openPanel = function(controller) {
      var ui;
      if (this.views.hasClass('open')) {
        return;
      }
      App[controller].deactivate();
      ui = App.hmanager.externalClass(App[controller]);
      return ui.click();
    };

    ShowView.prototype.closePanel = function(controller, target) {
      App[controller].trigger('active');
      return target.click();
    };

    ShowView.prototype.deselect = function(e) {
      var model;
      model = this.current.model;
      if (model) {
        return model.updateSelection([]);
      }
    };

    ShowView.prototype.selectNone = function(e) {
      return this.deselect(e);
    };

    ShowView.prototype.selectAll = function(e) {
      var list;
      try {
        list = this.all();
        return this.current.select(e, list);
      } catch (error) {
        e = error;
      }
    };

    ShowView.prototype.selectInv = function(e) {
      var list, selList;
      try {
        list = this.all();
        selList = this.current.model.selectionList();
        list.addRemove(selList);
        return this.current.select(e, list);
      } catch (error) {
        e = error;
      }
    };

    ShowView.prototype.all = function() {
      var items, list, root;
      list = [];
      root = $('.items', this.current.el);
      items = $('.item', root);
      items.each(function() {
        return list.unshift(this.id);
      });
      return list;
    };

    ShowView.prototype.uploadProgress = function(e, coll) {};

    ShowView.prototype.uploadDone = function(e, coll) {};

    ShowView.prototype.sliderInValue = function(val) {
      val = val || this.sOutValue;
      return this.sInValue = (val / 2) - this.sliderRatio;
    };

    ShowView.prototype.sliderOutValue = function(value) {
      var val;
      val = value || this.slider.slider('value');
      return this.sOutValue = (val + this.sliderRatio) * 2;
    };

    ShowView.prototype.initSlider = function() {
      var inValue;
      inValue = this.sliderInValue();
      this.refreshElements();
      return this.slider.slider({
        orientation: 'horizonatal',
        value: inValue,
        slide: (function(_this) {
          return function(e, ui) {
            return _this.sliderSlide(ui.value);
          };
        })(this)
      });
    };

    ShowView.prototype.sliderSlide = function(val) {
      var newVal;
      newVal = this.sliderOutValue(val);
      Spine.trigger('slider:change', newVal);
      return newVal;
    };

    ShowView.prototype.toggleClassAll = function(record, classname) {
      var b, el;
      el = $('[data-model-name=' + classname + ']', this.el);
      b = !Model[classname].record;
      return el.toggleClass('all', b);
    };

    ShowView.prototype.toggleVisible = function(e, list) {
      var ga, i, id, len, ref, results;
      if (list == null) {
        list = Category.selectionList();
      }
      results = [];
      for (i = 0, len = list.length; i < len; i++) {
        id = list[i];
        ga = CategoriesProduct.productExists(id, (ref = Category.record) != null ? ref.id : void 0);
        ga.ignored = !ga.ignored;
        results.push(ga.save());
      }
      return results;
    };

    ShowView.prototype.showProductsTrash = function() {
      return this.navigate('/trash/products', '');
    };

    ShowView.prototype.showPhotosTrash = function() {
      return this.navigate('/trash/photos', '');
    };

    ShowView.prototype.showCategories = function() {
      var cid, ref;
      return this.navigate('/category', cid = (cid = (ref = Category.record) != null ? ref.id : void 0) ? 'cid/' + cid : null);
    };

    ShowView.prototype.showProductMasters = function() {
      return this.navigate('/category', '');
    };

    ShowView.prototype.showPhotoMasters = function() {
      return this.navigate('/category', '/');
    };

    ShowView.prototype.showProducts = function(e) {
      var cid, pid, ref, ref1;
      this.navigate('/category', cid = ((ref = Category.record) != null ? ref.id : void 0) || '', pid = (pid = (ref1 = Category.record) != null ? typeof ref1.selectionList === "function" ? ref1.selectionList().first() : void 0 : void 0) ? 'pid/' + pid : null);
      return e.preventDefault();
    };

    ShowView.prototype.showPhotos = function(e) {
      var iid, ref, ref1, ref2;
      this.navigate('/category', ((ref = Category.record) != null ? ref.id : void 0) || '', ((ref1 = Category.record) != null ? typeof ref1.selectionList === "function" ? ref1.selectionList().first() : void 0 : void 0) || '', iid = (iid = (ref2 = Product.record) != null ? typeof ref2.selectionList === "function" ? ref2.selectionList().first() : void 0 : void 0) ? 'iid/' + iid : null);
      return e.preventDefault();
    };

    ShowView.prototype.showPhoto = function(e) {
      var ref, ref1, ref2;
      this.navigate('/category', ((ref = Category.record) != null ? ref.id : void 0) || '', ((ref1 = Category.record) != null ? typeof ref1.selectionList === "function" ? ref1.selectionList().first() : void 0 : void 0) || '', ((ref2 = Product.record) != null ? typeof ref2.selectionList === "function" ? ref2.selectionList().first() : void 0 : void 0) || '');
      return e.preventDefault();
    };

    ShowView.prototype.showOverview = function() {
      return this.navigate('/overview', '');
    };

    ShowView.prototype.showProductMastersAdd = function(e) {
      e.preventDefault();
      return Spine.trigger('products:add');
    };

    ShowView.prototype.showPhotoMastersAdd = function(e) {
      e.preventDefault();
      return Spine.trigger('photos:add');
    };

    ShowView.prototype.showProductSelection = function() {
      return this.navigate('/category', Category.record.id || '');
    };

    ShowView.prototype.showPhotoSelection = function() {
      if (Category.record) {
        return this.navigate('/category', Category.record.id, Category.selectionList()[0] || '');
      } else {
        return this.navigate('/category', '', Category.selectionList()[0] || '');
      }
    };

    ShowView.prototype.cancelAdd = function(e) {
      this.back();
      App.sidebar.filter();
      this.el.removeClass('add');
      return e.preventDefault();
    };

    ShowView.prototype.copy = function(e) {
      var model;
      model = this.current.models.className;
      switch (model) {
        case 'Photo':
          return this.copyPhoto();
        case 'Product':
          return this.copyProduct();
      }
    };

    ShowView.prototype.cut = function(e) {
      var model;
      model = this.current.models.className;
      switch (model) {
        case 'Photo':
          return this.cutPhoto();
        case 'Product':
          return this.cutProduct();
      }
    };

    ShowView.prototype.paste = function(e) {
      var first, model;
      if (!(first = Clipboard.first())) {
        return;
      }
      model = first.item.constructor.className;
      switch (model) {
        case 'Photo':
          return this.pastePhoto();
        case 'Product':
          return this.pasteProduct();
      }
    };

    ShowView.prototype.copyPhoto = function() {
      var i, id, len, ref;
      Clipboard.deleteAll();
      ref = Product.selectionList();
      for (i = 0, len = ref.length; i < len; i++) {
        id = ref[i];
        Clipboard.create({
          item: Photo.find(id),
          type: 'copy'
        });
      }
      return this.refreshToolbars();
    };

    ShowView.prototype.cutPhoto = function() {
      var i, id, len, ref;
      Clipboard.deleteAll();
      ref = Product.selectionList();
      for (i = 0, len = ref.length; i < len; i++) {
        id = ref[i];
        Clipboard.create({
          item: Photo.find(id),
          type: 'copy',
          cut: Product.record
        });
      }
      return this.refreshToolbars();
    };

    ShowView.prototype.pastePhoto = function() {
      var callback, clb, clipboard, i, items, len, product;
      if (!(product = Product.record)) {
        return;
      }
      clipboard = Clipboard.findAllByAttribute('type', 'copy');
      items = [];
      for (i = 0, len = clipboard.length; i < len; i++) {
        clb = clipboard[i];
        items.push(clb.item);
      }
      callback = (function(_this) {
        return function() {
          var cut, options, origin;
          cut = Clipboard.last().cut;
          origin = Clipboard.last().origin;
          if (cut) {
            Clipboard.destroyAll();
            options = {
              photos: items,
              product: cut
            };
            Photo.trigger('destroy:join', options);
          }
          return _this.refreshToolbars();
        };
      })(this);
      return Photo.trigger('create:join', items, product, callback);
    };

    ShowView.prototype.rotatePhotoCW = function(e) {
      Spine.trigger('rotate', false, -90);
      this.refreshToolbars();
      return false;
    };

    ShowView.prototype.rotatePhotoCCW = function(e) {
      Spine.trigger('rotate', false, 90);
      this.refreshToolbars();
      return false;
    };

    ShowView.prototype.copyProduct = function() {
      var i, item, len, ref;
      Clipboard.deleteAll();
      ref = Category.selectionList();
      for (i = 0, len = ref.length; i < len; i++) {
        item = ref[i];
        Clipboard.create({
          item: Product.find(item),
          type: 'copy'
        });
      }
      return this.refreshToolbars();
    };

    ShowView.prototype.cutProduct = function() {
      var i, id, len, ref;
      Clipboard.deleteAll();
      ref = Category.selectionList();
      for (i = 0, len = ref.length; i < len; i++) {
        id = ref[i];
        Clipboard.create({
          item: Product.find(id),
          type: 'copy',
          cut: Category.record
        });
      }
      return this.refreshToolbars();
    };

    ShowView.prototype.error = function(record, err) {
      return alert(err);
    };

    ShowView.prototype.pasteProduct = function() {
      var callback, category, clb, clipboard, i, items, len;
      if (!(category = Category.record)) {
        return;
      }
      clipboard = Clipboard.findAllByAttribute('type', 'copy');
      callback = (function(_this) {
        return function() {
          var cut, origin;
          cut = Clipboard.last().cut;
          origin = Clipboard.last().origin;
          if (cut) {
            Clipboard.deleteAll();
            Product.trigger('destroy:join', items, cut);
          }
          return _this.refreshToolbars();
        };
      })(this);
      items = [];
      for (i = 0, len = clipboard.length; i < len; i++) {
        clb = clipboard[i];
        items.push(clb.item);
      }
      return Product.trigger('create:join', items, category, callback);
    };

    ShowView.prototype.ignoreProduct = function(product, category) {
      var categoryId, ga, itemId, newIgnored;
      if (!category) {
        return;
      }
      itemId = product.id;
      categoryId = category.id;
      if (ga = CategoriesProduct.productExists(itemId, categoryId)) {
        newIgnored = !ga.ignored;
        if (product.favorite && newIgnored) {
          App.confirm('NO_IGNORE_FOR_FAVORITE', null, 'alert');
          return;
        }
        return CategoriesProduct.trigger('ignored', ga, newIgnored);
      }
    };

    ShowView.prototype.help = function(e) {
      var carouselOptions, dialog, options;
      carouselOptions = {
        id: 'help-carousel',
        interval: 1000,
        slides: [
          {
            img: "/img/keyboard.png",
            width: '700px'
          }, {
            items: [
              'Abschnitt 1', {
                items: ['Abschnitt 1.1']
              }
            ]
          }, {
            items: [
              'Abschnitt 2', {
                items: ['Abschnitt 2.1']
              }
            ]
          }, {
            items: [
              'Abschnitt 3', {
                items: ['Abschnitt 3.1']
              }
            ]
          }, {
            items: [
              'Abschnitt 4', {
                items: ['Abschnitt 4.1']
              }
            ]
          }, {
            items: [
              'Abschnitt 5', {
                items: ['Abschnitt 5.1']
              }
            ]
          }, {
            items: [
              'Abschnitt 6', {
                items: ['Abschnitt 6.1']
              }
            ]
          }, {
            items: [
              'Abschnitt 7', {
                items: ['Abschnitt 7.1']
              }
            ]
          }, {
            items: ['Abschnitt 1']
          }
        ]
      };
      dialog = new ModalSimpleView({
        modalOptions: {
          keyboard: true,
          show: false
        }
      });
      options = {
        small: false,
        header: 'TastaturBefehle',
        body: function() {
          return require("views/carousel")(carouselOptions);
        },
        footerButtonText: 'Close'
      };
      dialog.el.one('hidden.bs.modal', this.proxy(this.hiddenmodal));
      dialog.el.one('hide.bs.modal', this.proxy(this.hidemodal));
      dialog.el.one('show.bs.modal', this.proxy(this.showmodal));
      dialog.el.one('shown.bs.modal', this.proxy(this.shownmodal));
      return dialog.show(options);
    };

    ShowView.prototype.version = function(e) {
      var dialog, options;
      dialog = new ModalSimpleView({
        modalOptions: {
          keyboard: true,
          show: false
        }
      });
      options = {
        small: true,
        body: function() {
          return require("views/version")({
            copyright: 'Axel Nitzschner',
            spine_version: Spine.version,
            app_version: App.version,
            bs_version: $.fn.tooltip.Constructor.VERSION
          });
        }
      };
      dialog.el.one('hidden.bs.modal', this.proxy(this.hiddenmodal));
      dialog.el.one('hide.bs.modal', this.proxy(this.hidemodal));
      dialog.el.one('show.bs.modal', this.proxy(this.showmodal));
      dialog.el.one('shown.bs.modal', this.proxy(this.shownmodal));
      return dialog.show(options);
    };

    ShowView.prototype.hidemodal = function(e) {
      return this.log('hidemodal');
    };

    ShowView.prototype.hiddenmodal = function(e) {
      this.log('hiddenmodal');
      return App.modal.exists = false;
    };

    ShowView.prototype.showmodal = function(e) {
      this.log('showmodal');
      return App.modal.exists = true;
    };

    ShowView.prototype.shownmodal = function(e) {
      return this.log('shownmodal');
    };

    ShowView.prototype.uploadDialogue = function(e) {
      this.toggleUploadShow(e);
      return $('input', '#fu').click();
    };

    ShowView.prototype.showFavorite = function(e) {
      var url;
      if (!(url = Product.getFavoriteUrl('admin'))) {
        return;
      }
      this.navigate(url);
      this.refreshToolbars();
      e.preventDefault();
      return e.stopPropagation();
    };

    ShowView.prototype.selectByKey = function(e, direction) {
      var active, activeEl, el, elements, first, id, index, isMeta, last, lastIndex, list, models, next, parent, prev, record, ref, selection;
      isMeta = e.metaKey || e.ctrlKey || e.shiftKey;
      index = null;
      lastIndex = null;
      list = ((ref = this.controller.list) != null ? ref.listener : void 0) || this.controller.list;
      elements = list ? $('.item', list.el) : $();
      if (!elements.length) {
        return;
      }
      models = this.controller.models;
      parent = this.controller.model;
      record = models.record;
      activeEl = list.findModelElement(record) || $();
      elements.each((function(_this) {
        return function(idx, el) {
          lastIndex = idx;
          if ($(el).is(activeEl)) {
            return index = idx;
          }
        };
      })(this));
      last = elements[lastIndex] || false;
      if (index == null) {
        prev = next = first = elements[0] || false;
      } else if (isMeta) {
        active = elements[index];
        first = elements[0] || false;
        prev = elements[index - 1] || false;
        next = elements[index + 1] || false;
      } else {
        first = elements[0] || false;
        prev = elements[index - 1] || elements[index] || false;
        next = elements[index + 1] || elements[index] || false;
      }
      switch (direction) {
        case 'left':
          el = $(prev);
          break;
        case 'up':
          el = $(first);
          break;
        case 'right':
          el = $(next);
          break;
        case 'down':
          el = $(last);
      }
      id = el.attr('data-id');
      if (isMeta) {
        selection = parent.selectionList().slice(0);
        if (indexOf.call(selection, id) < 0) {
          selection.addRemove(id);
        } else {
          first = selection.first();
          selection.addRemove(id);
          selection.addRemove(first);
          selection.addRemove(id);
        }
        return list.parent.select(e, selection);
      } else {
        return list.parent.select(e, [id]);
      }
    };

    ShowView.prototype.scrollTo = function(item) {
      var dht, e, el, marginBottom, marginTop, ohc, ohp, otc, otp, outOfMaxRange, outOfMinRange, outOfRange, parentEl, res, resMax, resMin, stp;
      Spine.trigger('scroll', item);
      if (!(this.controller.isActive() && item)) {
        return;
      }
      if (item.constructor.className !== this.controller.models.className) {
        return;
      }
      try {
        el = this.controller.list.findModelElement(item) || $();
        if (!el.length) {
          return;
        }
        parentEl = el.parent();
      } catch (error) {
        e = error;
        return;
      }
      marginTop = 55;
      marginBottom = 10;
      ohc = el[0].offsetHeight;
      otc = el.offset().top;
      stp = parentEl[0].scrollTop;
      otp = parentEl.offset().top;
      ohp = parentEl[0].offsetHeight;
      dht = parentEl[0].scrollHeight;
      resMin = stp + otc - (otp + marginTop);
      resMax = stp + otc - (otp + ohp - ohc - marginBottom);
      outOfRange = stp > resMin || stp < resMax;
      if (!outOfRange) {
        return;
      }
      outOfMinRange = stp > resMin;
      outOfMaxRange = stp < resMax;
      res = outOfMinRange ? resMin : outOfMaxRange ? resMax : void 0;
      if (Math.abs(res - stp) <= ohc / 2) {
        return;
      }
      return parentEl.animate({
        scrollTop: res
      }, {
        queue: false,
        duration: 'slow',
        complete: (function(_this) {
          return function() {};
        })(this)
      });
    };

    ShowView.prototype.zoom = function(e) {
      var base, ref;
      ((ref = this.controller.list) != null ? typeof ref.zoom === "function" ? ref.zoom(e) : void 0 : void 0) || (typeof (base = this.controller).zoom === "function" ? base.zoom(e) : void 0);
      return e.preventDefault();
    };

    ShowView.prototype.back = function(e) {
      var base, ref;
      return ((ref = this.controller.list) != null ? ref.back(e) : void 0) || (typeof (base = this.controller).back === "function" ? base.back(e) : void 0);
    };

    ShowView.prototype.prev = function(e) {
      history.back();
      return e.preventDefault();
    };

    ShowView.prototype.mysqlDump = function() {
      var options;
      options = {
        done: (function(_this) {
          return function(xhr) {
            return setTimeout(function() {
              return Spine.trigger('done:wait');
            }, 5000, xhr);
          };
        })(this),
        fail: function(e) {}
      };
      Spine.trigger('show:wait', {
        small: true,
        header: false,
        body: 'Datensicherung läuft...',
        footer: false
      });
      return this.mysql('dump', options);
    };

    ShowView.prototype.mysqlRestore = function() {
      var options;
      options = {
        done: (function(_this) {
          return function(xhr) {
            return setTimeout(function() {
              Spine.trigger('done:wait');
              return Spine.trigger('refresh:all');
            }, 5000, xhr);
          };
        })(this),
        fail: function(e) {}
      };
      Spine.trigger('show:wait', {
        small: true,
        header: false,
        body: 'Wiederherstellung läuft...',
        footer: false
      });
      return this.mysql('restore', options);
    };

    ShowView.prototype.keydown = function(e) {
      var code, el, isFormfield;
      code = e.charCode || e.keyCode;
      el = $(document.activeElement);
      return isFormfield = $().isFormElement(el);
    };

    ShowView.prototype.keyup = function(e) {
      var code, el, isFormfield, photos;
      code = e.charCode || e.keyCode;
      el = $(document.activeElement);
      isFormfield = $().isFormElement(el);
      switch (code) {
        case 8:
          if (!isFormfield) {
            this.deleteSelected(e);
            return e.preventDefault();
          }
          break;
        case 13:
          if (!isFormfield) {
            this.zoom(e);
            return e.preventDefault();
          }
          break;
        case 27:
          if (!(isFormfield || App.modal.exists)) {
            this.back(e);
            return e.preventDefault();
          }
          break;
        case 32:
          if (!isFormfield) {
            photos = App.activePhotos();
            return e.preventDefault();
          }
          break;
        case 37:
          if (!isFormfield) {
            this.selectByKey(e, 'left');
            return e.preventDefault();
          }
          break;
        case 38:
          if (!isFormfield) {
            this.selectByKey(e, 'up');
            return e.preventDefault();
          }
          break;
        case 39:
          if (!isFormfield) {
            this.selectByKey(e, 'right');
            return e.preventDefault();
          }
          break;
        case 40:
          if (!isFormfield) {
            this.selectByKey(e, 'down');
            return e.preventDefault();
          }
          break;
        case 65:
          if (!isFormfield) {
            if (e.metaKey || e.ctrlKey) {
              return this.selectAll(e);
            }
          }
          break;
        case 67:
          if (!isFormfield) {
            if (e.metaKey || e.ctrlKey) {
              return this.copy(e);
            }
          }
          break;
        case 73:
          if (!isFormfield) {
            if (e.metaKey || e.ctrlKey) {
              return this.selectInv(e);
            }
          }
          break;
        case 77:
          if (!isFormfield) {
            if (e.metaKey || e.ctrlKey) {
              return this.toggleVisible(e);
            }
          }
          break;
        case 86:
          if (!isFormfield) {
            if (e.metaKey || e.ctrlKey) {
              return this.paste(e);
            }
          }
          break;
        case 88:
          if (!isFormfield) {
            if (e.metaKey || e.ctrlKey) {
              return this.cut(e);
            }
          }
          break;
        case 82:
          if (!isFormfield) {
            if (e.metaKey || e.ctrlKey) {
              return Spine.trigger('rotate', false, -90);
            }
          }
      }
    };

    return ShowView;

  })(Spine.Controller);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = ShowView;
  }

}).call(this);
 },"controllers/sidebar": function(exports, require, module) { (function() {
  var $, CategoriesProduct, Category, Drag, Extender, Photo, Product, ProductsPhoto, RefreshView, Root, Sidebar, SidebarList, Spine, SpineDragItem, User,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Category = require('models/category');

  Product = require('models/product');

  Photo = require('models/photo');

  Root = require('models/root');

  CategoriesProduct = require('models/categories_product');

  ProductsPhoto = require('models/products_photo');

  User = require("models/user");

  Drag = require('extensions/drag');

  SidebarList = require('controllers/sidebar_list');

  RefreshView = require('controllers/refresh_view');

  Extender = require('extensions/controller_extender');

  SpineDragItem = require('models/drag_item');

  Sidebar = (function(superClass) {
    extend(Sidebar, superClass);

    Sidebar.extend(Drag);

    Sidebar.extend(Extender);

    Sidebar.prototype.elements = {
      'form': 'form',
      'input.search-query': 'input',
      '.flickr': 'flickr',
      '.items': 'items',
      '.inner': 'inner',
      '.droppable': 'droppable',
      '.expander': 'expander',
      '#refresh': 'refreshEl'
    };

    Sidebar.prototype.events = {
      'click .clear-search': 'clearSearch',
      'keyup input': 'filter',
      'click .opt-CreateProduct': 'createProduct',
      'click .opt-CreateCategory': 'createCategory',
      'dblclick .draghandle': 'toggleDraghandle',
      'sortupdate .sublist': 'sortupdate',
      'dragstart  .alb.item': 'dragstart',
      'dragover   .gal.item': 'dragover',
      'dragenter  .gal.item': 'dragenter',
      'dragenter  .alb.item': 'dragenter',
      'dragleave  .gal.item': 'dragleave',
      'dragleave  .alb.item': 'dragleave',
      'dragend    .gal.item': 'dragend',
      'dragend    .alb.item': 'dragend',
      'drop       .gal.item': 'drop',
      'drop       .alb.item': 'drop'
    };

    Sidebar.prototype.categoryTemplate = function(items) {
      return $("#sidebarTemplate").tmpl(items);
    };

    function Sidebar() {
      Sidebar.__super__.constructor.apply(this, arguments);
      this.el.width(8);
      this.defaultTemplate = this.categoryTemplate;
      this.list = new SidebarList({
        el: this.items,
        template: this.categoryTemplate,
        parent: this
      });
      this.refreshView = new RefreshView({
        el: this.refreshEl
      });
      Category.one('refresh', this.proxy(this.refresh));
      Category.bind('error', this.proxy(this.error));
      Category.bind('update', this.proxy(this.render));
      Category.bind("ajaxError", Category.errorHandler);
      Category.bind("ajaxSuccess", Category.successHandler);
      Spine.bind('refresh:one', this.proxy(this.refreshOne));
      Spine.bind('create:category', this.proxy(this.createCategory));
      Spine.bind('edit:category', this.proxy(this.edit));
      Spine.bind('delete:category', this.proxy(this.deleteCategory));
      this.bind('drag:timeout', this.proxy(this.expandAfterTimeout));
      this.bind('drag:help', this.proxy(this.dragHelp));
      this.bind('drag:start', this.proxy(this.dragStart));
      this.bind('drag:enter', this.proxy(this.dragEnter));
      this.bind('drag:over', this.proxy(this.dragOver));
      this.bind('drag:leave', this.proxy(this.dragLeave));
      this.bind('drag:drop', this.proxy(this.dragDrop));
      this.model = this.defaultModel = 'Category';
    }

    Sidebar.prototype.filter = function(e, qry) {
      if (qry) {
        this.input.val(qry);
      }
      this.query = this.input.val() || qry;
      return this.render();
    };

    Sidebar.prototype.refresh = function(items) {
      return this.render();
    };

    Sidebar.prototype.refreshOne = function() {
      return Category.one('refresh', this.proxy(this.refresh));
    };

    Sidebar.prototype.render = function() {
      var cat, items, j, k, len, len1, pro, ref, ref1;
      this.log('render');
      this.products = Product.filter(this.query, {
        func: 'searchSelect'
      });
      if (this.query) {
        items = [];
        ref = this.products;
        for (j = 0, len = ref.length; j < len; j++) {
          pro = ref[j];
          ref1 = CategoriesProduct.categories(pro.id);
          for (k = 0, len1 = ref1.length; k < len1; k++) {
            cat = ref1[k];
            items.push(cat);
          }
        }
      } else {
        items = Category.filter(this.query, {
          func: 'searchSelect'
        });
      }
      this.list.render(items);
      return this.refreshView.render();
    };

    Sidebar.prototype.newAttributes = function() {
      if (User.first()) {
        return {
          screenname: this.categoryName(),
          author: User.first().name,
          user_id: User.first().id
        };
      } else {
        return User.ping();
      }
    };

    Sidebar.prototype.categoryName = function(proposal) {
      if (proposal == null) {
        proposal = 'Category ' + (function() {
          var i, index, s;
          s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
          index = (i = Category.count() + 1) < s.length ? i : i % s.length;
          return s.split('')[index];
        })();
      }
      Category.each((function(_this) {
        return function(record) {
          if (record.name === proposal) {
            return proposal = _this.categoryName(proposal + proposal.split(' ')[1][0]);
          }
        };
      })(this));
      return proposal;
    };

    Sidebar.prototype.createCategory = function(options) {
      var category, cb;
      if (options == null) {
        options = {};
      }
      this.log('createCategory');
      cb = function(category) {
        category.updateSelectionID();
        Root.updateSelection([category.id]);
        if (options.products) {
          Product.trigger('create:join', options.products, category);
          if (options.deleteFromOrigin) {
            return Product.trigger('destroy:join', options.products, options.deleteFromOrigin);
          }
        }
      };
      category = new Category(this.newAttributes());
      category.one('ajaxSuccess', this.proxy(cb));
      return category.save(options);
    };

    Sidebar.prototype.error = function(item, err) {
      return alert(err);
    };

    Sidebar.prototype.createProduct = function() {
      return Spine.trigger('create:product');
    };

    Sidebar.prototype.deleteCategory = function(id) {
      var category;
      if (!(category = Category.find(id))) {
        return;
      }
      if (category.isValid()) {
        if (App.confirm('DESTROY_CATEGORY', this.humanize(category))) {
          return category.destroy();
        }
      } else {
        return App.confirm('DESTROY_CATEGORY_NOT_ALLOWED', null, 'alert');
      }
    };

    Sidebar.prototype.clearSearch = function() {
      $(this.input).val('');
      return this.filter();
    };

    Sidebar.prototype.edit = function() {
      App.categoryEditView.render();
      return App.contentManager.change(App.categoryEditView);
    };

    Sidebar.prototype.toggleDraghandle = function(options) {
      var speed, w, width;
      width = (function(_this) {
        return function() {
          var max, w;
          max = App.vmanager.currentDim;
          w = _this.el.width();
          if (App.vmanager.sleep) {
            App.vmanager.awake();
            _this.clb = function() {};
            return max + "px";
          } else {
            _this.clb = App.vmanager.goSleep;
            return '20px';
          }
        };
      })(this);
      w = width();
      speed = 700;
      return this.el.animate({
        width: w
      }, speed, (function(_this) {
        return function() {
          return _this.clb();
        };
      })(this));
    };

    Sidebar.prototype.expandAfterTimeout = function(e, timer) {
      var categoryEl, item, ref;
      clearTimeout(timer);
      categoryEl = $(e.target).closest('.gal.item');
      item = categoryEl.item();
      if (!(item && item.id !== ((ref = Spine.dragItem.originModelName.record) != null ? ref.id : void 0))) {
        return;
      }
      return this.list.expand(item, true);
    };

    Sidebar.prototype.sortupdate = function(e, o) {
      var category, gas, list;
      list = o.item.parent();
      category = list.parent().item();
      gas = CategoriesProduct.filter(category.id, {
        associationForeignKey: 'category_id'
      });
      list.children().each(function(index) {
        var ga, j, len, product, results;
        product = $(this).item();
        results = [];
        for (j = 0, len = gas.length; j < len; j++) {
          ga = gas[j];
          if (ga.product_id === product.id && parseInt(ga.order) !== index) {
            ga.order = index;
            results.push(ga.silentUpdate());
          } else {
            results.push(void 0);
          }
        }
        return results;
      });
      category.save();
      return Spine.trigger('reorder', category);
    };

    return Sidebar;

  })(Spine.Controller);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Sidebar;
  }

}).call(this);
 },"controllers/sidebar_flickr": function(exports, require, module) { (function() {
  var $, Extender, SidebarFlickr, Spine,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Extender = require('extensions/controller_extender');

  require('extensions/tmpl');

  SidebarFlickr = (function(superClass) {
    extend(SidebarFlickr, superClass);

    SidebarFlickr.extend(Extender);

    SidebarFlickr.prototype.elements = {
      '.items': 'items',
      '.inner': 'inner',
      '.expander': 'expander'
    };

    SidebarFlickr.prototype.events = {
      'click      .expander': 'expand',
      'click      .opt-flickr': 'expand',
      'click      .opt-FlickrRecent': 'navRecent',
      'click      .opt-FlickrInter': 'navInter'
    };

    SidebarFlickr.prototype.template = function(items) {
      return $("#sidebarFlickrTemplate").tmpl(items);
    };

    function SidebarFlickr() {
      SidebarFlickr.__super__.constructor.apply(this, arguments);
      this.render();
    }

    SidebarFlickr.prototype.render = function() {
      var items;
      this.log('render');
      items = {
        name: 'flickr',
        sub: [
          {
            name: 'Recent Photos',
            klass: 'opt-FlickrRecent',
            icon: 'picture'
          }, {
            name: 'Interesting Stuff',
            klass: 'opt-FlickrInter',
            icon: 'picture'
          }
        ]
      };
      return this.html(this.template(items));
    };

    SidebarFlickr.prototype.expand = function(e) {
      var parent;
      parent = $(e.target).closest('li');
      parent.toggleClass('open');
      if (parent.hasClass('open')) {
        this.navigate('/flickr/');
      }
      e.stopPropagation();
      return e.preventDefault();
    };

    SidebarFlickr.prototype.navRecent = function(e) {
      this.log('flickr recent clicked');
      this.navigate('/flickr', 'recent/1');
      e.stopPropagation();
      return e.preventDefault();
    };

    SidebarFlickr.prototype.navInter = function(e) {
      this.log('flickr interesting clicked');
      this.navigate('/flickr', 'inter/1');
      e.stopPropagation();
      return e.preventDefault();
    };

    return SidebarFlickr;

  })(Spine.Controller);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = SidebarFlickr;
  }

}).call(this);
 },"controllers/sidebar_list": function(exports, require, module) { (function() {
  var $, CategoriesProduct, Category, Drag, Extender, Product, ProductsPhoto, Root, SidebarList, Spine,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Root = require("models/root");

  Product = require('models/product');

  Category = require('models/category');

  ProductsPhoto = require('models/products_photo');

  CategoriesProduct = require('models/categories_product');

  Drag = require('extensions/drag');

  Extender = require('extensions/controller_extender');

  require('extensions/tmpl');

  SidebarList = (function(superClass) {
    extend(SidebarList, superClass);

    SidebarList.extend(Drag);

    SidebarList.extend(Extender);

    SidebarList.prototype.elements = {
      '.gal.item': 'item'
    };

    SidebarList.prototype.events = {
      'click .opt-ignored': 'ignoreProduct',
      "click      .item": 'click',
      "click      .expander": 'clickExpander'
    };

    SidebarList.prototype.selectFirst = true;

    SidebarList.prototype.contentTemplate = function(items) {
      return $('#sidebarContentTemplate').tmpl(items);
    };

    SidebarList.prototype.sublistTemplate = function(items) {
      return $('#productsSublistTemplate').tmpl(items);
    };

    SidebarList.prototype.ctaTemplate = function(item) {
      return $('#ctaTemplate').tmpl(item);
    };

    function SidebarList() {
      this.change = bind(this.change, this);
      SidebarList.__super__.constructor.apply(this, arguments);
      CategoriesProduct.bind('update', this.proxy(this.renderItemFromCategoriesProduct));
      Category.bind('change:collection', this.proxy(this.renderCategory));
      Category.bind('change', this.proxy(this.change));
      Category.bind('change:selection', this.proxy(this.exposeSublistSelection));
      Category.bind('current', this.proxy(this.exposeSelection));
      Product.bind('change:collection', this.proxy(this.renderProduct));
      Product.bind('create destroy update', this.proxy(this.renderSublists));
      Root.bind('change:selection', this.proxy(this.closeAllOtherSublists));
      Spine.bind('scroll', this.proxy(this.scrollTo));
    }

    SidebarList.prototype.template = function() {
      return arguments[0];
    };

    SidebarList.prototype.change = function(item, mode, e) {
      this.log('change');
      switch (mode) {
        case 'create':
          this.current = item;
          this.create(item);
          return this.navigate('/category', item.id);
        case 'update':
          this.current = item;
          return this.update(item);
        case 'destroy':
          this.current = null;
          return this.destroy(item);
      }
    };

    SidebarList.prototype.create = function(item) {
      this.append(this.template(item));
      this.renderOneSublist(item);
      return this.reorder(item);
    };

    SidebarList.prototype.update = function(item) {
      this.updateTemplate(item);
      return this.reorder(item);
    };

    SidebarList.prototype.destroy = function(item) {
      return this.children().forItem(item, true).detach();
    };

    SidebarList.prototype.render = function(items, mode) {
      var categoryEl, item, j, len;
      this.children().addClass('invalid');
      for (j = 0, len = items.length; j < len; j++) {
        item = items[j];
        categoryEl = this.children().forItem(item);
        if (!categoryEl.length) {
          this.append(this.template(item));
          this.reorder(item);
        } else {
          this.updateTemplate(item).removeClass('invalid');
          this.reorder(item);
        }
        this.renderOneSublist(item);
      }
      return this.children('.invalid').remove();
    };

    SidebarList.prototype.reorder = function(item) {
      var children, id, idxAfterSort, idxBeforeSort, index, newEl, oldEl;
      this.log('reorder');
      id = item.id;
      index = function(id, list) {
        var i, itm, j, len;
        for (i = j = 0, len = list.length; j < len; i = ++j) {
          itm = list[i];
          if (itm.id === id) {
            return i;
          }
        }
        return i;
      };
      children = this.children();
      oldEl = this.children().forItem(item);
      idxBeforeSort = this.children().index(oldEl);
      idxAfterSort = index(id, Category.all().sort(Category.sortByOrder));
      newEl = $(children[idxAfterSort]);
      if (idxBeforeSort < idxAfterSort) {
        return newEl.after(oldEl);
      } else if (idxBeforeSort > idxAfterSort) {
        return newEl.before(oldEl);
      }
    };

    SidebarList.prototype.updateSublist = function(ga) {
      var category;
      category = Category.find(ga.category_id);
      return this.renderOneSublist(category);
    };

    SidebarList.prototype.renderAllSublist = function() {
      var gal, index, j, len, ref, results;
      this.log('renderAllSublist');
      ref = Category.records;
      results = [];
      for (index = j = 0, len = ref.length; j < len; index = ++j) {
        gal = ref[index];
        results.push(this.renderOneSublist(gal));
      }
      return results;
    };

    SidebarList.prototype.renderSublists = function(product) {
      var category, ga, gas, j, len, results;
      this.log('renderSublists');
      gas = CategoriesProduct.filter(product.id, {
        associationForeignKey: 'product_id'
      });
      results = [];
      for (j = 0, len = gas.length; j < len; j++) {
        ga = gas[j];
        if (category = Category.find(ga['category_id'])) {
          results.push(this.renderOneSublist(category));
        } else {
          results.push(void 0);
        }
      }
      return results;
    };

    SidebarList.prototype.renderFromCategoriesProduct = function(ga) {
      var category;
      this.log('renderFromCategoriesProduct');
      if (category = Category.find(ga['category_id'])) {
        return this.updateTemplate(category);
      }
    };

    SidebarList.prototype.renderOneSublist = function(category) {
      var categoryEl, categorySublist, filterOptions, products;
      if (category == null) {
        category = Category.record;
      }
      this.log('renderOneSublist');
      filterOptions = {
        model: 'Category'
      };
      products = Category.products(category.id, filterOptions).filter(this.p());
      if (!products.length) {
        products.push({
          flash: 'keine Produkte'
        });
      }
      categoryEl = this.children().forItem(category);
      categorySublist = $('ul', categoryEl);
      categorySublist.html(this.sublistTemplate(products));
      $(categorySublist).sortable({
        items: ':not(.disabled)'
      });
      return this.exposeSublistSelection(null, category.id);
    };

    SidebarList.prototype.updateTemplate = function(item) {
      var innerEl, itemEl, tmplItem;
      itemEl = this.children().forItem(item);
      innerEl = $('.item-content', itemEl);
      tmplItem = innerEl.tmplItem();
      tmplItem.data = item;
      if (typeof tmplItem.update === "function") {
        tmplItem.update();
      }
      itemEl.attr('id', item.id);
      return itemEl;
    };

    SidebarList.prototype.renderItemFromCategoriesProduct = function(ga, mode) {
      var category;
      category = Category.find(ga.category_id);
      if (category) {
        this.updateTemplate(category);
        return this.renderOneSublist(category);
      }
    };

    SidebarList.prototype.renderCategory = function(item) {
      this.updateTemplate(item);
      return this.renderOneSublist(item);
    };

    SidebarList.prototype.renderProduct = function(item) {
      var category, ga, gas, j, len, results;
      gas = CategoriesProduct.filter(item.id, {
        associationForeignKey: 'product_id'
      });
      results = [];
      for (j = 0, len = gas.length; j < len; j++) {
        ga = gas[j];
        if (category = Category.find(ga.category_id)) {
          results.push(this.renderCategory(category));
        } else {
          results.push(void 0);
        }
      }
      return results;
    };

    SidebarList.prototype.renderItemFromProductsPhoto = function(ap) {
      var ga, gas, j, len, results;
      this.log('renderItemFromProductsPhoto');
      gas = CategoriesProduct.filter(ap.product_id, {
        associationForeignKey: 'product_id'
      });
      results = [];
      for (j = 0, len = gas.length; j < len; j++) {
        ga = gas[j];
        results.push(this.renderItemFromCategoriesProduct(ga));
      }
      return results;
    };

    SidebarList.prototype.exposeSelection = function(item) {
      if (item == null) {
        item = Category.record;
      }
      this.children().removeClass('active');
      if (item) {
        this.children().forItem(item).addClass("active");
      }
      this.expand(item, true);
      return this.exposeSublistSelection(null, item != null ? item.id : void 0);
    };

    SidebarList.prototype.exposeSublistSelection = function(selection, id) {
      var activeEl, activeProduct, categoryEl, item, j, len, product, productsEl, ref, ref1, sel;
      if (selection == null) {
        selection = Category.selectionList();
      }
      if (id == null) {
        id = (ref = Category.record) != null ? ref.id : void 0;
      }
      this.log('exposeSublistSelection');
      item = Category.find(id);
      if (item) {
        categoryEl = this.children().forItem(item);
        productsEl = categoryEl.find('li');
        productsEl.removeClass('selected active');
        ref1 = item.selectionList();
        for (j = 0, len = ref1.length; j < len; j++) {
          sel = ref1[j];
          if (product = Product.find(sel)) {
            productsEl.forItem(product).addClass('selected');
          }
        }
        if (activeProduct = Product.find(item.selectionList().first())) {
          activeEl = productsEl.forItem(activeProduct).addClass('active');
        }
      }
      return this.refreshElements();
    };

    SidebarList.prototype.click = function(e) {
      var category, cid, el, item, list, pid, ref;
      el = $(e.target).closest('li');
      item = el.item();
      if (!item) {
        return;
      }
      list = item.selectionList().slice(0);
      cid = item.id;
      switch (item.constructor.className) {
        case 'Category':
          this.expand(item, (this.isOpen(el)) || (!(((ref = Category.record) != null ? ref.id : void 0) === item.id) || !this.isOpen(el)));
          this.navigate('/category', cid, pid = (pid = item.selectionList().first()) ? 'pid/' + pid : null);
          break;
        case 'Product':
          category = $(e.target).closest('li.gal').item();
          this.navigate('/category', category.id, 'pid', item.id);
      }
      return item.updateSelection(list);
    };

    SidebarList.prototype.ignoreProduct = function(e) {
      var category, product;
      product = $(e.currentTarget).item();
      category = $(e.currentTarget).parents('.gal.data').item();
      Spine.trigger('product:ignore', product, category);
      e.stopPropagation();
      return e.preventDefault();
    };

    SidebarList.prototype.clickExpander = function(e) {
      var el, item;
      el = $(e.target).closest('li.gal');
      if (!this.isOpen(el)) {
        el.addClass('manual');
      } else {
        el.removeClass('manual');
      }
      item = el.item();
      if (item) {
        this.expand(item, !this.isOpen(el));
      }
      e.stopPropagation();
      return e.preventDefault();
    };

    SidebarList.prototype.expand = function(item, open) {
      var el, expander;
      el = this.categoryElFromItem(item);
      expander = $('.expander', el);
      el.toggleClass('open', open);
      return;
      if (open) {
        return this.openSublist(el);
      } else {
        if (!el.hasClass('manual')) {
          return this.closeSublist(el);
        }
      }
    };

    SidebarList.prototype.isOpen = function(el) {
      return el.hasClass('open');
    };

    SidebarList.prototype.openSublist = function(el) {
      return el.addClass('open');
    };

    SidebarList.prototype.closeSublist = function(el) {
      return el.removeClass('open manual');
    };

    SidebarList.prototype.closeAllSublists = function() {
      var category, j, len, ref, results;
      ref = Category.all();
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        category = ref[j];
        results.push(this.expand(category));
      }
      return results;
    };

    SidebarList.prototype.closeAllOtherSublists = function(list) {
      var category, id, j, len, ref, results;
      id = list[0];
      ref = Category.all();
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        category = ref[j];
        results.push(this.expand(category, id === category.id));
      }
      return results;
    };

    SidebarList.prototype.categoryElFromItem = function(item) {
      return this.children().forItem(item);
    };

    SidebarList.prototype.close = function() {};

    SidebarList.prototype.show = function(e) {
      App.contentManager.change(App.showView);
      e.stopPropagation();
      return e.preventDefault();
    };

    SidebarList.prototype.scrollTo = function(item) {
      var clsName, el, el_, ohc, ohp, otc, otp, outOfMaxRange, outOfMinRange, outOfRange, queued, res, resMax, resMin, speed, stp, ul;
      if (!item) {
        return;
      }
      el = this.children().forItem(Category.record);
      clsName = item.constructor.className;
      switch (clsName) {
        case 'Category':
          return;
          queued = false;
          ul = $('ul', el);
          ul.hide();
          el_ = el[0];
          if (el_) {
            ohc = el_.offsetHeight;
          }
          ul.show();
          speed = 10;
          break;
        case 'Product':
          queued = false;
          ul = $('ul', el);
          el = $('li', ul).forItem(item);
          el_ = el[0];
          if (el_) {
            ohc = el_.offsetHeight;
          }
          speed = 200;
          break;
        default:
          return;
      }
      if (!el.length) {
        return;
      }
      otc = el.offset().top;
      stp = this.el[0].scrollTop;
      otp = this.el.offset().top;
      ohp = this.el[0].offsetHeight;
      resMin = stp + otc - otp;
      resMax = stp + otc - (otp + ohp - ohc);
      outOfRange = stp > resMin || stp < resMax;
      if (!outOfRange) {
        return;
      }
      outOfMinRange = stp > resMin;
      outOfMaxRange = stp < resMax;
      res = outOfMinRange ? resMin : outOfMaxRange ? resMax : void 0;
      return this.el.animate({
        scrollTop: res
      }, {
        queue: queued,
        duration: speed,
        complete: (function(_this) {
          return function() {};
        })(this)
      });
    };

    return SidebarList;

  })(Spine.Controller);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = SidebarList;
  }

}).call(this);
 },"controllers/sub_edit_view_description": function(exports, require, module) { (function() {
  var $, Description, Drag, Extender, KeyEnhancer, Model, Spine, SubEditViewDescription, User,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Model = Spine.Model;

  User = require("models/user");

  KeyEnhancer = require('extensions/key_enhancer');

  Extender = require('extensions/controller_extender');

  Description = require("models/description");

  Drag = require('extensions/drag');

  SubEditViewDescription = (function(superClass) {
    extend(SubEditViewDescription, superClass);

    SubEditViewDescription.extend(Extender);

    SubEditViewDescription.extend(Drag);

    SubEditViewDescription.prototype.events = {
      'keyup': 'saveOnKeyup',
      'click .opt-add': 'add',
      'click .opt-remove': 'remove',
      'sortupdate': 'sortupdate',
      'drop': 'drop'
    };

    SubEditViewDescription.prototype.template = function(item) {
      return $('#editDescriptionTemplate').tmpl(item);
    };

    function SubEditViewDescription() {
      this.saveOnKeyup = bind(this.saveOnKeyup, this);
      SubEditViewDescription.__super__.constructor.apply(this, arguments);
      this.bind('active', this.proxy(this.active));
      Description.bind('destroy', this.proxy(this.destroy));
      Spine.bind('refresh:one', this.proxy(this.refreshOne));
    }

    SubEditViewDescription.prototype.newAttributes = function(object) {
      var count, obj, product_id, ref, ref1, user_id;
      if (object == null) {
        object = {};
      }
      if ((user_id = (ref = User.first()) != null ? ref.id : void 0) && (product_id = (ref1 = this.parent.current) != null ? ref1.id : void 0)) {
        count = Description.filter(product_id).length;
        obj = {
          product_id: product_id,
          description: '',
          user_id: user_id,
          order: count + 1
        };
        return object = $.extend({}, obj, object);
      } else {
        return User.ping();
      }
    };

    SubEditViewDescription.prototype.refreshOne = function() {
      return Description.one('refresh', this.proxy(this.refresh));
    };

    SubEditViewDescription.prototype.refresh = function() {
      return this.active();
    };

    SubEditViewDescription.prototype.active = function() {
      var items, ref;
      $(this.btn, this.parent.el).addClass('active');
      items = Description.filterSortByOrder((ref = this.parent.current) != null ? ref.id : void 0);
      if (!items.length) {
        items = this.create();
      }
      return this.render(items);
    };

    SubEditViewDescription.prototype.render = function(items) {
      this.html(this.template(items));
      this.el.sortable();
      this.refreshElements();
      return this.el;
    };

    SubEditViewDescription.prototype.add = function(e) {
      var el, item, newItem;
      item = $(e.target).item();
      el = this.findModelElement(item);
      newItem = this.create({
        order: parseInt(item.order) + 1
      });
      el.after(this.template(newItem));
      this.sortupdate();
      return $('[data-description-id=' + newItem.id + '] input', this.el).focus();
    };

    SubEditViewDescription.prototype.remove = function(e) {
      var item;
      item = $(e.target).item();
      return item.destroy();
    };

    SubEditViewDescription.prototype.create = function(attr) {
      var item;
      item = new Description(this.newAttributes(attr));
      item.save();
      return item;
    };

    SubEditViewDescription.prototype.destroy = function(item) {
      var el;
      el = this.findModelElement(item);
      el.detach();
      if (!Description.filter(this.parent.current.id).length) {
        this.active();
      }
      return this.sortupdate();
    };

    SubEditViewDescription.prototype.drop = function(e) {
      return e.stopPropagation();
    };

    SubEditViewDescription.prototype.sortupdate = function() {
      this.children().each(function(index) {
        var item, tmplItem;
        item = $(this).item();
        item.order = index + 1;
        item.save();
        tmplItem = $(this).tmplItem();
        tmplItem.data = item;
        return tmplItem.update();
      });
      this.el.sortable('destroy').sortable();
      return this.refreshElements();
    };

    SubEditViewDescription.prototype.save = function(e) {
      var atts, base, item;
      this.log('save description');
      if (this.parent.current) {
        atts = typeof (base = $(e.target).parent()).serializeForm === "function" ? base.serializeForm() : void 0;
        item = $(e.target).item();
        return item.updateChangedAttributes(atts);
      }
    };

    SubEditViewDescription.prototype.saveOnKeyup = function(e) {
      var code;
      code = e.charCode || e.keyCode;
      switch (code) {
        case 32:
          e.stopPropagation();
          break;
        case 9:
          e.stopPropagation();
      }
      return this.save(e);
    };

    return SubEditViewDescription;

  })(Spine.Controller);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = SubEditViewDescription;
  }

}).call(this);
 },"controllers/sub_edit_view_product": function(exports, require, module) { (function() {
  var $, Category, Extender, KeyEnhancer, Root, Spine, SubEditViewProduct,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  KeyEnhancer = require('extensions/key_enhancer');

  Extender = require('extensions/controller_extender');

  Category = require("models/category");

  Root = require("models/root");

  SubEditViewProduct = (function(superClass) {
    extend(SubEditViewProduct, superClass);

    SubEditViewProduct.extend(Extender);

    SubEditViewProduct.prototype.events = {
      'keyup': 'saveOnKeyup',
      'click .opt-ignored': 'ignoreProduct'
    };

    SubEditViewProduct.prototype.linkTemplate = function(item) {
      return $('validLinkTemplate').tmpl(item);
    };

    SubEditViewProduct.prototype.template = function(item) {
      return $('#editProductTemplate').tmpl(item);
    };

    function SubEditViewProduct() {
      this.saveOnKeyup = bind(this.saveOnKeyup, this);
      SubEditViewProduct.__super__.constructor.apply(this, arguments);
      this.bind('active', this.proxy(this.active));
      Spine.bind('refresh:one', this.proxy(this.refreshOne));
    }

    SubEditViewProduct.prototype.refreshOne = function() {
      return Product.one('refresh', this.proxy(this.refresh));
    };

    SubEditViewProduct.prototype.refresh = function() {
      return this.active();
    };

    SubEditViewProduct.prototype.active = function() {
      return this.render();
    };

    SubEditViewProduct.prototype.render = function() {
      var item;
      this.html(this.template(item = this.parent.current));
      return this.checkLink();
    };

    SubEditViewProduct.prototype.checkLink = function() {
      var item;
      item = this.parent.current;
      if (item) {
        return $('#validLink', this.el).toggleClass('valid', item.validUrl());
      }
    };

    SubEditViewProduct.prototype.save = function(el) {
      var atts, record;
      this.log('save product');
      if (record = this.parent.current) {
        atts = (typeof el.serializeForm === "function" ? el.serializeForm() : void 0) || this.el.serializeForm();
        return record.updateChangedAttributes(atts);
      }
    };

    SubEditViewProduct.prototype.ignoreProduct = function(e) {
      var category, product;
      product = $(e.currentTarget).item();
      category = Category.record;
      if (!category) {
        return;
      }
      return Spine.trigger('product:ignore', product, category);
    };

    SubEditViewProduct.prototype.saveOnKeyup = function(e) {
      var code;
      code = e.charCode || e.keyCode;
      switch (code) {
        case 32:
          e.stopPropagation();
          break;
        case 9:
          e.stopPropagation();
      }
      this.save(this.el);
      return this.checkLink();
    };

    return SubEditViewProduct;

  })(Spine.Controller);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = SubEditViewProduct;
  }

}).call(this);
 },"controllers/sub_no_product": function(exports, require, module) { (function() {
  var $, Extender, Spine, SubNoProduct,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Extender = require('extensions/controller_extender');

  SubNoProduct = (function(superClass) {
    extend(SubNoProduct, superClass);

    SubNoProduct.extend(Extender);

    function SubNoProduct() {
      SubNoProduct.__super__.constructor.apply(this, arguments);
      this.bind('active', this.proxy(this.active));
    }

    SubNoProduct.prototype.active = function() {
      return this.render();
    };

    SubNoProduct.prototype.render = function() {
      return this.renderEmpty('Kein Produkt ausgewählt');
    };

    return SubNoProduct;

  })(Spine.Controller);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = SubNoProduct;
  }

}).call(this);
 },"controllers/toolbar_view": function(exports, require, module) { (function() {
  var $, Extender, Model, Spine, Toolbar, ToolbarView,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Model = Spine.Model;

  Toolbar = Model.Toolbar = require('models/toolbar');

  Extender = require('extensions/controller_extender');

  ToolbarView = (function(superClass) {
    extend(ToolbarView, superClass);

    ToolbarView.extend(Extender);

    ToolbarView.prototype.template = function(items) {
      return $('#toolsTemplate').tmpl(items);
    };

    function ToolbarView() {
      ToolbarView.__super__.constructor.apply(this, arguments);
      this.current = [];
    }

    ToolbarView.prototype.elements = {
      'li': 'items'
    };

    ToolbarView.prototype.events = {
      'click': 'click'
    };

    ToolbarView.prototype.click = function(e) {
      return this.lastcontrol = $(e.target);
    };

    ToolbarView.prototype.change = function(list) {
      var content, i, itm, lastItem, len, tools;
      if (list == null) {
        list = [];
      }
      if (list.length) {
        tools = Toolbar.filter(list);
        content = new Array;
        for (i = 0, len = tools.length; i < len; i++) {
          itm = tools[i];
          $.merge(content, itm.content);
        }
        this.current = content;
        lastItem = list.last();
        if (typeof lastItem === 'function') {
          this.current.cb = lastItem;
        }
      }
      return this.render();
    };

    ToolbarView.prototype.filterTools = function(list) {
      return Toolbar.select(list);
    };

    ToolbarView.prototype.sort = function(a, b) {};

    ToolbarView.prototype.refresh = function() {
      return this.change();
    };

    ToolbarView.prototype.lock = function() {
      return this.locked = true;
    };

    ToolbarView.prototype.unlock = function() {
      return this.locked = false;
    };

    ToolbarView.prototype.clear = function() {
      this.current = [];
      return this.render();
    };

    ToolbarView.prototype.renderSub = function() {
      var i, items, itm, len, results, test;
      items = this.current.slice(0);
      test = function() {
        var name, res;
        res = [];
        name = itm.itemGroup.name;
        if (typeof name === 'function') {
          res.push(name.call());
        } else {
          res.push(name);
        }
        return res[0];
      };
      results = [];
      for (i = 0, len = items.length; i < len; i++) {
        itm = items[i];
        if (test(itm) === 'Hilfe') {
          results.push(itm);
        }
      }
      return results;
    };

    ToolbarView.prototype.render = function(list) {
      var ref;
      if (list == null) {
        list = this.current;
      }
      if (this.locked) {
        return;
      }
      this.trigger('before:refresh', this);
      this.html(this.template(list));
      if ((ref = this.current) != null) {
        if (typeof ref.cb === "function") {
          ref.cb();
        }
      }
      return this.trigger('refresh', this, this.lastcontrol);
    };

    return ToolbarView;

  })(Spine.Controller);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = ToolbarView;
  }

}).call(this);
 },"controllers/trustami_view": function(exports, require, module) { (function() {
  var $, Spine, TrustamiView, User,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  User = require('models/user');

  TrustamiView = (function(superClass) {
    extend(TrustamiView, superClass);

    TrustamiView.prototype.elements = {
      'input': 'input'
    };

    TrustamiView.prototype.events = {
      'click .opt-Count-Up': 'countUp',
      'click .opt-Count-Down': 'countDown',
      'keyup': 'saveOnKeyup'
    };

    TrustamiView.prototype.template = function(item) {
      return $('#trustamiTemplate').tmpl(item);
    };

    function TrustamiView() {
      this.saveOnKeyup = bind(this.saveOnKeyup, this);
      TrustamiView.__super__.constructor.apply(this, arguments);
      User.one('update', this.proxy(this.render));
      this.init();
    }

    TrustamiView.prototype.init = function() {
      return this.user = User.first();
    };

    TrustamiView.prototype.render = function(item) {
      return this.html(this.template(item));
    };

    TrustamiView.prototype.save = function() {
      var atts, n;
      atts = this.el.serializeForm();
      if (isNaN(n = parseInt(atts.tmi)) || n < 1) {
        this.input.val(this.user.tmi);
        return;
      }
      this.input.val(n);
      this.user.updateAttributes({
        tmi: n
      });
      return this.user.setTmi(this.setCallback);
    };

    TrustamiView.prototype.countUp = function() {
      var val;
      val = parseInt(this.input.val()) + 1;
      this.input.val(val);
      return this.save();
    };

    TrustamiView.prototype.countDown = function() {
      var val;
      val = parseInt(this.input.val()) - 1;
      this.input.val(val);
      return this.save();
    };

    TrustamiView.prototype.getCallback = function(json) {
      return json = $.parseJSON(json);
    };

    TrustamiView.prototype.setCallback = function(json) {
      return json = $.parseJSON(json);
    };

    TrustamiView.prototype.saveOnKeyup = function(e) {
      var code, el, isFormfield;
      code = e.charCode || e.keyCode;
      if (code >= 37 && code <= 40) {
        return;
      }
      el = $(document.activeElement);
      isFormfield = $().isFormElement(el);
      switch (code) {
        case 32:
          if (!isFormfield) {
            e.stopPropagation();
          }
          break;
        case 9:
          if (!isFormfield) {
            e.stopPropagation();
          }
      }
      return this.save();
    };

    TrustamiView.prototype.dummy = function() {};

    return TrustamiView;

  })(Spine.Controller);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = TrustamiView;
  }

}).call(this);
 },"controllers/upload_edit_view": function(exports, require, module) { (function() {
  var $, PhotoEditView, Product, Settings, Spine, UploadEditView,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Product = require("models/product");

  Settings = require("models/settings");

  PhotoEditView = require("controllers/photo_edit_view");

  UploadEditView = (function(superClass) {
    extend(UploadEditView, superClass);

    UploadEditView.prototype.elements = {
      '.delete:not(.files .delete)': 'clearEl',
      '#fileupload button.cancel': 'cancelEl',
      '.files': 'filesEl',
      '.uploadinfo': 'uploadinfoEl',
      '#ph': 'photoEl',
      '.editor': 'editorEl',
      '#fileupload': 'uploader'
    };

    UploadEditView.prototype.events = {
      'fileuploaddone': 'done',
      'fileuploadsubmit': 'submit',
      'fileuploadfail': 'fail',
      'fileuploaddrop': 'drop',
      'fileuploadadd': 'add',
      'fileuploadsend': 'send',
      'fileuploadprogressall': 'alldone',
      'fileuploadprogress': 'progress',
      'fileuploaddestroyed': 'destroyed',
      'click .opt-editor': 'toggleEditor'
    };

    UploadEditView.prototype.template = function(item) {
      return $('#template-upload').tmpl(item);
    };

    function UploadEditView() {
      UploadEditView.__super__.constructor.apply(this, arguments);
      this.bind('active', this.proxy(this.active));
      Product.bind('change:current', this.proxy(this.changeDataLink));
      this.data = {
        fileslist: [
          {
            link: false
          }
        ]
      };
      this.queue = [];
      this.editor = new PhotoEditView({
        el: this.photoEl
      });
      this.editor.change();
    }

    UploadEditView.prototype.changeDataLink = function(product) {
      return this.data.link = product != null ? product.id : void 0;
    };

    UploadEditView.prototype.change = function(item) {
      return this.render();
    };

    UploadEditView.prototype.active = function() {};

    UploadEditView.prototype.render = function() {
      var category, selection;
      selection = Category.selectionList();
      category = Category.record;
      this.product = Product.find(selection[0]) || false;
      this.uploadinfoEl.html(this.template({
        category: category,
        product: this.product
      }));
      this.refreshElements();
      return this.el;
    };

    UploadEditView.prototype.setAutoupload = function(b) {
      return this.uploader.fileupload('option', 'autoUpload', b);
    };

    UploadEditView.prototype.getAutoupload = function() {
      return this.uploader.fileupload('option', 'autoUpload');
    };

    UploadEditView.prototype.destroyed = function() {};

    UploadEditView.prototype.fail = function(e, data) {
      var product;
      this.log(data.textStatus);
      this.log(data.errorThrown);
      product = Product.find(this.data.link);
      return Spine.trigger('loading:fail', product, data.errorThrown);
    };

    UploadEditView.prototype.drop = function(e, data) {};

    UploadEditView.prototype.add = function(e, data) {
      var file, i, len, ref, results;
      this.trigger('active');
      this.clearEl.click();
      this.parent.toggleAutoUpload(true);
      if (!this.checkSelected(data)) {
        this.cancelUpload(e, data);
        return;
      }
      ref = data.files;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        file = ref[i];
        results.push(this.data.fileslist.push(file));
      }
      return results;
    };

    UploadEditView.prototype.checkSelected = function(data) {
      var auto, multiple, str, valid;
      valid = function() {
        return !!Category.selectionList().length;
      };
      auto = this.getAutoupload() ? '' : 'nicht';
      if (!valid()) {
        multiple = data.files.length > 1;
        str = multiple ? 'Sollen die Fotos ' : 'Soll das Foto ';
        App.confirm('NO_CAT_FOR_UPLOAD', null, 'alert');
        return false;
      }
      return true;
    };

    UploadEditView.prototype.cancelUpload = function(e, data) {
      this.autoupload = this.getAutoupload();
      if (this.autoupload) {
        this.parent.toggleAutoUpload(false);
      }
      this.jqXHR(data).abort();
      return $('button.cancel', '#fileupload').click((function(_this) {
        return function() {
          return _this.jqXHR(data).abort();
        };
      })(this));
    };

    UploadEditView.prototype.jqXHR = function(data) {
      return this.uploader.fileupload('send', data).error((function(_this) {
        return function(jqXHR, textStatus, errorThrown) {
          if (errorThrown === 'abort') {
            return _this.log('Foto Upload abgebrochen');
          }
        };
      })(this));
    };

    UploadEditView.prototype.submit = function(e, data) {
      return $('button.cancel', this.uploader).click((function(_this) {
        return function() {
          return _this.jqXHR(data).abort();
        };
      })(this));
    };

    UploadEditView.prototype.send = function(e, data) {
      var product;
      product = Product.find(this.data.link);
      return Spine.trigger('loading:start', product);
    };

    UploadEditView.prototype.alldone = function(e, data) {};

    UploadEditView.prototype.done = function(e, data) {
      var i, len, photos, product, raw, raws, ref, selection;
      product = Product.find(this.data.link);
      raws = $.parseJSON(data.jqXHR.responseText);
      photos = [];
      for (i = 0, len = raws.length; i < len; i++) {
        raw = raws[i];
        photos.push(new Photo(raw['Photo']).save({
          ajax: false
        }));
      }
      if (product) {
        Photo.trigger('create:join', photos, product);
      } else {
        Photo.trigger('created', photos);
        this.navigate('/category', ((ref = Category.record) != null ? ref.id : void 0) || '', '');
      }
      console.log(product);
      Spine.trigger('loading:done', product);
      selection = photos.toId();
      Product.updateSelection(selection);
      if (this.autoupload) {
        this.parent.toggleAutoUpload(this.autoupload);
      }
      delete this.autoupload;
      return e.preventDefault();
    };

    UploadEditView.prototype.progress = function(e, data) {};

    UploadEditView.prototype.paste = function(e, data) {
      this.log('paste');
      if (data.files.length) {
        return this.drop(e, data);
      }
    };

    UploadEditView.prototype.notify = function() {
      return App.modal2ButtonView.show({
        header: 'No Product selected',
        body: 'Please select an product .',
        info: '',
        button_1_text: 'Hallo',
        button_2_text: 'Bye'
      });
    };

    UploadEditView.prototype.changedSelected = function(product) {
      var ref;
      product = Product.find(product.id);
      if (this.data.fileslist.length) {
        return $.extend(this.data, {
          link: (ref = Product.record) != null ? ref.id : void 0
        });
      }
    };

    UploadEditView.prototype.toggleEditor = function() {
      return this.editor.content.toggleClass('hide', !this.isHidden());
    };

    UploadEditView.prototype.isHidden = function() {
      return this.editor.content.hasClass('hide');
    };

    return UploadEditView;

  })(Spine.Controller);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = UploadEditView;
  }

}).call(this);
 },"controllers/wait_view": function(exports, require, module) { (function() {
  var $, Controller, Extender, ModalSimpleView, Model, Spine, WaitView,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Model = Spine.Model;

  Controller = Spine.Controller;

  ModalSimpleView = require("controllers/modal_simple_view");

  Extender = require('extensions/controller_extender');

  WaitView = (function(superClass) {
    extend(WaitView, superClass);

    WaitView.extend(Extender);

    function WaitView() {
      WaitView.__super__.constructor.apply(this, arguments);
      this.bind('active', this.proxy(this.active));
      this.header = new Spine.Controller;
      Spine.bind('show:wait', this.proxy(this.show));
      Spine.bind('done:wait', this.proxy(this.close));
    }

    WaitView.prototype.render = function(items) {};

    WaitView.prototype.show = function(params) {
      App.showView.trigger('canvas', this);
      return this.active(params);
    };

    WaitView.prototype.active = function(options) {
      return this.notify(options);
    };

    WaitView.prototype.notify = function(options) {
      var defaults;
      if (options == null) {
        options = {};
      }
      defaults = {
        body: 'Body',
        small: true
      };
      options = $.extend(defaults, options);
      this.modalSimpleView = new ModalSimpleView({
        modalOptions: {
          keyboard: true,
          show: false
        },
        renderOptions: options
      });
      this.modalSimpleView.el.one('hidden.bs.modal', this.proxy(this.hiddenmodal));
      this.modalSimpleView.el.one('hide.bs.modal', this.proxy(this.hidemodal));
      this.modalSimpleView.el.one('show.bs.modal', this.proxy(this.showmodal));
      return this.modalSimpleView.show();
    };

    WaitView.prototype.close = function(cb) {
      this.modalSimpleView.close();
      if (typeof cb === 'function') {
        return cb.call(this);
      }
    };

    WaitView.prototype.hidemodal = function(e) {};

    WaitView.prototype.hiddenmodal = function(e) {};

    WaitView.prototype.showmodal = function(e) {};

    return WaitView;

  })(Spine.Controller);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = WaitView;
  }

}).call(this);
 },"extensions/ajax_relations": function(exports, require, module) { (function() {
  var $, AjaxRelations, Builder, CategoriesProduct, Category, Model, Photo, Product, ProductsPhoto, Request, Spine,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require('spine');

  $ = Spine.$;

  Model = Spine.Model;

  Category = require('models/category');

  Product = require('models/product');

  Photo = require('models/photo');

  ProductsPhoto = require('models/products_photo');

  CategoriesProduct = require('models/categories_product');

  require('spine/lib/ajax');

  Builder = (function() {
    function Builder(record) {
      var base;
      this.record = record;
      this.data = {};
      this.model = this.record.constructor;
      this.foreignModels = typeof (base = this.model).foreignModels === "function" ? base.foreignModels() : void 0;
    }

    Builder.prototype.newWrapper = function(key) {
      var data;
      if (!key.className) {
        throw 'No classname found';
      }
      data = {};
      data[key.className] = {};
      return data;
    };

    Builder.prototype.build = function() {
      var foreignRecords, i, key, len, ref, value;
      if (this.foreignModels) {
        this.fModels = (function() {
          var ref, results;
          ref = this.foreignModels;
          results = [];
          for (key in ref) {
            value = ref[key];
            results.push(this.foreignModels[key]);
          }
          return results;
        }).call(this);
        ref = this.fModels;
        for (i = 0, len = ref.length; i < len; i++) {
          key = ref[i];
          foreignRecords = Model[key.joinTable].filter(this.record.id, {
            associationForeignKey: key.foreignKey
          });
          this.data[key.joinTable] = foreignRecords;
        }
      }
      this.data[this.model.className] = this.record;
      return this.data;
    };

    return Builder;

  })();

  Request = (function(superClass) {
    extend(Request, superClass);

    function Request(record) {
      this.record = record;
      Request.__super__.constructor.apply(this, arguments);
      this.data = new Builder(this.record).build();
    }

    Request.prototype.create = function(params, options) {
      return this.ajaxQueue(params, {
        type: "POST",
        data: JSON.stringify(this.data),
        url: Spine.Ajax.getURL(this.model)
      }).done(this.recordResponse(options)).fail(this.failResponse(options));
    };

    Request.prototype.update = function(params, options) {
      return this.ajaxQueue(params, {
        type: "PUT",
        data: JSON.stringify(this.data),
        url: Spine.Ajax.getURL(this.record)
      }).done(this.recordResponse(options)).fail(this.failResponse(options));
    };

    return Request;

  })(Spine.Ajax.Singleton);

  AjaxRelations = {
    extended: function() {
      var Include;
      Include = {
        ajax: function() {
          return new Request(this);
        }
      };
      return this.include(Include);
    }
  };

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Model.AjaxRelations = AjaxRelations;
  }

}).call(this);
 },"extensions/cache": function(exports, require, module) { (function() {
  var $, Model, Spine;

  Spine = require("spine");

  $ = Spine.$;

  Model = Spine.Model;

  Model.Cache = {
    extended: function() {
      var Extend, Include;
      Extend = {
        caches: [
          {
            global: []
          }
        ],
        cacheList: (function(_this) {
          return function(recordID) {
            var i, id, item, itm, len, ref;
            id = recordID || 'global';
            if (!id) {
              return;
            }
            ref = _this.caches;
            for (i = 0, len = ref.length; i < len; i++) {
              item = ref[i];
              if (itm = item[id]) {
                return itm;
              }
            }
            throw 'record ' + id + ' is not configured ';
          };
        })(this),
        cache: function(url, id) {
          var cached, i, item, key, len, val;
          cached = this.cacheList(id);
          if (!cached) {
            return;
          }
          for (i = 0, len = cached.length; i < len; i++) {
            item = cached[i];
            for (key in item) {
              val = item[key];
              if (item[url]) {
                return val[0];
              }
            }
          }
        },
        initCache: function(id) {
          var arr;
          arr = this.caches;
          arr.push(this.hash(id));
          return arr;
        },
        hash: function(key) {
          var o;
          o = new Object();
          o[key] = [];
          return o;
        },
        hasCache: function(url, id) {
          return !!(this.cache(url, id));
        },
        addToCache: function(url, uris) {
          var i, item, itm, itm_url, key, len, results, uri, val;
          results = [];
          for (i = 0, len = uris.length; i < len; i++) {
            uri = uris[i];
            results.push((function() {
              var results1;
              results1 = [];
              for (key in uri) {
                val = uri[key];
                item = this.cacheList(key);
                if (!this.keyExists.call(item, url)) {
                  item.push(this.hash(url));
                }
                results1.push((function() {
                  var j, len1, ref, results2;
                  results2 = [];
                  for (j = 0, len1 = item.length; j < len1; j++) {
                    itm = item[j];
                    if (itm_url = itm[url]) {
                      [].splice.apply(itm_url, [0, itm_url.length - 0].concat(ref = [])), ref;
                      results2.push(itm_url.push(uri));
                    } else {
                      results2.push(void 0);
                    }
                  }
                  return results2;
                })());
              }
              return results1;
            }).call(this));
          }
          return results;
        },
        itemExists: function(item) {
          var i, key, len, ref, thisItem, val;
          for (key in item) {
            val = item[key];
            ref = this;
            for (i = 0, len = ref.length; i < len; i++) {
              thisItem = ref[i];
              if (thisItem[key]) {
                return thisItem;
              }
            }
          }
          return false;
        },
        keyExists: function(key) {
          var i, len, ref, thisItem;
          ref = this;
          for (i = 0, len = ref.length; i < len; i++) {
            thisItem = ref[i];
            if (thisItem[key]) {
              return thisItem;
            }
          }
          return false;
        },
        destroyCache: function(id) {
          var findIdFromObject, findItemsFromArray, i, idx, itm, len, list, results;
          list = this.cacheList();
          findIdFromObject = function(id, obj) {
            var arr, i, idx, itm, key, len, value;
            for (key in obj) {
              value = obj[key];
              arr = obj[key];
              for (idx = i = 0, len = arr.length; i < len; idx = ++i) {
                itm = arr[idx];
                if (itm[id]) {
                  return arr.splice(idx, 1);
                }
              }
            }
          };
          findItemsFromArray = function(items) {
            var i, itm, ix, len, results;
            results = [];
            for (ix = i = 0, len = items.length; i < len; ix = ++i) {
              itm = items[ix];
              results.push(findIdFromObject(id, itm));
            }
            return results;
          };
          results = [];
          for (idx = i = 0, len = list.length; i < len; idx = ++i) {
            itm = list[idx];
            if (itm[id]) {
              results.push(list.splice(idx, 1));
            } else {
              results.push(void 0);
            }
          }
          return results;
        },
        clearCache: function(id) {
          var originalList, ref;
          originalList = this.cacheList(id);
          [].splice.apply(originalList, [0, originalList.length - 0].concat(ref = [])), ref;
          return originalList;
        }
      };
      Include = {
        cache: function(url) {
          return this.constructor.cache(url, this.id);
        },
        addToCache: function(url, uri, mode) {
          return this.constructor.addToCache(this, url, uri, mode);
        },
        destroyCache: function() {
          return this.constructor.destroyCache(this.id);
        },
        clearCache: function() {
          var list;
          return list = this.constructor.clearCache(this.id);
        }
      };
      this.extend(Extend);
      return this.include(Include);
    }
  };

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Model.Cache;
  }

}).call(this);
 },"extensions/controller_extender": function(exports, require, module) { (function() {
  var $, Controller, Spine,
    slice = [].slice;

  Spine = require("spine");

  $ = Spine.$;

  Controller = Spine.Controller;

  Controller.Extender = {
    extended: function() {
      var Extend, Include;
      Extend = {
        empty: function() {
          this.log('empty');
          return this.constructor.apply(this, arguments);
        }
      };
      Include = {
        init: function() {
          var modelName, modelsName, ref, ref1;
          this.trace = !Spine.isProduction;
          this.logPrefix = '(' + this.constructor.name + ')';
          this.model = (modelName = this.el.data('modelName')) ? Model[modelName] : (ref = this.parent) != null ? ref.model : void 0;
          return this.models = (modelsName = this.el.data('modelsName')) ? Model[modelsName] : (ref1 = this.parent) != null ? ref1.models : void 0;
        },
        p: function() {
          return App.sidebar.products;
        },
        humanize: function(arr) {
          var p, plural, record;
          if (!Array.isArray(arr)) {
            arr = [arr];
          }
          if (!arr.length) {
            throw 'nothing to humanize';
          }
          record = arr[0];
          plural = arr.length > 1;
          return {
            plural: plural,
            length: arr.length,
            type: record.constructor['humanName' + ((p = plural) ? 's' : '')](),
            name: record.n()
          };
        },
        emptyMessage: function(name) {
          return name;
        },
        followLink: function(e) {
          var strWindowFeatures;
          strWindowFeatures = "menubar=no,location=no,resizable=no,scrollbars=yes,status=no";
          window.open($(e.target).closest('a').attr('href'), 'new');
          e.preventDefault();
          return e.stopPropagation();
        },
        exposeSelection: function(selection) {
          var el, first, i, id, len;
          if (selection == null) {
            selection = this.model.selectionList();
          }
          this.log('exposing');
          this.deselect();
          for (i = 0, len = selection.length; i < len; i++) {
            id = selection[i];
            el = $('#' + id, this.el);
            el.addClass("active");
          }
          if (first = selection.first()) {
            return $('#' + first, this.el).addClass("hot");
          }
        },
        createImage: function(url, onload) {
          var img;
          img = new Image();
          if (onload) {
            img.onload = onload;
          }
          if (url) {
            img.src = url;
          }
          return img;
        },
        eql: function() {
          var c, p, ref, ref1;
          c = (ref = this.current) != null ? ref.model.className : void 0;
          p = (ref1 = this.previous) != null ? ref1.model.className : void 0;
          return !!(c === p);
        },
        eql_: function() {
          var prev, rec, ref;
          rec = this.model.record;
          prev = this.current;
          this.current = rec;
          return !!(((ref = this.current) != null ? typeof ref.eql === "function" ? ref.eql(prev) : void 0 : void 0) && !!prev);
        },
        activated: function() {},
        testEmpty: function() {
          if (this.model.record) {
            if (!this.model.record.contains()) {
              return this.renderEmpty();
            }
          }
        },
        renderEmpty: function(s, element) {
          var info;
          if (s == null) {
            s = 'nichts zu melden';
          }
          if (element == null) {
            element = 'el';
          }
          info = '<label class="invite"><span class="enlightened">' + this.emptyMessage(s) + '</span></label>';
          this[element].html($("#noSelectionTemplate").tmpl({
            type: info || ''
          }));
          return this.el;
        },
        wipe: function(item) {
          var first;
          if (this.model.record) {
            first = this.model.record.contains() === 1;
          }
          if (first) {
            this.el.empty();
          }
          return this.el;
        },
        focusFirstInput: function(el) {
          if (el == null) {
            el = this.el;
          }
          if (!el) {
            return;
          }
          if (el.is(':visible')) {
            $('input', el).first().focus().select();
          }
          return el;
        },
        focus: function() {
          return this.el.focus();
        },
        panelIsActive: function(controller) {
          return App[controller].isActive();
        },
        openPanel: function(controller) {
          var ui;
          ui = App.vmanager.externalUI(App[controller]);
          return ui.click();
        },
        closePanel: function(controller, target) {
          var ui;
          App[controller].activate();
          ui = App.vmanager.externalUI(App[controller]);
          return ui.click();
        },
        isMeta: function(e) {
          return (e != null ? e.metaKey : void 0) || (e != null ? e.ctrlKey : void 0) || (e != null ? e.altKey : void 0);
        },
        children: function(sel) {
          return this.el.children(sel);
        },
        find: function(sel) {
          return this.el.find(sel);
        },
        remove: function(item) {
          var el, els, f;
          els = this.el.find('.items');
          el = els.children().forItem(item);
          if (!el.length) {
            return;
          }
          el.addClass('out').removeClass('in');
          f = function() {
            el.detach();
            return this.trigger('detached', item);
          };
          return this.delay(f, 400);
        },
        deselect: function() {
          var args, ref;
          args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          return (ref = this.el).deselect.apply(ref, args);
        },
        clearSelection: function(e) {
          this.deselect();
          return this.select(e, []);
        },
        sortable: function(type) {
          return this.el.sortable(type);
        },
        findModelElement: function(item) {
          return this.children().forItem(item, true);
        },
        noMethod: function(e) {
          e.stopPropagation();
          return e.preventDefault();
        }
      };
      this.extend(Extend);
      return this.include(Include);
    }
  };

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Controller.Extender;
  }

}).call(this);
 },"extensions/develop": function(exports, require, module) { (function() {
  var $, Ajax, Base, Develop, Developer, DeveloperCollection, Model, Spine,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Model = Spine.Model;

  Ajax = {
    enabled: true,
    cache: true,
    pending: false,
    requests: [],
    requestNext: function() {
      var next;
      next = this.requests.shift();
      if (next) {
        return this.request(next);
      } else {
        this.pending = false;
        return Spine.trigger('uri:alldone');
      }
    },
    request: function(callback) {
      return (callback()).complete((function(_this) {
        return function() {
          return _this.requestNext();
        };
      })(this));
    },
    queue: function(callback) {
      if (!this.enabled) {
        return;
      }
      if (this.pending) {
        this.requests.push(callback);
      } else {
        this.pending = true;
        this.request(callback);
      }
      return callback;
    }
  };

  Base = (function() {
    function Base() {}

    Base.prototype.defaults = {
      contentType: 'application/json',
      processData: false,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      dataType: 'json'
    };

    Base.prototype.ajax = function(params, defaults) {
      return $.ajax($.extend({}, this.defaults, defaults, params));
    };

    Base.prototype.ajaxQueue = function(callback) {
      return Ajax.queue(callback);
    };

    Base.prototype.get = function() {
      return this.ajaxQueue((function(_this) {
        return function() {
          return _this.ajax({
            type: "POST",
            url: base_url + 'photos/dev/' + _this.url,
            data: JSON.stringify(_this.data)
          }).done(_this.recordResponse).fail(_this.failResponse);
        };
      })(this));
    };

    Base.prototype.uri = function(options) {
      var o, ret, val;
      ret = (function() {
        var results;
        results = [];
        for (o in options) {
          val = options[o];
          results.push(val);
        }
        return results;
      })();
      return ret.join('/');
    };

    return Base;

  })();

  Developer = (function(superClass) {
    extend(Developer, superClass);

    function Developer(model, method, params, callback1, data1) {
      var options;
      this.model = model;
      this.callback = callback1;
      this.data = data1 != null ? data1 : [];
      this.failResponse = bind(this.failResponse, this);
      this.recordResponse = bind(this.recordResponse, this);
      Developer.__super__.constructor.apply(this, arguments);
      options = $.extend({
        method: method
      }, this.settings, params);
      this.url = this.uri(options);
      return;
      if (!this.data.length) {
        return;
      }
    }

    Developer.prototype.settings = {};

    Developer.prototype.recordResponse = function(res) {
      return this.callback(res);
    };

    Developer.prototype.failResponse = function(xhr, statusText, error) {
      return this.model.trigger('ajaxError', xhr, statusText, error);
    };

    return Developer;

  })(Base);

  DeveloperCollection = (function(superClass) {
    extend(DeveloperCollection, superClass);

    function DeveloperCollection(record, params, mode, callback1, max) {
      var options, photos, type;
      this.record = record;
      this.callback = callback1;
      this.failResponse = bind(this.failResponse, this);
      this.recordResponse = bind(this.recordResponse, this);
      DeveloperCollection.__super__.constructor.apply(this, arguments);
      type = this.record.constructor.className;
      switch (type) {
        case 'Product':
          photos = ProductsPhoto.photos(this.record.id);
          max = max || photos.length;
          this.mode = mode;
          this.photos = photos.slice(0, max);
          break;
        case 'Photo':
          this.photos = [this.record];
      }
      options = $.extend({}, this.settings, params);
      this.url = this.uri(options);
    }

    DeveloperCollection.prototype.settings = {
      width: 140,
      height: 140,
      square: 1,
      quality: 70
    };

    DeveloperCollection.prototype.init = function() {
      var cache;
      cache = this.record.cache(this.url);
      if (cache != null ? cache.length : void 0) {
        return this.callback(cache, this.record);
      } else {
        return this.get();
      }
    };

    DeveloperCollection.prototype.all = function() {
      return this.ajaxQueue((function(_this) {
        return function() {
          return _this.ajax({
            type: "POST",
            url: base_url + 'photos/uri/' + _this.url,
            data: JSON.stringify(_this.photos)
          }).done(_this.recordResponse).fail(_this.failResponse);
        };
      })(this));
    };

    DeveloperCollection.prototype.recordResponse = function(uris) {
      return this.callback(uris, this.record);
    };

    DeveloperCollection.prototype.failResponse = function(xhr, statusText, error) {
      return this.record.trigger('ajaxError', xhr, statusText, error);
    };

    return DeveloperCollection;

  })(Base);

  Develop = {
    extended: function() {
      var Extend, Include;
      Include = {
        develop: function(params, mode, callback, max) {
          return new DeveloperCollection(this, params, mode, callback, max).get();
        }
      };
      Extend = {
        develop: function(method, params, callback, data) {
          return new Developer(this, method, params, callback, data).get();
        }
      };
      this.include(Include);
      return this.extend(Extend);
    }
  };

  Develop.Ajax = Ajax;

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Model.Develop = Develop;
  }

}).call(this);
 },"extensions/drag": function(exports, require, module) { (function() {
  var $, CategoriesProduct, Category, Controller, Drag, Log, Photo, Product, ProductsPhoto, Spine, SpineDragItem;

  Spine = require("spine");

  $ = Spine.$;

  Log = Spine.Log;

  Category = require('models/category');

  Product = require('models/product');

  Photo = require('models/photo');

  ProductsPhoto = require('models/products_photo');

  CategoriesProduct = require('models/categories_product');

  SpineDragItem = require('models/drag_item');

  Controller = Spine.Controller;

  Controller.Drag = {
    extended: function() {
      var Include;
      Include = {
        dragstart: function(e) {
          var className, data, el, event, id, img, model, parentEl, parentModel, parentRecord, record, ref, ref1, ref2, selection, source;
          this.log('dragstart');
          event = e.originalEvent;
          el = $(e.target);
          if (!(record = el.item())) {
            e.stopPropagation();
            e.preventDefault();
            return;
          }
          parentEl = el.parents('.data');
          parentModel = ((ref = parentEl.data('tmplItem')) != null ? ref.data.constructor : void 0) || parentEl.data('modelName');
          parentRecord = ((ref1 = parentEl.data('tmplItem')) != null ? ref1.data : void 0) || Model[parentModel].record;
          Spine.dragItem.updateAttributes({
            el: el,
            els: [],
            source: record,
            sourceModelName: record.constructor.className,
            sourceModelId: record.id,
            originModel: Model[parentModel],
            originModelName: parentModel,
            originRecord: parentRecord,
            originRecordName: parentRecord.constructor.className,
            originRecordId: parentRecord.id,
            selection: []
          });
          this.trigger('drag:start', e, record);
          parentEl.addClass('drag-in-progress');
          model = Spine.dragItem.originRecord || Spine.dragItem.originModel;
          source = Spine.dragItem.source;
          selection = model.selectionList().slice(0);
          if (selection.indexOf(id = source.id) === -1) {
            selection = [source.id];
            model.updateSelection(selection);
          }
          Spine.dragItem.selection = selection;
          Spine.dragItem.save();
          data = [];
          data.push(selection);
          event = e.originalEvent;
          event.dataTransfer.effectAllowed = 'move';
          event.dataTransfer.setData('text/json', JSON.stringify(data));
          if (!App.useDragImage) {
            return;
          }
          className = record.constructor.className;
          switch (className) {
            case 'Product':
              img = data.length === 1 ? App.ALBUM_SINGLE_MOVE : App.ALBUM_DOUBLE_MOVE;
              break;
            case 'Photo':
              img = data.length === 1 ? App.IMAGE_SINGLE_MOVE : App.IMAGE_DOUBLE_MOVE;
          }
          return (ref2 = event.dataTransfer) != null ? ref2.setDragImage(img, 45, 60) : void 0;
        },
        dragenter: function(e, data) {
          var event, func;
          this.log('enter');
          if (!Spine.dragItem.source) {
            e.stopPropagation();
            e.preventDefault();
            return;
          }
          event = e.originalEvent;
          func = (function(_this) {
            return function() {
              return _this.trigger('drag:timeout', e, Spine.timer);
            };
          })(this);
          clearTimeout(Spine.timer);
          Spine.timer = setTimeout(func, 1000);
          this.trigger('drag:enter', e, data);
          return false;
        },
        dragover: function(e, data) {
          e.stopPropagation();
          e.preventDefault();
          this.trigger('drag:over', e, this);
          return false;
        },
        dragleave: function(e, data) {
          this.trigger('drag:leave', e, this);
          return false;
        },
        dragend: function(e, data) {
          $('.drag-in-progress').removeClass('drag-in-progress');
          this.trigger('drag:end', e, data);
          return false;
        },
        drop: function(e, data) {
          var event;
          this.trigger('drag:drop', e, data);
          $('.drag-in-progress').removeClass('drag-in-progress');
          clearTimeout(Spine.timer);
          event = e.originalEvent;
          data = event.dataTransfer.getData('text/json');
          try {
            data = JSON.parse(data);
          } catch (error) {
            e = error;
          }
          return false;
        },
        dragStart: function(e, record) {},
        dragEnter: function(e) {
          var el, indicator, o, origin, ref, ref1, s, selector, source, t, target;
          this.log('dragEnter');
          el = indicator = $(e.target).closest('.data');
          selector = el.attr('data-drag-over');
          if (selector) {
            indicator = el.children('.' + selector);
          }
          target = t = Spine.dragItem.target = ((ref = el.data('tmplItem')) != null ? ref.data : void 0) || this.model.record;
          source = s = Spine.dragItem.source;
          origin = o = Spine.dragItem.originRecord;
          if ((ref1 = Spine.dragItem.closest) != null) {
            ref1.removeClass('over nodrop');
          }
          Spine.dragItem.closest = indicator;
          if (this.validateDrop(target, source, origin)) {
            Spine.dragItem.closest.addClass('over');
          } else {
            Spine.dragItem.closest.addClass('over nodrop');
          }
          return Spine.dragItem.save();
        },
        dragOver: (function(_this) {
          return function(e) {};
        })(this),
        dragLeave: (function(_this) {
          return function(e) {};
        })(this),
        dragEnd: (function(_this) {
          return function(e) {
            var ref;
            _this.log('dragEnd');
            return (ref = Spine.dragItem.closest) != null ? ref.removeClass('over nodrop') : void 0;
          };
        })(this),
        dragDrop: function(e, record) {
          var cb, hash, origin, photos, ref, selection, source, target;
          this.log('dragDrop');
          if (!e.originalEvent.dataTransfer.files.length) {
            e.stopPropagation();
            e.preventDefault();
          }
          $('.sortable-placeholder').detach();
          target = Spine.dragItem.target;
          source = Spine.dragItem.source;
          origin = Spine.dragItem.originRecord;
          if (!(source || target || source)) {
            return;
          }
          if ((ref = Spine.dragItem.closest) != null) {
            ref.removeClass('over nodrop');
          }
          if (!this.validateDrop(target, source, origin, true)) {
            return false;
          }
          hash = location.hash;
          selection = Spine.dragItem.selection;
          switch (source.constructor.className) {
            case 'Product':
              cb = (function(_this) {
                return function() {
                  if (!_this.isMeta(e)) {
                    return Product.trigger('destroy:join', Product.toRecords(selection), origin);
                  }
                };
              })(this);
              return Product.trigger('create:join', Product.toRecords(selection), target, cb);
            case 'Photo':
              photos = Photo.toRecords(selection);
              cb = (function(_this) {
                return function() {
                  if (!_this.isMeta(e)) {
                    Photo.trigger('destroy:join', {
                      photos: photos,
                      product: origin
                    });
                  }
                  return _this.navigate(hash);
                };
              })(this);
              return Photo.trigger('create:join', photos, target, cb);
          }
        },
        validateDrop: (function(_this) {
          return function(target, source, origin, alrt) {
            var i, item, items, j, len, len1, oid, res2, sid, tid;
            tid = target != null ? target.id : void 0;
            sid = source != null ? source.id : void 0;
            oid = origin != null ? origin.id : void 0;
            if (!(((tid != null) && (sid != null)) || (tid === sid))) {
              return false;
            }
            switch (source.constructor.className) {
              case 'Product':
                if (['Category', 'ProductsTrash'].indexOf(target.constructor.className) === -1) {
                  return false;
                }
                res2 = oid === tid;
                if (res2) {
                  return false;
                }
                items = CategoriesProduct.filter(target.id, {
                  associationForeignKey: 'category_id'
                });
                for (i = 0, len = items.length; i < len; i++) {
                  item = items[i];
                  if (item.product_id === source.id) {
                    return false;
                  }
                }
                return true;
              case 'Photo':
                if ((target != null ? target.constructor.className : void 0) !== 'Product') {
                  return false;
                }
                if (oid === tid) {
                  return false;
                }
                items = ProductsPhoto.filter(target.id, {
                  associationForeignKey: 'product_id'
                });
                for (j = 0, len1 = items.length; j < len1; j++) {
                  item = items[j];
                  if (item.photo_id === sid) {
                    return false;
                  }
                }
                return true;
              default:
                return false;
            }
          };
        })(this)
      };
      return this.include(Include);
    }
  };

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Drag = Controller.Drag;
  }

}).call(this);
 },"extensions/filter": function(exports, require, module) { (function() {
  var $, Filter, Model, Spine;

  Spine = require("spine");

  $ = Spine.$;

  Model = Spine.Model;

  Filter = {
    extended: function() {
      var extend, include;
      extend = {
        options: {
          func: 'select'
        },
        filter: function(query, options) {
          var opts;
          opts = $.extend({}, this.options, options);
          if (!query) {
            return this.all();
          }
          return this.select(function(item) {
            return item[opts.func](query, opts);
          });
        },
        filterSortByOrder: function(query, options) {
          return (this.filter(query, options)).sort(this.sortByOrder);
        },
        filterRelated: function(id, options) {
          var definition, foreignKey, joinTableItems, model, ret, sort;
          definition = this.foreignModels()[options.model];
          model = definition.model;
          foreignKey = definition.foreignKey;
          joinTableItems = Model[definition.joinTable].filter(id, definition);
          ret = this.findRelated(joinTableItems, foreignKey);
          if (sort = options != null ? options.sort : void 0) {
            return ret.sort(this[sort]);
          }
          return ret;
        },
        nameSort: function(a, b) {
          var aa, bb, ref, ref1;
          aa = (ref = (a || '').name) != null ? ref.toLowerCase() : void 0;
          bb = (ref1 = (b || '').name) != null ? ref1.toLowerCase() : void 0;
          if (aa === bb) {
            return 0;
          } else if (aa < bb) {
            return -1;
          } else {
            return 1;
          }
        },
        sortByOrder: function(a, b) {
          var aInt, bInt;
          aInt = parseInt(a.order);
          bInt = parseInt(b.order);
          if (aInt < bInt) {
            return -1;
          } else if (aInt > bInt) {
            return 1;
          } else {
            return 0;
          }
        },
        sortByReverseOrder: function(a, b) {
          var aInt, bInt;
          aInt = parseInt(a.order);
          bInt = parseInt(b.order);
          if (aInt < bInt) {
            return 1;
          } else if (aInt > bInt) {
            return -1;
          } else {
            return 0;
          }
        },
        sortByScreenName: function(a, b) {
          a = a.screenname;
          b = b.screenname;
          if (a < b) {
            return -1;
          } else if (a > b) {
            return 1;
          } else {
            return 0;
          }
        }
      };
      include = {
        select: function(query) {
          var atts, key, value;
          query = query != null ? query.toLowerCase() : void 0;
          atts = (this.selectAttributes || this.attributes).apply(this);
          for (key in atts) {
            value = atts[key];
            value = value != null ? value.toLowerCase() : void 0;
            if (!((value != null ? value.indexOf(query) : void 0) === -1)) {
              return true;
            }
          }
          return false;
        }
      };
      this.extend(extend);
      return this.include(include);
    }
  };

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Model.Filter = Filter;
  }

}).call(this);
 },"extensions/init_db": function(exports, require, module) { (function() {
  var $, Flash, Log, Model, Spine,
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  Spine = require("spine");

  $ = Spine.$;

  Model = Spine.Model;

  Log = Spine.Log;

  Flash = require("models/flash");

  Model.Extender = {
    extended: function() {
      var Extend, Include;
      Extend = {
        trace: !Spine.isProduction,
        logPrefix: '(' + this.className + ')',
        guid: function() {
          var back, diff, mask, milli, re1, re2, re3, re4, res, ret, sub;
          mask = [8, 4, 4, 4, 12];
          ret = [];
          ret = (function() {
            var i, len, results;
            results = [];
            for (i = 0, len = mask.length; i < len; i++) {
              sub = mask[i];
              res = null;
              milli = new Date().getTime();
              back = new Date().setTime(milli * (-200));
              diff = milli - back;
              re1 = diff.toString(16).split('');
              re2 = re1.slice(sub * (-1));
              re3 = re2.join('');
              results.push(re3);
            }
            return results;
          })();
          re4 = ret.join('-');
          return re4;
        },
        uuid: function() {
          var s4;
          s4 = function() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
          };
          return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
        },
        record: false,
        selection: [
          {
            global: []
          }
        ],
        current: function(recordOrID) {
          var id, prev, rec, ref, same;
          id = (recordOrID != null ? recordOrID.id : void 0) || recordOrID;
          rec = this.find(id) || false;
          prev = this.record;
          this.record = rec;
          same = !!(((ref = this.record) != null ? typeof ref.eql === "function" ? ref.eql(prev) : void 0 : void 0) && !!prev);
          Model[this.className].trigger('current', this.record, !same);
          if (!same) {
            Model[this.className].trigger('change:current', this.record, this.className);
          }
          return this.record;
        },
        selectionList: function(recordID) {
          var i, id, item, len, ref, ref1, ref2, ret;
          ret = [];
          id = recordID || ((ref = this.record) != null ? ref.id : void 0) || ((ref1 = this.record) != null ? ref1.cid : void 0);
          if (!id) {
            return this.selection[0].global;
          }
          ref2 = this.selection;
          for (i = 0, len = ref2.length; i < len; i++) {
            item = ref2[i];
            if (item[id]) {
              return item[id];
            }
          }
          return ret;
        },
        updateSelection: function(list, id, options) {
          var defaults, option, ref, ret;
          if (list == null) {
            list = this.selectionList();
          }
          defaults = {
            trigger: true
          };
          option = $().extend(defaults, options);
          ret = this.emptySelection(id, list);
          if (option.trigger) {
            this.trigger('change:selection', ret, id);
          }
          if ((ref = Model[this.childType]) != null) {
            ref.current(ret.first());
          }
          return ret;
        },
        emptySelection: function(id, idOrList) {
          var originalList;
          if (idOrList == null) {
            idOrList = [];
          }
          if (!this.isArray(idOrList)) {
            idOrList = [idOrList];
          }
          originalList = this.selectionList(id);
          [].splice.apply(originalList, [0, originalList.length - 0].concat(idOrList)), idOrList;
          return originalList;
        },
        removeFromSelection: function(id, idOrList, options) {
          var i, index, len, list, originalList;
          if (idOrList == null) {
            idOrList = [];
          }
          originalList = this.selectionList(id);
          if (!this.isArray(idOrList)) {
            idOrList = [idOrList];
          }
          for (i = 0, len = idOrList.length; i < len; i++) {
            id = idOrList[i];
            if ((index = originalList.indexOf(id)) !== -1) {
              originalList.splice(index, 1);
            }
          }
          list = this.updateSelection(id, originalList.slice(0), options);
          return list;
        },
        isArray: function(value) {
          return Object.prototype.toString.call(value) === "[object Array]";
        },
        isObject: function(value) {
          return Object.prototype.toString.call(value) === "[object Object]";
        },
        isString: function(value) {
          return Object.prototype.toString.call(value) === "[object String]";
        },
        selected: function() {
          return this.record;
        },
        toId: function(records) {
          var i, len, record, results;
          if (records == null) {
            records = this.records;
          }
          results = [];
          for (i = 0, len = records.length; i < len; i++) {
            record = records[i];
            results.push(record.id);
          }
          return results;
        },
        toRecords: function(ids) {
          var i, id, len, results;
          if (ids == null) {
            ids = [];
          }
          results = [];
          for (i = 0, len = ids.length; i < len; i++) {
            id = ids[i];
            results.push(this.find(id));
          }
          return results;
        },
        duplicate: function(items, atts, options) {
          var item, newItem, ret;
          if (atts == null) {
            atts = {};
          }
          if (!Array.isArray(items)) {
            items = [items];
          }
          ret = [];
          ret = (function() {
            var i, len, results;
            results = [];
            for (i = 0, len = items.length; i < len; i++) {
              item = items[i];
              newItem = item.dup(true).save(options);
              newItem.updateAttributes(atts, options);
              results.push(newItem);
            }
            return results;
          })();
          return ret;
        },
        successHandler: function(data, status, xhr) {},
        errorHandler: function(record, xhr, statusText, error) {
          var status;
          status = xhr.status;
          if (status !== 200) {
            error = new Flash({
              record: record,
              xhr: xhr,
              statusText: statusText,
              error: error
            });
            return error.save();
          }
        },
        customErrorHandler: function(record, xhr) {
          var error, status;
          status = xhr.status;
          if (status !== 200) {
            error = new Error({
              flash: '<strong style="color:red">Login failed</strong>',
              xhr: xhr
            });
            error.save();
            return User.redirect('users/login');
          }
        },
        contains: function() {
          return [];
        },
        createJoinTables: function(arr) {
          var i, joinTables, key, len, results;
          if (!this.isArray(arr)) {
            return;
          }
          joinTables = this.joinTables();
          results = [];
          for (i = 0, len = joinTables.length; i < len; i++) {
            key = joinTables[i];
            results.push(Model[key].refresh(this.createJoins(arr, key), {
              clear: true
            }));
          }
          return results;
        },
        make: function(arr, key) {
          var i, len, obj, results;
          if (!Array.isArray(arr)) {
            return new this(arr);
          }
          results = [];
          for (i = 0, len = arr.length; i < len; i++) {
            obj = arr[i];
            results.push(new this(obj[key]));
          }
          return results;
        },
        activePhotos: function() {
          return Category.activePhotos();
        },
        joinTables: function() {
          var fModels, joinTables, key, value;
          fModels = this.foreignModels();
          joinTables = (function() {
            var results;
            results = [];
            for (key in fModels) {
              value = fModels[key];
              results.push(fModels[key]['joinTable']);
            }
            return results;
          })();
          return joinTables;
        },
        createJoins: function(json, tableName) {
          var i, introspect, len, obj, res;
          res = [];
          introspect = (function(_this) {
            return function(obj) {
              var i, item, j, key, len, len1, results, val;
              if (_this.isObject(obj)) {
                for (key in obj) {
                  val = obj[key];
                  if (key === tableName) {
                    for (i = 0, len = val.length; i < len; i++) {
                      item = val[i];
                      res.push(item);
                    }
                  } else {
                    introspect(obj[key]);
                  }
                }
              }
              if (_this.isArray(obj)) {
                results = [];
                for (j = 0, len1 = obj.length; j < len1; j++) {
                  val = obj[j];
                  results.push(introspect(val));
                }
                return results;
              }
            };
          })(this);
          for (i = 0, len = json.length; i < len; i++) {
            obj = json[i];
            introspect(obj);
          }
          return res;
        }
      };
      Include = {
        trace: !Spine.isProduction,
        logPrefix: this.className + '::',
        selectionList: function() {
          return this.constructor.selectionList(this.id);
        },
        selectionParentList: function() {
          var e, modelName;
          modelName = this.constructor['parent'];
          try {
            return Model[modelName].selectionList();
          } catch (error1) {
            e = error1;
            return [];
          }
        },
        updateSelectionID: function() {
          var i, idx, index, item, len, ref;
          ref = this.constructor.selection;
          for (idx = i = 0, len = ref.length; i < len; idx = ++i) {
            item = ref[idx];
            if (item[this.cid]) {
              index = idx;
            }
          }
          if (index) {
            this.constructor.selection.splice(index, 1);
          }
          return this.init(this);
        },
        removeSelectionID: function() {
          var __itm, __key, __val, __x, _idx, _item, _x, i, j, len, len1, list, modelName, ref, results;
          ref = this.constructor.selection;
          for (_idx = i = 0, len = ref.length; i < len; _idx = ++i) {
            _item = ref[_idx];
            if (_item[this.id]) {
              _x = _idx;
            }
          }
          if (_x) {
            this.constructor.selection.splice(_x, 1);
          }
          modelName = this.constructor['parent'];
          if (!modelName) {
            return;
          }
          list = Model[modelName].selection;
          results = [];
          for (j = 0, len1 = list.length; j < len1; j++) {
            __itm = list[j];
            results.push((function() {
              var results1;
              results1 = [];
              for (__key in __itm) {
                __val = __itm[__key];
                if (!(__x = __val.indexOf(this.id) === -1)) {
                  results1.push(__val.splice(__x, 1));
                } else {
                  results1.push(void 0);
                }
              }
              return results1;
            }).call(this));
          }
          return results;
        },
        removeFromSelection: function(list, options) {
          return this.constructor.removeFromSelection(this.id, list, options);
        },
        updateSelection: function(list, options) {
          if (list == null) {
            list = [];
          }
          if (!this.constructor.isArray(list)) {
            list = [list];
          }
          return list = this.constructor.updateSelection(list, this.id, options);
        },
        emptySelection: function() {
          var list;
          return list = this.constructor.emptySelection(this.id);
        },
        addRemoveSelection: function(isMetaKey) {
          var originalList;
          originalList = this.constructor.selectionList(this.id);
          if (!originalList) {
            return;
          }
          if (isMetaKey) {
            this.addUnique(originalList);
          } else {
            this.toggleSelected(originalList);
          }
          return originalList;
        },
        addToSelection: function(isMetaKey) {
          var originalList, ref;
          originalList = this.constructor.selectionList(this.id);
          if (!originalList) {
            return;
          }
          if (isMetaKey) {
            this.addUnique(originalList);
          } else {
            if (ref = this.id, indexOf.call(originalList, ref) < 0) {
              originalList.unshift(this.id);
            }
          }
          return originalList;
        },
        shiftSelection: function() {
          var index, originalList, rm;
          originalList = this.constructor.selectionList(this.id);
          if (!originalList) {
            return;
          }
          if (index = originalList.indexOf(this.id) === 0) {
            return originalList;
          }
          rm = originalList.splice(0, 1, originalList[index]);
          originalList.splice(index, 1);
          originalList.push(rm[0]);
          index = originalList.indexOf(this.id);
          return originalList;
        },
        updateChangedAttributes: function(atts) {
          var invalid, key, origAtts, value;
          this.log('updateChangedAttributes');
          invalid = false;
          origAtts = this.selectAttributes();
          for (key in atts) {
            value = atts[key];
            if (origAtts[key] !== value) {
              invalid = true;
              this[key] = value;
            }
          }
          if (invalid) {
            return this.save();
          }
        },
        addUnique: function(list) {
          var ref;
          [].splice.apply(list, [0, list.length - 0].concat(ref = [this.id])), ref;
          return list;
        },
        toggleSelected: function(list) {
          var index, ref;
          if (ref = this.id, indexOf.call(list, ref) < 0) {
            list.unshift(this.id);
          } else {
            index = list.indexOf(this.id);
            if (index !== -1) {
              list.splice(index, 1);
            }
          }
          return list;
        },
        searchSelect: function(query) {
          var atts, key, value;
          query = query.toLowerCase();
          atts = this.selectAttributes.apply(this);
          for (key in atts) {
            value = atts[key];
            value = value.toLowerCase();
            if (!((value != null ? value.indexOf(query) : void 0) === -1)) {
              return true;
            }
          }
          return false;
        },
        idSelect: function(query) {
          var value;
          query = query.toLowerCase();
          value = this.id.toLowerCase();
          if (!((value != null ? value.indexOf(query) : void 0) === -1)) {
            return true;
          }
          return false;
        },
        idExcludeSelect: function(query) {
          if (query.indexOf(this.id) === -1) {
            return true;
          }
          return false;
        },
        defaultDetails: {
          iCount: 0,
          aCount: 0,
          sCount: 0,
          author: ''
        }
      };
      this.include(Log);
      this.extend(Log);
      this.extend(Extend);
      return this.include(Include);
    }
  };

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Model.Extender;
  }

}).call(this);
 },"extensions/key_enhancer": function(exports, require, module) { (function() {
  var $, Controller, Spine;

  Spine = require("spine");

  $ = Spine.$;

  Controller = Spine.Controller;

  Controller.KeyEnhancer = {
    extended: function() {
      var Extend, Include;
      Extend = {
        events: {
          'keyup': 'keyup',
          'keypress input': 'stopPropagation',
          'keypress textarea': 'stopPropagation'
        }
      };
      Include = {
        init: function() {
          if (this.constructor.events) {
            return this.delegateEvents(this.constructor.events);
          }
        },
        stopPropagation: function(e) {
          return e.stopPropagation();
        },
        keyup: function(e) {
          this.log(e);
          this.log(this);
          return e.stopPropagation();
        }
      };
      this.include(Include);
      return this.extend(Extend);
    }
  };

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Controller.KeyEnhancer;
  }

}).call(this);
 },"extensions/manager": function(exports, require, module) { (function() {
  var $, Log, Spine;

  Spine = require("spine");

  $ = Spine.$;

  Log = Spine.Log;

  Spine.Manager = require('spine/lib/manager');

  Spine.Manager.extend.Log;

  Spine.Manager.extend({
    deactivate: function() {
      this.log('deactivate');
      return this.constructor.apply(this, arguments);
    }
  });

  Spine.Manager.include({
    disableDrag: function() {
      this.el.draggable('disable');
      return !this.el.draggable("option", "disabled");
    },
    enableDrag: function() {
      this.el.draggable('enable');
      return !this.el.draggable("option", "disabled");
    },
    initDrag: function(el, opts) {
      var defaults, dim, max, min, options, ori, rev;
      if (!el) {
        return;
      }
      this.el = el;
      defaults = {
        manager: this,
        initSize: function() {
          return 500;
        },
        disabled: false,
        sleep: true,
        axis: 'x',
        min: function() {
          return 20;
        },
        max: function() {
          return 300;
        },
        tol: 50,
        handle: '.draghandle',
        goSleep: function() {},
        awake: function() {}
      };
      options = $.extend({}, defaults, opts);
      ori = options.axis === 'y' ? 'top' : 'left';
      dim = options.axis === 'y' ? 'height' : 'width';
      rev = options.axis === 'y' ? 1 : -1;
      min = options.min;
      max = options.max;
      this.sleep = options.sleep;
      this.currentDim = options.initSize.call(this);
      if (options.disabled) {
        this.disableDrag();
      }
      this.goSleep = (function(_this) {
        return function() {
          _this.sleep = true;
          options.goSleep();
          return _this.trigger('sleep');
        };
      })(this);
      this.awake = (function(_this) {
        return function() {
          _this.sleep = false;
          options.awake();
          return _this.trigger('awake');
        };
      })(this);
      return el.draggable({
        create: (function(_this) {
          return function(e, ui) {
            return _this.el.css({
              position: 'inherit'
            });
          };
        })(this),
        axis: options.axis,
        handle: options.handle,
        start: (function(_this) {
          return function(e, ui) {
            return _this.currentDim = $(ui.helper)[dim]();
          };
        })(this),
        stop: (function(_this) {
          return function(e, ui) {
            if (!_this.el.draggable("option", "disabled")) {
              if (!_this.sleep) {
                return _this.currentDim = $(ui.helper)[dim]();
              }
            }
          };
        })(this),
        drag: (function(_this) {
          return function(e, ui) {
            var _cur, _max, _min, _ori, _pos;
            _ori = ui.originalPosition[ori];
            _pos = ui.position[ori];
            _cur = _this.currentDim;
            _max = max.call(_this);
            _min = min.call(_this);
            return $(ui.helper)[dim](function() {
              var d;
              d = (_cur + _ori) - (_pos * rev);
              if (!_this.sleep) {
                if (d >= _min && d <= _max) {
                  return d;
                }
                if (d < _min) {
                  if (!_this.el.draggable("option", "disabled")) {
                    _this.goSleep();
                  }
                  return _min;
                }
                if (d > _max) {
                  return _max;
                }
              } else if (d >= _min) {
                if (!_this.el.draggable("option", "disabled")) {
                  _this.awake();
                }
                return d;
              }
            });
          };
        })(this)
      });
    },
    hasActive: function() {
      var controller, i, len, ref;
      ref = this.controllers;
      for (i = 0, len = ref.length; i < len; i++) {
        controller = ref[i];
        if (controller.isActive()) {
          return this.controller = this.last = controller;
        }
      }
      return false;
    },
    active: function() {
      return this.hasActive();
    },
    lastActive: function() {
      return this.last || this.controllers[0];
    },
    externalUI: function(controller) {
      var activeController;
      activeController = controller || this.lastActive();
      return $(activeController.externalClass, this.external.el);
    }
  });

}).call(this);
 },"extensions/model_extender": function(exports, require, module) { (function() {
  var $, Flash, Log, Model, Spine,
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    slice = [].slice;

  Spine = require("spine");

  $ = Spine.$;

  Model = Spine.Model;

  Log = Spine.Log;

  Flash = require("models/flash");

  Model.Extender = {
    extended: function() {
      var Extend, Include;
      Extend = {
        trace: !Spine.isProduction,
        logPrefix: '(' + this.className + ')',
        humanName: function() {
          return 'no human Name';
        },
        humanNames: function() {
          return 'no human Names';
        },
        guid: function() {
          var back, diff, mask, milli, re1, re2, re3, re4, res, ret, sub;
          mask = [8, 4, 4, 4, 12];
          ret = [];
          ret = (function() {
            var i, len, results;
            results = [];
            for (i = 0, len = mask.length; i < len; i++) {
              sub = mask[i];
              res = null;
              milli = new Date().getTime();
              back = new Date().setTime(milli * (-200));
              diff = milli - back;
              re1 = diff.toString(16).split('');
              re2 = re1.slice(sub * (-1));
              re3 = re2.join('');
              results.push(re3);
            }
            return results;
          })();
          re4 = ret.join('-');
          return re4;
        },
        uuid: function() {
          var s4;
          s4 = function() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
          };
          return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
        },
        n: function(inst) {
          return inst.name || inst.screenname || inst.title || inst.src || 'no name';
        },
        "protected": {
          'outdoor': {
            screenname: 'Outdoor'
          },
          'fitness': {
            screenname: 'Fitness'
          },
          'tools': {
            screenname: 'Tools'
          },
          'specials': {
            screenname: 'Specials'
          }
        },
        record: false,
        selection: [
          {
            global: []
          }
        ],
        current: function(recordOrId) {
          var id, prev, rec, ref, same;
          id = (recordOrId != null ? recordOrId.id : void 0) || recordOrId;
          rec = this.find(id) || false;
          prev = this.record;
          this.record = rec;
          same = !!(((ref = this.record) != null ? typeof ref.eql === "function" ? ref.eql(prev) : void 0 : void 0) && !!prev);
          Model[this.className].trigger('current', this.record, !same);
          if (!same) {
            Model[this.className].trigger('change:current', this.record, this.className);
          }
          return this.record;
        },
        selectionList: function(recordID) {
          var i, id, item, len, ref, ref1, ref2, ret;
          ret = [];
          id = recordID || ((ref = this.record) != null ? ref.id : void 0) || ((ref1 = this.record) != null ? ref1.cid : void 0);
          if (!id) {
            return this.selection[0].global;
          }
          ref2 = this.selection;
          for (i = 0, len = ref2.length; i < len; i++) {
            item = ref2[i];
            if (item[id]) {
              return item[id];
            }
          }
          return ret;
        },
        updateSelection: function(list, id, options) {
          var defaults, option, ref, ret;
          if (list == null) {
            list = this.selectionList();
          }
          defaults = {
            trigger: true
          };
          option = $().extend(defaults, options);
          ret = this.emptySelection(id, list);
          if (option.trigger) {
            this.trigger('change:selection', ret, id);
          }
          if ((ref = Model[this.childType]) != null) {
            ref.current(ret.first());
          }
          return ret;
        },
        emptySelection: function(id, idOrList) {
          var originalList;
          if (idOrList == null) {
            idOrList = [];
          }
          if (!Array.isArray(idOrList)) {
            idOrList = [idOrList];
          }
          originalList = this.selectionList(id);
          [].splice.apply(originalList, [0, originalList.length - 0].concat(idOrList)), idOrList;
          return originalList;
        },
        removeFromSelection: function(id, idOrList, options) {
          var i, index, len, list, originalList;
          if (idOrList == null) {
            idOrList = [];
          }
          originalList = this.selectionList(id);
          if (!Array.isArray(idOrList)) {
            idOrList = [idOrList];
          }
          for (i = 0, len = idOrList.length; i < len; i++) {
            id = idOrList[i];
            if ((index = originalList.indexOf(id)) !== -1) {
              originalList.splice(index, 1);
            }
          }
          list = this.updateSelection(originalList.slice(0), id, options);
          return list;
        },
        isArray: function(value) {
          return Object.prototype.toString.call(value) === "[object Array]";
        },
        isObject: function(value) {
          return Object.prototype.toString.call(value) === "[object Object]";
        },
        isString: function(value) {
          return Object.prototype.toString.call(value) === "[object String]";
        },
        selected: function() {
          return this.record;
        },
        toId: function(records) {
          var i, len, record, results;
          if (records == null) {
            records = this.records;
          }
          results = [];
          for (i = 0, len = records.length; i < len; i++) {
            record = records[i];
            results.push(record.id);
          }
          return results;
        },
        toRecords: function(ids) {
          var i, id, len, results;
          if (ids == null) {
            ids = [];
          }
          results = [];
          for (i = 0, len = ids.length; i < len; i++) {
            id = ids[i];
            results.push(this.find(id));
          }
          return results;
        },
        duplicate: function(items, atts, options) {
          var item, newItem, ret;
          if (atts == null) {
            atts = {};
          }
          if (!Array.isArray(items)) {
            items = [items];
          }
          ret = [];
          ret = (function() {
            var i, len, results;
            results = [];
            for (i = 0, len = items.length; i < len; i++) {
              item = items[i];
              newItem = item.dup(true).save(options);
              newItem.updateAttributes(atts, options);
              results.push(newItem);
            }
            return results;
          })();
          return ret;
        },
        successHandler: function(data, status, xhr) {},
        errorHandler: (function(_this) {
          return function(record, xhr, statusText, error) {
            var flash, status;
            status = xhr.status;
            if (status !== 200) {
              flash = (flash = Flash.first()) ? flash : new Flash;
              flash.status = xhr.status;
              flash.statusText = xhr.statusText;
              flash.save();
              return User.redirect('users/login');
            }
          };
        })(this),
        customErrorHandler: function(record, xhr) {
          var flash, status;
          status = xhr.status;
          if (status !== 200) {
            flash = new Flash({
              flash: '<strong style="color:red">Login failed</strong>',
              xhr: xhr
            });
            flash.save();
            return User.redirect('users/login');
          }
        },
        contains: function() {
          return [];
        },
        createJoinTables: function(arr) {
          var i, joinTables, key, len, results;
          if (!this.isArray(arr)) {
            return;
          }
          joinTables = this.joinTables();
          results = [];
          for (i = 0, len = joinTables.length; i < len; i++) {
            key = joinTables[i];
            results.push(Model[key].refresh(this.createJoins(arr, key), {
              clear: true
            }));
          }
          return results;
        },
        make: function(arr, key) {
          var i, len, obj, results;
          if (!Array.isArray(arr)) {
            return new this(arr);
          }
          results = [];
          for (i = 0, len = arr.length; i < len; i++) {
            obj = arr[i];
            results.push(new this(obj[key]));
          }
          return results;
        },
        activePhotos: function() {
          return Category.activePhotos();
        },
        joinTables: function() {
          var fModels, joinTables, key, value;
          fModels = this.foreignModels();
          joinTables = (function() {
            var results;
            results = [];
            for (key in fModels) {
              value = fModels[key];
              results.push(fModels[key]['joinTable']);
            }
            return results;
          })();
          return joinTables;
        },
        createJoins: function(json, tableName) {
          var i, introspect, len, obj, res;
          res = [];
          introspect = (function(_this) {
            return function(obj) {
              var i, item, j, key, len, len1, results, val;
              if (_this.isObject(obj)) {
                for (key in obj) {
                  val = obj[key];
                  if (key === tableName) {
                    for (i = 0, len = val.length; i < len; i++) {
                      item = val[i];
                      res.push(item);
                    }
                  } else {
                    introspect(obj[key]);
                  }
                }
              }
              if (_this.isArray(obj)) {
                results = [];
                for (j = 0, len1 = obj.length; j < len1; j++) {
                  val = obj[j];
                  results.push(introspect(val));
                }
                return results;
              }
            };
          })(this);
          for (i = 0, len = json.length; i < len; i++) {
            obj = json[i];
            introspect(obj);
          }
          return res;
        }
      };
      Include = {
        trace: !Spine.isProduction,
        logPrefix: this.className + '::',
        n: function() {
          return this.constructor.n(this);
        },
        isInvalid: function() {
          return !this.isValid();
        },
        silentUpdate: function(atts) {
          var clone, key, records, value;
          for (key in atts) {
            value = atts[key];
            this[key] = value;
          }
          records = this.constructor.irecords;
          records[this.id].load(this.attributes());
          return clone = records[this.id].clone();
        },
        selectionList: function() {
          return this.constructor.selectionList(this.id);
        },
        selectionParentList: function() {
          var e, modelName;
          modelName = this.constructor['parent'];
          try {
            return Model[modelName].selectionList();
          } catch (error1) {
            e = error1;
            return [];
          }
        },
        updateSelectionID: function() {
          var i, idx, index, item, len, ref;
          ref = this.constructor.selection;
          for (idx = i = 0, len = ref.length; i < len; idx = ++i) {
            item = ref[idx];
            if (item[this.cid]) {
              index = idx;
            }
          }
          if (index) {
            this.constructor.selection.splice(index, 1);
          }
          return this.init(this);
        },
        removeSelectionID: function() {
          var __itm, __key, __val, __x, _idx, _item, _x, i, j, len, len1, list, modelName, ref, results;
          ref = this.constructor.selection;
          for (_idx = i = 0, len = ref.length; i < len; _idx = ++i) {
            _item = ref[_idx];
            if (_item[this.id]) {
              _x = _idx;
            }
          }
          if (_x) {
            this.constructor.selection.splice(_x, 1);
          }
          modelName = this.constructor['parent'];
          if (!modelName) {
            return;
          }
          list = Model[modelName].selection;
          results = [];
          for (j = 0, len1 = list.length; j < len1; j++) {
            __itm = list[j];
            results.push((function() {
              var results1;
              results1 = [];
              for (__key in __itm) {
                __val = __itm[__key];
                if (!(__x = __val.indexOf(this.id) === -1)) {
                  results1.push(__val.splice(__x, 1));
                } else {
                  results1.push(void 0);
                }
              }
              return results1;
            }).call(this));
          }
          return results;
        },
        removeFromSelection: function(list, options) {
          list = this.constructor.removeFromSelection(this.id, list, options);
          return list;
        },
        updateSelection: function(list, options) {
          if (list == null) {
            list = [];
          }
          if (!this.constructor.isArray(list)) {
            list = [list];
          }
          return list = this.constructor.updateSelection(list, this.id, options);
        },
        emptySelection: function() {
          var list;
          return list = this.constructor.emptySelection(this.id);
        },
        addRemoveSelection: function(isMetaKey) {
          var originalList;
          originalList = this.constructor.selectionList(this.id);
          if (!originalList) {
            return;
          }
          if (isMetaKey) {
            this.addUnique(originalList);
          } else {
            this.toggleSelected(originalList);
          }
          return originalList;
        },
        addToSelection: function(isMetaKey) {
          var originalList, ref;
          originalList = this.constructor.selectionList(this.id);
          if (!originalList) {
            return;
          }
          if (isMetaKey) {
            this.addUnique(originalList);
          } else {
            if (ref = this.id, indexOf.call(originalList, ref) < 0) {
              originalList.unshift(this.id);
            }
          }
          return originalList;
        },
        shiftSelection: function() {
          var index, originalList, rm;
          originalList = this.constructor.selectionList(this.id);
          if (!originalList) {
            return;
          }
          if (index = originalList.indexOf(this.id) === 0) {
            return originalList;
          }
          rm = originalList.splice(0, 1, originalList[index]);
          originalList.splice(index, 1);
          originalList.push(rm[0]);
          index = originalList.indexOf(this.id);
          return originalList;
        },
        updateChangedAttributes: function(atts, options) {
          var invalid, key, origAtts, value;
          if (options == null) {
            options = {};
          }
          this.log('updateChangedAttributes');
          invalid = false;
          origAtts = this.selectAttributes();
          for (key in atts) {
            value = atts[key];
            if (origAtts[key] !== value) {
              invalid = true;
              this[key] = value;
            }
          }
          if (invalid) {
            return this.save(options);
          }
        },
        errorHandler: function() {
          var args, ref;
          args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          return (ref = this.constructor).errorHandler.apply(ref, [this].concat(slice.call(args)));
        },
        selectAttributes: function() {
          var attr, i, len, ref, result;
          result = {};
          ref = this.constructor.selectAttributes;
          for (i = 0, len = ref.length; i < len; i++) {
            attr = ref[i];
            result[attr] = this[attr];
          }
          return result;
        },
        isProtectedModel: function(query) {
          if (this.constructor["protected"][query]) {
            return true;
          }
          return false;
        },
        addUnique: function(list) {
          var ref;
          [].splice.apply(list, [0, list.length - 0].concat(ref = [this.id])), ref;
          return list;
        },
        toggleSelected: function(list) {
          var index, ref;
          if (ref = this.id, indexOf.call(list, ref) < 0) {
            list.unshift(this.id);
          } else {
            index = list.indexOf(this.id);
            if (index !== -1) {
              list.splice(index, 1);
            }
          }
          return list;
        },
        searchSelect: function(query) {
          var atts, key, value;
          query = query.toLowerCase();
          atts = this.selectAttributes.apply(this);
          for (key in atts) {
            value = atts[key];
            value = String(value).toLowerCase();
            if (!((value != null ? value.indexOf(query) : void 0) === -1)) {
              return true;
            }
          }
          return false;
        },
        idSelect: function(query) {
          var value;
          query = String(query).toLowerCase();
          value = this.id.toLowerCase();
          if (!((value != null ? value.indexOf(query) : void 0) === -1)) {
            return true;
          }
          return false;
        },
        idExcludeSelect: function(query) {
          if (query.indexOf(this.id) === -1) {
            return true;
          }
          return false;
        },
        defaultDetails: {
          iCount: 0,
          aCount: 0,
          sCount: 0,
          author: ''
        }
      };
      this.include(Log);
      this.extend(Log);
      this.extend(Extend);
      return this.include(Include);
    }
  };

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Model.Extender;
  }

}).call(this);
 },"extensions/model_test": function(exports, require, module) { (function() {
  var $, Log, Model, Spine;

  Spine = require("spine");

  $ = Spine.$;

  Model = Spine.Model;

  Log = Spine.Log;

  Model.Model_Test = {
    extended: function() {
      var Extend;
      Extend = {
        print: function() {
          return alert('Hi, this is a Test');
        }
      };
      return this.extend(Extend);
    }
  };

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Model.Model_Test;
  }

}).call(this);
 },"extensions/mysql_ajax": function(exports, require, module) { (function() {
  var $, MysqlAjax, Spine;

  Spine = require("spine");

  $ = Spine.$;

  MysqlAjax = {
    extended: function() {
      var extend, include;
      extend = {
        send: function() {}
      };
      include = {
        mysql: function(action, options) {
          if (typeof (options != null ? options.done : void 0) === 'function') {
            this.doneResponse = options.done;
          }
          if (typeof (options != null ? options.fail : void 0) === 'function') {
            this.failResponse = options.fail;
          }
          return this.ajax(action);
        },
        ajax: function(action) {
          return $.ajax({
            url: '/mysql/' + action
          }).done(this.doneResponse).fail(this.failResponse);
        },
        doneResponse: function(xhr, t) {
          console.log(xhr);
          return console.log(t);
        },
        failResponse: function(e) {
          return console.log(e);
        }
      };
      this.extend(extend);
      return this.include(include);
    }
  };

  if (typeof module !== "undefined" && module !== null) {
    module.exports = MysqlAjax;
  }

}).call(this);
 },"extensions/photo_extender": function(exports, require, module) { (function() {
  var $, Controller, Spine;

  Spine = require("spine");

  $ = Spine.$;

  Controller = Spine.Controller;

  require('extensions/controller_extender');

  Controller.PhotoExtender = {
    extended: function() {
      var Extend, Include;
      Extend = {
        empty: function() {
          this.log('empty');
          return this.constructor.apply(this, arguments);
        }
      };
      Include = {
        updateTemplate: function(item) {
          var active, css, el, hot, tb, tmplItem;
          el = this.children().forItem(item);
          tb = $('.thumbnail', el);
          css = tb.attr('style');
          active = el.hasClass('active');
          hot = el.hasClass('hot');
          tmplItem = el.tmplItem();
          tmplItem.data = item;
          tmplItem.update();
          el = this.children().forItem(item);
          tb = $('.thumbnail', el);
          tb.attr('style', css).addClass('in');
          el.toggleClass('active', active);
          el.toggleClass('hot', hot);
          this.el.sortable('destroy').sortable('photos');
          return tmplItem;
        },
        callback: function(json) {
          var i, jsn, key, len, res, result, results, ret, val;
          result = (function() {
            var i, len, results;
            results = [];
            for (i = 0, len = json.length; i < len; i++) {
              jsn = json[i];
              ret = (function() {
                var results1;
                results1 = [];
                for (key in jsn) {
                  val = jsn[key];
                  results1.push({
                    src: val.src,
                    id: key
                  });
                }
                return results1;
              })();
              results.push(ret[0]);
            }
            return results;
          })();
          results = [];
          for (i = 0, len = result.length; i < len; i++) {
            res = result[i];
            results.push(this.snap(res));
          }
          return results;
        },
        snap: function(res) {
          var el, img, thumb;
          el = $('#' + res.id, this.el);
          thumb = $('.thumbnail', el);
          img = this.createImage();
          img.element = el;
          img.thumb = thumb;
          img.me = this;
          img.res = res;
          img.onload = this.onLoad;
          img.onerror = this.onError;
          return img.src = res.src;
        },
        onLoad: function() {
          var css;
          this.me.log('image loaded');
          css = 'url(' + this.src + ')';
          this.thumb.css({
            'backgroundImage': css,
            'backgroundSize': '100% auto'
          });
          return this.thumb.addClass('in');
        },
        onError: function(e) {
          console.log('could not load image, trying again');
          this.onload = null;
          return this.onerror = null;
        },
        size: function(val, bg) {
          var thumb;
          if (bg == null) {
            bg = 'none';
          }
          thumb = $('.thumbnail', this.el);
          return thumb.css({
            'height': val + 'px',
            'width': val + 'px',
            'backgroundSize': bg
          });
        }
      };
      this.extend(Extend);
      return this.include(Include);
    }
  };

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Controller.PhotoExtender;
  }

}).call(this);
 },"extensions/product_extender": function(exports, require, module) { (function() {
  var $, Controller, Spine;

  Spine = require("spine");

  $ = Spine.$;

  Controller = Spine.Controller;

  require('extensions/controller_extender');

  Controller.ProductExtender = {
    extended: function() {
      var Extend, Include;
      Extend = {
        empty: function() {
          this.log('empty');
          return this.constructor.apply(this, arguments);
        }
      };
      Include = {
        renderBackgrounds: function(products) {
          var deferredProcess, i, len, product, results;
          if (products == null) {
            products = [];
          }
          this.log('renderBackgrounds');
          deferredProcess = (function(_this) {
            return function(product) {
              var args, deferred, n, photos, single;
              _this.log('deferredProcess');
              deferred = $.Deferred();
              photos = product.photos(4);
              n = (n = photos.length) === 1 ? n : 4;
              single = !!(n === 1);
              args = single ? [140, 140] : [68, 68];
              photos = photos.sort(Photo.sortByReverseOrder);
              product.single = single;
              _this.callDeferred(photos, _this.uriSettings.apply(_this, args), function(xhr) {
                return deferred.resolve(xhr, product);
              });
              return deferred.promise();
            };
          })(this);
          if (!Array.isArray(products)) {
            products = [products];
          }
          results = [];
          for (i = 0, len = products.length; i < len; i++) {
            product = products[i];
            results.push($.when(deferredProcess(product)).done((function(_this) {
              return function(xhr, rec) {
                return _this.callback(xhr, rec);
              };
            })(this)));
          }
          return results;
        },
        callback: function(json, product) {
          var c, css, cssdefault, el, i, j, jsn, key, len, len1, results, sources, src, thumb, val;
          el = $('[data-id=' + (product != null ? product.id : void 0) + ']', this.el);
          thumb = $('.thumbnail', el);
          sources = [];
          css = [];
          cssdefault = [];
          for (i = 0, len = json.length; i < len; i++) {
            jsn = json[i];
            for (key in jsn) {
              val = jsn[key];
              if (src = val.src) {
                sources.push(src);
              }
              css.push('url(' + src + ')');
              cssdefault.push('url(/img/ajax-loader-product-thumbs.gif)');
            }
          }
          if (sources.length) {
            thumb.addClass('load');
            thumb.css('backgroundImage', (function() {
              var j, len1, results;
              results = [];
              for (j = 0, len1 = cssdefault.length; j < len1; j++) {
                c = cssdefault[j];
                results.push(c);
              }
              return results;
            })());
            results = [];
            for (j = 0, len1 = sources.length; j < len1; j++) {
              src = sources[j];
              results.push(this.snap(product, thumb, src, css));
            }
            return results;
          } else {
            return thumb.css('backgroundImage', ['url(/img/drag_info.png)']);
          }
        },
        snap: function(rec, el, src, css) {
          var img;
          img = this.createImage();
          img.el = el;
          img.single = rec.single;
          img.me = this;
          img.css = css;
          img.src = src;
          img.onload = this.onLoad;
          return img.onerror = this.onError;
        },
        onLoad: function() {
          this.me.log('image loaded');
          this.el.removeClass('load');
          if (this.single) {
            this.el.addClass('single');
          }
          return this.el.css('backgroundImage', this.css);
        },
        onError: function(e) {
          return this.me.snap(this.res);
        },
        updateTemplate: function(item) {
          var active, hot, innerEl, itemEl, style, tmplItem;
          this.log('updateTemplate');
          if (!item || item.destroyed || item.deleted) {
            return;
          }
          item = this.mixinOne(item);
          itemEl = this.children().forItem(item);
          active = itemEl.hasClass('active');
          hot = itemEl.hasClass('hot');
          innerEl = $('.thumbnail', itemEl);
          style = innerEl.attr('style');
          tmplItem = itemEl.tmplItem();
          tmplItem.data = item;
          if (typeof tmplItem.update === "function") {
            tmplItem.update();
          }
          itemEl = this.children().forItem(item);
          itemEl.attr('id', item.id);
          itemEl.toggleClass('active', active);
          itemEl.toggleClass('hot', hot);
          itemEl.toggleClass('ignored', item.ignored);
          innerEl = $('.thumbnail', itemEl);
          innerEl.attr('style', style);
          return this.el.sortable();
        }
      };
      this.extend(Extend);
      return this.include(Include);
    }
  };

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Controller.ProductExtender;
  }

}).call(this);
 },"extensions/selector": function(exports, require, module) { (function() {
  var $, Model, Spine;

  Spine = require("spine");

  $ = Spine.$;

  Model = Spine.Model;

  Model.Selector = {
    extended: function() {
      var Extend, Include;
      Extend = {
        selections_: [
          {
            global: []
          }
        ],
        selectionsList: (function(_this) {
          return function(recordID) {
            var i, id, item, len, ref;
            id = recordID || 'global';
            if (!id) {
              return;
            }
            ref = _this.selections;
            for (i = 0, len = ref.length; i < len; i++) {
              item = ref[i];
              if (item[id]) {
                return item[id];
              }
            }
            throw 'record ' + id + ' is not configured ';
          };
        })(this),
        selection_: function(id) {
          var i, item, key, len, selected, val;
          this.log(this.parent);
          return;
          selected = this.selectionsList(id);
          if (!selected) {
            return;
          }
          for (i = 0, len = selected.length; i < len; i++) {
            item = selected[i];
            for (key in item) {
              val = item[key];
              if (item[url]) {
                return val[0];
              }
            }
          }
        },
        initSelection_: function(id) {
          var arr;
          arr = this.selections;
          arr.push(this.hash(id));
          return arr;
        },
        hash_: function(key) {
          var o;
          o = new Object();
          o[key] = [];
          return o;
        },
        add: function(item) {
          return this.log(item.parent());
        },
        hasCache_: function(url, id) {
          return !!(this.cache(url, id));
        },
        addToCache_: function(url, uris) {
          var i, item, itm, itm_url, key, len, results, uri, val;
          results = [];
          for (i = 0, len = uris.length; i < len; i++) {
            uri = uris[i];
            results.push((function() {
              var results1;
              results1 = [];
              for (key in uri) {
                val = uri[key];
                item = this.cacheList(key);
                if (!this.keyExists.call(item, url)) {
                  item.push(this.hash(url));
                }
                results1.push((function() {
                  var j, len1, ref, results2;
                  results2 = [];
                  for (j = 0, len1 = item.length; j < len1; j++) {
                    itm = item[j];
                    if (itm_url = itm[url]) {
                      [].splice.apply(itm_url, [0, itm_url.length - 0].concat(ref = [])), ref;
                      results2.push(itm_url.push(uri));
                    } else {
                      results2.push(void 0);
                    }
                  }
                  return results2;
                })());
              }
              return results1;
            }).call(this));
          }
          return results;
        },
        itemExists: function(item) {
          var i, key, len, ref, thisItem, val;
          for (key in item) {
            val = item[key];
            ref = this;
            for (i = 0, len = ref.length; i < len; i++) {
              thisItem = ref[i];
              if (thisItem[key]) {
                return thisItem;
              }
            }
          }
          return false;
        },
        keyExists: function(key) {
          var i, len, ref, thisItem;
          ref = this;
          for (i = 0, len = ref.length; i < len; i++) {
            thisItem = ref[i];
            if (thisItem[key]) {
              return thisItem;
            }
          }
          return false;
        },
        destroyCache: function(id) {
          var findIdFromObject, findItemsFromArray, i, idx, itm, len, list, results;
          list = this.cacheList();
          findIdFromObject = function(id, obj) {
            var arr, i, idx, itm, key, len, value;
            for (key in obj) {
              value = obj[key];
              arr = obj[key];
              for (idx = i = 0, len = arr.length; i < len; idx = ++i) {
                itm = arr[idx];
                if (itm[id]) {
                  return arr.splice(idx, 1);
                }
              }
            }
          };
          findItemsFromArray = function(items) {
            var i, itm, ix, len, results;
            results = [];
            for (ix = i = 0, len = items.length; i < len; ix = ++i) {
              itm = items[ix];
              results.push(findIdFromObject(id, itm));
            }
            return results;
          };
          results = [];
          for (idx = i = 0, len = list.length; i < len; idx = ++i) {
            itm = list[idx];
            if (itm[id]) {
              results.push(list.splice(idx, 1));
            } else {
              results.push(void 0);
            }
          }
          return results;
        },
        clearCache: function(id) {
          var originalList, ref;
          originalList = this.cacheList(id);
          [].splice.apply(originalList, [0, originalList.length - 0].concat(ref = [])), ref;
          return originalList;
        }
      };
      Include = {
        cache: function(url) {
          return this.constructor.cache(this, url);
        },
        addToCache: function(url, uri, mode) {
          return this.constructor.addToCache(this, url, uri, mode);
        },
        destroyCache: function() {
          return this.constructor.destroyCache(this.id);
        },
        clearCache: function() {
          var list;
          return list = this.constructor.clearCache(this.id);
        },
        add: function() {
          return this.constructor.add(this);
        }
      };
      this.extend(Extend);
      return this.include(Include);
    }
  };

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Model.Selector;
  }

}).call(this);
 },"extensions/sortable": function(exports, require, module) { (function() {
  $.fn.sortable = function(type) {
    return $(this).Html5Sortable({
      type: type,
      drop: function(source, target) {
        return true;
      }
    });
  };

  $.Html5Sortable = function() {
    return $.Html5Sortable.s_currentID = Math.floor(Math.random() * 10000001);
  };

  $.Html5Sortable.DRAGANDDROP_DEFAULT_TYPE = "de.webpremiere.html5sortable";

  $.Html5Sortable.s_currentID = 0;

  $.Html5Sortable.defaultOptions = {
    dragTarget: function(source) {
      return $(source);
    },
    text: function(source) {
      return $('<div></div>').append($(source).clone(true)).html();
    },
    css: function(source) {
      var el;
      el = $(source);
      return {
        'height': el.css('height'),
        'padding-top': el.css('padding-top'),
        'padding-bottom': el.css('padding-bottom'),
        'margin-top': el.css('margin-top'),
        'margin-bottom': el.css('margin-bottom')
      };
    },
    klass: function(source) {
      return 'html5sortable-state-highlight';
    },
    splitter: function(source) {
      return ($($('li.' + this.klass())[0] || $('<li class="' + this.klass() + '"></li>'))).css(this.css(source));
    },
    type: $.Html5Sortable.DRAGANDDROP_DEFAULT_TYPE,
    drop: function(source, target) {
      return false;
    }
  };

  $.fn.Html5Sortable = function(opts) {
    var options;
    options = $.extend({}, $.Html5Sortable.defaultOptions, opts);
    $.Html5Sortable.s_currentID++;
    if (options.type === $.Html5Sortable.DRAGANDDROP_DEFAULT_TYPE) {
      options.type = options.type + '_' + $.Html5Sortable.s_currentID;
    }
    return this.each(function() {
      var that;
      that = $(this);
      that.init = function(el) {
        return options.dragTarget(el).attr('draggable', true).bind('dragstart', function(e) {
          var dt;
          dt = e.originalEvent.dataTransfer;
          dt.effectAllowed = 'move';
          dt.setData('Text', JSON.stringify({
            html: options.text(el),
            type: options.type
          }));
          Spine.sortItem = {
            el: el,
            data: el.data(),
            splitter: options.splitter(this),
            cond: null
          };
          $('._dragging').removeClass('_dragging');
          el.addClass('_dragging out');
          alert('clear');
          return this.log($('._dragging'));
        }).bind('dragend', function(e) {
          var ref;
          this.log('dragend');
          $('._dragging').removeClass('_dragging');
          if ((ref = Spine.sortItem.el) != null) {
            ref.addClass('in').removeClass('out');
          }
          return Spine.sortItem.splitter.remove();
        }).bind('dragenter', function(e) {
          var cond;
          if (!Spine.sortItem) {
            return;
          }
          Spine.sortItem.cond = cond = (e.originalEvent.pageX - $(this).position().left) > ($(this).width());
          if (cond) {
            Spine.sortItem.splitter.insertAfter(this);
          } else {
            Spine.sortItem.splitter.insertBefore(this);
          }
          return false;
        }).bind('dragleave', function(e) {
          try {
            if (!(e.originalEvent.dataTransfer.getData('Text') && JSON.parse(e.originalEvent.dataTransfer.getData('Text')).type === options.type)) {
              return true;
            }
          } catch (error) {
            e = error;
            return true;
          }
          return false;
        }).bind('drop', function(e) {
          var cond, it, model, sourceEl;
          try {
            this.log('drop');
            cond = Spine.sortItem.cond;
            if (!(JSON.parse(e.originalEvent.dataTransfer.getData('Text')).type === options.type)) {
              return true;
            }
          } catch (error) {
            e = error;
            return true;
          }
          sourceEl = $('._dragging');
          if (!sourceEl.length) {
            alert('no element for sourceEl');
          }
          Spine.sortItem.splitter.remove();
          it = $(JSON.parse(e.originalEvent.dataTransfer.getData('Text')).html).addClass('out');
          it.data(Spine.sortItem.data);
          model = $(it).item().constructor.className;
          if (!options.drop(sourceEl.get(0), it.get(0))) {
            return it.remove();
          } else {
            if (cond) {
              it.insertAfter(this);
            } else {
              it.insertBefore(this);
            }
            sourceEl.remove();
            that.init(it);
            it.addClass('in');
            $('._dragging').removeClass('_dragging');
            it.removeClass('out');
            return Spine.Model[model].trigger('sortupdate', e, it);
          }
        });
      };
      return that.children('li').each(function() {
        return that.init($(this));
      });
    });
  };

}).call(this);
 },"extensions/test": function(exports, require, module) { (function() {
  var $, Spine;

  Spine = require("spine");

  $ = Spine.$;

  Spine.Module.extend({
    isProduction: function(bool) {
      if (bool != null) {
        return Spine.isProduction = bool;
      } else {
        return Spine.isProduction;
      }
    }
  });

}).call(this);
 },"extensions/tmpl": function(exports, require, module) { (function() {
  var $;

  $ = typeof jQuery !== "undefined" && jQuery !== null ? jQuery : require("jqueryify");

  $.fn.item_ = function(keep) {
    var item;
    item = $(this).tmplItem().data;
    if (!keep) {
      return typeof item.reload === "function" ? item.reload() : void 0;
    } else {
      return item;
    }
  };

  $.fn.item = function() {
    var item;
    return item = $(this).tmplItem().data;
  };

  $.fn.forItem = function(item) {
    if (item == null) {
      item = {};
    }
    return this.filter(function() {
      var compare;
      compare = $(this).item();
      return (typeof item.eql === "function" ? item.eql(compare) : void 0) || item === compare;
    });
  };

  $.fn.serializeForm = function() {
    var result;
    result = {};
    $.each($(this).find('input,textarea').serializeArray(), function(i, item) {
      return result[item.name] = item.value;
    });
    return result;
  };

}).call(this);
 },"extensions/uri": function(exports, require, module) { (function() {
  var $, Ajax, Base, CategoriesProduct, Category, Model, Photo, Product, ProductsPhoto, Spine, URI, URICollection, Uri,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Model = Spine.Model;

  Category = require('models/category');

  Product = require('models/product');

  Photo = require('models/photo');

  ProductsPhoto = require('models/products_photo');

  CategoriesProduct = require('models/categories_product');

  Ajax = {
    enabled: true,
    cache: true,
    pending: false,
    requests: [],
    requestNext: function() {
      var next;
      next = this.requests.shift();
      if (next) {
        return this.request(next);
      } else {
        this.pending = false;
        return Spine.trigger('uri:alldone');
      }
    },
    request: function(callback) {
      return (callback()).complete((function(_this) {
        return function() {
          return _this.requestNext();
        };
      })(this));
    },
    queue: function(callback) {
      if (!this.enabled) {
        return;
      }
      if (this.pending) {
        this.requests.push(callback);
      } else {
        this.pending = true;
        this.request(callback);
      }
      return callback;
    }
  };

  Base = (function() {
    function Base() {}

    Base.prototype.defaults = {
      contentType: 'application/json',
      processData: false,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      dataType: 'json'
    };

    Base.prototype.ajax = function(params, defaults) {
      return $.ajax($.extend({}, this.defaults, defaults, params));
    };

    Base.prototype.ajaxQueue = function(callback) {
      return Ajax.queue(callback);
    };

    Base.prototype.get = function() {
      return this.ajaxQueue((function(_this) {
        return function() {
          return _this.ajax({
            type: "POST",
            url: base_url + 'photos/uri/' + _this.atts,
            data: JSON.stringify(_this.data)
          }).done(_this.recordResponse).fail(_this.failResponse);
        };
      })(this));
    };

    Base.prototype.uri = function(options) {
      return options.width + '/' + options.height + '/' + options.square + '/' + options.quality;
    };

    return Base;

  })();

  URI = (function(superClass) {
    extend(URI, superClass);

    function URI(model, params, callback1, data1) {
      var options;
      this.model = model;
      this.callback = callback1;
      this.data = data1 != null ? data1 : [];
      this.failResponse = bind(this.failResponse, this);
      this.recordResponse = bind(this.recordResponse, this);
      URI.__super__.constructor.apply(this, arguments);
      options = $.extend({}, this.settings, params);
      this.atts = this.uri(options);
      if (!this.data.length) {
        return;
      }
    }

    URI.prototype.settings = {
      square: 1,
      quality: 70
    };

    URI.prototype.init = function() {
      if (!this.cache()) {
        return this.get();
      }
    };

    URI.prototype.cache = function() {
      var data, i, idx, len, raw, ref, res;
      if (!Ajax.cache) {
        return;
      }
      res = [];
      ref = this.data;
      for (idx = i = 0, len = ref.length; i < len; idx = ++i) {
        data = ref[idx];
        raw = this.model.cache(this.atts, data.id);
        if (raw) {
          res.push(raw);
        } else {
          return;
        }
      }
      this.callback(res);
      return true;
    };

    URI.prototype.recordResponse = function(uris) {
      this.model.addToCache(this.atts, uris);
      return this.callback(uris);
    };

    URI.prototype.failResponse = function(xhr, statusText, error) {
      return this.model.trigger('ajaxError', xhr, statusText, error);
    };

    return URI;

  })(Base);

  URICollection = (function(superClass) {
    extend(URICollection, superClass);

    function URICollection(record, params, mode, callback1, max) {
      var options, photos, type;
      this.record = record;
      this.callback = callback1;
      this.failResponse = bind(this.failResponse, this);
      this.recordResponse = bind(this.recordResponse, this);
      URICollection.__super__.constructor.apply(this, arguments);
      type = this.record.constructor.className;
      switch (type) {
        case 'Product':
          photos = ProductsPhoto.photos(this.record.id);
          max = max || photos.length;
          this.mode = mode;
          this.photos = photos.slice(0, max);
          break;
        case 'Photo':
          this.photos = [this.record];
      }
      options = $.extend({}, this.settings, params);
      this.atts = this.uri(options);
    }

    URICollection.prototype.settings = {
      width: 140,
      height: 140,
      square: 1,
      quality: 70
    };

    URICollection.prototype.init = function() {
      var cache;
      cache = this.record.cache(this.atts);
      if (cache != null ? cache.length : void 0) {
        return this.callback(cache, this.record);
      } else {
        return this.get();
      }
    };

    URICollection.prototype.all = function() {
      return this.ajaxQueue((function(_this) {
        return function() {
          return _this.ajax({
            type: "POST",
            url: base_url + 'photos/uri/' + _this.atts,
            data: JSON.stringify(_this.photos)
          }).done(_this.recordResponse).fail(_this.failResponse);
        };
      })(this));
    };

    URICollection.prototype.recordResponse = function(uris) {
      this.record.addToCache(this.atts, uris, this.mode);
      return this.callback(uris, this.record);
    };

    URICollection.prototype.failResponse = function(xhr, statusText, error) {
      return this.record.trigger('ajaxError', xhr, statusText, error);
    };

    return URICollection;

  })(Base);

  Uri = {
    extended: function() {
      var Extend, Include;
      Include = {
        uri: function(params, mode, callback, max) {
          return new URICollection(this, params, mode, callback, max).init();
        }
      };
      Extend = {
        uri: function(params, callback, data) {
          return new URI(this, params, callback, data).init();
        }
      };
      this.include(Include);
      return this.extend(Extend);
    }
  };

  Uri.Ajax = Ajax;

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Model.Uri = Uri;
  }

}).call(this);
 },"extensions/uri_helper": function(exports, require, module) { (function() {
  var $, Photo, Spine, UriHelper;

  Spine = require("spine");

  $ = Spine.$;

  Photo = require("models/photo");

  UriHelper = {
    extended: function() {
      var include;
      include = {
        callDeferred: function(items, options, cb) {
          if (items == null) {
            items = [];
          }
          options = $().extend(this.uriSettings(), options);
          if (!Array.isArray(items)) {
            items = [items];
          }
          return $.when(this.uriDeferred(items, options)).done((function(_this) {
            return function(xhr) {
              return cb(xhr);
            };
          })(this));
        },
        uriDeferred: function(items, options) {
          var deferred;
          deferred = $.Deferred();
          Photo.uri(options, (function(_this) {
            return function(xhr) {
              return deferred.resolve(xhr);
            };
          })(this), items);
          return deferred.promise();
        },
        cb: (function(_this) {
          return function() {};
        })(this),
        uriSettings: function(width, height, square, quality) {
          if (width == null) {
            width = 30;
          }
          if (height == null) {
            height = 10;
          }
          if (square == null) {
            square = 1;
          }
          if (quality == null) {
            quality = 70;
          }
          return {
            width: width,
            height: height,
            square: square,
            quality: quality
          };
        }
      };
      return this.include(include);
    }
  };

  if (typeof module !== "undefined" && module !== null) {
    module.exports = UriHelper;
  }

}).call(this);
 },"extensions/utils": function(exports, require, module) { (function() {
  var $;

  $ = typeof jQuery !== "undefined" && jQuery !== null ? jQuery : require("jqueryify");

  $.fn.brace = function(str) {
    if (str == null) {
      str = '';
    }
    str = str.toString();
    return '(' + str + ')';
  };

  $.fn.deselect = function() {
    var els;
    els = $(this).find('.item');
    return els.removeClass('active hot');
  };

  $.fn.name = function(str, l, repl) {
    var ret;
    if (str == null) {
      str = new String;
    }
    if (l == null) {
      l = 1000;
    }
    if (repl == null) {
      repl = '...';
    }
    str = str.toString();
    repl = repl.toString();
    ret = str.slice(0, l);
    if (str.length > l) {
      ret = ret + repl;
    }
    return ret;
  };

  $.extend(jQuery.tmpl.tag, {
    "for": {
      _default: {
        $2: "var i=1;i<=1;i++"
      },
      open: 'for ($2){',
      close: '};'
    }
  });

  $.fn.isFormElement = function(o) {
    var formElements, str;
    if (o == null) {
      o = [];
    }
    str = Object.prototype.toString.call(o[0]);
    formElements = ['[object HTMLInputElement]', '[object HTMLTextAreaElement]'];
    return formElements.indexOf(str) !== -1;
  };

  $.fn.state = function(state) {
    var d;
    d = 'disabled';
    return this.each(function() {
      var $this;
      $this = $(this);
      $this.html($this.data()[state]);
      if (state === 'loading') {
        return $this.addClass(d).attr(d, d);
      } else {
        return $this.removeClass(d).removeAttr(d);
      }
    });
  };

  $.fn.unparam = function(value) {
    var i, len, pair, params, piece, pieces;
    params = {};
    pieces = value.split('&');
    for (i = 0, len = pieces.length; i < len; i++) {
      piece = pieces[i];
      pair = piece.split('=', 2);
      params[decodeURIComponent(pair[0])] = pair.length === 2 ? decodeURIComponent(pair[1].replace(/\+|false/g, '')) : true;
    }
    return params;
  };

  $.fn.position = function(e) {
    var h, info_h, info_w, maxx, maxy, minx, parent, posx, posy, s, t, w, x_offset, y_offset;
    parent = this.parent();
    info_h = this.innerHeight();
    info_w = this.innerWidth();
    w = $(window).width();
    h = $(window).height();
    t = $(window).scrollTop();
    s = parent.scrollTop();
    x_offset = 30;
    y_offset = -20;
    posx = e.pageX + x_offset - parent.offset().left;
    posy = e.pageY + y_offset - parent.offset().top + s;
    maxx = posx + info_w;
    minx = posx - info_w;
    maxy = posy + info_h;
    if (maxx >= w) {
      posx = e.pageX - info_w - x_offset;
    }
    if (maxy >= (h + t)) {
      posy = e.pageY - info_h - y_offset;
    }
    return this.css({
      top: posy + 'px',
      left: posx + 'px'
    });
  };

}).call(this);
 },"home": function(exports, require, module) { (function() {
  var $, App, HomepageView, ModalSimpleView, RefreshView, Settings, Spine, User,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require('spine');

  $ = Spine.$;

  ModalSimpleView = require("controllers/modal_simple_view");

  HomepageView = require("controllers/homepage_view");

  RefreshView = require('controllers/refresh_view');

  Settings = require("models/settings");

  User = require("models/user");

  App = (function(superClass) {
    extend(App, superClass);

    App.prototype.elements = {
      '#header': 'header',
      '#header .nav.items': 'navItems',
      '#header .nav-item': 'item',
      '#home': 'homeEl',
      '#outdoor': 'outdoorEl',
      '#specials': 'goodiesEl',
      '#fitness': 'outdoorEl',
      '#nav': 'nav',
      '#stats': 'stats',
      '#menu-trigger': 'menutrigger',
      '.logo-1': 'logo1',
      '.logo-2': 'logo2',
      '.sidebar': 'sidebar',
      '#refresh': 'refreshEl',
      '.trustami-badge': 'trustami'
    };

    App.prototype.events = {
      'mouseenter .item-menu': 'background',
      'mouseenter .opt-sidebar': 'showSidebar',
      'mouseleave .opt-sidebar': 'hideSidebar',
      'mouseenter .opt-stats': 'showStats',
      'mousemove  .opt-stats': 'moveStats',
      'mouseleave .opt-stats': 'hideStats',
      'click .opt-hint': 'showWarning',
      'click .opt-agreed': 'agreed',
      'click .opt-close': 'closeSidebar',
      'click .opt-sidebar': 'toggleSidebar',
      'click .sidebar .td:first-child': 'toggleSidebar',
      'click .paypal': 'toggleView',
      'click .opt-del': 'showDelivery',
      'click .opt-agb': 'showAgb',
      'click .opt-imp': 'showImp',
      'click .opt-pay': 'showPay',
      'click .opt-reset': 'reset',
      'click [class^="logo-"], [class*=" logo-"]': 'redirectHome'
    };

    App.prototype.trustamiTemplate = function(item) {
      return $('#trustamiTemplate').tmpl(item);
    };

    function App() {
      var setting;
      App.__super__.constructor.apply(this, arguments);
      this.modal = {
        exists: false
      };
      setting = {
        hidden: false,
        agreed: false,
        sidebaropened: false
      };
      this.refreshView = new RefreshView({
        el: this.refreshEl
      });
      this.home = new HomepageView({
        el: this.homeEl,
        nav: this.navItems,
        categoryName: 'home',
        refreshView: this.refreshView
      });
      this.outdoor = new HomepageView({
        el: this.outdoorEl,
        nav: this.navItems,
        categoryName: 'outdoor',
        refreshView: this.refreshView
      });
      this.fitness = new HomepageView({
        el: this.outdoorEl,
        nav: this.navItems,
        categoryName: 'fitness',
        refreshView: this.refreshView
      });
      this.specials = new HomepageView({
        el: this.goodiesEl,
        nav: this.navItems,
        categoryName: 'specials',
        refreshView: this.refreshView
      });
      this.manager = new Spine.Manager(this.home, this.outdoor, this.fitness, this.specials);
      this.manager.bind('change', this.proxy(this.viewChanged));
      $(window).bind('hashchange', this.proxy(this.storeHash));
      this.setData();
      this.initSettings(setting);
      this.initSidebar();
      this.initLogos();
      this.initLocation();
      this.routes({
        '/outdoor/': function(params) {
          return this.outdoor.trigger('active');
        },
        '/fitness/': function(params) {
          return this.fitness.trigger('active');
        },
        '/specials/': function(params) {
          return this.specials.trigger('active');
        },
        '/home/': function(params) {
          return this.home.trigger('active');
        },
        '/*glob': function(params) {
          return this.navigate('/home', '');
        }
      });
    }

    App.prototype.checkWarning = function() {
      if (!this.isAgreed()) {
        return this.showWarning();
      }
    };

    App.prototype.initSettings = function(setting) {
      var i, ref, s;
      Settings.fetch();
      if (i = (ref = Settings.first()) != null ? ref.id : void 0) {
        return i;
      }
      s = new Settings(setting);
      s.save();
      return s.id;
    };

    App.prototype.initLocation = function() {
      var hash, settings;
      settings = Settings.loadSettings();
      hash = (hash = settings != null ? settings.hash : void 0) ? hash : '/home';
      return location.hash = hash;
    };

    App.prototype.initLogos = function() {
      var flag;
      flag = Settings.records[0].hidden;
      this.logo1.toggleClass('hide', !!flag);
      return this.logo2.toggleClass('hide', !!!flag);
    };

    App.prototype.getTrustami = function() {
      var callback, user;
      callback = (function(_this) {
        return function(json) {
          var tmi;
          tmi = $.parseJSON(json).tmi;
          return _this.renderTrustami(tmi);
        };
      })(this);
      this.user = !(user = this.user) ? user = new User : user;
      this.user.save();
      return this.user.getTmi(callback);
    };

    App.prototype.initSidebar = function() {
      var isOpen;
      isOpen = Settings.records[0].sidebaropened;
      return this.setSidebar(!isOpen, true);
    };

    App.prototype.storeHash = function() {
      var hash, settings;
      if (!(settings = Settings.loadSettings())) {
        return;
      }
      if (hash = location.hash) {
        settings.hash = hash;
        return settings.save();
      }
    };

    App.prototype.isAgreed = function() {
      var ref;
      return (ref = Settings.first()) != null ? ref.agreed : void 0;
    };

    App.prototype.viewChanged = function(c) {
      this.changeNavbar(c.categoryName);
      this.changeBackground(c.categoryName);
      if (c.categoryName === 'outdoor') {
        this.checkWarning();
      }
      this.refreshView.render();
      return this.getTrustami();
    };

    App.prototype.renderTrustami = function(tmi) {
      return this.trustami.html(this.trustamiTemplate({
        tmi: tmi
      }));
    };

    App.prototype.background = function(e) {
      var el, res, s;
      e.preventDefault();
      e.stopPropagation();
      el = $(e.currentTarget);
      s = el.attr('id');
      res = this.getData(s, this.arr);
      return this.changeBackground(res);
    };

    App.prototype.changeNavbar = function(cat) {
      $('.nav-item', this.navItems).removeClass('active');
      return $('.' + cat, this.navItems).addClass('active');
    };

    App.prototype.changeBackground = function(k) {
      var c, j, len, ref;
      ref = this.manager.controllers;
      for (j = 0, len = ref.length; j < len; j++) {
        c = ref[j];
        this.el.removeClass(c.categoryName);
      }
      return this.el.addClass(k);
    };

    App.prototype.removeBackground = function(e) {
      var arr, c, j, len;
      e.preventDefault();
      e.stopPropagation();
      arr = this.arr;
      for (j = 0, len = arr.length; j < len; j++) {
        c = arr[j];
        this.el.removeClass(c);
      }
      return this.el.addClass('out');
    };

    App.prototype.showAgb = function(e) {
      var dialog, options;
      dialog = new ModalSimpleView({
        modalOptions: {
          keyboard: true,
          show: false
        }
      });
      options = {
        small: false,
        css: 'alert alert-warning',
        header: 'AGBs',
        body: function() {
          return require("views/agb")({
            copyright: 'Axel Nitzschner',
            spine_version: Spine.version,
            app_version: App.version,
            bs_version: '1.1.1'
          });
        }
      };
      dialog.el.one('hidden.bs.modal', this.proxy(this.hiddenmodal));
      dialog.el.one('hide.bs.modal', this.proxy(this.hidemodal));
      dialog.el.one('show.bs.modal', this.proxy(this.showmodal));
      dialog.el.one('shown.bs.modal', this.proxy(this.shownmodal));
      dialog.show(options);
      return e.preventDefault();
    };

    App.prototype.showImp = function(e) {
      var dialog, options;
      dialog = new ModalSimpleView({
        modalOptions: {
          keyboard: true,
          show: false
        }
      });
      options = {
        small: true,
        css: 'alert alert-warning',
        header: 'Impressum',
        body: function() {
          return require("views/imp")({
            copyright: 'Axel Nitzschner',
            spine_version: Spine.version,
            app_version: App.version,
            bs_version: '1.1.1'
          });
        }
      };
      dialog.el.one('hidden.bs.modal', this.proxy(this.hiddenmodal));
      dialog.el.one('hide.bs.modal', this.proxy(this.hidemodal));
      dialog.el.one('show.bs.modal', this.proxy(this.showmodal));
      dialog.el.one('shown.bs.modal', this.proxy(this.shownmodal));
      dialog.show(options);
      return e.preventDefault();
    };

    App.prototype.showPay = function(e) {
      var dialog, options;
      dialog = new ModalSimpleView({
        modalOptions: {
          keyboard: true,
          show: false
        }
      });
      options = {
        small: false,
        css: 'alert alert-warning',
        header: 'Zahlungsmöglichkeiten',
        body: function() {
          return require("views/pay")({
            copyright: 'Axel Nitzschner',
            spine_version: Spine.version,
            app_version: App.version,
            bs_version: '1.1.1'
          });
        }
      };
      dialog.el.one('hidden.bs.modal', this.proxy(this.hiddenmodal));
      dialog.el.one('hide.bs.modal', this.proxy(this.hidemodal));
      dialog.el.one('show.bs.modal', this.proxy(this.showmodal));
      dialog.el.one('shown.bs.modal', this.proxy(this.shownmodal));
      dialog.show(options);
      return e.preventDefault();
    };

    App.prototype.showWarning = function(e) {
      var agreed, dialog, options;
      agreed = this.isAgreed();
      dialog = new ModalSimpleView({
        modalOptions: {
          keyboard: true,
          show: false
        }
      });
      options = {
        small: false,
        css: 'alert alert-danger',
        header: 'Hinweis zum Versand von Pfeffer- und CS Gas-Sprays',
        body: function() {
          return require("views/warning")({
            copyright: 'Axel Nitzschner',
            spine_version: Spine.version,
            app_version: App.version,
            bs_version: '1.1.1'
          });
        },
        footer: {
          footerButtonText: function() {
            if (!agreed) {
              return "Verstanden";
            }
          }
        }
      };
      dialog.el.one('hidden.bs.modal', this.proxy(this.hiddenmodal));
      dialog.el.one('hide.bs.modal', this.proxy(this.hidemodal));
      dialog.el.one('show.bs.modal', this.proxy(this.showmodal));
      dialog.el.one('shown.bs.modal', this.proxy(this.shownmodal));
      return dialog.show(options);
    };

    App.prototype.showDelivery = function(e) {
      var dialog, options;
      dialog = new ModalSimpleView({
        modalOptions: {
          keyboard: true,
          show: false
        }
      });
      options = {
        small: false,
        css: 'alert alert-warning',
        header: 'Versand',
        body: function() {
          return require("views/delivery")({
            copyright: 'Axel Nitzschner',
            spine_version: Spine.version,
            app_version: App.version,
            bs_version: '1.1.1'
          });
        }
      };
      dialog.el.one('hidden.bs.modal', this.proxy(this.hiddenmodal));
      dialog.el.one('hide.bs.modal', this.proxy(this.hidemodal));
      dialog.el.one('show.bs.modal', this.proxy(this.showmodal));
      dialog.el.one('shown.bs.modal', this.proxy(this.shownmodal));
      dialog.show(options);
      return e.preventDefault();
    };

    App.prototype.hidemodal = function(e) {
      return this.log('hidemodal');
    };

    App.prototype.hiddenmodal = function(e) {
      this.log('hiddenmodal');
      return this.modal.exists = false;
    };

    App.prototype.showmodal = function(e) {
      this.log('showmodal');
      return this.modal.exists = true;
    };

    App.prototype.shownmodal = function(e) {
      return this.log('shownmodal');
    };

    App.prototype.redirectHome = function() {
      return location.href = '/';
    };

    App.prototype.toggleView = function(e) {
      e.preventDefault();
      return this.el.toggleClass('on');
    };

    App.prototype.toggleSidebar = function(e) {
      e.preventDefault();
      return this.setSidebar();
    };

    App.prototype.closeSidebar = function(e) {
      e.preventDefault();
      return this.setSidebar(true);
    };

    App.prototype.setSidebar = function(bol, notrans) {
      var isOpen;
      if (notrans == null) {
        notrans = false;
      }
      this.sidebar.toggleClass('notrans', notrans);
      this.sidebar.toggleClass('off', bol);
      isOpen = !this.sidebar.hasClass('off');
      return Settings.update(Settings.first().id, {
        sidebaropened: isOpen
      });
    };

    App.prototype.showSidebar = function(e) {
      e.preventDefault();
      return this.sidebar.addClass('glinch');
    };

    App.prototype.hideSidebar = function(e) {
      return;
      e.preventDefault();
      return this.sidebar.addClass('off');
    };

    App.prototype.showStats = function(e) {
      this.stats.attr('src', '/stat/counter.php').addClass('in').removeClass('away');
      return e.preventDefault();
    };

    App.prototype.moveStats = function(e) {
      this.stats.position(e);
      return e.preventDefault();
    };

    App.prototype.hideStats = function(e) {
      this.stats.attr('src', '').removeClass('in').addClass('away');
      return e.preventDefault();
    };

    App.prototype.reset = function() {
      return Settings.update(Settings.first().id, {
        hidden: false,
        agreed: false
      });
    };

    App.prototype.agreed = function() {
      return Settings.update(Settings.first().id, {
        agreed: true
      });
    };

    App.prototype.setData = function() {
      var c, j, len, ref, results;
      this.arr = [];
      ref = this.manager.controllers;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        c = ref[j];
        results.push(this.arr.push(c.categoryName));
      }
      return results;
    };

    App.prototype.getData = function(s, arr) {
      var a, i, j, len, test;
      if (arr == null) {
        arr = [];
      }
      test = function(s, a) {
        var found, matcher;
        matcher = new RegExp(".*" + a + ".*", "g");
        return found = matcher.test(s);
      };
      for (i = j = 0, len = arr.length; j < len; i = ++j) {
        a = arr[i];
        if (test(s, a)) {
          return arr[i];
        }
      }
    };

    return App;

  })(Spine.Controller);

  module.exports = App;

}).call(this);
 },"index": function(exports, require, module) { (function() {
  var $, App, Extender, ModalSimpleView, RefreshView, Settings, Spine, UriHelper, User,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  require('lib/setup');

  Spine = require('spine');

  $ = Spine.$;

  ModalSimpleView = require("controllers/modal_simple_view");

  RefreshView = require('controllers/refresh_view');

  Extender = require('extensions/controller_extender');

  Settings = require("models/settings");

  User = require("models/user");

  UriHelper = require('extensions/uri_helper');

  App = (function(superClass) {
    extend(App, superClass);

    App.extend(Extender);

    App.extend(UriHelper);

    App.prototype.elements = {
      '#header': 'header',
      '#header .nav.items': 'items',
      '#header .nav-item': 'item',
      '#content': 'content',
      '#stats': 'stats',
      '#menu-trigger': 'menutrigger',
      '.menu-button': 'menuButton',
      '#stats': 'stats',
      '.logo-1': 'logo1',
      '.logo-2': 'logo2',
      '.sidebar': 'sidebar',
      '#refresh': 'refreshEl',
      '.trustami-badge': 'trustami',
      '.hb-badge': 'hb',
      '.favorite-badge': 'fv'
    };

    App.prototype.events = {
      'mouseenter #fitness-item-menu': 'changeBackground',
      'mouseenter #outdoor-item-menu': 'changeBackground',
      'mouseenter #tools-item-menu': 'changeBackground',
      'mouseenter #specials-item-menu': 'changeBackground',
      'mouseenter .opt-stats': 'showStats',
      'mousemove  .opt-stats': 'moveStats',
      'mouseleave .opt-stats': 'hideStats',
      'click .opt-stats': 'noMethod',
      'click .opt-hint': 'showWarning',
      'click .opt-agreed': 'agreed',
      'click .opt-close': 'closeSidebar',
      'click .opt-sidebar': 'toggleSidebar',
      'click .sidebar .td:first-child': 'toggleSidebar',
      'click .paypal': 'toggleView',
      'click .opt-del': 'showDelivery',
      'click .opt-agb': 'showAgb',
      'click .opt-imp': 'showImp',
      'click .opt-privacy': 'showPrivacy',
      'click .opt-revocation': 'showRevocation',
      'click .opt-pay': 'showPay',
      'click .opt-reset': 'reset',
      'click [class^="logo-"], [class*=" logo-"]': 'redirectHome',
      'click .opt-favorite': 'showFavorite'
    };

    App.prototype.trustamiTemplate = function(item) {
      return $('#trustamiTemplate').tmpl(item);
    };

    App.prototype.hbTemplate = function() {
      return $('#hbTemplate').tmpl();
    };

    function App() {
      this.shownmodal = bind(this.shownmodal, this);
      this.showmodaldetails = bind(this.showmodaldetails, this);
      this.showmodal = bind(this.showmodal, this);
      this.hiddenmodal = bind(this.hiddenmodal, this);
      this.hidemodal = bind(this.hidemodal, this);
      var setting;
      App.__super__.constructor.apply(this, arguments);
      this.modal = {
        exists: false
      };
      this.arr = ['home', 'fitness', 'outdoor', 'tools', 'specials', 'out'];
      setting = {
        hidden: false,
        agreed: false,
        sidebaropened: false
      };
      this.refreshView = new RefreshView({
        el: this.refreshEl
      });
      Spine.bind('active:category', this.proxy(this.initCategory));
      Spine.bind('refresh:complete', this.proxy(this.renderRefreshView));
      Category.bind('refresh', this.proxy(this.renderFv));
      this.initSettings(setting);
      this.initSidebar();
      this.initLogos();
      this.exposeNav();
      this.renderRefreshView();
      this.getTrustami();
      this.renderHb();
      this.routes({
        '/item/:pid': function(params) {
          return this.showDetails(params.pid);
        },
        '/*glob': function(params) {}
      });
    }

    App.prototype.initCategory = function(cat) {
      this.initBackground(cat.name);
      return this.exposeNav(cat.name);
    };

    App.prototype.exposeNav = function(name) {
      if (name == null) {
        name = 'home';
      }
      name = this.getData(name, this.arr);
      $('.nav-item', this.items).removeClass('active');
      return $('.nav-item.' + name, this.items).addClass('active');
    };

    App.prototype.renderRefreshView = function() {
      return this.refreshView.render();
    };

    App.prototype.renderTrustami = function(tmi) {
      return this.trustami.html(this.trustamiTemplate({
        tmi: tmi
      }));
    };

    App.prototype.renderHb = function() {
      return this.hb.html(this.hbTemplate());
    };

    App.prototype.renderFv = function() {
      if (Product.getFavoriteUrl()) {
        return this.fv.addClass('badge2');
      } else {
        return this.fv.removeClass('badge2');
      }
    };

    App.prototype.toggleMenu = function() {
      if (this.swiper.previousIndex === 0) {
        return this.swiper.slidePrev();
      }
    };

    App.prototype.initSwipe = function() {
      var onInit, onSlideChangeEnd, onSlideChangeStart, swiper;
      onInit = (function(_this) {
        return function(slider) {
          return 'alert Init slider';
        };
      })(this);
      onSlideChangeStart = (function(_this) {
        return function(slider) {
          if (slider.activeIndex === 0) {
            return _this.menuButton.addClass('cross');
          } else {
            return _this.menuButton.removeClass('cross');
          }
        };
      })(this);
      onSlideChangeEnd = (function(_this) {
        return function(slider) {};
      })(this);
      this.swiper = swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        initialSlide: 1,
        resistanceRatio: .00000000000001,
        slideToClickedSlide: true
      });
      swiper.on('slideChangeStart', onSlideChangeStart);
      return swiper.on('slideChangeEnd', onSlideChangeEnd);
    };

    App.prototype.getTrustami = function() {
      var callback, user;
      callback = (function(_this) {
        return function(json) {
          var tmi;
          tmi = $.parseJSON(json).tmi;
          return _this.renderTrustami(tmi);
        };
      })(this);
      User.fetch();
      if (!(user = User.first())) {
        return;
      }
      return user.getTmi(callback);
    };

    App.prototype.showFavorite = function(e) {
      var url;
      if (!(url = Product.getFavoriteUrl())) {
        return;
      }
      location.href = url;
      e.preventDefault();
      return e.stopPropagation();
    };

    App.prototype.checkWarning = function() {
      if (!this.isAgreed()) {
        return this.showWarning();
      }
    };

    App.prototype.initSettings = function(setting) {
      var i, ref, s;
      Settings.fetch();
      if (i = (ref = Settings.first()) != null ? ref.id : void 0) {
        return i;
      }
      s = new Settings(setting);
      s.save();
      return s.id;
    };

    App.prototype.initBackground = function(name) {
      if (name == null) {
        name = 'home';
      }
      return this.el.addClass(name);
    };

    App.prototype.initLogos = function() {
      var flag;
      flag = Settings.records[0].hidden;
      this.logo1.toggleClass('hide', !!flag);
      return this.logo2.toggleClass('hide', !!!flag);
    };

    App.prototype.initSidebar = function() {
      var isOpen;
      isOpen = Settings.records[0].sidebaropened;
      return this.setSidebar(!isOpen, true);
    };

    App.prototype.changeBackground = function(e) {
      var arr, c, el, j, len, res, s;
      e.preventDefault();
      e.stopPropagation();
      el = $(e.currentTarget);
      arr = this.arr;
      s = el.attr('id');
      res = this.getData(s, arr);
      for (j = 0, len = arr.length; j < len; j++) {
        c = arr[j];
        this.el.removeClass(c);
      }
      return this.el.addClass(res);
    };

    App.prototype.removeBackground = function(e) {
      var arr, c, j, len;
      e.preventDefault();
      e.stopPropagation();
      arr = this.arr;
      for (j = 0, len = arr.length; j < len; j++) {
        c = arr[j];
        this.el.removeClass(c);
      }
      return this.el.addClass('out');
    };

    App.prototype.showAgb = function(e) {
      var dialog, options;
      options = {
        small: false,
        css: 'default',
        header: 'AGBs',
        body: function() {
          return require("views/agb")({
            copyright: 'Axel Nitzschner',
            spine_version: Spine.version,
            app_version: App.version,
            bs_version: '1.1.1'
          });
        }
      };
      dialog = new ModalSimpleView({
        modalOptions: {
          keyboard: true,
          show: false
        },
        renderOptions: options
      });
      dialog.el.one('hidden.bs.modal', this.proxy(this.hiddenmodal));
      dialog.el.one('hide.bs.modal', this.proxy(this.hidemodal));
      dialog.el.one('show.bs.modal', this.proxy(this.showmodal));
      dialog.el.one('shown.bs.modal', this.proxy(this.shownmodal));
      dialog.show(options);
      return e.preventDefault();
    };

    App.prototype.showImp = function(e) {
      var dialog, options;
      options = {
        small: false,
        css: 'default',
        header: 'Impressum',
        body: function() {
          return require("views/imp")({
            copyright: 'Axel Nitzschner',
            spine_version: Spine.version,
            app_version: App.version,
            bs_version: '1.1.1'
          });
        }
      };
      dialog = new ModalSimpleView({
        modalOptions: {
          keyboard: true,
          show: false
        },
        renderOptions: options
      });
      dialog.el.one('hidden.bs.modal', this.proxy(this.hiddenmodal));
      dialog.el.one('hide.bs.modal', this.proxy(this.hidemodal));
      dialog.el.one('show.bs.modal', this.proxy(this.showmodal));
      dialog.el.one('shown.bs.modal', this.proxy(this.shownmodal));
      dialog.show(options);
      return e.preventDefault();
    };

    App.prototype.showPay = function(e) {
      var dialog, options;
      options = {
        small: false,
        css: 'default',
        header: 'Zahlungs- möglichkeiten',
        body: function() {
          return require("views/pay")({
            copyright: 'Axel Nitzschner',
            spine_version: Spine.version,
            app_version: App.version,
            bs_version: '1.1.1'
          });
        }
      };
      dialog = new ModalSimpleView({
        modalOptions: {
          keyboard: true,
          show: false
        },
        renderOptions: options
      });
      dialog.el.one('hidden.bs.modal', this.proxy(this.hiddenmodal));
      dialog.el.one('hide.bs.modal', this.proxy(this.hidemodal));
      dialog.el.one('show.bs.modal', this.proxy(this.showmodal));
      dialog.el.one('shown.bs.modal', this.proxy(this.shownmodal));
      dialog.show(options);
      return e.preventDefault();
    };

    App.prototype.showWarning = function(e) {
      var agreed, dialog, options;
      agreed = this.isAgreed();
      options = {
        small: false,
        css: 'alert alert-danger',
        header: 'Hinweis zum Versand von Pfeffer- und CS Gas-Sprays',
        body: function() {
          return require("views/warning")({
            copyright: 'Axel Nitzschner',
            spine_version: Spine.version,
            app_version: App.version,
            bs_version: '1.1.1'
          });
        },
        footer: {
          footerButtonText: function() {
            if (!agreed) {
              return "Verstanden";
            }
          }
        }
      };
      dialog = new ModalSimpleView({
        modalOptions: {
          keyboard: true,
          show: false
        },
        renderOptions: options
      });
      dialog.el.one('hidden.bs.modal', this.proxy(this.hiddenmodal));
      dialog.el.one('hide.bs.modal', this.proxy(this.hidemodal));
      dialog.el.one('show.bs.modal', this.proxy(this.showmodal));
      dialog.el.one('shown.bs.modal', this.proxy(this.shownmodal));
      return dialog.show(options);
    };

    App.prototype.showDelivery = function(e) {
      var dialog, options;
      options = {
        small: false,
        css: 'default',
        header: 'Versand',
        body: function() {
          return require("views/delivery")({
            copyright: 'Axel Nitzschner',
            spine_version: Spine.version,
            app_version: App.version,
            bs_version: '1.1.1'
          });
        }
      };
      dialog = new ModalSimpleView({
        modalOptions: {
          keyboard: true,
          show: false
        },
        renderOptions: options
      });
      dialog.el.one('hidden.bs.modal', this.proxy(this.hiddenmodal));
      dialog.el.one('hide.bs.modal', this.proxy(this.hidemodal));
      dialog.el.one('show.bs.modal', this.proxy(this.showmodal));
      dialog.el.one('shown.bs.modal', this.proxy(this.shownmodal));
      dialog.show();
      return e.preventDefault();
    };

    App.prototype.showPrivacy = function(e) {
      var dialog, options;
      options = {
        small: false,
        css: 'default',
        header: 'Datenschutz',
        body: function() {
          return require("views/privacy")();
        }
      };
      dialog = new ModalSimpleView({
        modalOptions: {
          keyboard: true,
          show: false
        },
        renderOptions: options
      });
      dialog.el.one('hidden.bs.modal', this.proxy(this.hiddenmodal));
      dialog.el.one('hide.bs.modal', this.proxy(this.hidemodal));
      dialog.el.one('show.bs.modal', this.proxy(this.showmodal));
      dialog.el.one('shown.bs.modal', this.proxy(this.shownmodal));
      dialog.show();
      return e.preventDefault();
    };

    App.prototype.showRevocation = function(e) {
      var dialog, options;
      options = {
        small: false,
        css: 'default',
        header: 'Widerrufsrecht',
        body: function() {
          return require("views/revocation")();
        }
      };
      dialog = new ModalSimpleView({
        modalOptions: {
          keyboard: true,
          show: false
        },
        renderOptions: options
      });
      dialog.el.one('hidden.bs.modal', this.proxy(this.hiddenmodal));
      dialog.el.one('hide.bs.modal', this.proxy(this.hidemodal));
      dialog.el.one('show.bs.modal', this.proxy(this.showmodal));
      dialog.el.one('shown.bs.modal', this.proxy(this.shownmodal));
      dialog.show();
      return e.preventDefault();
    };

    App.prototype.showDetails = function(id) {
      var dialog, options;
      this.product = Product.find(id);
      if (!this.product) {
        return;
      }
      options = {
        small: false,
        css: 'alert',
        header: this.product.title,
        body: (function(_this) {
          return function() {
            return $('#norbuPricingDetailsTemplate').tmpl(_this.product).html();
          };
        })(this)
      };
      dialog = new ModalSimpleView({
        modalOptions: {
          keyboard: true,
          show: false
        },
        renderOptions: options
      });
      dialog.el.one('hidden.bs.modal', this.proxy(this.hiddenmodal));
      dialog.el.one('hide.bs.modal', this.proxy(this.hidemodal));
      dialog.el.one('show.bs.modal', this.proxy(this.showmodaldetails));
      dialog.el.one('shown.bs.modal', this.proxy(this.shownmodal));
      return dialog.show();
    };

    App.prototype.hidemodal = function(e) {
      return this.navigate('/');
    };

    App.prototype.hiddenmodal = function(e) {
      return this.log('hiddenmodal');
    };

    App.prototype.showmodal = function(e) {
      return this.log('showmodal');
    };

    App.prototype.showmodaldetails = function(e) {
      var cb, p;
      this.log('showmodal');
      cb = (function(_this) {
        return function(json, items) {
          var idx, j, jsn, key, len, onError, onLoad, res, result, results, ret, snap, val;
          result = (function() {
            var j, len, results;
            results = [];
            for (j = 0, len = json.length; j < len; j++) {
              jsn = json[j];
              ret = (function() {
                var results1;
                results1 = [];
                for (key in jsn) {
                  val = jsn[key];
                  results1.push({
                    src: val.src,
                    id: key
                  });
                }
                return results1;
              })();
              results.push(ret[0]);
            }
            return results;
          })();
          onError = function() {
            throw 'unable to load image (modal)';
          };
          onLoad = function() {
            this.imgEl.attr('src', this.src);
            if (this.i === 0) {
              this.imgEl.removeClass('load').addClass('in');
            }
            if (this.i === this.l - 1) {
              this.me.log('all loaded');
              if (this.l > 1) {
                return setTimeout(this.me.detailsSwiper = detailsSlider, 300);
              }
            }
          };
          snap = function(res, l, i) {
            var img, imgEl;
            imgEl = $('#' + res.id + ' img', _this.el);
            img = _this.createImage();
            img.imgEl = imgEl;
            img.l = l;
            img.i = i;
            img.me = _this;
            img.res = res;
            img.onload = onLoad;
            img.onerror = onError;
            return img.src = res.src;
          };
          results = [];
          for (idx = j = 0, len = result.length; j < len; idx = ++j) {
            res = result[idx];
            results.push(snap(res, result.length, idx));
          }
          return results;
        };
      })(this);
      return this.callDeferred(p = this.product.photos(), this.uriSettings(740, 740), cb);
    };

    App.prototype.shownmodal = function(e) {
      return this.log('shownmodal');
    };

    App.prototype.redirectHome = function() {
      return location.href = '/';
    };

    App.prototype.toggleView = function(e) {
      e.preventDefault();
      return this.el.toggleClass('on');
    };

    App.prototype.toggleSidebar = function(e) {
      e.preventDefault();
      return this.setSidebar();
    };

    App.prototype.closeSidebar = function(e) {
      e.preventDefault();
      return this.setSidebar(true);
    };

    App.prototype.setSidebar = function(bol, notrans) {
      var isOpen;
      if (notrans == null) {
        notrans = false;
      }
      this.sidebar.toggleClass('notrans', notrans);
      this.sidebar.toggleClass('off', bol);
      isOpen = !this.sidebar.hasClass('off');
      return Settings.update(Settings.first().id, {
        sidebaropened: isOpen
      });
    };

    App.prototype.showSidebar = function(e) {
      e.preventDefault();
      return this.sidebar.addClass('glinch');
    };

    App.prototype.hideSidebar = function(e) {
      return;
      e.preventDefault();
      return this.sidebar.addClass('off');
    };

    App.prototype.showStats = function(e) {
      this.stats.attr('src', '/stat/counter.php').addClass('in').removeClass('away');
      return e.preventDefault();
    };

    App.prototype.moveStats = function(e) {
      this.stats.position(e);
      return e.preventDefault();
    };

    App.prototype.hideStats = function(e) {
      this.stats.attr('src', '').removeClass('in').addClass('away');
      return e.preventDefault();
    };

    App.prototype.reset = function() {
      return Settings.update(Settings.first().id, {
        hidden: false,
        agreed: false
      });
    };

    App.prototype.agreed = function() {
      return Settings.update(Settings.first().id, {
        agreed: true
      });
    };

    App.prototype.isAgreed = function() {
      var ref;
      return (ref = Settings.first()) != null ? ref.agreed : void 0;
    };

    App.prototype.getData = function(s, arr) {
      var a, i, j, len, test;
      if (arr == null) {
        arr = [];
      }
      test = function(s, a) {
        var found, matcher;
        matcher = new RegExp(".*" + a + ".*", "g");
        return found = matcher.test(s);
      };
      for (i = j = 0, len = arr.length; j < len; i = ++j) {
        a = arr[i];
        if (test(s, a)) {
          return arr[i];
        }
      }
    };

    return App;

  })(Spine.Controller);

  module.exports = App;

}).call(this);
 },"lib/array": function(exports, require, module) { (function() {
  var indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  Array.prototype.toId = function() {
    var i, id, item, len, ref, res;
    res = [];
    ref = this;
    for (i = 0, len = ref.length; i < len; i++) {
      item = ref[i];
      id = typeof item === 'object' ? item.id : typeof item === 'string' ? item : void 0;
      if (id) {
        res.push(id);
      }
    }
    return res;
  };

  Array.prototype.removeFromList = function(list) {
    var i, id, idx, j, len, len1, ref, seq;
    if (list == null) {
      list = [];
    }
    seq = [];
    ref = this;
    for (idx = i = 0, len = ref.length; i < len; idx = ++i) {
      id = ref[idx];
      if (indexOf.call(list, id) >= 0) {
        seq.push(idx);
      }
    }
    seq.reverse();
    for (j = 0, len1 = seq.length; j < len1; j++) {
      id = seq[j];
      this.splice(id, 1);
    }
    return this;
  };

  Array.prototype.last = function() {
    var lastIndex;
    lastIndex = this.length - 1;
    return this[lastIndex] || null;
  };

  Array.prototype.first = function() {
    return this[0] || null;
  };

  Array.prototype.filter = function(list) {
    var i, item, len, ref, ref1, res;
    list = list.toId();
    res = [];
    ref = this;
    for (i = 0, len = ref.length; i < len; i++) {
      item = ref[i];
      if (ref1 = item.id, indexOf.call(list, ref1) >= 0) {
        res.push(item);
      }
    }
    return res;
  };

  Array.prototype.update = function(value) {
    if (Object.prototype.toString.call(value) !== '[object Array]') {
      throw new Error('passed value requires an array');
    }
    [].splice.apply(this, [0, this.length - 0].concat(value)), value;
    return this;
  };

  Array.prototype.addRemove = function(ids) {
    var i, id, len;
    if (!Array.isArray(ids)) {
      ids = [ids];
    }
    for (i = 0, len = ids.length; i < len; i++) {
      id = ids[i];
      this.toggleSelected(id);
    }
    return this;
  };

  Array.prototype.add = function(id) {
    this.toggleSelected(id, true);
    return this;
  };

  Array.prototype.toggleSelected = function(id, addonly) {
    var index;
    if (!id) {
      return this;
    }
    if (indexOf.call(this, id) < 0) {
      this.unshift(id);
    } else if (!addonly) {
      index = this.indexOf(id);
      if (index !== -1) {
        this.splice(index, 1);
      }
    }
    return this;
  };

  Array.prototype.contains = function(string) {
    var Regex, i, len, ref, value;
    ref = this;
    for (i = 0, len = ref.length; i < len; i++) {
      value = ref[i];
      Regex = new RegExp(value);
      if (Regex.test(string)) {
        return true;
      }
    }
  };

}).call(this);
 },"lib/setup": function(exports, require, module) { (function() {
  require('lib/array');

  require('spine');

  require('spine/lib/local');

  require('spine/lib/manager');

  require('spine/lib/route');

}).call(this);
 },"login": function(exports, require, module) { (function() {
  var $, Flash, Login, Spine, User,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Flash = require("models/flash");

  User = require("models/user");

  Login = (function(superClass) {
    extend(Login, superClass);

    Login.prototype.elements = {
      'form': 'form',
      '.flash': 'flashEl',
      '.status': 'statusEl',
      '#UserPassword': 'passwordEl',
      '#UserUsername': 'usernameEl',
      '#login .dialogue-content': 'contentEl',
      '#loader': 'loader',
      '.guest': 'btnGuest'
    };

    Login.prototype.events = {
      'keypress': 'submitOnEnter',
      'click #guestLogin': 'guestLogin',
      'click #cancel': 'cancel'
    };

    Login.prototype.flashTemplate = function(item) {
      return $('#flashTemplate').tmpl(item);
    };

    Login.prototype.statusTemplate = function(item) {
      return $('#statusTemplate').tmpl(item);
    };

    function Login(form) {
      this.error = bind(this.error, this);
      this.success = bind(this.success, this);
      this.complete = bind(this.complete, this);
      this.submit = bind(this.submit, this);
      var flash;
      Login.__super__.constructor.apply(this, arguments);
      Flash.fetch();
      if (Flash.count()) {
        flash = Flash.first();
      }
      if (flash) {
        this.flash(flash);
      }
      Flash.destroyAll();
      this.renderGuestLogin();
    }

    Login.prototype.render = function(el, stuff) {
      el.html(stuff);
      return this.el;
    };

    Login.prototype.submit = function() {
      return $.ajax({
        data: this.form.serialize(),
        type: 'POST',
        success: this.success,
        error: this.error,
        complete: this.complete
      });
    };

    Login.prototype.complete = function(xhr) {
      var json;
      json = xhr.responseText;
      this.passwordEl.val('');
      return this.usernameEl.val('').focus();
    };

    Login.prototype.success = function(json) {
      var fadeFunc, redirectFunc, user;
      json = $.parseJSON(json);
      User.fetch();
      User.destroyAll();
      user = new User(this.newAttributes(json));
      user.save();
      this.flash(json);
      fadeFunc = function() {
        return this.contentEl.addClass('fade');
      };
      redirectFunc = function() {
        return User.redirect('/');
      };
      this.delay(fadeFunc, 2000);
      return this.delay(redirectFunc, 2000);
    };

    Login.prototype.error = function(xhr, err) {
      var flash;
      flash = $.parseJSON(xhr.responseText);
      flash.status = xhr.status;
      flash.statusText = xhr.statusText;
      return this.flash(flash);
    };

    Login.prototype.flash = function(flash) {
      var delayedFunc;
      if (!this.oldMessage) {
        this.oldMessage = this.flashEl.html();
      }
      delayedFunc = function() {
        return this.flashEl.html(this.oldMessage);
      };
      this.render(this.flashEl, this.flashTemplate(flash));
      this.render(this.statusEl, this.statusTemplate(flash));
      return this.delay(delayedFunc, 2000);
    };

    Login.prototype.newAttributes = function(json) {
      return {
        id: json.id,
        username: json.username,
        name: json.name,
        groupname: json.groupname,
        sessionid: json.sessionid,
        redirect: location.hash
      };
    };

    Login.prototype.cancel = function(e) {
      User.redirect();
      return e.preventDefault();
    };

    Login.prototype.renderGuestLogin = function() {
      if (!Spine.isProduction) {
        return this.btnGuest.removeClass('hide');
      }
    };

    Login.prototype.guestLogin = function() {
      this.usernameEl.val('guest');
      this.passwordEl.val('guest');
      return this.submit();
    };

    Login.prototype.submitOnEnter = function(e) {
      if (e.keyCode !== 13) {
        return;
      }
      this.submit();
      return e.preventDefault();
    };

    return Login;

  })(Spine.Controller);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Login;
  }

}).call(this);
 },"models/categories_product": function(exports, require, module) { (function() {
  var $, CategoriesProduct, Extender, Filter, Model, Photo, ProductsPhoto, Spine,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Model = Spine.Model;

  Filter = require("extensions/filter");

  Model.Category = require('models/category');

  Model.Product = require('models/product');

  Photo = require('models/photo');

  ProductsPhoto = require('models/products_photo');

  Extender = require("extensions/model_extender");

  require("spine/lib/ajax");

  CategoriesProduct = (function(superClass) {
    extend(CategoriesProduct, superClass);

    function CategoriesProduct() {
      this.allCategoryProducts = bind(this.allCategoryProducts, this);
      return CategoriesProduct.__super__.constructor.apply(this, arguments);
    }

    CategoriesProduct.configure("CategoriesProduct", 'id', 'cid', 'category_id', 'product_id', 'order', 'ignored');

    CategoriesProduct.extend(Model.Ajax);

    CategoriesProduct.extend(Filter);

    CategoriesProduct.extend(Extender);

    CategoriesProduct.url = 'categories_products';

    CategoriesProduct.mixinAttributes = ['ignored', 'order'];

    CategoriesProduct.productExists = function(aid, gid) {
      var gas;
      gas = this.filter(true, {
        product_id: aid,
        category_id: gid,
        func: 'selectUnique'
      });
      return gas.first() || !!gas.length;
    };

    CategoriesProduct.categories = function(aid) {
      return Category.filterRelated(aid, {
        model: 'Product',
        sort: 'sortByOrder'
      });
    };

    CategoriesProduct.products = function(gid) {
      return Product.filterRelated(gid, {
        model: 'Category',
        sort: 'sortByOrder'
      });
    };

    CategoriesProduct.publishedProducts = function(gid) {
      var ref;
      if (gid == null) {
        gid = (ref = Category.record) != null ? ref.id : void 0;
      }
      return this.filter(gid, {
        associationForeignKey: 'category_id',
        func: 'selectNotIgnored'
      });
    };

    CategoriesProduct.publishedProductsAll = function(gid) {
      var ref;
      if (gid == null) {
        gid = (ref = Category.record) != null ? ref.id : void 0;
      }
      return this.filter(gid, {
        associationForeignKey: 'category_id',
        func: 'selectNotIgnoredAll'
      });
    };

    CategoriesProduct.unpublishedProducts = function(gid) {
      var ref;
      if (gid == null) {
        gid = (ref = Category.record) != null ? ref.id : void 0;
      }
      return this.filter(gid, {
        associationForeignKey: 'category_id',
        func: 'selectIgnored'
      });
    };

    CategoriesProduct.otherProducts = function(gid) {
      var ref;
      if (gid == null) {
        gid = (ref = Category.record) != null ? ref.id : void 0;
      }
      return this.filter(gid, {
        associationForeignKey: 'category_id',
        func: 'selectOthers'
      });
    };

    CategoriesProduct.photos = function(id) {
      var i, j, len, len1, photo, photos, product, products, ret;
      ret = [];
      if (!id) {
        this.each((function(_this) {
          return function(item) {
            var i, len, photo, photos, results;
            photos = ProductsPhoto.productPhotos(item.product_id);
            results = [];
            for (i = 0, len = photos.length; i < len; i++) {
              photo = photos[i];
              results.push(ret.push(photo));
            }
            return results;
          };
        })(this));
      } else {
        products = this.products(id);
        for (i = 0, len = products.length; i < len; i++) {
          product = products[i];
          photos = ProductsPhoto.productPhotos(product.id);
          for (j = 0, len1 = photos.length; j < len1; j++) {
            photo = photos[j];
            ret.push(photo);
          }
        }
      }
      return ret;
    };

    CategoriesProduct.isActiveProduct = function(gid, aid) {
      var ga, gas, i, len, ret;
      ret = [];
      gas = this.filter(gid, {
        associationForeignKey: 'category_id',
        func: 'selectNotIgnored'
      });
      for (i = 0, len = gas.length; i < len; i++) {
        ga = gas[i];
        if ((ga.product_id === aid) && (!ga.ignored)) {
          ret.push(ga);
        }
      }
      return !!ret.length;
    };

    CategoriesProduct.c = 0;

    CategoriesProduct.prototype.validate = function() {
      var ret2, valid_1, valid_2;
      valid_1 = (Product.find(this.product_id)) && (Category.find(this.category_id));
      valid_2 = !(this.constructor.productExists(this.product_id, this.category_id) && this.isNew());
      if (!valid_1) {
        return 'Ungültige Aktion!';
      }
      ret2 = function(p) {
        return 'Produkt ' + p.title + ' existiert bereits in dieser Kategorie';
      };
      if (!valid_2) {
        return ret2(Product.find(this.product_id));
      }
      return false;
    };

    CategoriesProduct.prototype.mixinAttributes = function() {
      var attr, i, len, ref, result;
      result = {};
      ref = this.constructor.mixinAttributes;
      for (i = 0, len = ref.length; i < len; i++) {
        attr = ref[i];
        result[attr] = this[attr];
      }
      return result;
    };

    CategoriesProduct.prototype.categories = function() {
      return this.constructor.categories(this.product_id);
    };

    CategoriesProduct.prototype.products = function() {
      return this.constructor.products(this.category_id);
    };

    CategoriesProduct.prototype.allCategoryProducts = function() {
      var category, ga, gas, i, len, products;
      category = Category.record;
      if (!category) {
        return;
      }
      products = [];
      gas = this.constructor.filter(category.id, {
        associationForeignKey: 'category_id'
      });
      for (i = 0, len = gas.length; i < len; i++) {
        ga = gas[i];
        if (Product.exists(ga.product_id)) {
          products.push(Product.find(ga.product_id));
        }
      }
      return products;
    };

    CategoriesProduct.prototype.isActiveProduct = function(aid) {
      return this.constructor.isActiveProduct(this.category_id, aid);
    };

    CategoriesProduct.prototype.select = function(id, options) {
      if (this[options.associationForeignKey] === id) {
        return true;
      }
    };

    CategoriesProduct.prototype.selectProduct = function(id, gid) {
      if (this.product_id === id && this.category_id === Category.record.id) {
        return true;
      }
    };

    CategoriesProduct.prototype.selectUnique = function(query, options) {
      if ((this.product_id === options.product_id) && (this.category_id === options.category_id)) {
        return true;
      }
    };

    CategoriesProduct.prototype.selectNotIgnored = function(id, opts) {
      var ref;
      if (!this.ignored && (this.category_id === id) && this.isProtectedModel((ref = Category.find(this.category_id)) != null ? ref.name : void 0)) {
        return true;
      }
    };

    CategoriesProduct.prototype.selectNotIgnoredAll = function(id) {
      var ref;
      if ((!this.ignored) && (this.isProtectedModel((ref = Category.find(this.category_id)) != null ? ref.name : void 0))) {
        return true;
      }
    };

    CategoriesProduct.prototype.selectIgnored = function(id) {
      var ref;
      if (this.ignored && this.isProtectedModel((ref = Category.find(this.category_id)) != null ? ref.name : void 0)) {
        return true;
      }
    };

    CategoriesProduct.prototype.selectOthers = function(id) {
      var ref;
      if (!this.isProtectedModel((ref = Category.find(this.category_id)) != null ? ref.name : void 0)) {
        return true;
      }
    };

    return CategoriesProduct;

  })(Spine.Model);

  module.exports = Model.CategoriesProduct = CategoriesProduct;

}).call(this);
 },"models/category": function(exports, require, module) { (function() {
  var $, AjaxRelations, CategoriesProduct, Category, Extender, Filter, Model, Photo, ProductsPhoto, Spine, Uri, User,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Model = Spine.Model;

  User = require('models/user');

  Photo = require('models/photo');

  CategoriesProduct = require('models/categories_product');

  ProductsPhoto = require('models/products_photo');

  Filter = require("extensions/filter");

  AjaxRelations = require("extensions/ajax_relations");

  Uri = require("extensions/uri");

  Extender = require("extensions/model_extender");

  require("spine/lib/ajax");

  Category = (function(superClass) {
    extend(Category, superClass);

    function Category() {
      this.details = bind(this.details, this);
      return Category.__super__.constructor.apply(this, arguments);
    }

    Category.configure('Category', 'id', 'cid', 'name', 'screenname', 'order', 'user_id', 'protected');

    Category.extend(Filter);

    Category.extend(Model.Ajax);

    Category.extend(AjaxRelations);

    Category.extend(Uri);

    Category.extend(Extender);

    Category.humanName = function() {
      return 'die Kategorie';
    };

    Category.humanNames = function() {
      return 'die Kategorien';
    };

    Category.selectAttributes = ['screenname'];

    Category.parent = 'Root';

    Category.childType = 'Product';

    Category.url = '' + base_url + 'categories';

    Category.fromJSON = function(objects) {
      var json, key;
      Category.__super__.constructor.fromJSON.apply(this, arguments);
      this.createJoinTables(objects);
      key = this.className;
      json = this.make(objects, key);
      return json;
    };

    Category.foreignModels = function() {
      return {
        'Product': {
          className: 'Product',
          joinTable: 'CategoriesProduct',
          foreignKey: 'category_id',
          associationForeignKey: 'product_id'
        }
      };
    };

    Category.contains = function(id) {
      if (id == null) {
        id = this.record.id;
      }
      if (!id) {
        return Model[this.childType].all();
      }
      return this.products(id);
    };

    Category.products = function(id) {
      var filterOptions;
      filterOptions = {
        model: 'Category',
        sort: 'sortByOrder'
      };
      return Model[this.childType].filterRelated(id, filterOptions);
    };

    Category.product = function(id, pid) {
      var filterOptions, i, len, pro, pros, res;
      filterOptions = {
        model: 'Category'
      };
      pros = this.products(id);
      res = [];
      for (i = 0, len = pros.length; i < len; i++) {
        pro = pros[i];
        if (pro.id === pid) {
          res.push(pro);
        }
      }
      return res[0];
    };

    Category.publishedProducts = function(id) {
      var cp, cps, filterOptions, i, len, ret;
      filterOptions = {
        func: 'selectNotIgnored'
      };
      ret = [];
      cps = CategoriesProduct.filterSortByOrder(id, filterOptions);
      for (i = 0, len = cps.length; i < len; i++) {
        cp = cps[i];
        ret.push(Product.find(cp.product_id));
      }
      return ret;
    };

    Category.selectedProductsHasPhotos = function() {
      var alb, i, len, products;
      products = Product.toRecords(this.selectionList());
      for (i = 0, len = products.length; i < len; i++) {
        alb = products[i];
        if (alb.contains()) {
          return true;
        }
      }
      return false;
    };

    Category.activePhotos = function(id) {
      var ga, gas, i, ids, j, len, len1, pho, photos, product, ref, ret, search;
      if (id == null) {
        id = (ref = this.record) != null ? ref.id : void 0;
      }
      ret = [];
      if (id) {
        gas = CategoriesProduct.filter(id, {
          associationForeignKey: 'category_id',
          func: 'selectNotIgnored'
        });
        search = 'product_id';
      } else {
        ids = Category.selectionList();
        gas = Product.toRecords(ids);
        search = 'id';
      }
      for (i = 0, len = gas.length; i < len; i++) {
        ga = gas[i];
        product = Product.find(ga = CategoriesProduct.find(search));
        if (!product) {
          break;
        }
        photos = product.photos() || [];
        for (j = 0, len1 = photos.length; j < len1; j++) {
          pho = photos[j];
          ret.push(pho);
        }
      }
      return ret;
    };

    Category.details = function() {
      var i, imagesCount, len, product, products;
      if (Category.record) {
        return Category.record.details();
      }
      products = Product.all();
      imagesCount = 0;
      for (i = 0, len = products.length; i < len; i++) {
        product = products[i];
        imagesCount += product.count = ProductsPhoto.filter(product.id, {
          associationForeignKey: 'product_id'
        }).length;
      }
      return $().extend(Category.defaultDetails, {
        gCount: Category.count(),
        iCount: imagesCount,
        aCount: products.length,
        sCount: Category.selectionList().length,
        author: User.first().name
      });
    };

    Category.findRelated = function(joins, joinid) {
      var i, join, len, record, results;
      if (joins == null) {
        joins = [];
      }
      if (joinid == null) {
        joinid = '';
      }
      results = [];
      for (i = 0, len = joins.length; i < len; i++) {
        join = joins[i];
        if ((record = this.find(join[joinid]))) {
          results.push(record);
        }
      }
      return results;
    };

    Category.renderBuffer = function(buffer) {
      var items;
      items = Category.filter();
      return this.buffer = items;
    };

    Category.prototype.init = function(instance) {
      var id, prot, s;
      if (!(id = instance.id)) {
        return;
      }
      prot = this.isProtectedModel(instance.name);
      instance["protected"] = prot;
      s = new Object();
      s[id] = [];
      this.constructor.selection.push(s);
      return instance;
    };

    Category.prototype.validate = function() {
      var valid;
      valid = !Category["protected"][this.name];
      if (!valid) {
        return 'Geschützte Kategorie!';
      }
      return false;
    };

    Category.prototype.activePhotos = function() {
      return this.constructor.activePhotos(this.id);
    };

    Category.prototype.details = function() {
      var i, imagesCount, len, product, products, published;
      products = Category.products(this.id);
      published = CategoriesProduct.publishedProducts(this.id);
      imagesCount = 0;
      for (i = 0, len = products.length; i < len; i++) {
        product = products[i];
        imagesCount += product.count = ProductsPhoto.filter(product.id, {
          associationForeignKey: 'product_id'
        }).length;
      }
      return $().extend(this.defaultDetails, {
        name: this.name,
        screenname: this.screenname,
        iCount: imagesCount,
        aCount: products.length,
        pCount: published.length,
        sCount: Category.selectionList().length,
        author: User.first().name
      });
    };

    Category.prototype.count_ = function(inc) {
      var filterOptions;
      if (inc == null) {
        inc = 0;
      }
      filterOptions = {
        model: 'Category'
      };
      return Product.filterRelated(this.id, filterOptions).length + inc;
    };

    Category.prototype.contains = function(inc) {
      if (inc == null) {
        inc = 0;
      }
      return this.constructor.contains(this.id).length + inc;
    };

    Category.prototype.products = function() {
      return this.constructor.products(this.id);
    };

    Category.prototype.updateAttributes = function(atts, options) {
      if (options == null) {
        options = {};
      }
      this.load(atts);
      return this.save();
    };

    Category.prototype.updateAttribute = function(name, value, options) {
      if (options == null) {
        options = {};
      }
      this[name] = value;
      return this.save();
    };

    Category.prototype.select = function() {};

    return Category;

  })(Spine.Model);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Model.Category = Category;
  }

}).call(this);
 },"models/clipboard": function(exports, require, module) { (function() {
  var $, Clipboard, Model, Spine,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Model = Spine.Model;

  require('spine/lib/local');

  Clipboard = (function(superClass) {
    extend(Clipboard, superClass);

    function Clipboard() {
      return Clipboard.__super__.constructor.apply(this, arguments);
    }

    Clipboard.configure('Clipboard', 'id', 'item', 'type', 'cut');

    Clipboard.extend(Model.Local);

    Clipboard.prototype.init = function(instance) {
      if (!instance) {

      }
    };

    return Clipboard;

  })(Spine.Model);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Model.Clipboard = Clipboard;
  }

}).call(this);
 },"models/config": function(exports, require, module) { (function() {
  var $, Config, Filter, Model, Spine,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Model = Spine.Model;

  Filter = require("extensions/filter");

  require('spine/lib/local');

  Config = (function(superClass) {
    extend(Config, superClass);

    function Config() {
      return Config.__super__.constructor.apply(this, arguments);
    }

    Config.configure('Config', 'id', 'key', 'value');

    Config.extend(Model.Local);

    Config.extend(Filter);

    Config.prototype.init = function(instance) {};

    Config.prototype.select = function(query) {
      if (this.key === query) {
        return true;
      }
      return false;
    };

    return Config;

  })(Spine.Model);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Config;
  }

}).call(this);
 },"models/description": function(exports, require, module) { (function() {
  var $, AjaxRelations, Description, Extender, Filter, Model, Spine,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Model = Spine.Model;

  AjaxRelations = require("extensions/ajax_relations");

  Filter = require("extensions/filter");

  Extender = require("extensions/model_extender");

  require("spine/lib/ajax");

  Description = (function(superClass) {
    extend(Description, superClass);

    function Description() {
      return Description.__super__.constructor.apply(this, arguments);
    }

    Description.configure('Description', 'id', 'cid', 'description', "product_id", 'user_id', 'order');

    Description.extend(Filter);

    Description.extend(Model.Ajax);

    Description.extend(AjaxRelations);

    Description.extend(Extender);

    Description.selectAttributes = ['description'];

    Description.url = 'descriptions';

    Description.fromJSON = function(objects) {
      var json, key;
      Description.__super__.constructor.fromJSON.apply(this, arguments);
      key = this.className;
      json = this.make(objects, key);
      return json;
    };

    Description.prototype.select = function(id) {
      if (this.product_id === id) {
        return true;
      }
    };

    return Description;

  })(Spine.Model);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Model.Description = Description;
  }

}).call(this);
 },"models/drag_item": function(exports, require, module) { (function() {
  var $, Model, Spine, SpineDragItem,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Model = Spine.Model;

  SpineDragItem = (function(superClass) {
    extend(SpineDragItem, superClass);

    function SpineDragItem() {
      return SpineDragItem.__super__.constructor.apply(this, arguments);
    }

    SpineDragItem.configure('SpineDragItem', 'el', 'els', 'target', 'source', 'sourceModelName', 'sourceModelId', 'originModel', 'originModelName', 'originRecord', 'originRecordName', 'originRecordId', 'selection', 'selected', 'closest');

    SpineDragItem.prototype.init = function() {};

    return SpineDragItem;

  })(Spine.Model);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Model.SpineDragItem = SpineDragItem;
  }

}).call(this);
 },"models/flash": function(exports, require, module) { (function() {
  var $, Flash, Model, Spine,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Model = Spine.Model;

  require('spine/lib/local');

  Flash = (function(superClass) {
    extend(Flash, superClass);

    function Flash() {
      return Flash.__super__.constructor.apply(this, arguments);
    }

    Flash.configure('Flash', 'flash', 'record', 'status', 'statusText');

    Flash.extend(Model.Local);

    Flash.prototype.init = function() {};

    return Flash;

  })(Spine.Model);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Flash;
  }

}).call(this);
 },"models/photo": function(exports, require, module) { (function() {
  var $, AjaxRelations, Cache, Category, Clipboard, Develop, Extender, Filter, Model, Photo, Product, ProductsPhoto, Spine, Uri,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Model = Spine.Model;

  Filter = require("extensions/filter");

  Category = require('models/category');

  Product = require('models/product');

  Clipboard = require('models/clipboard');

  ProductsPhoto = require('models/products_photo');

  Extender = require("extensions/model_extender");

  AjaxRelations = require("extensions/ajax_relations");

  Uri = require("extensions/uri");

  Develop = require("extensions/develop");

  Cache = require("extensions/cache");

  require("spine/lib/ajax");

  Photo = (function(superClass) {
    extend(Photo, superClass);

    function Photo() {
      this.details = bind(this.details, this);
      return Photo.__super__.constructor.apply(this, arguments);
    }

    Photo.configure("Photo", 'id', 'title', "photo", 'filesize', 'captured', 'exposure', "iso", 'longitude', 'aperture', 'software', 'model', 'order', 'user_id', 'active', 'src', 'selected', 'deleted');

    Photo.extend(Cache);

    Photo.extend(Model.Ajax);

    Photo.extend(Uri);

    Photo.extend(Develop);

    Photo.extend(AjaxRelations);

    Photo.extend(Filter);

    Photo.extend(Extender);

    Photo.humanName = function() {
      return 'das Foto';
    };

    Photo.humanNames = function() {
      return 'die Fotos';
    };

    Photo.selectAttributes = ['title', "photo", 'user_id', 'order'];

    Photo.parent = 'Product';

    Photo.foreignModels = function() {
      return {
        'Product': {
          className: 'Product',
          joinTable: 'ProductsPhoto',
          foreignKey: 'photo_id',
          associationForeignKey: 'product_id'
        }
      };
    };

    Photo.url = '' + base_url + Photo.className.toLowerCase() + 's';

    Photo.fromJSON = function(objects) {
      var json, key;
      Photo.__super__.constructor.fromJSON.apply(this, arguments);
      this.createJoinTables(objects);
      key = this.className;
      json = this.make(objects, key);
      return json;
    };

    Photo.nameSort = function(a, b) {
      var aa, bb, ref, ref1;
      aa = (ref = (a || '').name) != null ? ref.toLowerCase() : void 0;
      bb = (ref1 = (b || '').name) != null ? ref1.toLowerCase() : void 0;
      if (aa === bb) {
        return 0;
      } else if (aa < bb) {
        return -1;
      } else {
        return 1;
      }
    };

    Photo.renderBuffer = function(buffer) {
      var items, product;
      if (product = Product.record) {
        items = Product.photos(product.id);
      } else {
        items = Photo.filter(true);
      }
      return this.buffer = items;
    };

    Photo.defaults = {
      width: 140,
      height: 140,
      square: 1,
      quality: 70
    };

    Photo.success = function(uri) {
      Photo.log('success');
      return Photo.trigger('uri', uri);
    };

    Photo.error = function(json) {
      return Photo.trigger('ajaxError', json);
    };

    Photo.create = function(atts) {
      return this.__super__.constructor.create.call(this, atts);
    };

    Photo.refresh = function(values, options) {
      if (options == null) {
        options = {};
      }
      return this.__super__.constructor.refresh.call(this, values, options);
    };

    Photo.trashed = function() {
      var item, res;
      res = [];
      for (item in this.irecords) {
        if (!ProductsPhoto.find(item.id)) {
          res.push(item);
        }
      }
      return res;
    };

    Photo.inactive = function() {
      return this.findAllByAttribute('active', false);
    };

    Photo.activePhotos = function() {
      return [this.record];
    };

    Photo.createJoin = function(items, target, callback) {
      var ap, cb, isValid, item, ret, valid;
      if (items == null) {
        items = [];
      }
      if (!Array.isArray(items)) {
        items = [items];
      }
      if (!items.length) {
        return;
      }
      isValid = true;
      cb = (function(_this) {
        return function() {
          Product.trigger('change:collection', target);
          if (typeof callback === 'function') {
            return callback.call(_this);
          }
        };
      })(this);
      ret = (function() {
        var i, len, ref, results;
        results = [];
        for (i = 0, len = items.length; i < len; i++) {
          item = items[i];
          ap = new ProductsPhoto({
            product_id: target.id,
            photo_id: item.id,
            order: parseInt((ref = ProductsPhoto.photos(target.id).last()) != null ? ref.order : void 0) + 1 || 0
          });
          valid = ap.save({
            validate: true,
            ajax: false
          });
          if (!valid) {
            results.push(isValid = valid);
          } else {
            results.push(void 0);
          }
        }
        return results;
      })();
      if (isValid) {
        target.save({
          done: cb
        });
      } else {
        Spine.trigger('refresh:all');
      }
      return ret;
    };

    Photo.destroyJoin = function(items, target, cb) {
      var ap, aps, i, item, len;
      if (items == null) {
        items = [];
      }
      if (!Array.isArray(items)) {
        items = [items];
      }
      if (!(items.length && target)) {
        return;
      }
      for (i = 0, len = items.length; i < len; i++) {
        item = items[i];
        aps = ProductsPhoto.filter(item.id, {
          associationForeignKey: 'photo_id'
        });
        ap = ProductsPhoto.productPhotoExists(item.id, target.id);
        if (ap) {
          ap.destroy({
            done: cb
          });
        }
      }
      return Product.trigger('change:collection', target);
    };

    Photo.products = function(id) {
      var filterOptions;
      filterOptions = {
        model: 'Photo',
        sort: 'sortByOrder'
      };
      return Product.filterRelated(id, filterOptions);
    };

    Photo.findRelated_ = function(joins, joinid) {
      var i, join, len, record, results;
      if (joins == null) {
        joins = [];
      }
      if (joinid == null) {
        joinid = '';
      }
      results = [];
      for (i = 0, len = joins.length; i < len; i++) {
        join = joins[i];
        if ((record = this.find(join[joinid])) && !!typeof (record.order = join.order)) {
          results.push(record);
        }
      }
      return results;
    };

    Photo.findRelated = function(joins, joinid) {
      var i, join, len, record, res;
      if (joins == null) {
        joins = [];
      }
      if (joinid == null) {
        joinid = '';
      }
      res = [];
      for (i = 0, len = joins.length; i < len; i++) {
        join = joins[i];
        if (record = this.find(join[joinid])) {
          res.push(record.silentUpdate({
            'order': join.order
          }));
        }
      }
      return res;
    };

    Photo.unusedPhotos = function() {
      return this.filter(true, {
        func: 'selectUnused'
      });
    };

    Photo.prototype.init = function(instance) {
      if (!(instance != null ? instance.id : void 0)) {
        return;
      }
      return this.constructor.initCache(instance.id);
    };

    Photo.prototype.parent = function() {
      return this.constructor.parent;
    };

    Photo.prototype.createJoin = function(target) {
      return this.constructor.createJoin([this], target);
    };

    Photo.prototype.destroyJoin = function(target) {
      return this.constructor.destroyJoin([this], target);
    };

    Photo.prototype.products = function() {
      return this.constructor.products(this.id);
    };

    Photo.prototype.select_ = function(joinTableItems) {
      var i, len, record;
      for (i = 0, len = joinTableItems.length; i < len; i++) {
        record = joinTableItems[i];
        if (record.photo_id === this.id && ((this['order'] = parseInt(record.order)) != null)) {
          return true;
        }
      }
    };

    Photo.prototype.select = function() {
      if (!this.deleted) {
        return true;
      }
    };

    Photo.prototype.selectDeleted = function() {
      if (this.deleted) {
        return true;
      }
    };

    Photo.prototype.selectPhoto = function(id) {
      if (this.id === id) {
        return true;
      }
    };

    Photo.prototype.selectUnused = function(id) {
      if (!ProductsPhoto.findByAttribute('photo_id', this.id)) {
        return true;
      }
    };

    Photo.prototype.details = function() {
      return {
        category: Model.Category.record,
        product: Model.Product.record,
        photo: Model.Photo.record,
        author: User.first().name
      };
    };

    return Photo;

  })(Spine.Model);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Model.Photo = Photo;
  }

}).call(this);
 },"models/photos_trash": function(exports, require, module) { (function() {
  var $, Extender, Model, PhotosTrash, Spine,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Model = Spine.Model;

  Extender = require("extensions/model_extender");

  PhotosTrash = (function(superClass) {
    extend(PhotosTrash, superClass);

    function PhotosTrash() {
      return PhotosTrash.__super__.constructor.apply(this, arguments);
    }

    PhotosTrash.configure("PhotosTrash", 'id');

    PhotosTrash.extend(Extender);

    PhotosTrash.prototype.init = function(instance) {
      var id;
      if (!(id = instance.id)) {

      }
    };

    return PhotosTrash;

  })(Spine.Model);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Model.PhotosTrash = PhotosTrash;
  }

}).call(this);
 },"models/product": function(exports, require, module) { (function() {
  var $, AjaxRelations, CategoriesProduct, Clipboard, Extender, Filter, Model, Product, Spine, Uri, Utils,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Model = Spine.Model;

  CategoriesProduct = require('models/categories_product');

  Clipboard = require('models/clipboard');

  AjaxRelations = require("extensions/ajax_relations");

  Uri = require("extensions/uri");

  Utils = require("extensions/utils");

  Filter = require("extensions/filter");

  Extender = require("extensions/model_extender");

  require("extensions/cache");

  require("spine/lib/ajax");

  Product = (function(superClass) {
    extend(Product, superClass);

    function Product() {
      this.details = bind(this.details, this);
      this.descriptions = bind(this.descriptions, this);
      this.photos = bind(this.photos, this);
      this.contains = bind(this.contains, this);
      return Product.__super__.constructor.apply(this, arguments);
    }

    Product.configure("Product", 'id', 'cid', 'title', 'subtitle', 'link', 'notes', 'price', 'user_id', 'ignored', 'favorite', 'order', 'invalid', 'deleted', 'active', 'selected');

    Product.extend(Model.Cache);

    Product.extend(Model.Ajax);

    Product.extend(Uri);

    Product.extend(Utils);

    Product.extend(AjaxRelations);

    Product.extend(Filter);

    Product.extend(Extender);

    Product.humanName = function() {
      return 'das Produkt';
    };

    Product.humanNames = function() {
      return 'die Produkte';
    };

    Product.selectAttributes = ['title', 'subtitle', 'notes', 'price'];

    Product.parent = 'Category';

    Product.childType = 'Photo';

    Product.previousID = false;

    Product.url = '' + base_url + Product.className.toLowerCase() + 's';

    Product.fromJSON = function(objects) {
      var json, key;
      Product.__super__.constructor.fromJSON.apply(this, arguments);
      this.createJoinTables(objects);
      key = this.className;
      json = this.make(objects, key);
      return json;
    };

    Product.nameSort = function(a, b) {
      var aa, bb, ref, ref1;
      aa = (ref = (a || '').title) != null ? ref.toLowerCase() : void 0;
      bb = (ref1 = (b || '').title) != null ? ref1.toLowerCase() : void 0;
      if (aa === bb) {
        return 0;
      } else if (aa < bb) {
        return -1;
      } else {
        return 1;
      }
    };

    Product.foreignModels = function() {
      return {
        'Category': {
          className: 'Category',
          joinTable: 'CategoriesProduct',
          foreignKey: 'product_id',
          associationForeignKey: 'category_id'
        },
        'Photo': {
          className: 'Photo',
          joinTable: 'ProductsPhoto',
          foreignKey: 'product_id',
          associationForeignKey: 'photo_id'
        }
      };
    };

    Product.contains = function(id) {
      if (id == null) {
        id = this.record.id;
      }
      if (!id) {
        return Model[this.childType].all();
      }
      return this.photos(id);
    };

    Product.photos = function(id, max) {
      var filterOptions, photos, ret;
      max = max <= 0 ? 1 : max;
      filterOptions = {
        model: 'Product',
        sort: 'sortByReverseOrder'
      };
      photos = Photo.filterRelated(id, filterOptions);
      ret = photos.slice(0, max);
      return ret;
    };

    Product.getFavoriteUrl = function(isAdmin) {
      var cat, catId, catPro, cats, favorite, location;
      favorite = Product.findByAttribute('favorite', true);
      if (!favorite) {
        return;
      }
      cats = CategoriesProduct.categories(favorite.id);
      catPro = CategoriesProduct.findByAttribute('product_id', favorite.id);
      catId = catPro.category_id;
      cat = Category.find(catId);
      if (isAdmin) {
        location = '/category/' + catId + '/pid/' + favorite.id;
      } else {
        if (catPro.ignored || !Category["protected"][cat.name]) {
          return;
        }
        location = '/pages/' + cat.name + '#/item/' + favorite.id;
      }
      return location;
    };

    Product.descriptions = function(id) {
      return Description.filterSortByOrder(id);
    };

    Product.activePhotos = function() {
      var id;
      if (id = this.record.id) {
        return this.photos(id);
      }
      return this.contains();
    };

    Product.inactive = function() {
      return this.findAllByAttribute('active', false);
    };

    Product.createJoin = function(items, target, callback) {
      var cb, ga, isValid, item, ret, valid;
      if (items == null) {
        items = [];
      }
      this.log('createJoin');
      if (!Array.isArray(items)) {
        items = [items];
      }
      if (!(items.length && target)) {
        return;
      }
      isValid = true;
      cb = function() {
        Category.trigger('change:collection', target);
        if (typeof callback === 'function') {
          return callback.call(this);
        }
      };
      ret = (function() {
        var i, len, ref, results;
        results = [];
        for (i = 0, len = items.length; i < len; i++) {
          item = items[i];
          if (item.deleted) {
            item.deleted = false;
            item.save();
          }
          ga = new CategoriesProduct({
            category_id: target.id,
            product_id: item.id,
            ignored: true,
            order: parseInt((ref = CategoriesProduct.products(target.id).last()) != null ? ref.order : void 0) + 1 || 0
          });
          valid = ga.save({
            validate: true,
            ajax: false
          });
          if (!valid) {
            results.push(isValid = valid);
          } else {
            results.push(void 0);
          }
        }
        return results;
      })();
      if (isValid) {
        target.save({
          done: cb
        });
      } else {
        Spine.trigger('refresh:all');
      }
      return ret;
    };

    Product.destroyJoin = function(items, target, callback) {
      var cb, e, ga, gas, i, item, len;
      if (items == null) {
        items = [];
      }
      if (!Array.isArray(items)) {
        items = [items];
      }
      cb = function() {};
      if (!target) {
        return;
      }
      for (i = 0, len = items.length; i < len; i++) {
        item = items[i];
        gas = CategoriesProduct.filter(item.id, {
          associationForeignKey: 'product_id'
        });
        ga = CategoriesProduct.productExists(item.id, target.id);
        try {
          if (ga != null) {
            ga.destroy({
              done: cb
            });
          }
        } catch (error) {
          e = error;
          alert(e);
        }
      }
      return Category.trigger('change:collection', target);
    };

    Product.throwWarning = function() {};

    Product.categorySelectionList = function() {
      var productId;
      if (Category.record && Product.record) {
        productId = Category.selectionList()[0];
        return Product.selectionList(productId);
      } else {
        return [];
      }
    };

    Product.details = function() {
      if (Product.record) {
        return Product.record.details();
      }
      return $().extend(Product.defaultDetails, {
        iCount: Photo.count(),
        sCount: Product.selectionList().length
      });
    };

    Product.findEmpties = function() {
      var ret;
      ret = [];
      this.each(function(item) {
        if (!item.photos().length) {
          return ret.push(item);
        }
      });
      return ret;
    };

    Product.findRelated_ = function(joins, joinid) {
      var i, join, len, record, results;
      if (joins == null) {
        joins = [];
      }
      if (joinid == null) {
        joinid = '';
      }
      results = [];
      for (i = 0, len = joins.length; i < len; i++) {
        join = joins[i];
        if ((record = this.find(join[joinid])) && !!(typeof (record.order = join.order) && !!typeof (record.ignored = join.ignored))) {
          results.push(record);
        }
      }
      return results;
    };

    Product.findRelated = function(joins, joinid) {
      var i, join, len, record, res;
      if (joins == null) {
        joins = [];
      }
      if (joinid == null) {
        joinid = '';
      }
      res = [];
      for (i = 0, len = joins.length; i < len; i++) {
        join = joins[i];
        if (record = this.find(join[joinid])) {
          res.push(record.silentUpdate({
            'order': join.order,
            'ignored': join.ignored
          }));
        }
      }
      return res;
    };

    Product.unusedProducts = function() {
      return this.filter(true, {
        func: 'selectUnused'
      });
    };

    Product.isUsedProduct = function(id) {
      var cp, ret;
      ret = (cp = CategoriesProduct.findByAttribute('product_id', id));
      return !!ret;
    };

    Product.validUrl = function(me) {
      if (/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/.test(me.link)) {
        return true;
      }
      return false;
    };

    Product.renderBuffer = function(buffer) {
      var category, filterOptions, items;
      filterOptions = {
        model: 'Category',
        sort: 'sortByOrder'
      };
      if ((category = Category.record) || buffer) {
        items = Category.products(category.id, filterOptions);
      } else {
        items = Product.filter(true);
      }
      return this.buffer = items;
    };

    Product.prototype.init = function(instance) {
      var id, s;
      if (!(id = instance.id)) {
        return;
      }
      s = new Object();
      s[id] = [];
      return this.constructor.selection.push(s);
    };

    Product.prototype.parent = function() {
      return this.constructor.parent;
    };

    Product.prototype.isIgnored = function(cid) {
      if (cid == null) {
        cid = '';
      }
      return CategoriesProduct.isActiveProduct(cid, this.id);
    };

    Product.prototype.selChange = function(list) {};

    Product.prototype.createJoin = function(target) {
      return this.constructor.createJoin([this], target);
    };

    Product.prototype.destroyJoin = function(target) {
      return this.constructor.destroyJoin([this], target);
    };

    Product.prototype.contains = function(inc) {
      if (inc == null) {
        inc = 0;
      }
      return this.constructor.contains(this.id).length + inc;
    };

    Product.prototype.photos = function(max) {
      return this.constructor.photos(this.id, max);
    };

    Product.prototype.descriptions = function() {
      return this.constructor.descriptions(this.id);
    };

    Product.prototype.validUrl = function() {
      return this.constructor.validUrl(this);
    };

    Product.prototype.details = function() {
      return $().extend(this.defaultDetails, {
        iCount: this.photos().length,
        sCount: Product.selectionList().length,
        product: Product.record,
        category: Category.record
      });
    };

    Product.prototype.select_ = function(joinTableItems) {
      var i, len, record, ret;
      if (this.deleted) {
        return false;
      }
      ret = [];
      for (i = 0, len = joinTableItems.length; i < len; i++) {
        record = joinTableItems[i];
        if (record.product_id === this.id) {
          ret.push(record);
        }
      }
      return !!ret.length;
    };

    Product.prototype.select = function() {
      if (!this.deleted) {
        return true;
      }
    };

    Product.prototype.selectDeleted = function() {
      if (this.deleted) {
        return true;
      }
    };

    Product.prototype.selectProduct = function(id) {
      if (this.id === id) {
        return true;
      }
    };

    Product.prototype.selectUnused = function(id) {
      if (!CategoriesProduct.findByAttribute('product_id', this.id)) {
        return true;
      }
    };

    return Product;

  })(Spine.Model);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Model.Product = Product;
  }

}).call(this);
 },"models/products_photo": function(exports, require, module) { (function() {
  var $, CategoriesProduct, Category, Extender, Filter, Model, ProductsPhoto, Selector, Spine,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Model = Spine.Model;

  Filter = require("extensions/filter");

  Category = require('models/category');

  Model.Product = require('models/product');

  Model.Photo = require('models/photo');

  CategoriesProduct = require('models/categories_product');

  Selector = require("extensions/selector");

  Extender = require("extensions/model_extender");

  require("spine/lib/ajax");

  ProductsPhoto = (function(superClass) {
    extend(ProductsPhoto, superClass);

    function ProductsPhoto() {
      this.allProductPhotos = bind(this.allProductPhotos, this);
      return ProductsPhoto.__super__.constructor.apply(this, arguments);
    }

    ProductsPhoto.configure("ProductsPhoto", 'id', 'cid', 'product_id', 'photo_id', 'order');

    ProductsPhoto.extend(Model.Ajax);

    ProductsPhoto.extend(Filter);

    ProductsPhoto.extend(Selector);

    ProductsPhoto.extend(Extender);

    ProductsPhoto.url = 'products_photos';

    ProductsPhoto.productPhotoExists = function(pid, aid) {
      var aps;
      aps = this.filter('placeholder', {
        photo_id: pid,
        product_id: aid,
        func: 'selectUnique'
      });
      return aps[0] || false;
    };

    ProductsPhoto.productsPhotos = function(aid) {
      var aps;
      return aps = this.filter(aid, {
        associationForeignKey: 'product_id'
      });
    };

    ProductsPhoto.productPhotos = function(aid) {
      var ret;
      ret = [];
      this.each(function(item) {
        var photo;
        if (item['product_id'] === aid && (photo = Photo.find(item['photo_id']))) {
          return ret.push(photo);
        }
      });
      return ret;
    };

    ProductsPhoto.fromPhotoId = function(photo_id) {
      return (this.filter(photo_id, {
        func: 'selectByPhotoId'
      }))[0] || [];
    };

    ProductsPhoto.photos = function(aid, max) {
      var func;
      return func = Photo.filterRelated(aid, {
        model: 'Product',
        sort: 'sortByOrder'
      }).slice(0, max);
    };

    ProductsPhoto.products = function(pid, max) {
      return Product.filterRelated(pid, {
        model: 'Photo',
        sort: 'sortByOrder'
      }).slice(0, max);
    };

    ProductsPhoto.c = 0;

    ProductsPhoto.prototype.validate = function() {
      var ap, valid_1, valid_2;
      valid_1 = (Product.find(this.product_id)) && (Photo.find(this.photo_id));
      valid_2 = !(ap = this.constructor.productPhotoExists(this.photo_id, this.product_id) && this.isNew());
      if (!valid_1) {
        return 'Ungültige Aktion!';
      }
      if (!valid_2) {
        return 'Produkt existiert bereits in dieser Kategorie';
      }
      return false;
    };

    ProductsPhoto.prototype.products = function() {
      return this.constructor.products(this.photo_id);
    };

    ProductsPhoto.prototype.photos = function(id) {
      return this.constructor.photos(this.product_id);
    };

    ProductsPhoto.prototype.allProductPhotos = function() {
      var ap, aps, i, len, photos, product;
      product = Product.record;
      if (!product) {
        return;
      }
      photos = [];
      aps = ProductsPhoto.filter(product.id, {
        associationForeignKey: 'product_id'
      });
      for (i = 0, len = aps.length; i < len; i++) {
        ap = aps[i];
        if (Photo.exists(ap.product_id)) {
          photos.push(Photo.find(ap.product_id));
        }
      }
      return photos;
    };

    ProductsPhoto.prototype.select = function(id, options) {
      if (this[options.associationForeignKey] === id) {
        return true;
      }
    };

    ProductsPhoto.prototype.selectByPhotoId = function(id) {
      if (this.photo_id === id && this.product_id === Product.record.id) {
        return true;
      }
    };

    ProductsPhoto.prototype.selectUnique = function(empty, options) {
      if (this.photo_id === options.photo_id && this.product_id === options.product_id) {
        return true;
      }
    };

    return ProductsPhoto;

  })(Spine.Model);

  module.exports = Model.ProductsPhoto = ProductsPhoto;

}).call(this);
 },"models/products_trash": function(exports, require, module) { (function() {
  var $, Extender, Model, ProductsTrash, Spine,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Model = Spine.Model;

  Extender = require("extensions/model_extender");

  ProductsTrash = (function(superClass) {
    extend(ProductsTrash, superClass);

    function ProductsTrash() {
      return ProductsTrash.__super__.constructor.apply(this, arguments);
    }

    ProductsTrash.configure("ProductsTrash", 'id', 'location');

    ProductsTrash.extend(Extender);

    ProductsTrash.childType = 'Products';

    ProductsTrash.prototype.init = function(instance) {
      var id;
      if (!(id = instance.id)) {

      }
    };

    return ProductsTrash;

  })(Spine.Model);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Model.ProductsTrash = ProductsTrash;
  }

}).call(this);
 },"models/recent": function(exports, require, module) { (function() {
  var $, Model, Photo, Recent, Spine, User,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Model = Spine.Model;

  Photo = require("models/photo");

  User = require("models/user");

  require('spine/lib/local');

  Recent = (function(superClass) {
    extend(Recent, superClass);

    function Recent() {
      return Recent.__super__.constructor.apply(this, arguments);
    }

    Recent.configure('Recent', 'id');

    Recent.extend(Model.Local);

    Recent.logout = function() {
      this.destroyAll();
      return this.redirect('logout');
    };

    Recent.redirect = function(url) {
      return location.href = base_url + url;
    };

    Recent.prototype.init = function(instance) {
      if (!instance) {

      }
    };

    Recent.loadRecent = function(max, callback) {
      if (max == null) {
        max = 100;
      }
      return $.ajax({
        contentType: 'application/json',
        dataType: 'json',
        processData: false,
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        },
        url: base_url + 'photos/recent/' + max,
        type: 'GET',
        success: function(json) {
          return callback.call(this, json);
        },
        error: this.proxy(this.error)
      });
    };

    Recent.success = function(json) {};

    Recent.error = function(xhr) {
      this.logout();
      return this.redirect('users/login');
    };

    return Recent;

  })(Spine.Model);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Model.Recent = Recent;
  }

}).call(this);
 },"models/root": function(exports, require, module) { (function() {
  var $, Category, Extender, Filter, Model, Root, Spine,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Model = Spine.Model;

  Category = require('models/category');

  Filter = require("extensions/filter");

  Extender = require("extensions/model_extender");

  Root = (function(superClass) {
    extend(Root, superClass);

    function Root() {
      return Root.__super__.constructor.apply(this, arguments);
    }

    Root.configure("Root", 'id');

    Root.extend(Extender);

    Root.childType = 'Category';

    Root.contains = function(id) {
      if (id == null) {
        id = this.record.id;
      }
      return Model[this.childType].all();
    };

    Root.prototype.init = function(instance) {};

    Root.prototype.contains = function(inc) {
      if (inc == null) {
        inc = 0;
      }
      return this.constructor.contains(this.id).length + inc;
    };

    return Root;

  })(Spine.Model);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Model.Root = Root;
  }

}).call(this);
 },"models/settings": function(exports, require, module) { (function() {
  var $, Extender, Log, Model, Settings, Spine,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require('spine');

  $ = Spine.$;

  Model = Spine.Model;

  Log = Spine.Log;

  Extender = require("extensions/model_extender");

  require('spine/lib/local');

  Settings = (function(superClass) {
    extend(Settings, superClass);

    function Settings() {
      return Settings.__super__.constructor.apply(this, arguments);
    }

    Settings.configure('Settings', 'hidden', 'agreed', 'sidebaropened', 'user_id', 'autoupload', 'hash', 'previousHash', 'intro');

    Settings.extend(Model.Local);

    Settings.extend(Extender);

    Settings.include(Log);

    Settings.prototype.init = function(instance) {};

    Settings.loadSettings = function() {
      var setting, user;
      if (user = User.first()) {
        setting = this.findByAttribute('user_id', user.id);
      } else {
        setting = this.first();
      }
      return setting;
    };

    Settings.isAutoUpload = function() {
      var setting;
      setting = this.loadSettings();
      return !!(setting != null ? setting.autoupload : void 0);
    };

    Settings.isIntroQuatsch = function() {
      var setting;
      setting = this.loadSettings();
      return !!(setting != null ? setting.intro : void 0);
    };

    Settings.findLogoSettings = function() {};

    return Settings;

  })(Spine.Model);

  module.exports = Model.Settings = Settings;

}).call(this);
 },"models/toolbar": function(exports, require, module) { (function() {
  var $, Category, Clipboard, Filter, Model, Product, Settings, Spine, Toolbar,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty,
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  Spine = require("spine");

  $ = Spine.$;

  Model = Spine.Model;

  Category = require('models/category');

  Product = require('models/product');

  Clipboard = require('models/clipboard');

  Settings = require('models/settings');

  Filter = require("extensions/filter");

  Toolbar = (function(superClass) {
    extend(Toolbar, superClass);

    function Toolbar() {
      return Toolbar.__super__.constructor.apply(this, arguments);
    }

    Toolbar.configure('Toolbar', 'id', 'name', 'content');

    Toolbar.extend(Filter);

    Toolbar.load = function() {
      return this.refresh(this.tools(), {
        clear: true
      });
    };

    Toolbar.tools = function() {
      var key, ref, results, val;
      ref = this.data;
      results = [];
      for (key in ref) {
        val = ref[key];
        results.push(val);
      }
      return results;
    };

    Toolbar.dropdownGroups = {
      group_help: {
        name: 'Hilfe',
        icon: 'question-sign',
        content: [
          {
            name: 'Tastaturbefehle',
            klass: 'opt-Help ',
            disabled: function() {
              return true;
            }
          }, {
            name: 'Über',
            klass: 'opt-Version '
          }
        ]
      },
      group0: {
        name: 'Ansicht',
        content: [
          {
            name: function() {
              return 'Übersicht';
            },
            klass: 'opt-ShowOverview',
            icon: 'book',
            disabled: function() {
              return false;
            }
          }, {
            devider: true
          }, {
            name: function() {
              return 'Kategorien';
            },
            klass: 'opt-ShowCategories',
            icon: 'book',
            disabled: function() {
              return false;
            }
          }, {
            name: function() {
              return 'Produkte-Katalog';
            },
            klass: 'opt-ShowAllProducts',
            icon: 'book',
            disabled: function() {
              return false;
            }
          }, {
            name: function() {
              return 'Foto-Katalog';
            },
            klass: 'opt-ShowAllPhotos',
            icon: 'book',
            disabled: function() {
              return false;
            }
          }, {
            devider: true
          }, {
            name: 'Vollbild Aus/Ein',
            klass: 'opt-FullScreen',
            icon: 'fullscreen',
            iconcolor: 'black'
          }, {
            name: 'Seitenleiste Ein/Aus',
            klass: 'opt-Sidebar',
            shortcut: '->|'
          }
        ]
      },
      group1: {
        name: 'Kategorie',
        content: [
          {
            name: 'Neu',
            icon: 'asterisk',
            klass: 'opt-CreateCategory'
          }, {
            devider: true
          }, {
            name: 'Bearbeiten',
            icon: 'pencil',
            klass: 'opt-Category',
            disabled: function() {}
          }, {
            name: 'Löschen',
            icon: 'trash',
            klass: 'opt-DeleteCategory',
            disabled: function() {
              var base, ret;
              return ret = !(typeof (base = Category.record).isValid === "function" ? base.isValid() : void 0);
            },
            shortcut: '<-'
          }, {
            devider: true
          }, {
            name: function() {
              return 'Kategorien';
            },
            klass: 'opt-ShowCategories',
            icon: 'book',
            disabled: function() {
              return false;
            }
          }
        ]
      },
      group2: {
        name: 'Produkt',
        content: [
          {
            name: 'Neu',
            icon: 'asterisk',
            klass: 'opt-CreateProduct'
          }, {
            name: 'Aus Katalog hinzufügen',
            icon: 'plus',
            klass: 'opt-AddProducts',
            disabled: function() {
              return !Category.record;
            }
          }, {
            name: 'Dupizieren',
            icon: 'certificate',
            klass: 'opt-DuplicateProducts hide',
            disabled: function() {
              return !Product.record;
            }
          }, {
            devider: true
          }, {
            name: 'Bearbeiten',
            icon: 'pencil',
            klass: 'opt-Product',
            disabled: function() {}
          }, {
            name: function() {
              var len, model, modelName, type;
              len = 0;
              model = App.showView.current.model;
              modelName = App.showView.current.model.className;
              if (modelName === 'ProductsTrash') {
                type = 'Löschen';
                len = model.selectionList().length;
              } else {
                type = 'Entfernen';
                len = Category.selectionList().length;
              }
              return type + ' (' + len + ')';
            },
            icon: 'trash',
            klass: 'opt-DeleteProduct',
            disabled: function() {
              var len, model, modelName;
              len = 0;
              model = App.showView.current.model;
              modelName = App.showView.current.model.className;
              if (modelName === 'ProductsTrash') {
                len = model.selectionList().length;
              } else {
                len = Category.selectionList().length;
              }
              return !len;
            },
            shortcut: '<-'
          }, {
            devider: true
          }, {
            name: function() {
              var a, b;
              a = 'Veröffentlichen Ein/Aus';
              b = ' (' + Category.selectionList().length + ')';
              if (Category.record) {
                return a + b;
              } else {
                return a;
              }
            },
            icon: 'eye',
            klass: 'opt-ToggleVisible',
            shortcut: 'Ctrl-M',
            disabled: function() {
              return !Category.selectionList().length || !Category.record;
            }
          }, {
            devider: true
          }, {
            name: 'Kopieren',
            icon: '',
            klass: 'opt-CopyProduct',
            disabled: function() {
              return !Category.selectionList().length;
            },
            shortcut: 'Ctrl+C'
          }, {
            name: 'Auschneiden',
            icon: '',
            klass: 'opt-CutProduct',
            disabled: function() {
              return !Category.selectionList().length;
            },
            shortcut: 'Ctrl+X'
          }, {
            name: 'Einfügen',
            icon: '',
            klass: 'opt-PasteProduct',
            disabled: function() {
              return !Clipboard.findAllByAttribute('type', 'copy').length || !Category.record;
            },
            shortcut: 'Ctrl+V'
          }, {
            devider: true
          }, {
            name: function() {
              return 'Produkte-Katalog';
            },
            klass: 'opt-ShowAllProducts',
            icon: 'book',
            disabled: function() {
              return false;
            }
          }, {
            name: function() {
              return 'zeige Produkt des Tages';
            },
            klass: 'opt-ShowFavorite',
            icon: 'star',
            disabled: function() {
              var prod;
              return !(prod = Product.findByAttribute('favorite', true));
            }
          }, {
            devider: true
          }, {
            name: function() {
              return 'Papierkorb';
            },
            klass: 'opt-ShowProductsTrash',
            icon: 'trash',
            disabled: function() {
              return false;
            }
          }
        ]
      },
      group3: {
        name: 'Foto',
        content: [
          {
            name: 'Upload',
            icon: 'upload',
            klass: 'opt-UploadDialogue'
          }, {
            name: 'Foto aus Katalog hinzufügen',
            icon: 'plus',
            klass: 'opt-AddPhotos',
            disabled: function() {
              return !Product.record;
            }
          }, {
            devider: true
          }, {
            name: function() {
              return 'Rotieren (' + Product.selectionList().length + ')';
            },
            header: true,
            disabled: true
          }, {
            name: 'Im Uhrzeiger',
            klass: 'opt-Rotate-cw',
            shortcut: 'Ctrl+R',
            icon: 'circle-arrow-right',
            disabled: function() {
              return !Product.selectionList().length;
            }
          }, {
            name: 'Gegen Uhrzeiger',
            klass: 'opt-Rotate-ccw',
            icon: 'circle-arrow-left',
            disabled: function() {
              return !Product.selectionList().length;
            }
          }, {
            devider: true
          }, {
            name: 'Bearbeiten',
            icon: 'pencil',
            klass: 'opt-Photo',
            disabled: function() {}
          }, {
            name: function() {
              var len, model, modelName, type;
              len = 0;
              model = App.showView.current.model;
              modelName = App.showView.current.model.className;
              if (modelName === 'PhotosTrash') {
                type = 'Löschen';
                len = model.selectionList().length;
              } else {
                type = 'Entfernen';
                len = Product.selectionList().length;
              }
              return type + ' (' + len + ')';
            },
            shortcut: '<-',
            icon: 'trash',
            klass: 'opt-DeletePhoto',
            disabled: function() {
              var len, model, modelName;
              len = 0;
              model = App.showView.current.model;
              modelName = App.showView.current.model.className;
              if (modelName === 'PhotosTrash') {
                len = model.selectionList().length;
              } else {
                len = Product.selectionList().length;
              }
              return !len;
            }
          }, {
            devider: true
          }, {
            name: 'Kopieren',
            icon: '',
            klass: 'opt-CopyPhoto',
            disabled: function() {
              return !Product.selectionList().length && App.showView.current.model.className.toLowerCase().indexOf('trash') >= 0;
            },
            shortcut: 'Ctrl+C'
          }, {
            name: 'Ausschneiden',
            icon: '',
            klass: 'opt-CutPhoto',
            disabled: function() {
              return !Product.selectionList().length && App.showView.current.model.className.toLowerCase().indexOf('trash') >= 0;
            },
            shortcut: 'Ctrl+X'
          }, {
            name: 'Einfügen',
            icon: '',
            klass: 'opt-PastePhoto',
            disabled: function() {
              return !Clipboard.findAllByAttribute('type', 'copy').length || !Product.record && App.showView.current.model.className.toLowerCase().indexOf('trash') >= 0;
            },
            shortcut: 'Ctrl+V'
          }, {
            devider: true
          }, {
            name: function() {
              return 'Foto-Katalog';
            },
            klass: 'opt-ShowAllPhotos',
            icon: 'book',
            disabled: function() {
              return false;
            }
          }, {
            devider: true
          }, {
            name: function() {
              return 'Papierkorb';
            },
            klass: 'opt-ShowPhotosTrash',
            icon: 'trash',
            disabled: function() {
              return false;
            }
          }, {
            devider: true
          }, {
            name: 'Auto Upload',
            icon: function() {
              if (Model.Settings.isAutoUpload()) {
                return 'ok';
              } else {
                return '';
              }
            },
            klass: 'opt-AutoUpload',
            disabled: function() {
              return true;
            }
          }
        ]
      },
      group31: {
        name: function() {
          return 'Extras';
        },
        content: [
          {
            name: function() {
              return 'Datensicherung anlegen';
            },
            klass: 'opt-MysqlDump',
            icon: 'floppy-open',
            disabled: function() {
              return false;
            }
          }, {
            name: 'Gesicherte Daten wiederherstellen',
            klass: 'opt-MysqlRestore',
            icon: 'floppy-save',
            disabled: function() {
              return false;
            }
          }, {
            name: 'Intro-Quatsch',
            klass: 'opt-IntroQuatsch',
            icon: function() {
              if (Model.Settings.isIntroQuatsch()) {
                return 'ok';
              } else {
                return '';
              }
            },
            disabled: function() {
              return true;
            }
          }
        ]
      },
      group4: {
        name: function() {
          var len;
          len = App.activePhotos().length;
          return 'Slideshow  <span class="badge">' + len + '</span>';
        },
        content: [
          {
            name: function() {
              return 'Preview';
            },
            klass: 'opt-SlideshowPreview',
            icon: 'picture',
            disabled: function() {
              return !App.activePhotos().length;
            }
          }, {
            name: 'Start',
            klass: 'opt-SlideshowPlay',
            shortcut: 'Space',
            icon: 'play',
            dataToggle: 'modal-category',
            disabled: function() {
              return !App.activePhotos().length;
            }
          }
        ]
      },
      group5: {
        name: function() {
          var len;
          len = App.activePhotos().length;
          return 'Slideshow  <span class="badge">' + len + '</span>';
        },
        content: [
          {
            name: function() {
              return 'Preview';
            },
            klass: 'opt-SlideshowPreview',
            icon: 'picture',
            disabled: function() {
              return !App.activePhotos().length;
            }
          }, {
            name: 'Start',
            klass: 'opt-SlideshowPlay',
            shortcut: 'Space',
            icon: 'play',
            dataToggle: 'modal-category',
            disabled: function() {
              return !App.activePhotos().length;
            }
          }
        ]
      }
    };

    Toolbar.data = {
      package_00: {
        name: 'Empty',
        content: []
      },
      package_01: {
        name: 'Default',
        content: [
          {
            dropdown: true,
            itemGroup: Toolbar.dropdownGroups.group_help
          }, {
            dropdown: true,
            itemGroup: Toolbar.dropdownGroups.group0
          }, {
            dropdown: true,
            itemGroup: Toolbar.dropdownGroups.group1
          }, {
            dropdown: true,
            itemGroup: Toolbar.dropdownGroups.group2
          }, {
            dropdown: true,
            itemGroup: Toolbar.dropdownGroups.group3
          }, {
            dropdown: true,
            itemGroup: Toolbar.dropdownGroups.group31
          }
        ]
      },
      package_02: {
        name: 'Close',
        content: [
          {
            name: '&times;',
            klass: 'opt opt-Previous',
            innerklass: 'close white',
            type: 'button'
          }
        ]
      },
      package_10: {
        name: 'Back_',
        locked: true,
        content: [
          {
            name: '&times;',
            klass: 'opt-Previous',
            type: 'span',
            icon: 'arrow-left',
            outerstyle: 'float: right;'
          }
        ]
      },
      package_11: {
        name: 'Chromeless',
        locked: true,
        content: [
          {
            name: 'Chromeless',
            klass: function() {
              return 'opt-FullScreen';
            },
            icon: '',
            dataToggle: 'button',
            outerstyle: ''
          }, {
            name: function() {
              return '';
            },
            klass: 'opt-SlideshowPlay',
            icon: 'play',
            iconcolor: 'white',
            disabled: function() {
              return !App.activePhotos().length;
            }
          }
        ]
      },
      package_12: {
        name: 'Slider',
        content: [
          {
            name: '<span class="slider" style=""></span>',
            klass: 'opt-Thumbsize ',
            type: 'div',
            innerstyle: 'width: 190px; position: relative;'
          }
        ]
      },
      package_13: {
        name: 'SlideshowPackage',
        content: [
          {
            name: 'Fullscreen',
            klass: function() {
              return 'opt-FullScreen' + (App.showView.slideshowView.fullScreenEnabled() ? ' active' : '');
            },
            icon: 'fullscreen',
            dataToggle: 'button',
            outerstyle: ''
          }, {
            name: 'Start',
            klass: 'opt-SlideshowPlay',
            innerklass: 'symbol',
            icon: 'play',
            iconcolor: '',
            disabled: function() {
              return !App.activePhotos().length;
            }
          }, {
            name: '<span class="slider" style=""></span>',
            klass: 'opt-Thumbsize ',
            type: 'div',
            innerstyle: 'width: 190px; position: relative;'
          }
        ]
      },
      package_14: {
        name: 'FlickrRecent',
        content: [
          {
            name: function() {
              var details;
              details = App.flickrView.details('recent');
              return 'Recent Photos (' + details.from + '-' + details.to + ')';
            },
            klass: 'opt',
            innerklass: 'symbol',
            icon: 'picture',
            type: 'span'
          }, {
            name: '',
            klass: 'opt opt-Prev',
            icon: 'chevron-left',
            disabled: function() {}
          }, {
            name: '',
            klass: 'opt opt-Next',
            icon: 'chevron-right',
            disabled: function() {}
          }
        ]
      },
      package_15: {
        name: 'FlickrInter',
        content: [
          {
            name: function() {
              var details;
              details = App.flickrView.details('inter');
              return 'Interesting Stuff (' + details.from + '-' + details.to + ')';
            },
            icon: 'picture',
            klass: 'opt',
            type: 'span'
          }, {
            name: '',
            klass: 'opt opt-Prev',
            icon: 'chevron-left',
            disabled: function() {}
          }, {
            name: '',
            klass: 'opt opt-Next',
            icon: 'chevron-right',
            disabled: function() {}
          }
        ]
      },
      package_16: {
        name: 'Speichern',
        content: [
          {
            icon: 'arrow-left',
            klass: 'opt opt-Previous',
            type: 'span'
          }
        ]
      },
      package_17: {
        name: 'Trustami',
        content: [
          {
            name: '<span><button type="submit" class="btn left dark glyphicon glyphicon-chevron-up"></button><button type="submit" class="btn right dark glyphicon glyphicon-chevron-down"></button></span><input class="tmi" type="text" value=""></input>',
            klass: 'opt opt-SaveTrustami trustami-badge',
            type: 'span'
          }
        ]
      }
    };

    Toolbar.prototype.init = function(ins) {};

    Toolbar.prototype.select = function(list) {
      var ref;
      return ref = this.name, indexOf.call(list, ref) >= 0;
    };

    return Toolbar;

  })(Spine.Model);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Toolbar;
  }

}).call(this);
 },"models/user": function(exports, require, module) { (function() {
  var $, Clipboard, Extender, Flash, Log, Model, Settings, Spine, User,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Log = Spine.Log;

  Model = Spine.Model;

  Flash = require("models/flash");

  Settings = require("models/settings");

  Clipboard = require("models/clipboard");

  Extender = require("extensions/model_extender");

  require('spine/lib/local');

  User = (function(superClass) {
    extend(User, superClass);

    function User() {
      this.success = bind(this.success, this);
      return User.__super__.constructor.apply(this, arguments);
    }

    User.configure('User', 'id', 'username', 'name', 'tmi', 'groupname', 'sessionid', 'hash', 'redirect');

    User.extend(Extender);

    User.extend(Model.Local);

    User.include(Log);

    User.trace = true;

    User.ping = function() {
      var user;
      this.fetch();
      if (user = this.first()) {
        return user.confirm();
      } else {
        alert('Authorisierung fehlgeschlagen.\nBitte melden Sie sich erneut an.');
        return this.redirect('users/login');
      }
    };

    User.logout = function() {
      if (this.user != null) {
        this.user.logout();
      }
      this.destroyAll();
      Clipboard.destroyAll();
      return $(window).off();
    };

    User.test = function() {
      return alert('test');
    };

    User.redirect = function(url, hash) {
      if (url == null) {
        url = '';
      }
      if (hash == null) {
        hash = '';
      }
      return location.href = base_url + url + hash;
    };

    User.prototype.init = function(instance) {};

    User.prototype.logout = function() {
      return $.ajax({
        url: base_url + 'users/logout',
        data: JSON.stringify(this),
        type: 'POST',
        success: this.logoutRedirect,
        error: this.errorHandler
      });
    };

    User.prototype.logoutRedirect = function(json) {
      var flash;
      json = $.parseJSON(json);
      Flash.fetch();
      flash = Flash.first() || new Flash;
      flash.updateAttributes(json);
      return User.redirect('logout');
    };

    User.prototype.confirm = function() {
      return $.ajax({
        url: base_url + 'users/ping',
        data: JSON.stringify(this),
        type: 'POST',
        success: this.success,
        error: this.proxy(this.errorHandler)
      });
    };

    User.prototype.getTmi = function(callback) {
      return $.ajax({
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        },
        url: base_url + 'users/getTmi',
        type: 'GET',
        processData: false,
        success: function(json) {
          return callback.call(this, json);
        },
        error: this.proxy(this.errorHandler)
      });
    };

    User.prototype.setTmi = function(callback) {
      return $.ajax({
        url: base_url + 'users/setTmi',
        data: JSON.stringify(this),
        type: 'POST',
        success: callback,
        error: this.proxy(this.errorHandler)
      });
    };

    User.prototype.isValid = function(callback) {
      return $.ajax({
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        },
        url: base_url + 'users/isValid',
        type: 'GET',
        processData: false,
        success: function(json) {
          return callback.call(this, json);
        },
        error: this.proxy(this.errorHandler)
      });
    };

    User.prototype.success = function(json) {
      return this.constructor.trigger('pinger', this, $.parseJSON(json));
    };

    return User;

  })(Spine.Model);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Model.User = User;
  }

}).call(this);
 },"views/agb": function(exports, require, module) { module.exports = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<h3 class=\"h3\">I. Allgemeine Geschäftsbedingungen</h3><h3 class=\"h3\">§ 1 Grundlegende Bestimmungen</h3><p>(1) Die nachstehenden Geschäftsbedingungen gelten für alle Verträge, die Sie mit uns als Anbieter (Angela Lehmann) über die Internetseite www.ha-lehmann.at schließen. Soweit nicht anders vereinbart, wird der Einbeziehung gegebenenfalls von Ihnen verwendeter eigener Bedingungen widersprochen.</p><p>(2) Verbraucher im Sinne der nachstehenden Regelungen ist jede natürliche Person, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden kann. Unternehmer ist jede natürliche oder juristische Person oder eine rechtsfähige Personengesellschaft, die bei Abschluss eines Rechtsgeschäfts in Ausübung ihrer selbständigen beruflichen oder gewerblichen Tätigkeit handelt.</p><h3 class=\"h3\">§ 2 Zustandekommen des Vertrages</h3><p>(1) Gegenstand des Vertrages ist der Verkauf von Waren.</p><p>Unsere Angebote im Internet sind unverbindlich und kein verbindliches Angebot zum Abschluss eines Vertrages.</p><p>(2) Sie können ein verbindliches Kaufangebot (Bestellung) über das Online-Warenkorbsystem abgeben. Dabei werden die zum Kauf beabsichtigten Waren im „Warenkorb\" abgelegt. Über die entsprechende Schaltfläche in der Navigationsleiste können Sie den „Warenkorb\" aufrufen und dort jederzeit Änderungen vornehmen. Nach Aufrufen der Seite „Kasse\" und der Eingabe der persönlichen Daten sowie der Zahlungs- und Versandbedingungen werden abschließend nochmals alle Bestelldaten auf der Bestellübersichtsseite angezeigt. Soweit Sie das Bezahl-System \"amazon-payments\" durch Anklicken der im Shopsystem integrierten Schaltfläche \"Bezahlen über amazon\" nutzen, werden Sie auf die Log-In Seite von amazon.de weitergeleitet. Nach erfolgreicher Anmeldung werden Ihre bei amazon.de hinterlegten Versandadressen und Zahlungsarten angezeigt. Sie wählen Versandadresse und Zahlungsart aus und werden über die Schaltfläche \"weiter\" zurück in unseren Online-Shop geleitet. Vor Absenden der Bestellung haben Sie die Möglichkeit, hier sämtliche Angaben nochmals zu überprüfen, zu ändern (auch über die Funktion „zurück\" des Internetbrowsers) bzw. den Kauf abzubrechen. Mit dem Absenden der Bestellung über die Schaltfläche \"zahlungspflichtig bestellen\" geben Sie ein verbindliches Angebot bei uns ab. Sie erhalten zunächst eine automatische E-Mail über den Eingang Ihrer Bestellung, die noch nicht zum Vertragsschluss führt. Bei Zahlung über \"amazon payments\" erhalten Sie diese Bestätigungs-E-Mail von amazon.de.</p><p>(3) Die Annahme des Angebots (und damit der Vertragsabschluss) erfolgt innerhalb von 2 Tagen durchBestätigung in Textform (z.B. E-Mail), in welcher Ihnen die Ausführung der Bestellung oder Auslieferung der Ware bestätigt wird (Auftragsbestätigung). Soweit Sie das Bezahl-System \"amazon-payments\" gewählt haben, erfolgt die Angebotsannahme (Vertragsschluss) innerhalb von 2 Tagen durch Bestätigung per E-Mail seitens amazon.de, in welcher Ihnen die Auslieferung der Ware mitgeteilt wird. Sollten Sie keine entsprechende Nachricht erhalten haben, sind Sie nicht mehr an Ihre Bestellung gebunden. Gegebenenfalls bereits erbrachte Leistungen werden in diesem Fall unverzüglich zurückerstattet.</p><p>(4) Die Abwicklung der Bestellung und Übermittlung aller im Zusammenhang mit dem Vertragsschlusserforderlichen Informationen erfolgt per E-Mail zum Teil automatisiert. Sie haben deshalb sicherzustellen, dass die von Ihnen bei uns hinterlegte E-Mail-Adresse zutreffend ist, der Empfang der E-Mails technisch sichergestellt und insbesondere nicht durch SPAM-Filter verhindert wird.</p><h3 class=\"h3\">§ 3 Zurückbehaltungsrecht, Eigentumsvorbehalt</h3><p>(1) Ein Zurückbehaltungsrecht können Sie nur ausüben, soweit es sich um Forderungen aus dem selben Vertragsverhältnis handelt.</p><p>(2) Die Ware bleibt bis zur vollständigen Zahlung des Kaufpreises unser Eigentum.</p><h3 class=\"h3\">§ 4 Haftung</h3><p>(1) Wir haften jeweils uneingeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit. Weiter haften wir ohne Einschränkung in allen Fällen des Vorsatzes und grober Fahrlässigkeit, bei arglistigem Verschweigen eines Mangels, bei Übernahme der Garantie für die Beschaffenheit des Kaufgegenstandes und in allen anderen gesetzlich geregelten Fällen.</p><p>(2) Die Haftung für Mängel im Rahmen der gesetzlichen Gewährleistung richtet sich nach der entsprechenden Regelung in unseren Kundeninformationen (Teil II).</p><p>(3) Sofern wesentliche Vertragspflichten betroffen sind, ist unsere Haftung bei leichter Fahrlässigkeit auf den vertragstypischen, vorhersehbaren Schaden beschränkt. Wesentliche Vertragspflichten sind wesentliche Pflichten, die sich aus der Natur des Vertrages ergeben und deren Verletzung die Erreichung des Vertragszweckes gefährden würde sowie Pflichten, die der Vertrag uns nach seinem Inhalt zur Erreichung des Vertragszwecks auferlegt, deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst möglich machen und auf deren Einhaltung Sie regelmäßig vertrauen dürfen.</p><p>(4) Bei der Verletzung unwesentlicher Vertragspflichten ist die Haftung bei leicht fahrlässigen Pflichtverletzungen ausgeschlossen.</p><p>(5) Die Datenkommunikation über das Internet kann nach dem derzeitigen Stand der Technik nicht fehlerfrei und/oder jederzeit verfügbar gewährleistet werden. Wir haften insoweit weder für die ständige noch ununterbrochene Verfügbarkeit der Webseite und der dort angebotenen Dienstleistung.</p><h3 class=\"h3\">§ 5 Rechtswahl</h3><p>(1) Es gilt deutsches Recht. Bei Verbrauchern gilt diese Rechtswahl nur, soweit hierdurch der durch zwingende Bestimmungen des Rechts des Staates des gewöhnlichen Aufenthaltes des Verbrauchers gewährte Schutz nicht entzogen wird (Günstigkeitsprinzip).</p><p>(2) Die Bestimmungen des UN-Kaufrechts finden ausdrücklich keine Anwendung.</p><h3 class=\"h3\">§ 6 Jugendschutz</h3><p>(1) Beim Verkauf von Ware, die den Regelungen des Jugendschutzgesetzes unterfällt, gehen wir nur Vertragsbeziehungen mit Kunden ein, die das gesetzlich vorgeschriebene Mindestalter erreicht haben. Auf bestehende Altersbeschränkungen wird in der jeweiligen Artikelbeschreibung hingewiesen.</p><p>(2) Sie versichern mit Absenden Ihrer Bestellung, das gesetzlich vorgeschriebene Mindestalter erreicht zu haben und dass Ihre Angaben bezüglich Ihres Namens und Ihrer Adresse richtig sind. Sie sind verpflichtet, dafür Sorge zu tragen, dass nur Sie selbst oder solche von Ihnen zur Entgegennahme der Lieferung ermächtigte Personen, die das gesetzlich vorgeschriebene Mindestalter erreicht haben, die Ware in Empfang nehmen.</p><p>(3) Soweit wir aufgrund der gesetzlichen Bestimmungen verpflichtet sind, eine Alterskontrolle vorzunehmen,weisen wir den mit der Lieferung beauftragten Logistikdienstleister an, die Lieferung nur an Personen zu übergeben, die das gesetzlich vorgeschriebene Mindestalter erreicht haben, und sich im Zweifelsfall den Personalausweis der die Ware in Empfang nehmenden Person zur Alterskontrolle vorzeigen zu lassen.</p><p>(4) Soweit wir über das gesetzlich vorgeschriebene Mindestalter hinausgehend in der jeweiligen Artikelbeschreibung ausweisen, dass Sie für den Kauf der Ware das 18. Lebensjahr vollendet haben müssen, gelten vorstehende Absätze 1-3 mit der Maßgabe, dass anstelle des gesetzlich vorgeschriebenen Mindestalters Volljährigkeit vorliegen muss.</p><h3 class=\"h3\">II. Kundeninformationen</h3><h3 class=\"h3\">1. Identität des Verkäufers</h3><p>Angela Lehmann</p><p>Dornachgasse 15</p><p>6850 Dornbirn</p><p>Österreich</p><p>Telefon: 00436641306372</p><p>E-Mail: ha-lehmann@gmx.at</p><p></p><p>Die Europäische Kommission stellt eine Plattform für die außergerichtliche Online-Streitbeilegung (OS-Plattform) bereit, aufrufbar unter http://ec.europa.eu/odr.</p><h3 class=\"h3\">2. Informationen zum Zustandekommen des Vertrages</h3><p>Die technischen Schritte zum Vertragsschluss, der Vertragsschluss selbst und die Korrekturmöglichkeiten erfolgen nach Maßgabe des § 2 unserer Allgemeinen Geschäftsbedingungen (Teil I.).</p><h3 class=\"h3\">3. Vertragssprache, Vertragstextspeicherung</h3><p>3.1. Vertragssprache ist deutsch.</p><p>3.2. Der vollständige Vertragstext wird von uns nicht gespeichert. Vor Absenden der Bestellung über das Online Warenkorbsystem  können die Vertragsdaten über die Druckfunktion des Browsers ausgedruckt oder elektronisch gesichert werden. Nach Zugang der Bestellung bei uns werden die Bestelldaten, die gesetzlich vorgeschriebenen Informationen bei Fernabsatzverträgen und die Allgemeinen Geschäftsbedingungen nochmals per E-Mail an Sie übersandt.</p><h3 class=\"h3\">4. Wesentliche Merkmale der Ware oder Dienstleistung</h3><p>Die wesentlichen Merkmale der Ware und/oder Dienstleistung finden sich im jeweiligen Angebot.</p><h3 class=\"h3\">5. Preise und Zahlungsmodalitäten</h3><p>5.1. Die in den jeweiligen Angeboten angeführten Preise sowie die Versandkosten stellen Gesamtpreise dar. Sie beinhalten alle Preisbestandteile einschließlich aller anfallenden Steuern.</p><p>5.2. Die anfallenden Versandkosten sind nicht im Kaufpreis enthalten. Sie sind über eine entsprechend bezeichnete Schaltfläche auf unserer Internetpräsenz oder im jeweiligen Angebot aufrufbar, werden im Laufe des Bestellvorganges gesondert ausgewiesen und sind von Ihnen zusätzlich zu tragen, soweit nicht die versandkostenfreie Lieferung zugesagt ist.</p><p>5.3. Die Ihnen zur Verfügung stehenden Zahlungsarten sind unter einer entsprechend bezeichneten Schaltfläche auf unserer Internetpräsenz oder im jeweiligen Angebot ausgewiesen.</p><p>5.4. Soweit bei den einzelnen Zahlungsarten nicht anders angegeben, sind die Zahlungsansprüche aus dem geschlossenen Vertrag sofort zur Zahlung fällig.</p><h3 class=\"h3\">6. Lieferbedingungen</h3><p>6.1. Die Lieferbedingungen, der Liefertermin sowie gegebenenfalls bestehende Lieferbeschränkungen finden sich unter einer entsprechend bezeichneten Schaltfläche auf unserer Internetpräsenz oder im jeweiligen Angebot.</p><p>6.2. Soweit Sie Verbraucher sind ist gesetzlich geregelt, dass die Gefahr des zufälligen Untergangs und der zufälligen Verschlechterung der verkauften Sache während der Versendung erst mit der Übergabe der Ware an Sie übergeht, unabhängig davon, ob die Versendung versichert oder unversichert erfolgt. Dies gilt nicht, wenn Sie eigenständig ein nicht vom Unternehmer benanntes Transportunternehmen oder eine sonst zur Ausführung der Versendung bestimmte Person beauftragt haben. </p><h3 class=\"h3\">7. Gesetzliches Mängelhaftungsrecht</h3><p>7.1. Es bestehen die gesetzlichen Mängelhaftungsrechte.</p><p>7.2. Als Verbraucher werden Sie gebeten, die Ware bei Lieferung umgehend auf Vollständigkeit, offensichtliche Mängel und Transportschäden zu überprüfen und uns sowie dem Spediteur Beanstandungen schnellstmöglich mitzuteilen. Kommen Sie dem nicht nach, hat dies keine Auswirkung auf Ihre gesetzlichen Gewährleistungsansprüche. Diese AGB und Kundeninformationen wurden von den auf IT-Recht spezialisierten Juristen des Händlerbundes erstellt und werden permanent auf Rechtskonformität geprüft. Die Händlerbund Management AG garantiert für die Rechtssicherheit der Texte und haftet im Falle von Abmahnungen. Nähere Informationen dazu finden Sie unter: http://www.haendlerbund.de/agb-service.</p><p></p><h3 class=\"h3\">Hinweise zur Batterieentsorgung</h3><p>Im Zusammenhang mit dem Vertrieb von Batterien oder mit der Lieferung von Geräten, die Batterien enthalten, sind wir verpflichtet, Sie auf folgendes hinzuweisen:</p><p>Sie sind zur Rückgabe gebrauchter Batterien als Endnutzer gesetzlich verpflichtet. Sie können Altbatterien, die wir als Neubatterien im Sortiment führen oder geführt haben, unentgeltlich an unserem Versandlager (Handelsagentur Lehmann, Dornachgasse 15, 6850 Dornbirn, Österreich) zurückgeben.</p><p>Die auf den Batterien abgebildeten Symbole haben folgende Bedeutung:</p><p> </p><p>Das Symbol der durchgekreuzten Mülltonne bedeutet, dass die Batterie nicht in den Hausmüll gegeben werden darf.</p><p>Pb = Batterie enthält mehr als 0,004 Masseprozent Blei</p><p>Cd = Batterie enthält mehr als 0,002 Masseprozent Cadmium</p><p>Hg = Batterie enthält mehr als 0,0005 Masseprozent Quecksilber.</p><p>letzte Aktualisierung: 28.09.2016</p>");;return buf.join("");
}; },"views/agb_1": function(exports, require, module) { module.exports = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<h3 class=\"h3\"><div>Allgemeine Geschäftsbedingungen</div></h3><h5 class=\"h5\">Geltungsbereich</h5><p>Für alle Bestellungen über unseren Online-Shop gelten die nachfolgenden AGB.</p><h5 class=\"h5\">Selbstabholung</h5><p>Nach Terminvereinbarung möglich.</p><h5 class=\"h5\">Packstation</h5><p>Wir liefern nicht an Packstationen.</p><h5 class=\"h5\">Eigentumsvorbehalt </h5><p>Die Ware bleibt bis zur vollständigen Bezahlung unser Eigentum.</p><h5 class=\"h5\">Transportschäden</h5><p>Werden Waren mit offensichtlichen Transportschäden angeliefert, so reklamieren Sie solche Fehler bitte möglichst sofort beim Zusteller und nehmen Sie bitte unverzüglich Kontakt zu uns auf. Die Versäumung einer Reklamation oder Kontaktaufnahme hat für Ihre gesetzlichen Ansprüche und deren Durchsetzung, insbesondere Ihre Gewährleistungsrechte keinerlei Konsequenzen. Sie helfen uns aber, unsere eigenen Ansprüche gegenüber dem Frachtführer bzw. Transportversicherung geltend machen zu können.</p><h5 class=\"h5\">Vertragssprache</h5><p>Die für den Vertragsschluss zur Verfügung stehende Sprache ist Deutsch.</p><h5 class=\"h5\">Jugendschutz</h5><p>Bestimmte Artikel unseres Sortiments gehören ausschließlich in die Hände von Erwachsenen. Wir behalten uns für diese in den Produktbeschreibungen jeweils speziell gekennzeichnete Artikel vor, diese nur an volljährige, unbeschränkt geschäftsfähige natürliche Personen auszuliefern und dabei entsprechende Altersnachweise zu verlangen. Die für die Bestellung erforderlichen Daten wie Name, Anschrift usw. sind vollständig und wahrheitsgemäß anzugeben.  </p><h5 class=\"h5\">Widerrufsbelehrung</h5><p>Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die letzte Ware in Besitz genommen haben bzw. hat. Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Handelsagentur Lehmann, Angela Lehmann, Dornachgasse 15, 6850 Dornbirn, Österreich, Telefon 0043-664-1306372, eMail: ha-lehmann@gmx.at) mittels einer eindeutigen Erklärung (z.B. ein mit der Post versandter Brief, Telefax oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist. Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.</p><h5 class=\"h5\">Folgen des Widerrufs</h5><p>Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet. Wir können die Rückzahlung verweigern, bis wir die Waren wieder zurückerhalten haben oder bis Sie den Nachweis erbracht haben, dass Sie die Waren zurückgesandt haben, je nachdem, welches der frühere Zeitpunkt ist. Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen vierzehn Tagen ab dem Tag, an dem Sie uns über den Widerruf dieses Vertrags unterrichten, an uns zurückzusenden oder zu übergeben. Die Frist ist gewahrt, wenn Sie die Waren vor Ablauf der Frist von vierzehn Tagen absenden. Sie tragen die unmittelbaren Kosten der Rücksendung der Waren. Sie müssen für einen etwaigen Wertverlust der Waren nur aufkommen, wenn dieser Wertverlust auf einen zur Prüfung der Beschaffenheit, Eigenschaften und Funktionsweise der Waren nicht notwendigen Umgang mit ihnen zurückzuführen ist.</p><h5 class=\"h5\">Widerrufsformular</h5><iframe src=\"https://docs.google.com/forms/d/e/1FAIpQLSdKP-t3e19dPw1xbsJmaJqCzfTNMWQQ_Knyqr-F5Cfrlej7Jw/viewform?embedded=true\" width=\"100%\" height=\"1350\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\"><div>Wird geladen...</div></iframe>");;return buf.join("");
}; },"views/carousel": function(exports, require, module) { module.exports = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (id, slides, undefined) {
buf.push("<div tabindex=\"3\" data-ride=\"\"" + (jade.attr("id", id, true, false)) + " style=\"min-height: 330px;\" class=\"carousel slide\"> <div class=\"carousel-inner\">");
// iterate slides
;(function(){
  var $$obj = slides;
  if ('number' == typeof $$obj.length) {

    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
      var vals = $$obj[index];

buf.push("<div" + (jade.cls(['item',index==0 ? 'active' : ''], [null,true])) + ">");
if ( vals.items)
{
buf.push("<ul class=\"liststyle\">");
// iterate vals.items
;(function(){
  var $$obj = vals.items;
  if ('number' == typeof $$obj.length) {

    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
      var val = $$obj[index];

if ( val.items)
{
buf.push("<li>" + (jade.escape(null == (jade_interp = val.items[0]) ? "" : jade_interp)) + "<ul>");
// iterate val.items
;(function(){
  var $$obj = val.items;
  if ('number' == typeof $$obj.length) {

    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
      var subval = $$obj[index];

if ( index != 0)
{
buf.push("<li>" + (jade.escape(null == (jade_interp = subval) ? "" : jade_interp)) + "</li>");
}
    }

  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;      var subval = $$obj[index];

if ( index != 0)
{
buf.push("<li>" + (jade.escape(null == (jade_interp = subval) ? "" : jade_interp)) + "</li>");
}
    }

  }
}).call(this);

buf.push("</ul></li>");
}
else
{
buf.push("<li>" + (jade.escape(null == (jade_interp = val) ? "" : jade_interp)) + "</li>");
}
    }

  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;      var val = $$obj[index];

if ( val.items)
{
buf.push("<li>" + (jade.escape(null == (jade_interp = val.items[0]) ? "" : jade_interp)) + "<ul>");
// iterate val.items
;(function(){
  var $$obj = val.items;
  if ('number' == typeof $$obj.length) {

    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
      var subval = $$obj[index];

if ( index != 0)
{
buf.push("<li>" + (jade.escape(null == (jade_interp = subval) ? "" : jade_interp)) + "</li>");
}
    }

  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;      var subval = $$obj[index];

if ( index != 0)
{
buf.push("<li>" + (jade.escape(null == (jade_interp = subval) ? "" : jade_interp)) + "</li>");
}
    }

  }
}).call(this);

buf.push("</ul></li>");
}
else
{
buf.push("<li>" + (jade.escape(null == (jade_interp = val) ? "" : jade_interp)) + "</li>");
}
    }

  }
}).call(this);

buf.push("</ul>");
}
else if ( vals.img)
{
buf.push("<img" + (jade.attr("src", vals.img, true, false)) + (jade.attr("width", vals.width, true, false)) + "/>");
}
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;      var vals = $$obj[index];

buf.push("<div" + (jade.cls(['item',index==0 ? 'active' : ''], [null,true])) + ">");
if ( vals.items)
{
buf.push("<ul class=\"liststyle\">");
// iterate vals.items
;(function(){
  var $$obj = vals.items;
  if ('number' == typeof $$obj.length) {

    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
      var val = $$obj[index];

if ( val.items)
{
buf.push("<li>" + (jade.escape(null == (jade_interp = val.items[0]) ? "" : jade_interp)) + "<ul>");
// iterate val.items
;(function(){
  var $$obj = val.items;
  if ('number' == typeof $$obj.length) {

    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
      var subval = $$obj[index];

if ( index != 0)
{
buf.push("<li>" + (jade.escape(null == (jade_interp = subval) ? "" : jade_interp)) + "</li>");
}
    }

  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;      var subval = $$obj[index];

if ( index != 0)
{
buf.push("<li>" + (jade.escape(null == (jade_interp = subval) ? "" : jade_interp)) + "</li>");
}
    }

  }
}).call(this);

buf.push("</ul></li>");
}
else
{
buf.push("<li>" + (jade.escape(null == (jade_interp = val) ? "" : jade_interp)) + "</li>");
}
    }

  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;      var val = $$obj[index];

if ( val.items)
{
buf.push("<li>" + (jade.escape(null == (jade_interp = val.items[0]) ? "" : jade_interp)) + "<ul>");
// iterate val.items
;(function(){
  var $$obj = val.items;
  if ('number' == typeof $$obj.length) {

    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
      var subval = $$obj[index];

if ( index != 0)
{
buf.push("<li>" + (jade.escape(null == (jade_interp = subval) ? "" : jade_interp)) + "</li>");
}
    }

  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;      var subval = $$obj[index];

if ( index != 0)
{
buf.push("<li>" + (jade.escape(null == (jade_interp = subval) ? "" : jade_interp)) + "</li>");
}
    }

  }
}).call(this);

buf.push("</ul></li>");
}
else
{
buf.push("<li>" + (jade.escape(null == (jade_interp = val) ? "" : jade_interp)) + "</li>");
}
    }

  }
}).call(this);

buf.push("</ul>");
}
else if ( vals.img)
{
buf.push("<img" + (jade.attr("src", vals.img, true, false)) + (jade.attr("width", vals.width, true, false)) + "/>");
}
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div><a" + (jade.attr("href", '#'+id, true, false)) + " data-slide=\"prev\" class=\"left carousel-control\"><span class=\"glyphicon glyphicon-chevron-left\"></span></a><a" + (jade.attr("href", '#'+id, true, false)) + " data-slide=\"next\" class=\"right carousel-control\"><span class=\"glyphicon glyphicon-chevron-right\"></span></a><ol class=\"carousel-indicators top\">");
// iterate slides
;(function(){
  var $$obj = slides;
  if ('number' == typeof $$obj.length) {

    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
      var val = $$obj[index];

buf.push("<li" + (jade.attr("data-target", '#'+id, true, false)) + (jade.attr("data-slide-to", index, true, false)) + (jade.cls([index==0 ? 'active' : ''], [true])) + "></li>");
    }

  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;      var val = $$obj[index];

buf.push("<li" + (jade.attr("data-target", '#'+id, true, false)) + (jade.attr("data-slide-to", index, true, false)) + (jade.cls([index==0 ? 'active' : ''], [true])) + "></li>");
    }

  }
}).call(this);

buf.push("</ol></div>");}.call(this,"id" in locals_for_with?locals_for_with.id:typeof id!=="undefined"?id:undefined,"slides" in locals_for_with?locals_for_with.slides:typeof slides!=="undefined"?slides:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
}; },"views/delivery": function(exports, require, module) { module.exports = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<h3 class=\"h3\">Versandkosten</h3><p>Kosten des Versandes nach Österreich: 3,90 Euro</p><p>Kosten des Versandes nach Deuschland (ausser Inseln): 5,90 Euro</p><p>Ab einem Bestellwert von 50,00 Euro liefern wir innerhalb Österreich versandkostenfrei!!</p><p>Wir versenden mit den Paketdiensten DPD und DHL.</p><hr/><p>Sollten Sie DPD im Abwesenheitsfall, per Benachrichtigungskarte oder telefonisch, eine neue Lieferadresse mitteilen, fallen noch einmal Portokosten in Höhe von € 3,90 (Österreich) bzw. € 5,90 (Deutschland) an.</p><h3 class=\"h3\">Lieferfristen</h3><p>Soweit im jeweiligen Angebot keine andere Frist angegeben ist, erfolgt die Lieferung der Ware in Österreich innerhalb von 2-4 Tagen, bei Auslandslieferungen innerhalb von 2-5 Tagen nach Vertragsschluss (bei vereinbarter Vorauszahlung nach dem Zeitpunkt Ihrer Zahlungsanweisung).</p><p>Beachten Sie, dass an Sonn- und Feiertagen keine Zustellung erfolgt.</p><p>Haben Sie Artikel mit unterschiedlichen Lieferzeiten bestellt, versenden wir die Ware in einer gemeinsamen Sendung, sofern wir keine abweichenden Vereinbarungen mit Ihnen getroffen haben. Die Lieferzeit bestimmt sich in diesem Fall nach dem Artikel mit der längsten Lieferzeit den Sie bestellt haben.</p><p>Bei Selbstabholung informieren wir Sie per E-Mail über die Bereitstellung der Ware und die Abholmöglichkeiten. In diesem Fall werden keine Versandkosten berechnet.</p><hr/><h3 class=\"h3\">Zahlungsbedingungen</h3><p>Bei Lieferungen innerhalb Österreichs haben Sie folgende Zahlungsmöglichkeiten:</p><p>-  Barzahlung bei Abholung</p><p>-  Vorkasse per Überweisung</p><p>-  Zahlung per Nachnahme </p><p>-  Zahlung per PayPal</p><p>-  Zahlung per amazon payments</p><p>Bei Lieferungen ins Ausland haben Sie folgende Zahlungsmöglichkeiten:</p><p>-  Barzahlung bei Abholung</p><p>-  Vorkasse per Überweisung</p><p>-  Zahlung per Lastschrift (Bankeinzug)</p><p>-  Zahlung per PayPal</p><p>-  Zahlung per amazon payments</p><p> </p><p>Bei Zahlung per Lastschrift (Bankeinzug) ermächtigen Sie uns widerruflich, den Rechnungsbetrag vom angegebenen Konto einzuziehen.</p><p> </p><p>Unsere Bankverbindung:</p><p>IBAN: AT482060200000347112</p><p>BIC: DOSPAT2DXXX</p>");;return buf.join("");
}; },"views/imp": function(exports, require, module) { module.exports = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<h3 class=\"h3\">Gesetzliche Anbieterkennung</h3><p>Handelsagentur Lehmann</p><p>Angela Lehmann</p><p>Dornachgasse 15</p><p>6850 Dornbirn</p><p>Vorarlberg -  Österreich</p><hr/><p>Telefon: +43 664-1306372</p><p>Telefax: +43 5572-422498</p><p>Email  : ha-lehmann@gmx.at</p><p>USt-IdNr.: ATU71224409</p><p>Wi-ID-Nr.: 8206629</p><p> </p><p>Unternehmensgegenstand: Online-Handel mit Outdoor, Fitness und Restposten</p><p>Mitgliedschaften: Händlerbund</p><p>Berufsrecht: Gewerbeordnung: http://www.ris.bka.gv.at</p><p>Aufsichtsbehörde: Bezirkshauptmannschaft Dornbirn</p><p> </p><hr/><p>Die Europäische Kommission stellt eine Plattform für die außergerichtliche Online-Streitbeilegung (OS-Plattform) bereit, aufrufbar unter . http://ec.europa.eu/odr</p><p>Wir sind seit 01.12.2016 Mitglied der Initiative \"FairCommerce\". Nähere Informationen hierzu finden Sie unter www.fair-commerce.de.</p><hr/><p><div><a href=\"https://www.haendlerbund.de/faircommerce\" target=\"_blank\"><img src=\"/img/fc_logo.gif\"/></a></div></p>");;return buf.join("");
}; },"views/notify": function(exports, require, module) { module.exports = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (text) {
buf.push("<p><div>" + (((jade_interp = text) == null ? '' : jade_interp)) + "</div></p>");}.call(this,"text" in locals_for_with?locals_for_with.text:typeof text!=="undefined"?text:undefined));;return buf.join("");
}; },"views/pay": function(exports, require, module) { module.exports = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<h3 class=\"h3\">Paypal</h3><p>Profitieren Sie von dieser einfachen und schnellen Zahlungsabwicklung</p><p>Sie sind über den PayPal-Verkäuferschutz abgesichert</p><h3 class=\"h3\">Vorkasse</h3><p>Sie überweisen den Rechnungsbetrag per Vorkasse auf unser Konto. Sofort nach Geldeingang erfolgt die Lieferung an Sie! Vermerken Sie bei Ihrer Überweisung bitte unbedingt Ihren Namen und, falls bekannt, Ihre Kundennummer und die Bestellnummer! Dies beschleunigt den Versand an Sie!</p><h3 class=\"h3\">Bei Abholung</h3><p>Nach Terminabsprache erhalten Sie den gewünschten Artikel gegen Barzahlung.</p>");;return buf.join("");
}; },"views/privacy": function(exports, require, module) { module.exports = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<h3 class=\"h3\">Herzlich Willkommen auf unserer Webseite!</h3><p></p><p>Wir legen größten Wert auf den Schutz Ihrer Daten und die Wahrung Ihrer Privatsphäre. Nachstehend informieren wir Sie deshalb über die Erhebung und Verwendung persönlicher Daten bei Nutzung unserer Webseite. Anonyme Datenerhebung Sie können unsere Webseiten besuchen, ohne Angaben zu Ihrer Person zu machen. Wir speichern in diesem Zusammenhang keinerlei persönliche Daten. Um unser Angebot zu verbessern, werten wir lediglich statistische Daten aus, die keinen Rückschluss auf Ihre Person erlauben. Erhebung, Verarbeitung und Nutzung personenbezogener Daten Wir erheben personenbezogene Daten (Einzelangaben über persönliche oder sachliche Verhältnisse einer bestimmten oder bestimmbaren natürlichen Person) nur in dem von Ihnen zur Verfügung gestellten Umfang. Die Verarbeitung und Nutzung Ihrer personenbezogenen Daten erfolgt zur Erfüllung und Abwicklung Ihrer Bestellung sowie zur Bearbeitung Ihrer Anfragen. Nach vollständiger Vertragsabwicklung werden alle personenbezogenen Daten zunächst unter Berücksichtigung steuer- und handelsrechtlicher Aufbewahrungsfristen gespeichert und dann nach Fristablauf gelöscht, sofern Sie der weitergehenden Verarbeitung und Nutzung nicht zugestimmt haben. Zusätzlich weisen wir auf Folgendes hin: Wir verwenden das . Nach Ihrer Bestellung möchten wir Sie bitten, Ihren Kauf Käufersiegel-Bewertungssystem bei uns zu bewerten und zu kommentieren. Zu diesem Zweck werden Sie von uns im Rahmen der Vertragsabwicklung angeschrieben, wobei wir uns hierbei des technischen Systems des Anbieters des Käufersiegel-Bewertungstools, der Händlerbund Management AG,  Leipzig, im Torgauer Straße 233 B, 04347 Rahmen einer Auftragsdatenverarbeitung bedienen. Ihre E-Mail-Adresse wird dabei nur zu diesem Zweck und insbesondere nicht zu weitergehender Werbung benutzt und auch nicht an sonstige Dritte weitergegeben. Die in diesem Zusammenhang im technischen System des Käufersiegel-Bewertungstools gespeicherten personenbezogenen Daten werden 3 Monate nach der zur Bewertung erfassten Warenlieferung gelöscht. Weitergabe personenbezogener Daten Eine Weitergabe Ihrer Daten an Dritte ohne Ihre ausdrückliche Einwilligung erfolgt nicht. Ausgenommen hiervon sind lediglich unsere Dienstleistungspartner, die wir zur Abwicklung des Vertragsverhältnisses benötigen. In diesen Fällen beachten wir strikt die Vorgaben des Bundesdatenschutzgesetzes. Der Umfang der Datenübermittlung beschränkt sich auf ein Mindestmaß. Cookies Unsere Internetseiten verwenden an mehreren Stellen so genannte Cookies. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert. Sie dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Des Weiteren ermöglichen Cookies unseren Systemen, Ihren Browser zu erkennen und Ihnen Services anzubieten. Cookies enthalten keine personenbezogenen Daten. Auskunft, Berichtigung, Sperrung und Löschung von Daten Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten Daten sowie das Recht auf Berichtigung, Löschung bzw. Sperrung. Kontaktieren Sie uns auf Wunsch. Die Kontaktdaten finden Sie in unserem Impressum.</p><p></p><p>letzte Aktualisierung: 03.12.2015</p>");;return buf.join("");
}; },"views/product": function(exports, require, module) { module.exports = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<li><h5 class=\"h5\">Paypal</h5><p>Profitieren Sie von dieser einfachen und schnellen Zahlungsabwicklung</p><p>Sie sind über den PayPal-Verkäuferschutz abgesichert</p></li><li><h5 class=\"h5\">Vorkasse</h5><p>Sie überweisen den Rechnungsbetrag per Vorkasse auf unser Konto. Sofort nach Geldeingang erfolgt die Lieferung an Sie! Vermerken Sie bei Ihrer Überweisung bitte unbedingt Ihren Namen und, falls bekannt, Ihre Kundennummer und die Bestellnummer! Dies beschleunigt den Versand an Sie!</p></li><li><h5 class=\"h5\">Bei Abholung</h5><p>Nach Terminabsprache erhalten Sie den gewünschten Artikel gegen Barzahlung.</p></li>");;return buf.join("");
}; },"views/revocation": function(exports, require, module) { module.exports = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<h3 class=\"h3\">Widerrufsrecht für Verbraucher</h3><p>(Verbraucher ist jede natürliche Person, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbstständigen beruflichen Tätigkeit zugerechnet werden kann.)</p><h3 class=\"h3\">Widerrufsbelehrung</h3><p>Widerrufsrecht Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag,</p><p>- an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die Waren in Besitz genommen haben bzw. hat, sofern Sie eine oder mehrere Waren im Rahmen einer einheitlichen Bestellung bestellt haben; und diese einheitlich geliefert wird bzw. werden</p><p>- an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die letzte Ware in Besitz genommen haben bzw. hat, sofern Sie mehrere Waren im Rahmen einer einheitlichen Bestellung bestellt haben; und diese getrennt geliefert werden</p><p>Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Angela Lehmann, Dornachgasse 15, 6850 Dornbirn, Telefonnummer: +43 664-1306372, Telefaxnummer: +43 5572-422498, E-Mail-Adresse: mittels einer eindeutigen Erklärung (z.B. ein mit der Post versandter Brief, Telefax oder ha-lehmann@gmx.at) E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.</p><p>Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.</p><h3 class=\"h3\">Folgen des Widerrufs</h3><p>Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf vierzehn Tagen dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.</p><p>Wir können die Rückzahlung verweigern, bis wir die Waren wieder zurückerhalten haben oder bis Sie den Nachweis erbracht haben, dass Sie die Waren zurückgesandt haben, je nachdem, welches der frühere Zeitpunkt ist.</p><p>Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen ab dem Tag, an dem Sie vierzehn Tagen uns über den Widerruf dieses Vertrags unterrichten, an uns zurückzusenden oder zu übergeben. Die Frist ist gewahrt, wenn Sie die Waren vor Ablauf der Frist von absenden. vierzehn Tagen</p><p>Sie tragen die unmittelbaren Kosten der Rücksendung der Waren.</p><p>Sie müssen für einen etwaigen Wertverlust der Waren nur aufkommen, wenn dieser Wertverlust auf einen zur Prüfung der Beschaffenheit, Eigenschaften und Funktionsweise der Waren nicht notwendigen Umgang mit ihnen zurückzuführen ist.</p><h3 class=\"h3\">Ausschluss- bzw. Erlöschensgründe</h3><p>Das Widerrufsrecht besteht nicht bei Verträgen</p><p>- zur Lieferung von Waren, die nicht vorgefertigt sind und für deren Herstellung eine individuelle Auswahl oder Bestimmung durch den Verbraucher maßgeblich ist oder die eindeutig auf die persönlichen Bedürfnisse des Verbrauchers zugeschnitten sind; - zur Lieferung von Waren, die schnell verderben können oder deren Verfallsdatum schnell überschritten würde; - zur Lieferung alkoholischer Getränke, deren Preis bei Vertragsschluss vereinbart wurde, die aber frühestens 30 Tage nach Vertragsschluss geliefert werden können und deren aktueller Wert von Schwankungen auf dem Markt abhängt, auf die der Unternehmer keinen Einfluss hat; - zur Lieferung von Zeitungen, Zeitschriften oder Illustrierten mit Ausnahme von Abonnement-Verträgen.</p><p>Das Widerrufsrecht erlischt vorzeitig bei Verträgen</p><p>- zur Lieferung versiegelter Waren, die aus Gründen des Gesundheitsschutzes oder der Hygiene nicht zur Rückgabe geeignet sind, wenn ihre Versiegelung nach der Lieferung entfernt wurde; - zur Lieferung von Waren, wenn diese nach der Lieferung aufgrund ihrer Beschaffenheit untrennbar mit anderen Gütern vermischt wurden; - zur Lieferung von Ton- oder Videoaufnahmen oder Computersoftware in einer versiegelten Packung, wenn die Versiegelung nach der Lieferung entfernt wurde. </p><h3 class=\"h3\">Widerrufsformular</h3><iframe src=\"https://docs.google.com/forms/d/e/1FAIpQLSdKP-t3e19dPw1xbsJmaJqCzfTNMWQQ_Knyqr-F5Cfrlej7Jw/viewform?embedded=true\" width=\"100%\" height=\"1350\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\"><div>Wird geladen...</div></iframe>");;return buf.join("");
}; },"views/sample": function(exports, require, module) { module.exports = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (version) {
buf.push("<h2>Made with Spine.js version " + (jade.escape((jade_interp = version) == null ? '' : jade_interp)) + "</h2><p>Time to get busy with this magic!</p>");}.call(this,"version" in locals_for_with?locals_for_with.version:typeof version!=="undefined"?version:undefined));;return buf.join("");
}; },"views/temp": function(exports, require, module) { module.exports = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div><p>Unser hochwirksames Pfefferspray (Markenqualität Made in Germany) enthält das konzentrierte</p><p>Extrakt (je nach Produkt zwischen 3 und 13,2%) Oleoresin Capsicum (des Cayenne-Pfeffers).</p><p>Pfefferspray macht jeden Angreifer innerhalb weniger Sekundenbruchteile kampf- und handlungsunfähig.</p><p>Die Augen, Haut und Schleimhäute brennen wie Feuer und der Angreifer ringt nach Luft.</p><p>Die Wirkung hält je nach Sprühdauer bis zu einigen Stunden an.</p><p></p><p class=\"bs-warning\"><strong>Zur Beachtung: </strong>  Pfefferspray darf in Deutschland nur zur Abwehr von angreifenden und aggressiven Tierenverwendet und verkauft werden.</p></div>");;return buf.join("");
}; },"views/version": function(exports, require, module) { module.exports = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (app_version, bs_version, copyright, spine_version) {
buf.push("<p><div>Copyright " + (jade.escape((jade_interp = copyright) == null ? '' : jade_interp)) + "</div><div>App v." + (jade.escape((jade_interp = app_version) == null ? '' : jade_interp)) + "</div><div>Spine v." + (jade.escape((jade_interp = spine_version) == null ? '' : jade_interp)) + "</div><div>Bootstrap v." + (jade.escape((jade_interp = bs_version) == null ? '' : jade_interp)) + "</div></p>");}.call(this,"app_version" in locals_for_with?locals_for_with.app_version:typeof app_version!=="undefined"?app_version:undefined,"bs_version" in locals_for_with?locals_for_with.bs_version:typeof bs_version!=="undefined"?bs_version:undefined,"copyright" in locals_for_with?locals_for_with.copyright:typeof copyright!=="undefined"?copyright:undefined,"spine_version" in locals_for_with?locals_for_with.spine_version:typeof spine_version!=="undefined"?spine_version:undefined));;return buf.join("");
}; },"views/warning": function(exports, require, module) { module.exports = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"danger alert\"><p>Der Versand von Pfeffer- und CS Gas-Sprays erfolgt ausschließlich an Personen über <strong>18 Jahre</strong> mit Altersnachweis</p><p>Dazu bitte ein Scan oder Foto des Nachweises per Mail an ha-lehmann@gmx.at senden.</p><p>Dieser FSK 18 Artikel kann gem. einer Richlinie von PayPal nicht mit PayPal bezahlt werden.</p></div>");;return buf.join("");
}; }
});


