
(function(){var doc=document,de=doc.documentElement,win=window,isReady=false,op={};function ready(){if(isReady)
return;if(!doc.body){return setTimeout(ready,1);}
isReady=true;ready.callBack();}
function onDomReady(cb){ready.callBack=cb;if(doc.readyState==="complete"){return setTimeout(ready,1);}
if(doc.addEventListener){doc.addEventListener('DOMContentLoaded',function(){doc.removeEventListener('DOMContentLoaded',arguments.callee,false);ready();},false);win.addEventListener("load",ready,false);}else{if(doc.attachEvent){doc.attachEvent('onreadystatechange',function(){if(doc.readyState==="complete"){doc.detachEvent("onreadystatechange",arguments.callee);ready();}})
win.attachEvent("onload",ready);function scrollCheck(){try{de.doScroll('left');}catch(e){setTimeout(scrollCheck,10);return;}
ready();}
var topLev=false;try{topLev=win.frameElement==null;}catch(e){}
if(topLev&&de.doScroll){scrollCheck();}}else{win.onload=ready;}}}
function getScript(r){var b=getElem(doc,"script"),q=[],p;for(p=0;p<b.length;p++){var d=b[p].src;if(d.search(r)>=0){q.push(b[p])}}
return q}
function getElemByTagName(d,tagName){return d.getElementsByTagName(tagName);}
function getElem(d,tagName,claName,cb){var p=getElemByTagName(d,tagName),q,i=0,r=[],temp=[],bf=(typeof cb=='function');for(var k=0;k<p.length;k++){temp.push(p[k]);}
for(;q=temp[i];i++){if(!claName||q.className.search(new RegExp("\\b"+claName+"\\b"))!=-1){r.push(q);bf&&cb(q);}}
return r;}
function getQuery(s){var u=s.indexOf("?");if(u){s=s.substring(u+1)}
u=s.indexOf("#");if(u){s=s.substring(u+1)}
var ser=s.split('&'),vs={};for(var i=0;i<ser.length;i++){var t=ser[i].split('=');vs[t[0]]=t[1];}
return vs;}
function getParamter(name,l){l=l||location.href;var r=new RegExp("(\\?|#|&)"+name+"=([^&#]*)(&|#|$)");var m=l.match(r);return(!m?"":m[2]);}
function getOption(s){s&&(op=getQuery(s.src));}
function domCallBack(dom){getOption(getScript(/\/qzlike\/qzopensl\.js/)[0]);var pn=(dom.pathname||'').toLowerCase();var los=dom.search,w=getParamter('width',los)||op.width||130,h=getParamter('height',los)||op.height||30,otype='',style=getParamter('style',los)||op.style||'',showcount=getParamter('showcount',los)||op.showcount||'';otype=getParamter('otype',los)||(pn.indexOf('cgi-bin/qzshare/cgi_qzshare_onekey')!=-1?'share':pn.indexOf('cgi-bin/qzshare/cgi_qzshare_likeurl')!=-1?'like':'');var osStr=[getParamter('style',los)?'':'&style='+style,getParamter('otype',los)?'':'&otype='+otype,getParamter('showcount',los)?'':'&showcount='+showcount].join('');var di=doc.createElement('div');di.innerHTML=['<iframe version="1.0" src="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_likeurl',dom.search,dom.search?'':'?url='+encodeURIComponent(location.href),osStr,'" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:',w,'px; height:',h,'px;" allowTransparency="true"><\/iframe>'].join('');dom.parentNode.replaceChild(di.firstChild,dom);di=null;}
function loadAdtagScript(){var s=doc.createElement("script"),hs=doc.getElementsByTagName("head"),h=(hs&&hs[0]);s.src='http://tajs.qq.com/qc.php?dm='+location.host,s.type="text/javascript",s.charset="utf-8";(h||doc.body).appendChild(s);}
if(typeof win.qzOpener=='undefined'||!qzOpener.inited){win.qzOpener=win.qzOpener||{};qzOpener.setAttr=function(o){if(typeof o=='object'){for(var i in o){qzOpener[i]=o[i];}}}
qzOpener.inited=true;onDomReady(function(){getElem(doc,'a','qzOpenerDiv',domCallBack);if(!win.__tencent_adtag__){setTimeout(loadAdtagScript,3000);win.__tencent_adtag__=true;}});}})();/*  |xGv00|509766c31cce5961aec206e3d34da9c8 */