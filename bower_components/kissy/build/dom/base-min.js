/*
Copyright 2013, KISSY v1.41
MIT Licensed
build time: Dec 13 16:43
*/
KISSY.add("dom/base/api",[],function(h){var m=h.Env.host||{},n=m.document,q=h.UA,b={ELEMENT_NODE:1,ATTRIBUTE_NODE:2,TEXT_NODE:3,CDATA_SECTION_NODE:4,ENTITY_REFERENCE_NODE:5,ENTITY_NODE:6,PROCESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11,NOTATION_NODE:12},e={isCustomDomain:function(b){var b=b||m,b=e.get(b),g=b.document.domain,b=b.location.hostname;return g!==b&&g!=="["+b+"]"},getEmptyIframeSrc:function(b){b=b||m;b=e.get(b);return q.ie&&e.isCustomDomain(b)?
"javascript:void(function(){"+encodeURIComponent('document.open();document.domain="'+b.document.domain+'";document.close();')+"}())":""},NodeType:b,getWindow:function(l){if(!l)return m;l=e.get(l);if(h.isWindow(l))return l;var g=l;g.nodeType!==b.DOCUMENT_NODE&&(g=l.ownerDocument);return g.defaultView||g.parentWindow},getDocument:function(l){if(!l)return n;l=e.get(l);return h.isWindow(l)?l.document:l.nodeType===b.DOCUMENT_NODE?l:l.ownerDocument},isDomNodeList:function(b){return b&&!b.nodeType&&b.item&&
!b.setTimeout},nodeName:function(b){var g=e.get(b),b=g.nodeName.toLowerCase();q.ie&&(g=g.scopeName)&&"HTML"!==g&&(b=g.toLowerCase()+":"+b);return b},_RE_NUM_NO_PX:RegExp("^("+/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source+")(?!px)[a-z%]+$","i")};h.mix(e,b);return e});
KISSY.add("dom/base/attr",["./api"],function(h,m){function n(a){return null==a?"":a+""}function q(a,d){var d=i[d]||d,b=s[d];return b&&b.get?b.get(a,d):a[d]}var b=m("./api"),e=h.Env.host.document,l=b.NodeType,e=e&&e.documentElement,g=b.nodeName,a=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,j=/^(?:button|input|object|select|textarea)$/i,k=/^a(?:rea)?$/i,c=/:|^on/,d=/\r/g,f={},r={val:1,css:1,html:1,text:1,data:1,width:1,
height:1,offset:1,scrollTop:1,scrollLeft:1},t={tabindex:{get:function(a){var d=a.getAttributeNode("tabindex");return d&&d.specified?parseInt(d.value,10):j.test(a.nodeName)||k.test(a.nodeName)&&a.href?0:void 0}}},i={hidefocus:"hideFocus",tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},z=
{get:function(a,d){return b.prop(a,d)?d.toLowerCase():void 0},set:function(a,d,f){!1===d?b.removeAttr(a,f):(d=i[f]||f,d in a&&(a[d]=!0),a.setAttribute(f,f.toLowerCase()));return f}},s={},p={},w={select:{get:function(a){var d=a.selectedIndex,f=a.options,c;if(0>d)return null;if("select-one"===""+a.type)return b.val(f[d]);a=[];d=0;for(c=f.length;d<c;++d)f[d].selected&&a.push(b.val(f[d]));return a},set:function(a,d){var f=h.makeArray(d);h.each(a.options,function(a){a.selected=h.inArray(b.val(a),f)});
f.length||(a.selectedIndex=-1);return f}}};h.each(["radio","checkbox"],function(a){w[a]={get:function(a){return null===a.getAttribute("value")?"on":a.value},set:function(a,d){if(h.isArray(d))return a.checked=h.inArray(b.val(a),d),1}}});t.style={get:function(a){return a.style.cssText}};h.mix(b,{_valHooks:w,_propFix:i,_attrHooks:t,_propHooks:s,_attrNodeHook:p,_attrFix:f,prop:function(a,d,f){var c=b.query(a),g,e;if(h.isPlainObject(d))h.each(d,function(a,d){b.prop(c,d,a)});else if(d=i[d]||d,e=s[d],void 0!==
f)for(a=c.length-1;0<=a;a--)g=c[a],e&&e.set?e.set(g,f,d):g[d]=f;else if(c.length)return q(c[0],d)},hasProp:function(a,d){var f=b.query(a),c,i=f.length,g;for(c=0;c<i;c++)if(g=f[c],void 0!==q(g,d))return!0;return!1},removeProp:function(a,d){var d=i[d]||d,f=b.query(a),c,g;for(c=f.length-1;0<=c;c--){g=f[c];try{g[d]=void 0,delete g[d]}catch(e){}}},attr:function(d,i,e,j){var k=b.query(d),s=k[0];if(h.isPlainObject(i)){var j=e,u;for(u in i)b.attr(k,u,i[u],j)}else{if(j&&r[i])return b[i](d,e);i=i.toLowerCase();
if(j&&r[i])return b[i](d,e);i=f[i]||i;d=a.test(i)?z:c.test(i)?p:t[i];if(void 0===e){if(s&&s.nodeType===l.ELEMENT_NODE){"form"===g(s)&&(d=p);if(d&&d.get)return d.get(s,i);e=s.getAttribute(i);return""===e&&(i=s.getAttributeNode(i),!i||!i.specified)?void 0:null===e?void 0:e}}else for(j=k.length-1;0<=j;j--)if((s=k[j])&&s.nodeType===l.ELEMENT_NODE)"form"===g(s)&&(d=p),d&&d.set?d.set(s,e,i):s.setAttribute(i,""+e)}},removeAttr:function(d,c){var c=c.toLowerCase(),c=f[c]||c,e=b.query(d),g,h,r;for(r=e.length-
1;0<=r;r--)if(h=e[r],h.nodeType===l.ELEMENT_NODE&&(h.removeAttribute(c),a.test(c)&&(g=i[c]||c)in h))h[g]=!1},hasAttr:e&&!e.hasAttribute?function(d,a){var a=a.toLowerCase(),f=b.query(d),c,i;for(c=0;c<f.length;c++)if(i=f[c],(i=i.getAttributeNode(a))&&i.specified)return!0;return!1}:function(d,a){var f=b.query(d),c,i=f.length;for(c=0;c<i;c++)if(f[c].hasAttribute(a))return!0;return!1},val:function(a,f){var c,i,e,r,u;if(void 0===f){if(e=b.get(a)){if((c=w[g(e)]||w[e.type])&&"get"in c&&void 0!==(i=c.get(e,
"value")))return i;i=e.value;return"string"===typeof i?i.replace(d,""):null==i?"":i}}else{i=b.query(a);for(r=i.length-1;0<=r;r--){e=i[r];if(1!==e.nodeType)break;u=f;null==u?u="":"number"===typeof u?u+="":h.isArray(u)&&(u=h.map(u,n));c=w[g(e)]||w[e.type];if(!c||!("set"in c)||void 0===c.set(e,u,"value"))e.value=u}}},text:function(d,a){var c,f,i,e;if(void 0===a)return c=b.get(d),b._getText(c);f=b.query(d);for(i=f.length-1;0<=i;i--)if(c=f[i],e=c.nodeType,e===l.ELEMENT_NODE)b.cleanData(c.getElementsByTagName("*")),
"textContent"in c?c.textContent=a:c.innerText=a;else if(e===l.TEXT_NODE||e===l.CDATA_SECTION_NODE)c.nodeValue=a},_getText:function(d){return d.textContent}});return b});
KISSY.add("dom/base/class",["./api"],function(h,m){function n(b){for(var b=h.trim(b||""),b=b.split(a),e=[],c,d=b.length,f=0;f<d;f++)(c=b[f])&&e.push(c);return e}function q(a){return function(b,c){var d,f,e,g=b.classList,i=l.call(arguments,2);d=0;for(f=c.length;d<f;d++)(e=c[d])&&g[a].apply(g,[e].concat(i))}}function b(a){return function(b,c){var d=n(c),f=l.call(arguments,2);e.query(b).each(function(c){c.nodeType===g.ELEMENT_NODE&&e[a].apply(e,[c,d].concat(f))})}}var e=m("./api"),l=[].slice,g=e.NodeType,
a=/[\.\s]\s*\.?/;h.mix(e,{_hasClass:function(a,b){var c,d,f,e=a.classList;if(e.length){c=0;for(d=b.length;c<d;c++)if((f=b[c])&&!e.contains(f))return!1;return!0}return!1},_addClass:q("add"),_removeClass:q("remove"),_toggleClass:q("toggle"),hasClass:function(a,b){var c=e.get(a);return c&&c.nodeType===g.ELEMENT_NODE&&e._hasClass(c,n(b))},replaceClass:function(a,b,c){e.removeClass(a,b);e.addClass(a,c)},addClass:b("_addClass"),removeClass:b("_removeClass"),toggleClass:b("_toggleClass")});return e});
KISSY.add("dom/base/create",["./api"],function(h,m){function n(a){a=a&&a!==j?a.createElement(d):f;a===f&&(a.innerHTML="");return a}function q(a,d){var c=n(d);c.innerHTML="m<div>"+a+"</div>";return c.lastChild}function b(a,d){if(d)if(s&&d.canHaveChildren&&"removeNode"in a){if(a.firstChild)a:{try{a.innerHTML="";break a}catch(c){}for(var f;f=a.lastChild;)b(f,a)}a.removeNode(!1)}else d.removeChild(a)}function e(a,d,c){var f=d.nodeType;if(f===k.DOCUMENT_FRAGMENT_NODE){d=d.childNodes;c=c.childNodes;for(f=
0;d[f];)c[f]&&e(a,d[f],c[f]),f++}else if(f===k.ELEMENT_NODE){d=d.getElementsByTagName("*");c=c.getElementsByTagName("*");for(f=0;d[f];)c[f]&&a(d[f],c[f]),f++}}function l(d,c){var f=h.require("event/dom"),b,o;if(c.nodeType!==k.ELEMENT_NODE||a.hasData(d)){b=a.data(d);for(o in b)a.data(c,o,b[o]);f&&f.clone(d,c)}}function g(a){var d=null,c,f;if(a&&(a.push||a.item)&&a[0]){d=a[0].ownerDocument;d=d.createDocumentFragment();a=h.makeArray(a);c=0;for(f=a.length;c<f;c++)d.appendChild(a[c])}else"Unable to convert "+
a+" to fragment.";return d}var a=m("./api"),j=h.Env.host.document,k=a.NodeType,c=h.UA.ieMode,d="div",f=j&&j.createElement(d),r=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,t=/<([\w:]+)/,i=/^\s+/,z=/\s+$/,s=!!(c&&9>c),p=s,w=/<|&#?\w+;/,H=j&&"outerHTML"in j.documentElement,D=/^<(\w+)\s*\/?>(?:<\/\1>)?$/;h.mix(a,{create:function(c,f,b,e){var o=null;if(!c)return o;if(c.nodeType)return a.clone(c);if("string"!==typeof c)return o;void 0===e&&(e=!0);e&&(c=h.trim(c));var e=a._creators,
G,C,b=b||j,J,A=d;if(w.test(c))if(J=D.exec(c))o=b.createElement(J[1]);else{c=c.replace(r,"<$1></$2>");if((J=t.exec(c))&&(G=J[1]))A=G.toLowerCase();G=(e[A]||q)(c,b);p&&(C=c.match(i))&&G.insertBefore(b.createTextNode(C[0]),G.firstChild);p&&/\S/.test(c)&&(C=c.match(z))&&G.appendChild(b.createTextNode(C[0]));C=G.childNodes;1===C.length?o=C[0].parentNode.removeChild(C[0]):C.length?o=g(C):c+" : create node error"}else o=b.createTextNode(c);c=o;h.isPlainObject(f)&&(c.nodeType===k.ELEMENT_NODE?a.attr(c,f,
!0):c.nodeType===k.DOCUMENT_FRAGMENT_NODE&&a.attr(c.childNodes,f,!0));return c},_fixCloneAttributes:function(d,c){"textarea"===a.nodeName(d)&&(c.defaultValue=d.defaultValue,c.value=d.value)},_creators:{div:q},_defaultCreator:q,html:function(d,c,f){var d=a.query(d),b=d[0],o=!1,e,g;if(!b)return null;if(void 0===c)return b.nodeType===k.ELEMENT_NODE?b.innerHTML:b.nodeType===k.DOCUMENT_FRAGMENT_NODE?(f=n(b.ownerDocument),f.appendChild(b),f.innerHTML):null;c+="";if(!c.match(/<(?:script|style|link)/i)&&
(!p||!c.match(i))&&!x[(c.match(t)||["",""])[1].toLowerCase()])try{for(e=d.length-1;0<=e;e--)g=d[e],g.nodeType===k.ELEMENT_NODE&&(a.cleanData(g.getElementsByTagName("*")),g.innerHTML=c);o=!0}catch(h){}o||(c=a.create(c,0,b.ownerDocument,0),a.empty(d),a.append(c,d,f))},outerHtml:function(d,c,f){var d=a.query(d),b=d.length,o=d[0];if(!o)return null;if(void 0===c){if(H&&o.nodeType!==a.DOCUMENT_FRAGMENT_NODE)return o.outerHTML;c=n(o.ownerDocument);c.appendChild(a.clone(o,!0));return c.innerHTML}c+="";if(!c.match(/<(?:script|style|link)/i)&&
H)for(f=b-1;0<=f;f--)o=d[f],o.nodeType===k.ELEMENT_NODE&&(a.cleanData(o,1),o.outerHTML=c);else c=a.create(c,0,o.ownerDocument,0),a.insertBefore(c,d,f),a.remove(d)},remove:function(d,c){var f,e=a.query(d),o,i=h.require("event/dom"),g;for(g=e.length-1;0<=g;g--)f=e[g],!c&&f.nodeType===k.ELEMENT_NODE&&(o=h.makeArray(f.getElementsByTagName("*")),o.push(f),a.removeData(o),i&&i.detach(o)),b(f,f.parentNode)},clone:function(d,c,f,b){"object"===typeof c&&(b=c.deepWithDataAndEvent,f=c.withDataAndEvent,c=c.deep);
var d=a.get(d),o,i=a._fixCloneAttributes,g;if(!d)return null;g=d.nodeType;o=d.cloneNode(c);if(g===k.ELEMENT_NODE||g===k.DOCUMENT_FRAGMENT_NODE)i&&g===k.ELEMENT_NODE&&i(d,o),c&&i&&e(i,d,o);f&&(l(d,o),c&&b&&e(l,d,o));return o},empty:function(d){var d=a.query(d),c,f;for(f=d.length-1;0<=f;f--)c=d[f],a.remove(c.childNodes)},_nodeListToFragment:g});a.outerHTML=a.outerHtml;var B=a._creators,F=a.create,x={area:"map",thead:"table",td:"tr",th:"tr",tr:"tbody",tbody:"table",tfoot:"table",caption:"table",colgroup:"table",
col:"colgroup",legend:"fieldset"},y;for(y in x)(function(d){B[y]=function(a,c){return F("<"+d+">"+a+"</"+d+">",void 0,c)}})(x[y]);x.option=x.optgroup=function(d,a){return F('<select multiple="multiple">'+d+"</select>",void 0,a)};return a});
KISSY.add("dom/base/data",["./api"],function(h,m){var n=m("./api"),q=h.Env.host,b="_ks_data_"+h.now(),e={},l={},g={applet:1,object:1,embed:1},a={hasData:function(a,d){if(a)if(void 0!==d){if(d in a)return!0}else if(!h.isEmptyObject(a))return!0;return!1}},j={hasData:function(c,d){return c==q?j.hasData(l,d):a.hasData(c[b],d)},data:function(a,d,f){if(a==q)return j.data(l,d,f);var e=a[b];if(void 0!==f)e=a[b]=a[b]||{},e[d]=f;else return void 0!==d?e&&e[d]:e=a[b]=a[b]||{}},removeData:function(a,d){if(a==
q)return j.removeData(l,d);var f=a[b];if(void 0!==d)delete f[d],h.isEmptyObject(f)&&j.removeData(a);else try{delete a[b]}catch(e){a[b]=void 0}}},k={hasData:function(c,d){var f=c[b];return!f?!1:a.hasData(e[f],d)},data:function(a,d,f){if(!g[a.nodeName.toLowerCase()]){var r=a[b];if(!r){if(void 0!==d&&void 0===f)return;r=a[b]=h.guid()}a=e[r];if(void 0!==f)a=e[r]=e[r]||{},a[d]=f;else return void 0!==d?a&&a[d]:a=e[r]=e[r]||{}}},removeData:function(a,d){var f=a[b],g;if(f)if(g=e[f],void 0!==d)delete g[d],
h.isEmptyObject(g)&&k.removeData(a);else{delete e[f];try{delete a[b]}catch(j){a[b]=void 0}a.removeAttribute&&a.removeAttribute(b)}}};h.mix(n,{__EXPANDO:b,hasData:function(a,d){for(var f=!1,b=n.query(a),e=0;e<b.length&&!(f=b[e],f=f.nodeType?k.hasData(f,d):j.hasData(f,d));e++);return f},data:function(a,d,f){var a=n.query(a),b=a[0];if(h.isPlainObject(d))for(var e in d)n.data(a,e,d[e]);else if(void 0===f){if(b)return b.nodeType?k.data(b,d):j.data(b,d)}else for(e=a.length-1;0<=e;e--)b=a[e],b.nodeType?
k.data(b,d,f):j.data(b,d,f)},removeData:function(a,d){var f=n.query(a),b,e;for(e=f.length-1;0<=e;e--)b=f[e],b.nodeType?k.removeData(b,d):j.removeData(b,d)},cleanData:function(a,d){var f=n.query(a),b,e,i=h.require("event/dom");for(e=f.length-1;0<=e;e--)if(b=f[e],b.nodeType){var g=d&&h.makeArray(b.getElementsByTagName("*"))||[];g.push(b);b=0;for(var s=g.length;b<s;b++)k.removeData(g[b]);i&&i.detach(g)}else j.removeData(b)}});return n});
KISSY.add("dom/base/insertion",["./api"],function(h,m){function n(d,f){var b=[],e,i,h;for(e=0;d[e];e++)if(i=d[e],h=a(i),i.nodeType===l.DOCUMENT_FRAGMENT_NODE)b.push.apply(b,n(j(i.childNodes),f));else if("script"===h&&(!i.type||c.test(i.type)))i.parentNode&&i.parentNode.removeChild(i),f&&f.push(i);else{if(i.nodeType===l.ELEMENT_NODE&&!g.test(h)){h=[];var s,p,w=i.getElementsByTagName("script");for(p=0;p<w.length;p++)s=w[p],(!s.type||c.test(s.type))&&h.push(s);k.apply(d,[e+1,0].concat(h))}b.push(i)}return b}
function q(a){a.src?h.getScript(a.src):(a=h.trim(a.text||a.textContent||a.innerHTML||""))&&h.globalEval(a)}function b(a,b,c,g){a=e.query(a);g&&(g=[]);a=n(a,g);e._fixInsertionChecked&&e._fixInsertionChecked(a);var b=e.query(b),i,z,j,p,k=b.length;if((a.length||g&&g.length)&&k){a=e._nodeListToFragment(a);1<k&&(p=e.clone(a,!0),b=h.makeArray(b));for(i=0;i<k;i++)z=b[i],a&&(j=0<i?e.clone(p,!0):a,c(j,z)),g&&g.length&&h.each(g,q)}}var e=m("./api"),l=e.NodeType,g=/^(?:button|input|object|select|textarea)$/i,
a=e.nodeName,j=h.makeArray,k=[].splice,c=/\/(java|ecma)script/i;h.mix(e,{_fixInsertionChecked:null,insertBefore:function(a,c,e){b(a,c,function(a,d){d.parentNode&&d.parentNode.insertBefore(a,d)},e)},insertAfter:function(a,c,e){b(a,c,function(a,d){d.parentNode&&d.parentNode.insertBefore(a,d.nextSibling)},e)},appendTo:function(a,c,e){b(a,c,function(a,d){d.appendChild(a)},e)},prependTo:function(a,c,e){b(a,c,function(a,d){d.insertBefore(a,d.firstChild)},e)},wrapAll:function(a,b){b=e.clone(e.get(b),!0);
a=e.query(a);a[0].parentNode&&e.insertBefore(b,a[0]);for(var c;(c=b.firstChild)&&1===c.nodeType;)b=c;e.appendTo(a,b)},wrap:function(a,b){a=e.query(a);b=e.get(b);h.each(a,function(a){e.wrapAll(a,b)})},wrapInner:function(a,b){a=e.query(a);b=e.get(b);h.each(a,function(a){var d=a.childNodes;d.length?e.wrapAll(d,b):a.appendChild(b)})},unwrap:function(a){a=e.query(a);h.each(a,function(a){a=a.parentNode;e.replaceWith(a,a.childNodes)})},replaceWith:function(a,b){var c=e.query(a),b=e.query(b);e.remove(b,!0);
e.insertBefore(b,c);e.remove(c)}});h.each({prepend:"prependTo",append:"appendTo",before:"insertBefore",after:"insertAfter"},function(a,b){e[b]=e[a]});return e});
KISSY.add("dom/base/offset",["./api"],function(h,m){function n(a){var b,c=a.ownerDocument.body;if(!a.getBoundingClientRect)return{left:0,top:0};b=a.getBoundingClientRect();a=b[d];b=b[f];a-=j.clientLeft||c.clientLeft||0;b-=j.clientTop||c.clientTop||0;return{left:a,top:b}}function q(a,d){var c={left:0,top:0},e=k(a),f,g=a,d=d||e;do{if(e==d){var h=g;f=n(h);h=k(h);f.left+=b[r](h);f.top+=b[t](h)}else f=n(g);c.left+=f.left;c.top+=f.top}while(e&&e!=d&&(g=e.frameElement)&&(e=e.parent));return c}var b=m("./api"),
e=h.Env.host,l=h.UA,g=e.document,a=b.NodeType,j=g&&g.documentElement,k=b.getWindow,c=Math.max,d="left",f="top",r="scrollLeft",t="scrollTop";h.mix(b,{offset:function(a,d,c){if(void 0===d){var a=b.get(a),e;a&&(e=q(a,c));return e}c=b.query(a);for(e=c.length-1;0<=e;e--){var a=c[e],f=d;"static"===b.css(a,"position")&&(a.style.position="relative");var g=q(a),h={},j=void 0,k=void 0;for(k in f)j=parseFloat(b.css(a,k))||0,h[k]=j+f[k]-g[k];b.css(a,h)}},scrollIntoView:function(c,e,g,j){var l,n,m,q;if(m=b.get(c)){e&&
(e=b.get(e));e||(e=m.ownerDocument);e.nodeType===a.DOCUMENT_NODE&&(e=k(e));h.isPlainObject(g)&&(j=g.allowHorizontalScroll,q=g.onlyScrollIfNeeded,g=g.alignWithTop);j=void 0===j?!0:j;n=h.isWindow(e);var c=b.offset(m),r=b.outerHeight(m);l=b.outerWidth(m);var t,y,u,v;n?(n=e,t=b.height(n),y=b.width(n),v={left:b.scrollLeft(n),top:b.scrollTop(n)},n=c[d]-v[d],m=c[f]-v[f],l=c[d]+l-(v[d]+y),c=c[f]+r-(v[f]+t)):(t=b.offset(e),y=e.clientHeight,u=e.clientWidth,v={left:b.scrollLeft(e),top:b.scrollTop(e)},n=c[d]-
(t[d]+(parseFloat(b.css(e,"borderLeftWidth"))||0)),m=c[f]-(t[f]+(parseFloat(b.css(e,"borderTopWidth"))||0)),l=c[d]+l-(t[d]+u+(parseFloat(b.css(e,"borderRightWidth"))||0)),c=c[f]+r-(t[f]+y+(parseFloat(b.css(e,"borderBottomWidth"))||0)));if(q){if(0>m||0<c)!0===g?b.scrollTop(e,v.top+m):!1===g?b.scrollTop(e,v.top+c):0>m?b.scrollTop(e,v.top+m):b.scrollTop(e,v.top+c)}else(g=void 0===g?!0:!!g)?b.scrollTop(e,v.top+m):b.scrollTop(e,v.top+c);if(j)if(q){if(0>n||0<l)!0===g?b.scrollLeft(e,v.left+n):!1===g?b.scrollLeft(e,
v.left+l):0>n?b.scrollLeft(e,v.left+n):b.scrollLeft(e,v.left+l)}else void 0===g||g?b.scrollLeft(e,v.left+n):b.scrollLeft(e,v.left+l)}},docWidth:0,docHeight:0,viewportHeight:0,viewportWidth:0,scrollTop:0,scrollLeft:0});h.each(["Left","Top"],function(c,d){var f="scroll"+c;b[f]=function(g,h){if("number"===typeof g)return arguments.callee(e,g);var g=b.get(g),j,l,n,m;g&&g.nodeType===a.ELEMENT_NODE?void 0!==h?g[f]=parseFloat(h):j=g[f]:(m=k(g),void 0!==h?(h=parseFloat(h),l="Left"===c?h:b.scrollLeft(m),n=
"Top"===c?h:b.scrollTop(m),m.scrollTo(l,n)):(j=m["page"+(d?"Y":"X")+"Offset"],"number"!==typeof j&&(l=m.document,j=l.documentElement[f],"number"!==typeof j&&(j=l.body[f]))));return j}});h.each(["Width","Height"],function(a){b["doc"+a]=function(d){d=b.get(d);d=b.getDocument(d);return c(d.documentElement["scroll"+a],d.body["scroll"+a],b["viewport"+a](d))};b["viewport"+a]=function(d){var d=b.get(d),c=k(d),d=c["inner"+a];if(l.mobile&&d)return d;var d="client"+a,c=c.document,e=c.body,f=c.documentElement[d];
return"CSS1Compat"===c.compatMode&&f||e&&e[d]||f}});return b});
KISSY.add("dom/base/style",["./api"],function(h,m){function n(a,d){return d.toUpperCase()}function q(a){return a.replace(s,"ms-").replace(x,n)}function b(a,d,c){var b={},e=a.style,f;for(f in d)b[f]=e[f],e[f]=d[f];c.call(a);for(f in d)e[f]=b[f]}function e(a,d,c){var b,e,f;if(!(3===a.nodeType||8===a.nodeType||!(b=a.style)))if(d=q(d),f=D[d],d=B[d]||d,void 0!==c){null===c||c===p?c=p:!isNaN(Number(c))&&!z[d]&&(c+=w);f&&f.set&&(c=f.set(a,c));if(void 0!==c){try{b[d]=c}catch(g){"css set error:"+g}c===p&&
b.removeAttribute&&b.removeAttribute(d)}b.cssText||a.removeAttribute("style")}else{if(!f||!("get"in f&&void 0!==(e=f.get(a,!1))))e=b[d];return void 0===e?"":e}}function l(a){var d,c=arguments;0!==a.offsetWidth?d=g.apply(void 0,c):b(a,L,function(){d=g.apply(void 0,c)});return d}function g(d,c,b){if(h.isWindow(d))return c===t?a.viewportWidth(d):a.viewportHeight(d);if(9===d.nodeType)return c===t?a.docWidth(d):a.docHeight(d);var e=c===t?["Left","Right"]:["Top","Bottom"],f=c===t?d.offsetWidth:d.offsetHeight;
if(0<f)return"border"!==b&&h.each(e,function(c){b||(f-=parseFloat(a.css(d,"padding"+c))||0);f="margin"===b?f+(parseFloat(a.css(d,b+c))||0):f-(parseFloat(a.css(d,"border"+c+"Width"))||0)}),f;f=a._getComputedStyle(d,c);if(null===f||0>Number(f))f=d.style[c]||0;f=parseFloat(f)||0;b&&h.each(e,function(c){f+=parseFloat(a.css(d,"padding"+c))||0;"padding"!==b&&(f+=parseFloat(a.css(d,"border"+c+"Width"))||0);"margin"===b&&(f+=parseFloat(a.css(d,b+c))||0)});return f}var a=m("./api"),j=h.Env.host,k=h.UA,c=h.Features,
d=a.nodeName,f=j.document,r=/^margin/,t="width",i="display"+h.now(),z={fillOpacity:1,fontWeight:1,lineHeight:1,opacity:1,orphans:1,widows:1,zIndex:1,zoom:1},s=/^-ms-/,p="",w="px",H=/\d(?!px)[a-z%]+$/i,D={},B={"float":"cssFloat"},F={},x=/-([a-z])/ig,y=f&&f.documentElement.style||{},u;h.each(["","Webkit","Moz","O","ms"],function(a){a=a?a+"UserSelect":"userSelect";void 0===u&&a in y&&(u=a)});if(c.isTransformSupported()){var v;v=B.transform=c.getTransformProperty();B.transformOrigin=v+"Origin"}c.isTransitionSupported()&&
(B.transition=c.getTransitionProperty());h.mix(a,{_camelCase:q,_cssHooks:D,_cssProps:B,_getComputedStyle:function(d,c){var b="",e,f,g,h,i;f=d.ownerDocument;c=B[c]||c;if(e=f.defaultView.getComputedStyle(d,null))b=e.getPropertyValue(c)||e[c];b===""&&!a.contains(f,d)&&(b=d.style[c]);if(a._RE_NUM_NO_PX.test(b)&&r.test(c)){i=d.style;f=i.width;g=i.minWidth;h=i.maxWidth;i.minWidth=i.maxWidth=i.width=b;b=e.width;i.width=f;i.minWidth=g;i.maxWidth=h}return b},style:function(d,c,b){var d=a.query(d),f,g=d[0];
if(h.isPlainObject(c))for(f in c)for(g=d.length-1;g>=0;g--)e(d[g],f,c[f]);else{if(b===void 0){f="";g&&(f=e(g,c,b));return f}for(g=d.length-1;g>=0;g--)e(d[g],c,b)}},css:function(d,c,b){var d=a.query(d),f=d[0],g;if(h.isPlainObject(c))for(g in c)for(f=d.length-1;f>=0;f--)e(d[f],g,c[g]);else{c=q(c);g=D[c];if(b===void 0){b="";if(f&&(!g||!("get"in g&&(b=g.get(f,true))!==void 0)))b=a._getComputedStyle(f,c);return typeof b==="undefined"?"":b}for(f=d.length-1;f>=0;f--)e(d[f],c,b)}},show:function(d){var d=
a.query(d),c,b,e;for(e=d.length-1;e>=0;e--){b=d[e];b.style.display=a.data(b,i)||p;if(a.css(b,"display")==="none"){c=b.tagName.toLowerCase();var g=void 0,h=F[c],j=void 0;if(!F[c]){g=f.body||f.documentElement;j=f.createElement(c);a.prepend(j,g);h=a.css(j,"display");g.removeChild(j);F[c]=h}c=h;a.data(b,i,c);b.style.display=c}}},hide:function(d){var d=a.query(d),c,b;for(b=d.length-1;b>=0;b--){c=d[b];var e=c.style,f=e.display;if(f!=="none"){f&&a.data(c,i,f);e.display="none"}}},toggle:function(d){var d=
a.query(d),c,b;for(b=d.length-1;b>=0;b--){c=d[b];a.css(c,"display")==="none"?a.show(c):a.hide(c)}},addStyleSheet:function(d,c,b){if(typeof d==="string"){b=c;c=d;d=j}var d=a.getDocument(d),e;if(b&&(b=b.replace("#",p)))e=a.get("#"+b,d);if(!e){e=a.create("<style>",{id:b},d);a.get("head",d).appendChild(e);e.styleSheet?e.styleSheet.cssText=c:e.appendChild(d.createTextNode(c))}},unselectable:function(c){var c=a.query(c),b,e,f=0,g,i;for(e=c.length-1;e>=0;e--){b=c[e];i=b.style;if(u!==void 0)i[u]="none";else if(k.ie){i=
b.getElementsByTagName("*");b.setAttribute("unselectable","on");for(g=["iframe","textarea","input","select"];b=i[f++];)h.inArray(d(b),g)||b.setAttribute("unselectable","on")}}},innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0,width:0,height:0});h.each([t,"height"],function(d){a["inner"+h.ucfirst(d)]=function(c){return(c=a.get(c))&&l(c,d,"padding")};a["outer"+h.ucfirst(d)]=function(c,b){var e=a.get(c);return e&&l(e,d,b?"margin":"border")};a[d]=function(c,b){var e=a.css(c,d,b);e&&(e=parseFloat(e));
return e};D[d]={get:function(a,c){var b;c&&(b=l(a,d)+"px");return b}}});var L={position:"absolute",visibility:"hidden",display:"block"};h.each(["left","top"],function(d){D[d]={get:function(c,b){var e,g,h;if(b){h=a.css(c,"position");if(h==="static")return"auto";e=a._getComputedStyle(c,d);if((g=e==="auto")&&h==="relative")return"0px";if(g||H.test(e)){h={top:0,left:0};if(a.css(c,"position")==="fixed")g=c.getBoundingClientRect();else{for(e=c.offsetParent||(c.ownerDocument||f).body;e&&!M.test(e.nodeName)&&
a.css(e,"position")==="static";)e=e.offsetParent;g=a.offset(c);h=a.offset(e);h.top=h.top+(parseFloat(a.css(e,"borderTopWidth"))||0);h.left=h.left+(parseFloat(a.css(e,"borderLeftWidth"))||0)}g.top=g.top-(parseFloat(a.css(c,"marginTop"))||0);g.left=g.left-(parseFloat(a.css(c,"marginLeft"))||0);e={top:g.top-h.top,left:g.left-h.left}[d]+"px"}}return e}}});var M=/^(?:body|html)$/i;return a});
KISSY.add("dom/base/selector",["./api"],function(h,m){function n(a){var d=this.length,c;for(c=0;c<d&&!1!==a(this[c],c);c++);}function q(a){a=a.substr(1);if(!a)throw Error("An invalid or illegal string was specified for selector.");return a}function b(a){return function(b){var e=c._getElementById(a,d);return e&&c._contains(b,e)?[e]:[]}}function e(a){return function(c){return c.getElementsByClassName(a)}}function l(a){return function(c){return c.getElementsByTagName(a)}}function g(a,f){var j,k,o="string"===
typeof a,m=void 0!==f?g(f):(k=1)&&[d],r=m.length;if(a)if(o){a=y(a);if(k)if("body"===a)j=[d.body];else if(H.test(a)&&t)j=d.getElementsByClassName(RegExp.$1);else if(F.test(a))j=(k=c._getElementById(RegExp.$2,d))&&k.nodeName.toLowerCase()===RegExp.$1?[k]:[];else if(D.test(a))j=(k=c._getElementById(a.substr(1),d))?[k]:[];else if(B.test(a))j=d.getElementsByTagName(a);else if(!a.match(/,|\+|=|~|\[|\]|:|>|\||\$|\^|\*|\(|\)|[\w-]+\.[\w-]+|[\w-]+#[\w-]+/)&&t){j=a.split(/\s+/);var p=m,A,x;k=0;for(o=j.length;k<
o;k++){A=j;x=k;var E;E=j[k];var I=E.charAt(0);E="#"===I?b(q(E)):"."===I?e(q(E)):l(E);A[x]=E}k=0;for(o=j.length;k<o;k++){E=j[k];var I=[],K;A=0;for(x=p.length;A<x;A++)K=E(p[A]),I.push.apply(I,h.makeArray(K));p=I;if(!p.length)break}j=p&&1<p.length?c.unique(p):p}if(!j){j=[];for(k=0;k<r;k++)w.apply(j,c._selectInternal(a,m[k]));1<j.length&&1<r&&c.unique(j)}}else{if(j=a.nodeType||a.setTimeout?[a]:a.getDOMNodes?a.getDOMNodes():i(a)?a:s(a)?z(a):[a],!k){o=j;A=o.length;j=[];for(k=0;k<A;k++)for(p=0;p<r;p++)if(c._contains(m[p],
o[k])){j.push(o[k]);break}}}else j=[];j.each=n;return j}function a(a,c){var d=a&&j(a,"class");return d&&(d=d.replace(/[\r\t\n]/g,p))&&-1<(p+d+p).indexOf(p+c+p)}function j(a,c){var d=a&&a.getAttributeNode(c);if(d&&d.specified)return d.nodeValue}function k(a,c){return"*"===c||a.nodeName.toLowerCase()===c.toLowerCase()}var c=m("./api"),d=h.Env.host.document,f=d.documentElement,r=f.matches||f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector,t="getElementsByClassName"in
d,i=h.isArray,z=h.makeArray,s=c.isDomNodeList,p=" ",w=Array.prototype.push,H=/^\.([\w-]+)$/,D=/^#([\w-]+)$/,B=/^([\w-])+$/,F=/^([\w-]+)#([\w-]+)$/,x=/^(?:#([\w-]+))?\s*([\w-]+|\*)?\.?([\w-]+)?$/,y=h.trim;h.mix(c,{_compareNodeOrder:function(a,c){return!a.compareDocumentPosition||!c.compareDocumentPosition?a.compareDocumentPosition?-1:1:a.compareDocumentPosition(c)&4?-1:1},_getElementsByTagName:function(a,c){return h.makeArray(c.querySelectorAll(a))},_getElementById:function(a,c){return c.getElementById(a)},
_getSimpleAttr:j,_isTag:k,_hasSingleClass:a,_matchesInternal:function(a,c){for(var d=[],b=0,e,f=c.length;b<f;b++)e=c[b],r.call(e,a)&&d.push(e);return d},_selectInternal:function(a,c){return z(c.querySelectorAll(a))},query:g,get:function(a,c){return g(a,c)[0]||null},unique:function(){function a(b,e){return b===e?(d=!0,0):c._compareNodeOrder(b,e)}var d,b=!0;[0,0].sort(function(){b=!1;return 0});return function(c){d=b;c.sort(a);if(d)for(var e=1,f=c.length;e<f;)c[e]===c[e-1]?(c.splice(e,1),--f):e++;return c}}(),
filter:function(d,b,e){var d=g(d,e),f,i,l,m,e=[];if("string"===typeof b&&(b=y(b))&&(l=x.exec(b)))f=l[1],i=l[2],m=l[3],f?f&&!i&&!m&&(b=function(a){return j(a,"id")===f}):b=function(c){var d=!0,b=!0;i&&(d=k(c,i));m&&(b=a(c,m));return b&&d};return e="function"===typeof b?h.filter(d,b):c._matchesInternal(b,d)},test:function(a,d,b){a=g(a,b);return a.length&&c.filter(a,d,b).length===a.length}});return c});
KISSY.add("dom/base/traversal",["./api"],function(h,m){function n(b,a,j,k,c,d,f){if(!(b=e.get(b)))return null;if(0===a)return b;d||(b=b[j]);if(!b)return null;c=c&&e.get(c)||null;void 0===a&&(a=1);var d=[],m=h.isArray(a),n,i;"number"===typeof a&&(n=0,i=a,a=function(){return++n===i});for(;b&&b!==c;){if((b.nodeType===l.ELEMENT_NODE||b.nodeType===l.TEXT_NODE&&f)&&q(b,a)&&(!k||k(b)))if(d.push(b),!m)break;b=b[j]}return m?d:d[0]||null}function q(b,a){if(!a)return!0;if(h.isArray(a)){var j,k=a.length;if(!k)return!0;
for(j=0;j<k;j++)if(e.test(b,a[j]))return!0}else if(e.test(b,a))return!0;return!1}function b(b,a,j,k){var c=[],d,f;if((d=b=e.get(b))&&j)d=b.parentNode;if(d){j=h.makeArray(d.childNodes);for(d=0;d<j.length;d++)f=j[d],(k||f.nodeType===l.ELEMENT_NODE)&&f!==b&&c.push(f);a&&(c=e.filter(c,a))}return c}var e=m("./api"),l=e.NodeType;h.mix(e,{_contains:function(b,a){return!!(b.compareDocumentPosition(a)&16)},closest:function(b,a,e,h){return n(b,a,"parentNode",function(a){return a.nodeType!==l.DOCUMENT_FRAGMENT_NODE},
e,!0,h)},parent:function(b,a,e){return n(b,a,"parentNode",function(a){return a.nodeType!==l.DOCUMENT_FRAGMENT_NODE},e,void 0)},first:function(b,a,h){b=e.get(b);return n(b&&b.firstChild,a,"nextSibling",void 0,void 0,!0,h)},last:function(b,a,h){b=e.get(b);return n(b&&b.lastChild,a,"previousSibling",void 0,void 0,!0,h)},next:function(b,a,e){return n(b,a,"nextSibling",void 0,void 0,void 0,e)},prev:function(b,a,e){return n(b,a,"previousSibling",void 0,void 0,void 0,e)},siblings:function(e,a,h){return b(e,
a,!0,h)},children:function(e,a){return b(e,a,void 0)},contents:function(e,a){return b(e,a,void 0,1)},contains:function(b,a){b=e.get(b);a=e.get(a);return b&&a?e._contains(b,a):!1},index:function(b,a){var j=e.query(b),k,c=0;k=j[0];if(!a){j=k&&k.parentNode;if(!j)return-1;for(;k=k.previousSibling;)k.nodeType===l.ELEMENT_NODE&&c++;return c}c=e.query(a);return"string"===typeof a?h.indexOf(k,c):h.indexOf(c[0],j)},equals:function(b,a){b=e.query(b);a=e.query(a);if(b.length!==a.length)return!1;for(var h=b.length;0<=
h;h--)if(b[h]!==a[h])return!1;return!0}});return e});KISSY.add("dom/base","./base/api,./base/attr,./base/class,./base/create,./base/data,./base/insertion,./base/offset,./base/style,./base/selector,./base/traversal".split(","),function(h,m){var n=m("./base/api");m("./base/attr");m("./base/class");m("./base/create");m("./base/data");m("./base/insertion");m("./base/offset");m("./base/style");m("./base/selector");m("./base/traversal");h.mix(h,{DOM:n,get:n.get,query:n.query});return n});