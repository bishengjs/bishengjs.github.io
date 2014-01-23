/*
Copyright 2013, KISSY v1.41
MIT Licensed
build time: Dec 4 22:19
*/
KISSY.add("xtemplate/runtime/scope",[],function(g){function l(e,f){this.data=e||{};this.affix=f;this.root=this}l.prototype={isScope:1,setParent:function(e){this.parent=e;this.root=e.root},getParent:function(){return this.parent},getRoot:function(){return this.root},set:function(e,f){this.affix||(this.affix={});this.affix[e]=f},setData:function(e){this.data=e},getData:function(){return this.data},mix:function(e){this.affix||(this.affix={});g.mix(this.affix,e)},has:function(e){var f=this.data,h=this.affix;
return h&&e in h?!0:"object"===typeof f&&e in f},get:function(e){var f=this.data,h=this.affix;if(h&&e in h)return h[e];if("object"===typeof f&&e in f)return f[e]},resolve:function(e,f){"."===e&&(e="this");var h=e.split("."),d=this,a,b,c,g,k;if("root"===h[0])h.shift(),d=d.root;else if(f)for(;d&&f--;)d=d.parent;var i=0;for(a=h.length;d;){k=1;c=d;for(b=0;b<a;b++)if(g=h[b],"this"===g)i=1;else if(c===d){if(!d.has(g)){k=0;break}c=d.get(g)}else{if("object"!==typeof c||!(g in c)){k=0;break}c=c[g]}if(k)return c&&
c.isScope&&(c=c.data),"function"===typeof c&&(c=c.call(this.data)),[c];if(i)break;d=d.parent}return!1}};return l});
KISSY.add("xtemplate/runtime/commands",["path","./scope"],function(g,l){var e,f=l("path"),h=l("./scope");return e={each:function(d,a){var b=a.params,c=b[0],e=b[2]||"xindex",b=b[1],f="",i,j,m;if(c)if(j=new h,g.isArray(c)){i=c.length;for(var n=0;n<i;n++)j.data=c[n],m=j.affix={xcount:i},m[e]=n,b&&(m[b]=c[n]),j.setParent(d),f+=a.fn(j)}else for(i in c)j.data=c[i],m=j.affix={},m[e]=i,b&&(m[b]=c[i]),j.setParent(d),f+=a.fn(j);else a.inverse&&(f=a.inverse(d));return f},"with":function(d,a){var b=a.params[0],
c="";b?(b=new h(b),b.setParent(d),c=a.fn(b)):a.inverse&&(c=a.inverse(d));return c},"if":function(d,a){var b="";a.params[0]?a.fn&&(b=a.fn(d)):a.inverse&&(b=a.inverse(d));return b},set:function(d,a){d.mix(a.hash);return""},include:function(d,a){var b=a.params;if(!b||1!==b.length)return"include must has one param","";if(a.hash){var c=new h(a.hash);c.setParent(d);d=c}c=this.config.name;b=b[0];if("."===b.charAt(0)){if("unspecified"===c)return"parent template does not have name for relative sub tpl name: "+
b,"";b=f.resolve(c,"../",b)}c=this.config.loader.call(this,b);a=g.merge(this.config);a.name=b;a.commands=this.config.commands;a.macros=this.config.macros;return this.invokeEngine(c,d,a)},macro:function(d,a){var b=a.params,c=b[0],e=b.slice(1),b=this.config.macros;if(a.fn)b[c]||(b[c]={paramNames:e,fn:a.fn});else{var f={};(c=b[c])||"can not find macro:"+name;g.each(c.paramNames,function(b,j){f[b]=e[j]});b=new h(f);return c.fn.call(this,b)}return""},parse:function(d,a){return e.include.call(this,new h,
a)}}});
KISSY.add("xtemplate/runtime",["./runtime/commands","./runtime/scope"],function(g,l){function e(j){j}function f(j,b){for(var c=b.split("."),a=j,e=c.length,d=0;d<e&&!(a=a[c[d]],!a);d++);return a}function h(j,b,c,a,d,e){var g,h=f(j.config.commands,a);if(h){try{g=h.call(j,b,c)}catch(i){i.message+': "'+a+'" at line '+d}return{find:!0,value:g}}e&&"can not find command: "+a+'" at line '+d;return{find:!1}}function d(j,b,a,c,d){var f,j=j.config.silent?e:g.error,b=b.resolve(a,c);!1===b?j('can not find property: "'+a+
'" at line '+d,"warn"):f=b[0];return f}function a(j,a){this.tpl=j;a=g.merge(i,a);a.commands=g.merge(a.commands,b);a.utils=k;a.macros=a.macros||{};this.config=a}var b=l("./runtime/commands"),c=l("./runtime/scope"),p=g.escapeHtml,k={runBlockCommand:function(a,b,c,d,h){var i=a.config,l=i.silent?e:g.error,i=i.commands,o=f(i,d);if(!o)if(!c.params&&!c.hash){var k=b.resolve(d);!1===k?(l('can not find property: "'+d+'" at line '+h),k=""):k=k[0];o=i["if"];g.isArray(k)?o=i.each:"object"===typeof k&&(o=i["with"]);
c.params=[k]}else return"can not find command: "+d+'" at line '+h,"";var q;try{q=o.call(a,b,c)}catch(p){p.message+': "'+d+'" at line '+h}return q},renderOutput:function(a,b){void 0===a&&(a="");return b&&a?p(a):a},getProperty:function(a,b,c,e,f){return d(a,b,c,e,f)},runInlineCommand:function(a,b,c,d,e){var f="",a=h(a,b,c,d,e);a.find&&(f=a.value);return f},getPropertyOrRunCommand:function(a,b,c,e,f,g){var i,k=c.hash||c.params,c=h(a,b,c,e,g,k);c.find?i=c.value:k||(i=d(a,b,e,f,g));return i}},i={silent:!0,
name:"unspecified",loader:function(a){var b=g.require(a);b||'template "'+a+'" does not exist, need to be required or used first!';return b}};g.mix(a,{commands:b,utils:k,addCommand:function(a,c){b[a]=c},removeCommand:function(a){delete b[a]}});a.prototype={constructor:a,invokeEngine:function(a,b,c){return(new this.constructor(a,c)).render(b,!0)},removeCommand:function(a){delete this.config.commands[a]},addCommand:function(a,b){this.config.commands[a]=b},render:function(a){var b=a;if(!b||!b.isScope)b=
new c(a);return this.tpl(b,g)}};a.Scope=c;return a});