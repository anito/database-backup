
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
      if (options.validate !== false) {
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
 },"spine/lib/list": function(exports, require, module) { // Generated by CoffeeScript 1.10.0
(function() {
  var $, Spine,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = this.Spine || require('spine');

  $ = Spine.$;

  Spine.List = (function(superClass) {
    extend(List, superClass);

    List.prototype.events = {
      'click .item': 'click'
    };

    List.prototype.selectFirst = false;

    function List() {
      this.change = bind(this.change, this);
      List.__super__.constructor.apply(this, arguments);
      this.bind('change', this.change);
    }

    List.prototype.template = function() {
      throw Error('Override template');
    };

    List.prototype.change = function(item) {
      var i, idx, index, len, ref;
      this.current = item;
      if (!this.current) {
        this.children().removeClass('active');
        return;
      }
      this.children().removeClass('active');
      ref = this.items;
      for (idx = i = 0, len = ref.length; i < len; idx = ++i) {
        item = ref[idx];
        if (!(item === this.current)) {
          continue;
        }
        index = idx;
        break;
      }
      return $(this.children().get(index)).addClass('active');
    };

    List.prototype.render = function(items) {
      if (items) {
        this.items = items;
      }
      this.html(this.template(this.items));
      this.change(this.current);
      if (this.selectFirst) {
        if (!this.children('.active').length) {
          return this.children(':first').click();
        }
      }
    };

    List.prototype.children = function(sel) {
      return this.el.children(sel);
    };

    List.prototype.click = function(e) {
      var item;
      item = this.items[$(e.currentTarget).index()];
      this.trigger('change', item);
      return true;
    };

    return List;

  })(Spine.Controller);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Spine.List;
  }

}).call(this);

//# sourceMappingURL=list.js.map
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
      this.bind('active', this.proxy(this.active));
    }

    LoginView.prototype.active = function() {};

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
        ajaxError: function(record, xhr, statusText, error) {},
        ajaxSuccess: function(record, status, xhr) {},
        errorHandler: (function(_this) {
          return function(record, xhr, statusText, error) {
            var flash, status;
            status = xhr.status;
            if (status !== 200) {
              flash = (flash = Flash.first()) ? flash : new Flash;
              flash.status = xhr.status;
              flash.statusText = xhr.statusText;
              flash.save();
              return User.redirect('/users/login');
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
            return User.redirect('/users/login');
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
 },"index": function(exports, require, module) { (function() {
  var $, App, Extender, Mysql, Settings, Spine, User,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  require('lib/setup');

  Spine = require('spine');

  $ = Spine.$;

  Extender = require('extensions/controller_extender');

  Settings = require("models/settings");

  User = require("models/user");

  Mysql = require("models/mysql");

  App = (function(superClass) {
    extend(App, superClass);

    App.extend(Extender);

    App.prototype.elements = {
      'form': 'form',
      '#opt-download': 'downloadEl',
      '#opt-restore': 'restoreEl',
      '#opt-dump': 'dumpEl',
      '#opt-options': 'optionsEl',
      '#opt-logout': 'logoutEl',
      '#time-info': 'timeInfoEl'
    };

    App.prototype.events = {
      'change #opt-options': 'change',
      'click .ask': 'ask',
      'focus #opt-options, #opt-restore': 'stopPing',
      'blur #opt-options, #opt-restore': 'startPing'
    };

    App.prototype.statusTemplate = function(item) {
      return $('#statusTemplate').tmpl(item);
    };

    App.prototype.optionsTemplate = function(item) {
      return $('#optionsTemplate').tmpl(item);
    };

    App.prototype.timeInfoTemplate = function(item) {
      return $('#timeInfoTemplate').tmpl(item);
    };

    function App() {
      this.shownmodal = bind(this.shownmodal, this);
      this.showmodal = bind(this.showmodal, this);
      this.hiddenmodal = bind(this.hiddenmodal, this);
      this.hidemodal = bind(this.hidemodal, this);
      this.mysqlFail = bind(this.mysqlFail, this);
      this.mysqlDone = bind(this.mysqlDone, this);
      this.mysqlBeforeSend = bind(this.mysqlBeforeSend, this);
      this.settingsDone = bind(this.settingsDone, this);
      this.submit = bind(this.submit, this);
      this.authorized = bind(this.authorized, this);
      App.__super__.constructor.apply(this, arguments);
      Mysql.bind('ajaxError', Mysql.ajaxError);
      Mysql.bind('ajaxSuccess', Mysql.ajaxSuccess);
      Mysql.bind('refresh', this.proxy(this.mysqlRefreshed));
      this.settings = {
        dump: {
          processDefault: $('span', this.dumpEl).html(),
          processAsk: 'Datensicherung starten?\n\nFortfahren?',
          processBefore: 'Sicherung läuft...',
          processDone: 'Gesichert',
          processFail: 'Fehler'
        },
        restore: {
          processDefault: $('span', this.restoreEl).html(),
          processAsk: 'Soll diese Sicherung wiederhergestellt werden?',
          processBefore: 'Wiederherstellung läuft...',
          processDone: 'Wiederhergestellt',
          processFail: 'Fehler'
        }
      };
      this.routes({
        '/item/:pid': function(params) {
          return this.showDetails(params.pid);
        },
        '/*glob': function(params) {}
      });
    }

    App.prototype.renderStatus = function(item) {
      return this.statusEl.html(this.statusTemplate(item));
    };

    App.prototype.renderOptions = function(items) {
      var emptyText;
      if (items.length) {
        emptyText = 'Sicherung auswählen';
      } else {
        emptyText = 'keine Sicherung vorhanden';
      }
      items.unshift({
        created: emptyText
      });
      this.optionsEl.html(this.optionsTemplate(items));
      return this.change();
    };

    App.prototype.renderInfo = function(item) {
      return this.timeInfoEl.html(this.timeInfoTemplate(item));
    };

    App.prototype.init = function() {
      User.fetch();
      return this.authorized();
    };

    App.prototype.authorized = function() {
      this.optionsEl.change();
      this.getMysql();
      return this.loadSettings();
    };

    App.prototype.ask = function(e) {
      var data, el, ref, res, type;
      el = $(e.currentTarget);
      this.dataType = type = el.data('type');
      res = (ref = (res = this.settings[type].processAsk)) != null ? ref : {
        res: null
      };
      if (!res) {
        return;
      }
      if (window.confirm(res)) {
        data = el.data();
        return this.submit(data);
      } else {
        return alert("Vorgang wurde abgebrochen");
      }
    };

    App.prototype.submit = function(data) {
      var ref, token;
      User.fetch();
      if (!User.first()) {
        return User.logout();
      }
      token = (ref = User.first()) != null ? ref.token : void 0;
      return $.ajax({
        url: data.href,
        type: 'POST',
        beforeSend: this.mysqlBeforeSend,
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + token
        },
        data: this.form.serialize()
      }).done(this.mysqlDone()).fail(this.mysqlFail());
    };

    App.prototype.loadSettings = function() {
      return Settings.load({
        done: this.settingsDone
      });
    };

    App.prototype.settingsDone = function(settings) {
      this.pingInterval = settings.Refresh.rate;
      return this.startPing();
    };

    App.prototype.settingsFail = function() {
      return this.log('settingsFail');
    };

    App.prototype.mysqlBeforeSend = function() {
      var buttonTextEl, func, savedButtonText;
      buttonTextEl = $('[data-type=' + this.dataType + ']>span');
      savedButtonText = buttonTextEl.html();
      buttonTextEl.html(this.settings[this.dataType].processBefore);
      return func = function() {
        buttonSymbolEl.removeClass('glyphicon-check');
        return buttonTextEl = $('[data-type=' + this.dataType + ']>span').html(savedButtonText);
      };
    };

    App.prototype.mysqlDone = function(settings) {
      return (function(_this) {
        return function(data, state, xhr) {
          var buttonSymbolEl, buttonTextEl, func;
          buttonSymbolEl = $('[data-type=' + _this.dataType + ']>i');
          buttonSymbolEl.addClass('glyphicon-check');
          buttonTextEl = $('[data-type=' + _this.dataType + ']>span');
          buttonTextEl.html(_this.settings[_this.dataType].processDone);
          func = function() {
            buttonSymbolEl.removeClass('glyphicon-check');
            return buttonTextEl = $('[data-type=' + this.dataType + ']>span').html(this.settings[this.dataType].processDefault);
          };
          _this.delay(func, 3000);
          return _this.getMysql();
        };
      })(this);
    };

    App.prototype.mysqlFail = function() {
      return (function(_this) {
        return function(xhr, state, responseText) {
          var buttonSymbolEl, buttonTextEl, func;
          buttonSymbolEl = $('[data-type=' + _this.dataType + ']>i');
          buttonSymbolEl.addClass('glyphicon-exclamation-sign');
          buttonTextEl = $('[data-type=' + _this.dataType + ']>span');
          buttonTextEl.html(_this.settings[_this.dataType].processFail + ': ' + responseText);
          func = function() {
            buttonSymbolEl.removeClass('glyphicon-exclamation-sign');
            return buttonTextEl = $('[data-type=' + this.dataType + ']>span').html(this.settings[this.dataType].processDefault);
          };
          return _this.delay(func, 20000);
        };
      })(this);
    };

    App.prototype.getMysql = function() {
      var token;
      User.fetch();
      if (!User.first()) {
        return User.logout();
      }
      token = User.first().token;
      return Mysql.fetch({
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + token
        }
      });
    };

    App.prototype.mysqlRefreshed = function(items) {
      this.refreshElements();
      this.renderOptions(items.slice());
      return this.renderInfo(items.length ? items[0] : {});
    };

    App.prototype.logout = function(e) {
      e.preventDefault();
      e.stopPropagation();
      return User.logout();
    };

    App.prototype.resetFormControls = function() {
      return $('.has-success').removeClass('has-success');
    };

    App.prototype.startPing = function() {
      if (!this.pingInterval) {
        return;
      }
      if (this.pingIntervalId) {
        this.stopPing(this.pingIntervalId);
      }
      return this.pingIntervalId = setInterval(this.getMysql, this.pingInterval * 1000);
    };

    App.prototype.stopPing = function() {
      return clearInterval(this.pingIntervalId);
    };

    App.prototype.change = function(e) {
      var val;
      val = this.optionsEl.val();
      this.downloadEl.attr('disabled', !val).attr('data-fn', val);
      this.restoreEl.attr('disabled', !val).attr('data-fn', val);
      if (val) {
        return this.restoreEl.focus();
      } else {
        return this.dumpEl.focus();
      }
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

    App.prototype.shownmodal = function(e) {
      return this.log('shownmodal');
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
  var $, Flash, LoaderView, Login, LoginView, Settings, Spine, User,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  LoginView = require("controllers/login_view");

  LoaderView = require("controllers/loader_view");

  Settings = require("models/settings");

  Flash = require("models/flash");

  User = require("models/user");

  require('spine/lib/manager');

  Login = (function(superClass) {
    extend(Login, superClass);

    Login.prototype.elements = {
      'form': 'form',
      '.flash': 'flashEl',
      '.status': 'statusEl',
      '#password': 'passwordEl',
      '#username': 'usernameEl',
      '#login .container': 'contentEl',
      '#login': 'loginEl',
      '#loader': 'loaderEl',
      '.guest': 'btnGuest',
      '.message': 'messages'
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

    Login.prototype.logoTemplate = function(item) {
      return $('#logoTemplate').tmpl(item);
    };

    function Login(form) {
      this.failResponse = bind(this.failResponse, this);
      this.doneResponse = bind(this.doneResponse, this);
      this.completeResponse = bind(this.completeResponse, this);
      this.submit = bind(this.submit, this);
      var flash;
      Login.__super__.constructor.apply(this, arguments);
      this.loginView = new LoginView({
        el: this.loginEl
      });
      this.loaderView = new LoaderView({
        el: this.loaderEl
      });
      Flash.fetch();
      if (Flash.count()) {
        flash = Flash.first();
      }
      if (flash) {
        this.flash(flash);
      }
      Flash.destroyAll();
      this.appManager = new Spine.Manager(this.loginView, this.loaderView);
      this.loginView.trigger('active');
    }

    Login.prototype.init = function() {
      User.fetch();
      User.destroyAll();
      Settings.fetch();
      return Settings.destroyAll();
    };

    Login.prototype.render = function(el, template) {
      el.html(template);
      return this.el;
    };

    Login.prototype.submit = function() {
      this.log(this.form.serialize());
      return $.ajax({
        data: this.form.serialize(),
        type: 'POST'
      }).done(this.doneResponse).fail(this.failResponse).always(this.completeResponse);
    };

    Login.prototype.completeResponse = function(xhr) {
      var json;
      json = xhr.responseText;
      this.passwordEl.val('');
      return this.usernameEl.val('').focus();
    };

    Login.prototype.doneResponse = function(data, status, xhr) {
      var fadeFunc, json, redirectFunc, switchViewFunc, user;
      json = $.parseJSON(data);
      User.fetch();
      User.destroyAll();
      user = new User(this.newAttributes(json.data));
      user.save();
      this.flash({
        message: json.flash,
        statusText: xhr.statusText,
        status: xhr.status
      });
      fadeFunc = function() {
        this.contentEl.addClass('fade');
        return this.delay(switchViewFunc, 500);
      };
      switchViewFunc = function() {
        this.loaderView.trigger('active');
        return this.delay(redirectFunc, 2000);
      };
      redirectFunc = function() {
        return User.redirect();
      };
      return this.delay(fadeFunc, 1000);
    };

    Login.prototype.failResponse = function(xhr, status) {
      var json;
      json = $.parseJSON(xhr.responseText);
      return this.flash({
        message: json.flash,
        statusText: xhr.statusText,
        status: xhr.status
      });
    };

    Login.prototype.flash = function(obj) {
      var delayedFunc;
      if (!this.oldMessage) {
        this.oldMessage = this.flashEl.html();
      }
      delayedFunc = function() {
        return this.flashEl.html(this.oldMessage);
      };
      return this.render(this.flashEl, this.flashTemplate(obj));
    };

    Login.prototype.newAttributes = function(json) {
      return {
        id: json.id,
        username: json.username,
        token: json.token
      };
    };

    Login.prototype.cancel = function(e) {
      User.redirect();
      return e.preventDefault();
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
 },"models/mysql": function(exports, require, module) { (function() {
  var $, Extender, Flash, Log, Model, Mysql, Settings, Spine, User,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Log = Spine.Log;

  Model = Spine.Model;

  User = require("models/user");

  Flash = require("models/flash");

  Settings = require("models/settings");

  Extender = require("extensions/model_extender");

  require('spine/lib/ajax');

  Mysql = (function(superClass) {
    extend(Mysql, superClass);

    function Mysql() {
      return Mysql.__super__.constructor.apply(this, arguments);
    }

    Mysql.configure('Mysql', 'id', 'filename', 'description', 'created', 'human');

    Mysql.extend(Extender);

    Mysql.extend(Model.Ajax);

    Mysql.url = '/api/' + Mysql.className.toLowerCase() + '/?sort=created&direction=desc';

    Mysql.trace = true;

    Mysql.beforeFromJSON = function(objects) {
      return objects.data;
    };

    Mysql.ajaxError = function(xhr, status, error) {
      return User.redirect('/users/login');
    };

    Mysql.ajaxSuccess = function(record, xhr, statusText, error) {};

    Mysql.prototype.init = function(instance) {};

    return Mysql;

  })(Spine.Model);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Model.Mysql = Mysql;
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

    Settings.configure('Settings', 'Refresh', 'Error');

    Settings.extend(Model.Local);

    Settings.extend(Extender);

    Settings.load = function(options) {
      var token;
      Model.User.fetch();
      if (!(token = Model.User.first())) {
        return Model.User.logout();
      }
      token = Model.User.first().token;
      return $.ajax({
        url: base_url + '/api/settings/read',
        contentType: 'application/json',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + token
        }
      }).done(this.done(options)).fail(this.fail(options));
    };

    Settings.done = function(options) {
      return function(json, status, xhr) {
        var ref, s, settings;
        settings = json.data.settings;
        s = new Settings(settings);
        s.save();
        return (ref = options.done) != null ? ref.call(null, settings) : void 0;
      };
    };

    Settings.fail = function(options) {
      return function(json, status, xhr) {
        return Model.User.redirect('/logout');
      };
    };

    Settings.prototype.init = function(instance) {};

    return Settings;

  })(Spine.Model);

  module.exports = Model.Settings = Settings;

}).call(this);
 },"models/user": function(exports, require, module) { (function() {
  var $, Extender, Log, Model, Spine, User,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = require("spine");

  $ = Spine.$;

  Log = Spine.Log;

  Model = Spine.Model;

  Extender = require("extensions/model_extender");

  require('spine/lib/local');

  User = (function(superClass) {
    extend(User, superClass);

    function User() {
      this.doneRequest = bind(this.doneRequest, this);
      return User.__super__.constructor.apply(this, arguments);
    }

    User.configure('User', 'id', 'username', 'token');

    User.extend(Extender);

    User.extend(Model.Local);

    User.trace = true;

    User.url = base_url + '/api/users/';

    User.logout = function() {
      return $.ajax({
        url: base_url + '/logout'
      }).done(this.logoutSuccess).fail(this.errorHandler);
    };

    User.logoutSuccess = function(json, status, xhr) {
      User.log(json);
      $(window).off();
      return User.redirect('/users/login');
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

    User.getToken = function(settings) {
      this.fetch();
      return this.first().getToken(settings);
    };

    User.prototype.init = function(instance) {};

    User.prototype.getToken = function(settings) {
      var data;
      data = JSON.stringify(this);
      return $.ajax({
        url: base_url + '/api/users/token',
        type: 'POST',
        data: data,
        contentType: 'application/json',
        headers: {
          Accept: 'application/json'
        }
      }).done(this.doneRequest(settings)).fail(this.errorHandler);
    };

    User.prototype.doneRequest = function(settings) {
      return (function(_this) {
        return function(json, state, xhr) {
          var id, ref, token;
          token = json.data.token;
          id = json.data.id;
          _this.updateAttributes({
            'token': token,
            'id': id
          });
          return (ref = settings.done) != null ? ref.call() : void 0;
        };
      })(this);
    };

    return User;

  })(Spine.Model);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Model.User = User;
  }

}).call(this);
 }
});


