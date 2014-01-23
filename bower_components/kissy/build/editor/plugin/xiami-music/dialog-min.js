/*
Copyright 2013, KISSY v1.41
MIT Licensed
build time: Dec 9 22:43
*/
KISSY.add("editor/plugin/xiami-music/dialog",["editor","../flash/dialog","../menubutton"],function(f,l){function m(){m.superclass.constructor.apply(this,arguments)}function j(e,a,f){return'<a class="{prefixCls}editor-xiami-page-item {prefixCls}editor-button ks-inline-block'+(e===a?" {prefixCls}editor-xiami-curpage":"")+'" data-value="'+a+'" href="#">'+(f||a)+"</a>"}var n=l("editor"),q=l("../flash/dialog"),r=l("../menubutton"),o=f.DOM,s=f.Node,t=n.Utils.debugUrl("theme/tao-loading.gif"),u="http://www.xiami.com/app/nineteen/search/key/{key}/page/{page}",
p="\u8f93\u5165\u6b4c\u66f2\u540d\u3001\u4e13\u8f91\u540d\u3001\u827a\u4eba\u540d";f.extend(m,q,{_config:function(){var e=this.editor.get("prefixCls");this._cls="ke_xiami";this._type="xiami-music";this._title="\u867e\u7c73\u97f3\u4e50";this._bodyHTML=f.substitute('<div style="padding:40px 0 70px 0;"><form action="#" class="{prefixCls}editor-xiami-form" style="margin:0 20px;"><p class="{prefixCls}editor-xiami-title"></p><p class="{prefixCls}editor-xiami-url-wrap"><input class="{prefixCls}editor-xiami-url {prefixCls}editor-input" style="width:370px;"/> &nbsp;  <a class="{prefixCls}editor-xiami-submit {prefixCls}editor-button ks-inline-block">\u641c \u7d22</a></p><p style="margin:10px 0"><label>\u5bf9 \u9f50\uff1a <select class="{prefixCls}editor-xiami-align" title="\u5bf9\u9f50"><option value="none">\u65e0</option><option value="left">\u5de6\u5bf9\u9f50</option><option value="right">\u53f3\u5bf9\u9f50</option></select></label><label style="margin-left:70px;">\u95f4\u8ddd\uff1a  <input  data-verify="^\\d+$"  data-warning="\u95f4\u8ddd\u8bf7\u8f93\u5165\u975e\u8d1f\u6574\u6570" class="{prefixCls}editor-xiami-margin {prefixCls}editor-input" style="width:60px;" value="0"/> \u50cf\u7d20</label></p></form><div class="{prefixCls}editor-xiami-list"></div></div>',
{prefixCls:e});this._footHTML=f.substitute('<div style="padding:5px 20px 20px;"><a class="{prefixCls}editor-xiami-ok {prefixCls}editor-button ks-inline-block" style="margin-right:20px;">\u786e&nbsp;\u5b9a</a><a class="{prefixCls}editor-xiami-cancel {prefixCls}editor-button ks-inline-block">\u53d6&nbsp;\u6d88</a></div>',{prefixCls:e})},_initD:function(){function e(c){var b=h.val();if(30<b.replace(/[^\x00-\xff]/g,"@@").length)window.alert("\u957f\u5ea6\u4e0a\u965030\u4e2a\u5b57\u7b26\uff081\u4e2a\u6c49\u5b57=2\u4e2a\u5b57\u7b26\uff09");else if(!f.trim(b)||b===p)window.alert("\u4e0d\u80fd\u4e3a\u7a7a\uff01");else{a._xiamiSubmit.addClass(d+
"editor-button-disabled",void 0);var e=f.substitute(u,{key:encodeURIComponent(h.val()),page:c});a._xiamiaList.html('<img style="display:block;width:32px;height:32px;margin:5px auto 0 auto;" src="'+t+'"/><p style="width: 130px; margin: 15px auto 0; color: rgb(150, 150, 150);">\u6b63\u5728\u641c\u7d22\uff0c\u8bf7\u7a0d\u5019......</p>');a._xiamiaList.show();f.use("io",function(b,f){f({cache:!1,url:e,dataType:"jsonp",success:function(b){b.page=c;a._listSearch(b)},error:function(){a._xiamiSubmit.removeClass(d+"editor-button-disabled",void 0);
a._xiamiaList.html('<p style="text-align:center;margin:10px 0;">\u4e0d\u597d\u610f\u601d\uff0c\u8d85\u65f6\u4e86\uff0c\u8bf7\u91cd\u8bd5\uff01</p>')}})})}}var a=this,g=a.editor,d=g.get("prefixCls"),c=a.dialog,b=c.get("el"),i=c.get("footer"),h=b.one("."+d+"editor-xiami-url");a.dAlign=r.Select.decorate(b.one("."+d+"editor-xiami-align"),{prefixCls:"ks-editor-big-",width:80,menuCfg:{prefixCls:"ks-editor-",render:b}});a.addRes(a.dAlign);a._xiamiInput=h;n.Utils.placeholder(h,p);a.addRes(h);a._xiamiaList=b.one("."+d+"editor-xiami-list");a._xiamiSubmit=b.one("."+d+"editor-xiami-submit");
a._xiamiSubmit.on("click",function(b){a._xiamiSubmit.hasClass("ks-editor-button-disabled",void 0)||e(1);b.halt()});a.addRes(a._xiamiSubmit);h.on("keydown",function(a){13===a.keyCode&&e(1)});a.dMargin=b.one("."+d+"editor-xiami-margin");a._xiamiUrlWrap=b.one("."+d+"editor-xiami-url-wrap");a._xiamiTitle=b.one("."+d+"editor-xiami-title");b=i.one("."+d+"editor-xiami-ok");i.one("."+d+"editor-xiami-cancel").on("click",function(a){c.hide();a.halt()});a.addRes(i);b.on("click",function(b){var c=a.selectedFlash,
d=g.restoreRealElement(c);a._dinfo={url:a._getFlashUrl(d),attrs:{title:c.attr("title"),style:"margin:"+(parseInt(a.dMargin.val())||0)+"px;float:"+a.dAlign.get("value")+";"}};a._gen();b.halt()},a);a.addRes(b);a._xiamiaList.on("click",function(b){b.preventDefault();var c=new s(b.target),f=c.closest(function(b){return a._xiamiaList.contains(b)&&o.hasClass(b,d+"editor-xiami-add")},void 0),c=c.closest(function(b){return a._xiamiaList.contains(b)&&o.hasClass(b,d+"editor-xiami-page-item")},void 0);f?(a._dinfo=
{url:"http://www.xiami.com/widget/"+f.attr("data-value")+"/singlePlayer.swf",attrs:{title:f.attr("title"),style:"margin:"+(parseInt(a.dMargin.val())||0)+"px;float:"+a.dAlign.get("value")+";"}},a._gen()):c&&e(parseInt(c.attr("data-value")));b.halt()});a.addRes(a._xiamiaList)},_listSearch:function(e){var a,g=this.editor.get("prefixCls"),d=e.results,c="";if(e.key===f.trim(this._xiamiInput.val())){this._xiamiSubmit.removeClass(g+"editor-button-disabled",void 0);if(d&&d.length){c="<ul>";for(a=0;a<d.length;a++){var b=
d[a],i=f.urlDecode(b.song_name)+" - "+f.urlDecode(b.artist_name),h='<li title="'+i+'"><span class="'+g+'editor-xiami-song">',k=i;35<k.length&&(k=k.substring(0,35)+"...");c+=h+k+'</span><a href="#" title="'+i+'" class="'+g+'editor-xiami-add" data-value="'+(b.album_id+"_"+b.song_id)+'">\u6dfb\u52a0</a></li>'}c+="</ul>";d=e.page;e=Math.floor(e.total/8);a=d-1;b=d+1;if(1<e){c+='<p class="'+g+'editor-xiami-paging">';2>=a&&(b=Math.min(2-a+b,e-1),a=2);b=Math.min(b,e-1);b===e-1&&(a=Math.max(2,b-3));1!==d&&(c+=j(d,d-
1,"\u4e0a\u4e00\u9875"));c+=j(d,1,"1");for(2!==a&&(c+='<span class="'+g+'editor-xiami-page-more">...</span>');a<=b;a++)c+=j(d,a,void 0);b!==e&&(b!==e-1&&(c+='<span class="'+g+'editor-xiami-page-more">...</span>'),c+=j(d,e,e));d!==e&&(c+=j(d,d+1,"\u4e0b\u4e00\u9875"));c+="</p>"}}else c='<p style="text-align:center;margin:10px 0;">\u4e0d\u597d\u610f\u601d\uff0c\u6ca1\u6709\u627e\u5230\u7ed3\u679c\uff01</p>';this._xiamiaList.html(f.substitute(c,{prefixCls:g}))}},_updateD:function(){var e=this.editor.get("prefixCls"),a=this.selectedFlash;a?(this._xiamiInput.val(a.attr("title")),this._xiamiTitle.html(a.attr("title")),
this.dAlign.set("value",a.css("float")),this.dMargin.val(parseInt(a.style("margin"))||0),this._xiamiUrlWrap.hide(),this.dialog.get("footer").show(),this._xiamiTitle.show()):(n.Utils.resetInput(this._xiamiInput),this.dAlign.set("value","none"),this.dMargin.val(0),this._xiamiUrlWrap.show(),this.dialog.get("footer").hide(),this._xiamiTitle.hide(),this._xiamiSubmit.removeClass(e+"editor-button-disabled",void 0));this._xiamiaList.hide();this._xiamiaList.html("")},_getDInfo:function(){f.mix(this._dinfo.attrs,
{width:257,height:33});return this._dinfo}});return m});