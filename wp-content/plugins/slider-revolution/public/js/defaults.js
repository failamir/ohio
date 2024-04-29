!function(){"use strict";if(window.SR7??={},window._tpt??={},SR7.F??={},SR7.D??={},SR7.E??={},void 0!==SR7.D.contentOBJ)return;SR7.D.streamTypes??=["flickr","facebook","instagram","twitter","vimeo","youtube","woo","post"],SR7.D.bgTypes??=["transparent","color","image","video"],SR7.D.BRAD=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],SR7.D.BWID=["borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth"],SR7.D.DL=["Top","Right","Bottom","Left"],SR7.D.DLs=["top","right","bottom","left"],SR7.D.DS=["t","r","b","l"],SR7.D.DA=["bottom","top","left","right","center","middle"],SR7.D.spacings=["margin","padding"],SR7.D.olevels={largedesktop:0,desktop:1,notebook:2,tablet:3,mobile:4,nobreak:5},SR7.D.tagLib={text:"SR7-TXT",button:"SR7-BTN",row:"SR7-ROW",column:"SR7-COL",group:"SR7-GRP",shape:"SR7-SHP",image:"SR7-IMG",svg:"SR7-SVG",zone:"SR7-ZONE",linebreak:"SR7-LINEBRK"},SR7.D.dFV={blur:"0px",brightness:"100%",grayscale:"0%",sepia:"0%",invert:"0%"},SR7.D.dFVC={blur:"b",brightness:"r",grayscale:"g",sepia:"s",invert:"i"},SR7.D.splits=["words","chars","lines"],SR7.D.TLTargets=["words","lines","chars","content","mask","filter","clip","loop","pan"],SR7.D.TLTargetsProcess=["clip","mask","words","lines","chars","content","filter","loop","pan"],SR7.D.animAttr=["x","y","z","opacity","scaleX","scaleY","skewX","skewY","rotate","rotationX","rotationY","rotationZ"],SR7.D.animAttrTrans={x:"x",y:"y",z:"z",opacity:"o",scaleX:"sX",scaleY:"sY",skewX:"skX",skewY:"skY",rotate:"rZ",rotationZ:"rZ",rotationX:"rX",rotationY:"rY"},SR7.D.subsets={"cyrillic-ext":{start:1120,end:1327},cyrillic:{start:1024,end:1279},"greek-ext":{start:7936,end:8191},greek:{start:880,end:1023},vietnamese:{start:258,end:423},"latin-ext":{start:256,end:591},latin:{start:0,end:255}},SR7.D.modulStreamOBJ={post:{excerptLimit:55,maxPosts:30,fetchType:"cat_tag",category:"",sortBy:"ID",types:"post",list:"",sortDirection:"DESC",subType:"post"},woo:{excerptLimit:55,maxProducts:30,featuredOnly:!1,inStockOnly:!1,category:"",sortBy:"ID",types:"product",sortDirection:"DESC",regPriceFrom:"",regPriceTo:"",salePriceFrom:"",salePriceTo:""},instagram:{count:8,hashTag:"",transient:1200,type:"user",userId:"",token_source:"account",connect_with:""},facebook:{album:"",appId:"",appSecret:"",count:8,transient:1200,typeSource:"timeline",token_source:"account",connect_with:"",page_id:""},flickr:{apiKey:"",count:8,galleryURL:"",groupURL:"",photoSet:"",transient:1200,type:"publicphotos",userURL:""},twitter:{accessSecret:"",accessToken:"",consumerKey:"",consumerSecret:"",count:8,excludeReplies:!1,imageOnly:!1,includeRetweets:!1,transient:1200,userId:""},vimeo:{albumId:"",channelName:"",count:8,transient:1200,groupName:"",typeSource:"user",userName:""},youtube:{api:"",channelId:"",count:8,playList:"",transient:1200,typeSource:"channel"}},SR7.D.fixSR6IDs=(e,t)=>{if(!SR7.E.v6v7ids)return e;return t?SR7.E.v6v7ids?.s?.[parseInt(e)||9999999]??e:SR7.E.v6v7ids?.n?.[parseInt(e)||9999999]??e},SR7.D.contentOBJ=function(e,t){t=null==t?"color"==e?"#ffffff":{}:t;var a="image"==e?{ratio:t.ratio??1,src:t.src??"",lib:t.lib??"",lib_id:t.lib_id??"",lib_size:t.lib_size??"full",fromStream:t.fromStream??!1,streamType:t.streamType??"gallery",pos:{x:t.pos?.x??"50%",y:t.pos?.y??"50%"},repeat:t.repeat??"no-repeat",size:t.size??"cover",sizeVal:t.sizeVal??"100%",seo:t.seo??!1}:"color"==e?t:"text"==e?{text:t.text??"",ph:t.ph??"",deco:t.deco??"none",trans:t.trans??"none"}:"svg"==e?{oC:t.oC??!1,color:t.color??["#fff","#fff","#fff","#fff","#fff"],all:t.all??!1,stroke:{c:t.stroke?.c??"transparent",d:t.stroke?.d??0,o:t.stroke?.o??0,w:t.stroke?.w??0},src:t.src??""}:"video"==e||"audio"==e?{src:t.src??"",crossOrigin:t.crossOrigin??!1,afterTransition:t.afterTransition??!1,controls:t.controls??"xl",autoPlay:t.autoPlay??!0,pauseTimer:t.pauseTimer??!0,start:t.start??"00:00",end:t.end??"00:00",nextSlide:t.nextSlide??!0,stopAllMedia:t.stopAllMedia??!0,loop:t.loop??!0,preload:t.preload??"auto",preloadWait:t.preloadWait??"0",rewind:t.rewind??!0,volume:t.volume??"100"}:{};return"video"==e&&(a=_tpt.extend(a,{poster:{src:t.poster?.src??"",lib_id:t.poster?.lib_id??"",lib_size:t.poster?.lib_size??"",size:t.poster?.size??"cover",fromStream:t.poster?.fromStream??!1,showOnPause:t.poster?.showOnPause??!1,insteadVideo:t.poster?.insteadVideo??!1,noOnMobile:t.poster?.noOnMobile??!1},fromStream:t.fromStream??!1,streamType:t.streamType??"gallery",type:t.type??"html5",cover:t.cover??!0,noInteract:t.noInteract??!1,aFullScreen:t.aFullScreen??!0,args:t.args??"",fullWidth:t.fullWidth??!1,mute:t.mute??!0,ratio:t.ratio??"16:9",inline:t.inline??!0,speed:t.speed??1,pauseOnSwap:t.pauseOnSwap??!1})),a},SR7.D.convertBGPosObj=function(e,t="50%",a="50%"){var s={x:"50%",y:"50%"};if(null==e)return s;if("percentage"==e)return{x:parseInt(t)+"%",y:parseInt(a)+"%"};var r=(""+e).split(" ");return"center"==r[0]&&"center"==r[1]||("left"==r[0]&&(s.x="0%"),"right"==r[0]&&(s.x="100%"),"top"==r[1]&&(s.y="0%"),"bottom"==r[1]&&(s.y="100%")),s},SR7.D.carouselSettings=(e,t)=>{if(void 0===e)return{};let a=e?.showAllLayers??"false";return a="true"==String(a)?"all":a,{type:e.type??e.orientation??"h",align:e.align??("h"===(e.orientation??"h")?e.horizontal??"center":e.vertical??"center"),maxV:Math.max("3d"==e.spin?3:1,e.maxV??e.maxItems??3),justify:e.justify??!1,scale:e.scale??!1,minS:e.minS??e.scaleDown??50,vScale:e.vScale??e.varyScale??!1,oScale:e.oScale??e.offsetScale??!1,space:e.space??0,rotation:e.rotation??!1,maxR:e.maxR??e.maxRotation??0,varR:e.varR??e.varyRotate??!1,opacity:e.opacity??e.fadeOut??!0,maxO:e.maxO??e.maxOpacity??100,varO:e.varO??e.varyFade??!1,spin:e.spin??"off",spinA:parseInt(e.spinA??e.spinAngle??0),snap:e.snap??!0,infinity:e.infinity??!1,skewX:e.skewX??0,skewY:e.skewY??0,ease:e.ease??"power3.inOut",dur:e.dur??e.speed??800,overshoot:e.overshoot??!1,stretch:e?.stretch??!1,showAllLayers:a,jMWidth:e.jMWidth||(e?.justifyMaxWidth??!1),bR:e.bR??e?.borderRadius??0,bRU:e.bRU??e?.borderRadiusUnit??"px",pNV:e.pNV??e?.prevNextVis??"50px",pT:e.pT??e?.paddingTop??0,pB:e.pB??e?.paddingBottom??0}},SR7.D.moduleObj=function(e,t={}){var a=SR7.M[e].migrate?SR7.migrate.moduleObj(t):t,s={id:a.id??"",migrated:a.migrated??!1,addOns:a.addOns??{},uSize:a.uSize??[!1,!0,!1,!1,!1],level:a.level??4,title:a.title??"",alias:a.alias??"",dbid:a.dbid??"",type:a.type??"slider",fonts:a.fonts??{},prem:a.prem??!1,class:a.class??"",wClass:a.wClass??"",fixed:a.fixed??!1,mobileURLJumpFix:a.mobileURLJumpFix??!0,wpml:a.wpml??!1,lazyLoad:a.lazyLoad??"none",uS:a.uS??!1,vPort:a.vPort??"100px",fs:{as:a.fs?.as??!1,a:a.fs?.a??void 0},source:{type:a.source?.type??"gallery"},imgs:a.imgs??[],size:{fullWidth:a.size?.fullWidth??!0,fullHeight:a.size?.fullHeight??!1,fullHeightOffset:a.size?.fullHeightOffset??"",contentFH:a.size?.contentFH??!1,width:a.size?.width??[1600,1240,1024,778,480],height:a.size?.height??["#a","auto","#a","#a","#a"],cachedHeight:a.size?.cachedHeight??["#a","auto","#a","#a","#a"],minHeight:a.size?.minHeight??[0,0,0,0,0],maxHeight:a.size?.maxHeight??[0,0,0,0,0],upscaling:a.size?.upscaling??!1,respectRatio:a.size?.respectRatio??!1,keepBPHeight:a.size?.keepBPHeight??!1,maxWidth:a.size?.maxWidth??!1,overflow:a.size?.overflow??"false"},snap:{adjust:a.snap?.adjust??"none",snap:a.snap?.snap??!1,helpLines:a.snap?.helpLines??!1,gap:a.snap?.gap??20},default:{linearStyle:a.default?.linearStyle??!0,linearPosition:a.default?.linearPosition??!0,linearSpace:a.default?.linearSpace??!0,linearAlien:a.default?.linearAlien??!0,len:a.default?.len??9e3},codes:{css:a.codes?.css??"",js:a.codes?.js??""},carousel:SR7.D.carouselSettings(a.carousel),pLoader:{color:a.pLoader?.color??"#ffffff",type:a.pLoader?.type??"off"},slideshow:{auto:a.slideshow?.auto??!0,sOH:a.slideshow?.sOH??!1,loop:a.slideshow?.loop??-1,stopAt:a.slideshow?.stopAt??-1,shuffle:a.slideshow?.shuffle??!1,initDelay:a.slideshow?.initDelay??0,waitApi:a.slideshow?.waitApi??!1,firstSlide:a.slideshow?.firstSlide??"auto"},general:{icache:a.general?.icache??"default",dpr:a.general?.dpr??"dpr",observeWrap:a.general?.observeWrap??!1,layerSelection:a.general?.layerSelection??!1,disableOnMobile:a.general?.disableOnMobile??!1,autoPlayVideoMobile:a.general?.autoPlayVideoMobile??!0,disablePanMobile:a.general?.disablePanMobile??!1,perspective:a.general?.perspective??600,perspectiveType:a.general?.perspectiveType??"global",outputFilter:a.general?.outputFilter??"none"},browser:{nextOnFocus:a.browser?.nextOnFocus??!1,noFocusListener:a.browser?.noFocusListener??!1,useURLDeeplink:a.browser?.useURLDeeplink??!1},modal:{bC:a.modal?.bC??"",h:a.modal?.h??"center",v:a.modal?.v??"middle",cover:a.modal?.cover??!0,pS:a.modal?.pS??!1,bg:a.modal?.bg??"rgba(0,0,0,0.5)",sp:a.modal?.sp??1e3},shdw:a.shdw??!1,bg:{color:a.bg?.color??"transparent",image:SR7.D.contentOBJ("image",a.bg?.image??{})},mod:{use:a.mod?.use??!1,d3:a.mod?.d3??!1,d3z:a.mod?.d3z??65,d3d:a.mod?.d3d??15,d3s:a.mod?.d3s??3,d3e:a.mod?.d3e??"power3.out",t:a.mod?.t??"scroll",om:a.mod?.om??1,sm:a.mod?.sm??1,dir:a.mod?.dir??"same"},rOFV:a.mod?.rOFV??!0,nav:{nd:a.nav?.nd??1e3,m:{use:a.nav?.m?.use??"off",r:a.nav?.m?.r??"default",t:a.nav?.m?.t??"html",st:a.nav?.m?.st??50,v:a.nav?.m?.v??50,cd:a.nav?.m?.cd??1e3},s:{use:a.nav?.s?.use??!1,desk:a.nav?.s?.desk??!1,mobC:a.nav?.s?.mobC??!0,deskC:a.nav?.s?.deskC??!0,bV:a.nav?.s?.bV??!1,d:a.nav?.s?.d??"horizontal"},k:{use:a.nav?.k?.use??"off"},p:{w:a.nav?.p?.w??300,h:a.nav?.p?.h??200}}};if(void 0!==SR7.M[e]&&void 0!==SR7.M[e].imgList)for(let t in SR7.M[e].imgList)_tpt.hop(SR7.M[e].imgList,t)&&_tpt.compareURL(SR7.M[e].imgList[t].old,s?.bg?.image?.src)&&(s.bg.image.src=SR7.M[e].imgList[t].new);SR7.M[e].settings??={},SR7.M[e].settings.fonts??={},(SR7.E.backend||a.nav?.arrows?.set)&&(s.nav??={},s.nav.arrows??={set:a.nav?.arrows?.set??!1,def:a.nav?.arrows?.def??void 0,cst:a.nav?.arrows?.cst??void 0,key:a.nav?.arrows?.key??"",t:a.nav?.arrows?.t??1e3,m:a.nav?.arrows?.m??"hslide",css:a.nav?.arrows?.css??"",html:a.nav?.arrows?.html??"",on:a.nav?.arrows?.on??!0,s:parseInt(a.nav.arrows?.s??1e3),dIn:a.nav?.arrows?.dIn??["#a",1e3,"#a","#a","#a"],dOut:a.nav?.arrows?.dOut??["#a",1200,"#a","#a","#a"],show:a.nav?.arrows?.show??[!0,!0,!0,!0,!0],l:{a:a.nav?.arrows?.l?.a??"slider",anim:a.nav?.arrows?.l?.anim??"fade",x:a.nav?.arrows?.l?.x??["#a",0,"#a","#a","#a"],y:a.nav?.arrows?.l?.y??["#a",0,"#a","#a","#a"],v:a.nav?.arrows?.l?.v??["#a","center","#a","#a","#a"],h:a.nav?.arrows?.l?.h??["#a","left","#a","#a","#a"]},r:{a:a.nav?.arrows?.r?.a??"slider",anim:a.nav?.arrows?.r?.anim??"fade",x:a.nav?.arrows?.r?.x??["#a",0,"#a","#a","#a"],y:a.nav?.arrows?.r?.y??["#a",0,"#a","#a","#a"],v:a.nav?.arrows?.r?.v??["#a","center","#a","#a","#a"],h:a.nav?.arrows?.r?.h??["#a","right","#a","#a","#a"]}},SR7.M[e].settings.fonts.RevIcon=!0,SR7.R??={},SR7.R.nav=!0),(SR7.E.backend||a.nav?.bullets?.set)&&(s.nav??={},s.nav.bullets={set:a.nav?.bullets?.set??!1,def:a.nav?.bullets?.def??void 0,cst:a.nav?.bullets?.cst??void 0,key:a.nav?.bullets?.key??"",t:a.nav?.bullets?.t??1e3,css:a.nav?.bullets?.css??"",html:a.nav?.bullets?.html??"",on:a.nav.bullets?.on??!0,d:a.nav.bullets?.d??"horizontal",s:parseInt(a.nav.bullets?.s??1e3),dIn:a.nav.bullets?.dIn??["#a",1e3,"#a","#a","#a"],dOut:a.nav.bullets?.dOut??["#a",1200,"#a","#a","#a"],show:a.nav.bullets?.show??[!0,!0,!0,!0,!0],g:a.nav.bullets?.g??5,a:a.nav?.bullets?.a??"slider",anim:a.nav?.bullets?.anim??"fade",x:a.nav?.bullets?.x??["#a",0,"#a","#a","#a"],y:a.nav?.bullets?.y??["#a",0,"#a","#a","#a"],v:a.nav?.bullets?.v??["#a","bottom","#a","#a","#a"],h:a.nav?.bullets?.h??["#a","center","#a","#a","#a"]},SR7.M[e].settings.fonts.RevIcon=!0,SR7.R??={},SR7.R.nav=!0),(SR7.E.backend||a.nav?.scrubber?.set)&&(s.nav??={},s.nav.scrubber={set:a.nav?.scrubber?.set??!1,def:a.nav?.scrubber?.def??void 0,cst:a.nav?.scrubber?.cst??void 0,key:a.nav?.scrubber?.key??"",t:a.nav?.scrubber?.t??1e3,css:a.nav?.scrubber?.css??"",html:a.nav?.scrubber?.html??"",on:a.nav.scrubber?.on??!0,d:a.nav.scrubber?.d??"horizontal",s:parseInt(a.nav.scrubber?.s??1e3),dIn:a.nav.scrubber?.dIn??["#a",1e3,"#a","#a","#a"],dOut:a.nav.scrubber?.dOut??["#a",1200,"#a","#a","#a"],show:a.nav.scrubber?.show??[!0,!0,!0,!0,!0],g:a.nav.scrubber?.g??5,a:a.nav?.scrubber?.a??"slider",anim:a.nav?.scrubber?.anim??"fade",x:a.nav?.scrubber?.x??["#a",0,"#a","#a","#a"],y:a.nav?.scrubber?.y??["#a",0,"#a","#a","#a"],v:a.nav?.scrubber?.v??["#a","bottom","#a","#a","#a"],h:a.nav?.scrubber?.h??["#a","center","#a","#a","#a"],io:a.nav.scrubber?.io??"inner",size:{w:a.nav.scrubber?.size?.w??["#a",100,"#a","#a","#a"],h:a.nav.scrubber?.size?.h??["#a",50,"#a","#a","#a"]},wr:{c:a.nav.scrubber?.wr?.c??"transparent",p:a.nav.scrubber?.wr?.p??["#a",5,"#a","#a","#a"],s:a.nav.scrubber?.wr?.s??!1,mx:a.nav.scrubber?.wr?.mx??["#a",0,"#a","#a","#a"],my:a.nav.scrubber?.wr?.my??["#a",0,"#a","#a","#a"]},ts:parseFloat(a.nav.scrubber?.ts??100),hs:parseFloat(a.nav.scrubber?.hs??100),ho:a.nav.scrubber?.ho??!1,tn:a.nav.scrubber?.tn??!1,hp:a.nav.scrubber?.hp??!1,pa:a.nav.scrubber?.pa??"left",sc:parseFloat(a.nav.scrubber?.sc??100),f:a.nav.scrubber?.f??!0,asc:a.nav.scrubber?.asc??!1,tr:parseInt(a.nav.scrubber?.tr??0),sp:a.nav.scrubber?.sp??!1,ha:a.nav.scrubber?.ha??!0,tp:a.nav.scrubber?.tp??"dots",ms:parseFloat(a.nav.scrubber?.ms??60),to:parseFloat(a.nav.scrubber?.to??0),sk:parseFloat(a.nav.scrubber?.sk??0),cor:a.nav.scrubber?.cor??!1},SR7.M[e].settings.fonts.RevIcon=!0,SR7.R??={},SR7.R.nav=!0);for(let t of["thumbs","tabs"])(SR7.E.backend||a.nav?.[t]?.set)&&(s.nav??={},s.nav[t]={set:a.nav[t]?.set??!1,def:a.nav[t]?.def??void 0,cst:a.nav[t]?.cst??void 0,key:a.nav[t]?.key??"",t:a.nav[t]?.t??1e3,css:a.nav[t]?.css??"",html:a.nav[t]?.html??"",on:a.nav[t]?.on??!0,d:a.nav[t]?.d??"horizontal",s:parseInt(a.nav[t]?.s??1e3),dIn:a.nav[t]?.dIn??["#a",1e3,"#a","#a","#a"],dOut:a.nav[t]?.dOut??["#a",1200,"#a","#a","#a"],io:a.nav[t]?.io??"inner",show:a.nav[t]?.show??[!0,!0,!0,!0,!0],g:a.nav[t]?.g??5,a:a.nav[t]?.a??"slider",anim:a.nav[t]?.anim??"fade",x:a.nav[t]?.x??["#a",0,"#a","#a","#a"],y:a.nav[t]?.y??["#a",0,"#a","#a","#a"],v:a.nav[t]?.v??["#a","bottom","#a","#a","#a"],h:a.nav[t]?.h??["#a","center","#a","#a","#a"],m:a.nav[t]?.m??["#a",5,"#a","#a","#a"],size:{w:a.nav[t]?.size?.w??["#a",100,"#a","#a","#a"],h:a.nav[t]?.size?.h??["#a",50,"#a","#a","#a"],nw:a.nav[t]?.size?.nw??100,nh:a.nav[t]?.size?.nh??50,mw:a.nav[t]?.size?.mw??50,t:0},wr:{c:a.nav[t]?.wr?.c??"transparent",p:a.nav[t]?.wr?.p??["#a",5,"#a","#a","#a"],s:a.nav[t]?.wr?.s??!1,mx:a.nav[t]?.wr?.mx??["#a",0,"#a","#a","#a"],my:a.nav[t]?.wr?.my??["#a",0,"#a","#a","#a"]}},SR7.M[e].settings.fonts.RevIcon=!0,SR7.R??={},SR7.R.nav=!0);(SR7.E.backend||a.sbt?.use)&&(s.sbt={use:a.sbt?.use??!1,f:a.sbt?.f??!1,fStart:a.sbt?.fStart??2e3,fEnd:a.sbt?.fEnd??4e3,layers:a.sbt?.layers??!1,e:a.sbt?.e??"none",s:a.sbt?.s??500,pull:a.sbt?.pull??!1,nL:a.sbt?.nL??!1}),(SR7.E.backend||a.pbar?.set)&&(s.pbar={set:!0,a:a.pbar?.a??"slider",t:a.pbar?.t??"horizontal",s:a.pbar?.s??"5px",r:a.pbar?.r??10,v:a.pbar?.v??"bottom",h:a.pbar?.h??"left",x:a.pbar?.x??0,y:a.pbar?.y??0,c:a.pbar?.c??"rgba(255,255,255,0.5)",bg:a.pbar?.bg??"transparent",base:a.pbar?.base??"slide",g:a.pbar?.g??!1,gs:a.pbar?.gs??0,gc:a.pbar?.gc??"rgba(255,255,255,0.5)",rev:a.pbar?.rev??"reset",vis:a.pbar?.vis??[!0,!0,!0,!0,!0]}),(SR7.E.backend||"none"!==(a.bg?.overlay?.type??"none"))&&(s.bg.overlay={type:a.bg.overlay.type,size:a.bg.overlay.size??1,cA:a.bg.overlay.cA??"transparent",cB:a.bg.overlay.cB??"#000000"});for(var r=0;r<5;r++)for(var o of["t","b","l","r"])for(var n of["p","m"])(SR7.E.backend||a.size?.[n]?.[o]?.[r])&&(s.size[n]??={})&&(s.size[n][o]??=Array(5))&&(s.size[n][o][r]??=parseInt(a.size?.[n]?.[o]?.[r]||0)),!SR7.E.backend&&SR7.M[e]?.settings?.size?.[n]?.[o]?.[r]&&(s.size[n]??={})&&(s.size[n][o]??=Array(5))&&(s.size[n][o][r]=parseInt(SR7.M[e]?.settings?.size?.[n]?.[o]?.[r]??0));for(var i in a.source??={},SR7.D.streamTypes)void 0===a.source[SR7.D.streamTypes[i]]&&s.source.type!=SR7.D.streamTypes[i]||(s.source[SR7.D.streamTypes[i]]=_tpt.extend(SR7.D.modulStreamOBJ[SR7.D.streamTypes[i]],a.source[SR7.D.streamTypes[i]]));return s},SR7.D.hasActionLike=(e,t,a,s,r="a")=>{if(!SR7.M[e].slides[t].slide?.actions)return!1;const o=String(a),n=SR7.M[e].slides[t].slide?.actions.filter((e=>e.src.some((e=>String(e)===o))&&e[r]==s));return n.length>0&&n[0]},SR7.D.slideObj=function(e,t,a){var s=SR7.M[e].migrate?SR7.migrate.slideObj(t):t??{},r=s.global?{addOns:s.addOns??{},id:s.id,version:s.version??"7.0.0",title:s.title??"",parentId:s.parentId??null,language:s.language??"default",oflow:s.oflow??!1,global:!0,respVP:s.respVP??!0,pos:s.pos??"front",actions:s.actions??[],fullHeight:s.fullHeight??!1}:{addOns:s.addOns??{},id:s.id,version:s.version??"7.0.0",actions:s.actions??[],title:s.title??"",parentId:s.parentId??null,language:s.language??"default",order:s.order??a,thumb:{src:s.thumb?.src??"",srcId:s.thumb?.srcId??"",admin:s.thumb?.admin??"",adminId:s.thumb?.adminId??"",dimension:s.thumb?.dimension??"orig"},description:s.description??"",attr:{class:s.attr?.class??"",data:s.attr?.data??"",id:s.attr?.id??"",a:s.attr?.a??"",aO:s.attr?.aO??"",t:s.attr?.t??"",tO:s.attr?.tO??"",deepLink:s.attr?.deepLink??"",attr:s.attr?.attr??""},publish:{from:s.publish?.from??"",to:s.publish?.to??"",state:s.publish?.state??""},slideshow:{stop:s.slideshow?.stop??!1,len:s.slideshow?.len??"default",hal:s.slideshow?.hal??0,hom:s.slideshow?.hom??!1,hfn:s.slideshow?.hfn??!1},loop:{u:s.loop?.u??!1,r:s.loop?.r??-1,s:s.loop?.s??0,e:s.loop?.e??99999}};if(s.nav){r.nav??={};for(let e of["tabs","thumbs","arrows","bullets"])(s.nav[e]||s.nav[e])&&(r.nav[e]=s.nav[e])}let o=SR7.E.backend;if(o||void 0!==s.params)for(var n in s.params)o=o||""!==s.params[n].v;return o&&(r.params=SR7.D.slideInfoParams(s.params)),{slide:r}},SR7.D.slideInfoParams=function(e){for(var t={},a=0;a<10;a++)""!==(e[a]?.v??"")&&(t[a]=void 0!==e&&void 0!==e[a]?{v:e[a].v??"",l:e[a].l??10}:{v:"",l:10});return t},SR7.D.slideTimelineObject=function(e){return{name:e?.name??"",repeat:e?.repeat??0,length:e?.length??0,triggeredBy:e?.triggeredBy??"",triggeredParam:e?.triggeredParam??""}};SR7.D.layerObjects=function(e){let t,{dLEN:a,id:s,slide:r,sid:o,msource:n,snow:i}=e,l={m:0,top:-1,middle:-1,bottom:-1},d=SR7.M[s].migrate?SR7.migrate.layerListUpdate({layers:r.layers,isStatic:r.global,snow:i,params:r.params,newIDs:l,msource:n,sid:o}):{};for(t in r.layers)_tpt.hop(r.layers,t)&&(d[l[t]||t]=SR7.D.layerObject({dLEN:a,id:s,obj:r.layers[t],layertype:null,newIDs:l,sid:o,msource:n,global:r.global}));return SR7.M[s].migrate&&(d=SR7.migrate.fixPos(d)),d},SR7.D.layerObject=function(e){let{dLEN:t,id:a,obj:s,layertype:r="",newIDs:o,sid:n,msource:i,global:l,ISEMPTY:d,usedAddons:c}=e;const b=d&&c;var u=a&&SR7.M[a].migrate?SR7.migrate.LayerObj({dLEN:t,o:s,newIDs:o,sid:n,msource:i,global:l}):s??{};let p;r=u.type??r;var f={addOns:u.addOns??{},rTo:u.rTo??"",listen:u.listen,fluid:{tx:u.fluid?.tx??!1,tr:u.fluid?.tr??!1,sp:u.fluid?.sp??!1},id:u.id??"",alias:u.alias??"",type:r,subtype:u.subtype??"",content:SR7.D.contentOBJ(r,u.content),mF:u.mF??"none",blend:u.blend??"normal",tag:u.tag??"sr7-layer",href:"a"==u.tag?u.href??void 0:void 0,target:"a"==u.tag?Array.isArray(u.target)?u.target[0]:u.target??void 0:void 0,rel:"a"==u.tag?u.rel??void 0:void 0,libSrc:u.libSrc??"",size:{w:u.size?.w??["#a","auto","#a","#a","#a"],h:u.size?.h??["#a","auto","#a","#a","#a"],maxW:u.size?.maxW??["none","none","none","none","none"],maxH:u.size?.maxH??["none","none","none","none","none"],minW:u.size?.minW??["#a","auto","#a","#a","#a"],minH:u.size?.minH??["#a","auto","#a","#a","#a"],cMode:u.size?.cMode??"custom",sProp:u.size?.sProp??!1},pos:{x:u.pos?.x??["#a",0,"#a","#a","#a"],y:u.pos?.y??["#a",0,"#a","#a","#a"],h:u.pos?.h??["left","left","left","left","left"],v:u.pos?.v??["top","top","top","top","top"],pos:"row"==u.subtype||"column"==u.subtype?"relative":u.pos?.pos??void 0,float:u.pos?.float??"none",clear:u.pos?.clear??"none"},pid:u.pid??-1,pE:u.pE??"auto",uS:u.uS??"default",zIndex:u.zIndex??5,order:u.order??5,style:u.style??"",display:u.display??["#a","block","#a","#a","#a"],vA:u.vA??["top","top","top","top","top"],oflow:u.oflow??"visible",cursor:u.cursor??"cursor",bg:{color:u.bg?.color??"transparent",bClip:u.bg?.bClip??"none",tFCol:u.bg?.tFCol??"none"},attr:{},tl:{}};"column"==f.subtype&&(f.size.col=u.size.col??"1/3"),(SR7.E.backend||void 0!==u.vis)&&(f.vis=u.vis),(SR7.E.backend||void 0!==u.viSH)&&(f.viSH=u.viSH),(SR7.E.backend||void 0!==u.viOC)&&(f.viOC=u.viOC),void 0!==u.break&&(f.break=u.break),void 0!==u.sStart&&(f.sStart=u.sStart),void 0!==u.sEnd&&(f.sEnd=u.sEnd),void 0!==u.sZ&&(f.sZ=u.sZ);for(var m=0;m<5;m++)for(p of["t","b","l","r"])for(var v of["p","m"])(SR7.E.backend||u[v]?.[p])&&(f[v]??={})&&(f[v][p]??=Array(5))&&(f[v][p][m]=u[v]?.[p]?.[m]||0);(SR7.E.backend||u.tr?.rX)&&(f.tr=f.tr||{})&&(f.tr.rX=u.tr?.rX||0),(SR7.E.backend||u.tr?.rY)&&(f.tr=f.tr||{})&&(f.tr.rY=u.tr?.rY||0),(SR7.E.backend||u.tr?.rZ)&&(f.tr=f.tr||{})&&(f.tr.rZ=u.tr?.rZ||0),(SR7.E.backend||u.tr?.o)&&(f.tr=f.tr||{})&&(f.tr.o=u.tr?.o||0),(SR7.E.backend||f.tr)&&(f.tr.fix=u.tr?.fix||"d"),(SR7.E.backend||u.mod?.s?.u||u.mod?.s?.ut||u.mod?.s?.uf)&&(f.mod??={mask:u.mod?.mask??!1},f.mod.s={u:u.mod?.s?.u??!1,x:u.mod?.s?.x??0,y:u.mod?.s?.y??20,s:u.mod?.s?.s??0,e:u.mod?.s?.e??"power3.out",ut:u.mod?.s?.ut??!1,so:u.mod?.s?.so??0,rX:u.mod?.s?.rX??0,rY:u.mod?.s?.rY??0,rZ:u.mod?.s?.rZ??0,sc:u.mod?.s?.sc??1,uf:u.mod?.s?.uf??!1,b:u.mod?.s?.b??0,g:u.mod?.s?.g??1,f:u.mod?.s?.f??1,d:u.mod?.s?.d??"b",t:u.mod?.s?.t??0}),(SR7.E.backend||u.mod?.m?.u||u.mod?.m?.aBG)&&(f.mod??={mask:u.mod?.mask??!1},f.mod.m={u:u.mod?.m?.u??!1,aBG:u.mod?.m?.aBG??!1,x:u.mod?.m?.x??20,y:u.mod?.m?.y??20,s:u.mod?.m?.s??0,e:u.mod?.m?.e??"power3.out",o:u.mod?.m?.o??"c"}),void 0!==u.px&&(f.px={...u.px}),(SR7.E.backend||"none"!==(u.overlay?.type??"none"))&&(f.overlay={type:u.overlay?.type??"none",size:u.overlay?.size??1,cA:u.overlay?.cA??"transparent",cB:u.overlay?.cB??"#000000"}),SR7.E.backend&&(f.size.oW=u.size?.oW||0),SR7.E.backend&&(f.size.oH=u.size?.oH||0),SR7.E.backend&&(f.size.aRatio=u.size?.aRatio||["#a","auto","#a","#a","#a"]),u.attr??={},(SR7.E.backend||""!==(u.attr?.a||""))&&(f.attr.a=u.attr?.a||""),(SR7.E.backend||""!==(u.attr?.aO||""))&&(f.attr.aO=u.attr?.aO||"ml"),(SR7.E.backend||""!==(u.attr?.id||""))&&(f.attr.id=u.attr?.id||""),(SR7.E.backend||""!==(u.attr?.class||""))&&(f.attr.class=u.attr?.class||""),(SR7.E.backend||""!==(u.attr?.rel||""))&&(f.attr.rel=u.attr?.rel||""),(SR7.E.backend||""!==(u.attr?.tabIndex||""))&&(f.attr.tabIndex=u.attr?.tabIndex||0),(SR7.E.backend||""!==(u.attr?.t||""))&&(f.attr.t=u.attr?.t||""),(SR7.E.backend||""!==(u.attr?.tO||""))&&(f.attr.tO=u.attr?.tO||"ml"),(SR7.E.backend||""!==(u.attr?.wrapClass||""))&&(f.attr.wrapClass=u.attr?.wrapClass||""),(SR7.E.backend||""!==(u.attr?.wrapId||""))&&(f.attr.wrapId=u.attr?.wrapId||""),(SR7.E.backend||""!==(u.attr?.iClass||""))&&(f.attr.iClass=u.attr?.iClass||"");let S=u.hov??={};if(!1!==(u.hov.u??!1)&&(f.hov={u:S.u,m:S.m??!1,deco:S.deco??"none",zIndex:S.zIndex??"auto",color:{c:S.color.c??"#ffffff",bg:S.color.bg??"transparent",gAnim:S.color.gAnim??"fading"},border:{c:S.border.c??"transparent",s:S.border.s??"none",w:{t:S.border.w?.t??0,r:S.border.w?.r??0,b:S.border.w?.b??0,l:S.border.w?.l??0}},radius:{t:S.radius?.t??0,r:S.radius?.r??0,b:S.radius?.b??0,l:S.radius?.l??0},frame:{o:S.frame.o??1,oX:S.frame.oX??"50%",oY:S.frame.oY??"50%",oZ:S.frame.oZ??"50%",x:S.frame.x??0,y:S.frame.y??0,z:S.frame.z??0,rZ:S.frame.rZ??0,rX:S.frame.rX??0,rY:S.frame.rY??0,sX:S.frame.sX??1,sY:S.frame.sY??1,skX:S.frame.skX??1,skY:S.frame.skY??1,d:S.frame.d??300,e:S.frame.e??"power3.inOut"},filter:{g:S.filter?.g??0,r:S.filter?.r??100,b:S.filter?.b??0},svg:{c:S.svg.c??"#ffffff",stroke:{c:S.svg.stroke.c??"transparent",d:S.svg.stroke.d??0,o:S.svg.stroke.o??0,w:S.svg.stroke.w??0}}}),"text"!=r&&"container"!=r||(f.tA=u.tA??["left","left","left","left","left"]),"text"!=r&&"row"!=f.subType&&"column"!=f.subType||(f.ws=u.ws??("container"==f.type?["normal","normal","normal","normal","normal"]:["full","full","full","full","full"])),""===(u.codes?.css??"")&&""===(u.codes?.hovercss??"")||(f.codes={css:u.codes?.css??"",hovercss:u.codes?.hovercss??""}),(void 0!==(u.bg?.image?.src??void 0)&&""!==(u.bg?.image?.src??"")||u.bg?.image?.fromStream)&&(f.bg.image=SR7.D.contentOBJ("image",u.bg?.image??{})),(void 0!==(u.bg?.video?.src??void 0)&&""!==(u.bg?.video?.src??"")||u.bg?.video?.fromStream)&&(f.bg.video=SR7.D.contentOBJ("video",u.bg?.video??{})),(SR7.E.backend||u.bShdw?.use)&&(f.bShdw={use:u.bShdw?.use??!1,on:"content",h:u.bShdw?.h??[0,0,0,0,0],v:u.bShdw?.v??[0,0,0,0,0],blur:u.bShdw?.blur??[0,0,0,0,0],spread:u.bShdw?.spread??[0,0,0,0,0],color:u.bShdw?.color??"rgba(0,0,0,0.25)"}),SR7.E.backend||void 0!==u.border&&void 0!==u.border.s){var R=SR7.E.backend;if(u.border??={},u.border.s??=["none","none","none","none","none"],!R)for(var g=0;g<5;g++)R=R||"none"!==u.border.s[g];for(p of(f.border={s:u.border.s,c:u.border?.c??"transparent"},SR7.D.DS))(SR7.E.backend||u.border?.w?.[p])&&(f.border.w=f.border.w||{})&&(f.border.w[p]=u.border?.w?.[p]||0)}if(SR7.E.backend||void 0!==u.radius)for(p of SR7.D.DS)(SR7.E.backend||u.radius?.[p])&&(f.radius??={})&&(f.radius[p]=u.radius?.[p]||0);for(var y in"text"==r&&((SR7.E.backend||u.tShdw?.use)&&(f.tShdw={use:u.tShdw?.use??!1,h:u.tShdw?.h??[0,0,0,0,0],v:u.tShdw?.v??[0,0,0,0,0],blur:u.tShdw?.blur??[0,0,0,0,0],color:u.tShdw?.color??"rgba(0,0,0,0.25)"}),(SR7.E.backend||u.tStroke?.use)&&(f.tStroke={use:u.tStroke?.use??!1,w:u.tStroke?.w??[1,1,1,1,1],c:u.tStroke?.c??"rgba(0,0,0,0.25)"}),f.color=u.color??["#a","#ffffff","#a","#a","#a"],f.font={family:u.font?.family??"Roboto",style:u.font?.style??!1,size:u.font?.size??["#a","20","#a","#a","#a"],weight:u.font?.weight??["#a","400","#a","#a","#a"],ls:u.font?.ls??["#a","0","#a","#a","#a"]},(f.font?.family??"").includes(" ")&&(f.font.family="'"+f.font.family+"'"),(SR7.E.backend||1==(u.tog?.u??!1))&&(f.tog={t:u?.tog?.t??"",u:u?.tog?.u??!1,h:u?.tog?.h??!1,i:u?.tog?.i??!1}),SR7.M[a].migrate&&SR7.D.collectModulFont(f.font,a,f.content.text)),"text"!=r&&"container"!=r||(f.lh=u.lh??["#a","25","#a","#a","#a"]),(SR7.E.backend||u.spike?.use)&&(f.spike={use:u.spike?.use??!1,l:u.spike?.l??"none",r:u.spike?.r??"none",lw:u.spike?.lw??10,rw:u.spike?.rw??10}),u.tl)if(_tpt.hop(u.tl,y))for(var h in f.tl[y]??={},u.tl[y])_tpt.hop(u.tl[y],h)&&(f.tl[y]??={},f.tl[y][h]="bg"==h&&"in"==y?SR7.D.getBGAnim(u.tl[y][h]):SR7.D.layerTLObject(u.tl[y][h],h));if("text"==f.type&&(SR7.M[a].icons??={},(SR7.M[a].settings?.fonts?.FontAwesome||f.content.text.includes("<i")&&(f.content.text.includes('class="fa-')||f.content.text.includes("class='fa-")))&&(SR7.M[a].settings.fonts.FontAwesome=!0),(SR7.M[a].settings?.fonts?.PeIcon||f.content.text.includes("<i")&&(f.content.text.includes('class="pe-7')||f.content.text.includes("class='pe-7")))&&(SR7.M[a].settings.fonts.PeIcon=!0),(SR7.M[a].settings?.fonts?.Materialicons||f.content.text.includes("material-icons"))&&(SR7.M[a].settings.fonts.Materialicons=!0)),void 0!==SR7.M[a]&&void 0!==SR7.M[a].imgList)for(let e in SR7.M[a].imgList)_tpt.hop(SR7.M[a].imgList,e)&&(_tpt.compareURL(SR7.M[a].imgList[e].old,f.content?.src)&&(f.content.src=SR7.M[a].imgList[e].new),_tpt.compareURL(SR7.M[a].imgList[e].old,f?.content?.image?.src)&&(f.content.image.src=SR7.M[a].imgList[e].new),_tpt.compareURL(SR7.M[a].imgList[e].old,f.bg?.src)&&(f.bg.src=SR7.M[a].imgList[e].new),_tpt.compareURL(SR7.M[a].imgList[e].old,f.bg?.image?.src)&&(f.bg.image.src=SR7.M[a].imgList[e].new));if(("video"==f.type||f.bg.video||"audio"==f.type)&&(SR7.R??={},SR7.R.media=!0),"text"!=f.type&&"button"!=f.type||((f.attr?.iClass??"").includes("sr7-btn")||(f.attr?.iClass??"").includes("sr7-scroll-btn")||(f.attr?.iClass??"").includes("sr7-brg")||(f.text?.content??"").includes("sr7-btn")||(f.text?.content??"").includes("sr7-scroll-btn")||(f.text?.content??"").includes("sr7-brg"))&&(SR7.R??={},SR7.R.cssbtns=!0),b)for(let e in SR7.A)_tpt.hop(SR7.A,e)&&SR7.A[e]?.getLayerBasics&&c.includes(e)&&(f.addOns??={},f.addOns[e]=SR7.A[e].getLayerBasics({},"compare"));return f},SR7.D.registerModuleFonts=function(e){for(var t in SR7.M[e].settings.fonts)if(_tpt.hop(SR7.M[e].settings.fonts,t)){var a=SR7.M[e].settings.fonts[t];if(_tpt.R.fonts?.customs?.[t])_tpt.registerFont({family:_tpt.R.fonts.customs[t].family??a.name??_tpt.fontFamily(t,!0),url:_tpt.R.fonts.customs[t]});else if("FontAwesome"==t)_tpt.registerFont({family:"FontAwesome",url:SR7.E.plugin_url+"public/css/fonts/font-awesome/css/font-awesome.css"});else if("Materialicons"==t)_tpt.registerFont({family:"Materialicons",url:SR7.E.plugin_url+"public/css/fonts/material/material-icons.css"});else if("PeIcon"==t)_tpt.registerFont({family:"Pe-icon-7-stroke",url:SR7.E.plugin_url+"public/css/fonts/pe-icon-7-stroke/css/pe-icon-7-stroke.css"});else if("RevIcon"==t)_tpt.registerFont({family:"revicons",url:SR7.E.plugin_url+"public/css/fonts/revicons/css/revicons.css"});else for(var s of["italic","normal"])if(null!=a[s])for(var r in a[s])_tpt.hop(a[s],r)&&_tpt.registerFont({family:a.name??_tpt.fontFamily(t,!0),url:a.url,italic:"italic"==s,weight:r})}},SR7.D.checkSubsets=function(e=""){const t={};for(let a=0;a<e.length;a++){const s=e.charCodeAt(a);for(const e in SR7.D.subsets)s>=SR7.D.subsets[e].start&&s<=SR7.D.subsets[e].end&&(t[e]=!0)}return t},SR7.D.collectModulFont=function(e,t,a){let s="undefined"!=typeof RVS&&(((e,t)=>{if(window.RVS?.LIB?.FONTS)for(var a in RVS.LIB.FONTS)if(RVS.LIB.FONTS[a].label==e&&(t||"googlefont"==RVS.LIB.FONTS[a].type))return RVS.LIB.FONTS[a]})(e.family,!0)??void 0);if(window?.RVS?.LIB?.FONTS&&void 0===_tpt?.R?.fonts?.customs&&_tpt.fontFamily&&(_tpt.R??={},_tpt.R.fonts??={},_tpt.R.fonts.customs=RVS.LIB.FONTS.filter((e=>"custom"===e.type)),_tpt.R.fonts.customs.length>0))for(let e in _tpt.R.fonts.customs)_tpt.R.fonts.customs[e].family=_tpt.fontFamily(_tpt.R.fonts.customs[e].label).replaceAll("'","");SR7.M[t].settings.fonts??={};let r=_tpt.fontFamily(e.family);r=r.replace("''","'"),SR7.M[t].settings.fonts[r]??={name:e.family},s?.url&&(SR7.M[t].settings.fonts[r].url=s?.url),SR7.M[t].settings.fonts[r][e.style?"italic":"normal"]??={},SR7.M[t].settings.fonts[r].subset=SR7.D.checkSubsets(a);let o=r.replaceAll("'","");(_tpt.R.fonts?.customs?.length??0)>0&&_tpt.R.fonts.customs.filter((e=>e.family===o)).length>0&&(SR7.M[t].settings.fonts[r].custom=!0);for(var n=0;n<5;n++)"auto"!==e.weight[n]&&(SR7.M[t].settings.fonts[r][e.style?"italic":"normal"][e.weight[n]]=!0)},SR7.D.collectModulFonts=function(e){for(var t in SR7.M[e].settings.fonts={},SR7.M[e].slides)if(_tpt.hop(SR7.M[e].slides,t))for(var a in SR7.M[e].slides[t].layers)_tpt.hop(SR7.M[e].slides[t].layers,a)&&"text"===SR7.M[e].slides[t].layers[a].type&&SR7.D.collectModulFont(SR7.M[e].slides[t].layers[a].font,e,SR7.M[e].slides[t].layers[a].content.text)},SR7.D.layerTLObject=function(e={},t){var a="filter"==t||"mask"==t?{}:"clip"==t?{orig:e?.orig??"l",type:e?.type??"r"}:{pers:e.pers??600,orig:{x:e?.orig?.x??"50%",y:e?.orig?.y??"50%",z:e?.orig?.z??"0"}};for(var s in e)if(_tpt.hop(e,s)&&"orig"!=s&&"type"!=s&&"pers"!=s){a[s]=SR7.backend?Array(e[s].length):[];for(var r=0;r<e[s].length;r++)a[s].push(SR7.D.getKeyFrame(e[s][r],t,s))}return a},SR7.D.getKeyFrame=function(e={},t="content",a="all"){var s={t:e?.t??300,d:e?.d??300,f:e?.f??300,e:e?.e??"power3.inOut"};if("content"==t&&(s.pE=e.pE??"d"),void 0!==e.addOns)for(var r in s.addOns={},e.addOns)_tpt.hop(e.addOns,r)&&(s.addOns[r]=e.addOns[r]);return null!=e.x&&(s.x=e.x??0),null!=e.y&&(s.y=e.y??0),void 0!==e.anchors&&(s.anchors=e.anchors),void 0!==e.curv&&(s.curv=e.curv),null!=e[a]&&(s[a]=e[a]),void 0!==e.rep&&(s.rep={s:e.rep.s,r:e.rep.r??-1,sh:e.rep.sh??!1,y:e.rep.y??!1,c:e.rep.c??!1}),"mask"!==t&&"filter"!==t&&"clip"!==t&&(null!=e.z&&(s.z=e.z),null!=e.sX&&(s.sX=e.sX),null!=e.sY&&(s.sY=e.sY),null!=e.skX&&(s.skX=e.skX),null!=e.skY&&(s.skY=e.skY),null!=e.o&&(s.o=e.o),null!=e.rX&&(s.rX=e.rX??0),null!=e.rY&&(s.rY=e.rY),null!=e.rZ&&(s.rZ=e.rZ),null!=e.fb&&(s.fb=e.fb),null!=e.fgs&&(s.fgs=e.fgs),null!=e.fbr&&(s.fbr=e.fbr),void 0!==e.bgcol&&(s.bgcol=e.bgcol),void 0!==e.col&&(s.col=e.col)),"content"==t&&void 0!==e.fx&&(s.fx=e.fx,s.fxc=e.fxc??"#ffffff",s.fxe=e.fxe??s.e,s.fxs=e.fxs??s.t),"mask"==t&&void 0!==e.oflow&&(s.oflow=e.oflow),("filter"==t||"loop"==t&&"filter"==a)&&(null!=e.fu&&(s.fu=e.fu),s.fu&&(null!=e.b&&(s.b=e.b),null!=e.g&&(s.g=e.g),null!=e.r&&(s.r=e.r)),null!=e.bu&&(s.bu=e.bu),void 0!==s.bu&&(null!=e.bb&&(s.bb=e.bb),null!=e.bg&&(s.bg=e.bg),null!=e.br&&(s.br=e.br),null!=e.bs&&(s.bs=e.bs),null!=e.bi&&(s.bi=e.bi)),void 0!==e.repeat&&(s.repeat=e.repeat)),SR7.D.splits.indexOf(t)>=0&&(void 0!==e.fu&&(s.fu=e.fu),e.fu&&(null!=e.b&&(s.b=e.b),null!=e.g&&(s.g=e.g),null!=e.r&&(s.r=e.r)),s.dir=e.dir??"start",s.delay=e.delay??5),"clip"==t&&(void 0!==e.c&&(s.c=e.c),void 0!==e.cb&&(s.cb=e.cb)),"filter"!==t&&"clip"!==t&&"loop"!==t&&(void 0!==e.xRe&&(s.xRe=parseInt(e.xRe)),void 0!==e.yRe&&(s.yRe=parseInt(e.yRe)),s.off=e.off??0),s},SR7.D.getBGAnim=function(e={}){null==e&&(e={});var t={};if(t.ms=e?.ms??e?.speed??1e3,t.rnd=e?.rnd??e?.random??(e.main??"").toLowerCase().includes("random"),t.rnd||"true"==t.rnd)return t.rnd=!0,t.rndmain=e.rndmain??e.rndmain??"",t;t.temp={t:e?.temp?.t??e.title??"",p:e?.temp?.p??e.preset??"",m:e?.temp?.m??e.main??"",g:e?.temp?.g??e.group??""},t.addOns=e?.addOns??e.addOns??{},(SR7.E.backend||void 0!==e.o)&&(t.o=e.o??"inout"),(SR7.E.backend||void 0!==e.e)&&(t.e=e.e??"basic"),(SR7.E.backend||void 0!==e.f)&&(t.f=e.f??"start"),(SR7.E.backend||void 0!==e.s)&&(t.s=e.s??1e3),(SR7.E.backend||void 0!==e.p)&&(t.p=e.p??"none"),(SR7.E.backend||void 0!==e.d)&&(t.d=e.d??15),(SR7.E.backend||void 0!==e.eng)&&(t.eng=e.eng??"animateCore"),(SR7.E.backend||void 0!==e.adpr)&&(t.adpr=e.adpr??!0),(SR7.E.backend||void 0!==e.d3)&&(e.d3??={},t.d3??={},(SR7.E.backend||void 0!==e.d3.f)&&(t.d3.f=e.d3.f??"none"),(SR7.E.backend||void 0!==e.d3.d)&&(t.d3.d=e.d3.d??"horizontal"),(SR7.E.backend||void 0!==e.d3.z)&&(t.d3.z=e.d3.z??300),(SR7.E.backend||void 0!==e.d3.t)&&(t.d3.t=e.d3.t??0),(SR7.E.backend||void 0!==e.d3.c)&&(t.d3.c=e.d3.c??"#ccc"),(SR7.E.backend||void 0!==e.d3.e)&&(t.d3.e=e.d3.e??"power2.inOut"),(SR7.E.backend||void 0!==e.d3.fdi)&&(t.d3.fdi=e.d3.fdi??1.5),(SR7.E.backend||void 0!==e.d3.fdo)&&(t.d3.fdo=e.d3.fdo??2),(SR7.E.backend||void 0!==e.d3.fz)&&(t.d3.fz=e.d3.fz??0),(SR7.E.backend||void 0!==e.d3.su)&&(t.d3.su=e.d3.su??!1),(SR7.E.backend||void 0!==e.d3.smi)&&(t.d3.smi=e.d3.smi??0),(SR7.E.backend||void 0!==e.d3.sma)&&(t.d3.sma=e.d3.sma??.5),(SR7.E.backend||void 0!==e.d3.sc)&&(t.d3.sc=e.d3.sc??"#000"),(SR7.E.backend||void 0!==e.d3.sl)&&(t.d3.sl=e.d3.sl??1)),(SR7.E.backend||void 0!==e.filter)&&(e.filter??={},t.filter??={},(SR7.E.backend||void 0!==e.filter.u)&&(t.filter.u=e.filter.u??!1),(SR7.E.backend||void 0!==e.filter.e)&&(t.filter.e=e.filter.e??"default"),(SR7.E.backend||void 0!==e.filter.b)&&(t.filter.b=e.filter.b??0),(SR7.E.backend||void 0!==e.filter.g)&&(t.filter.g=e.filter.g??0),(SR7.E.backend||void 0!==e.filter.h)&&(t.filter.h=e.filter.h??100),(SR7.E.backend||void 0!==e.filter.s)&&(t.filter.s=e.filter.s??0),(SR7.E.backend||void 0!==e.filter.c)&&(t.filter.c=e.filter.c??100),(SR7.E.backend||void 0!==e.filter.i)&&(t.filter.i=e.filter.i??0));for(let a of["in","out"])e[a]??={},"in"!=a&&"out"!=a||!SR7.E.backend&&void 0===e[a]||(t[a]??={},(SR7.E.backend||void 0!==e[a].o)&&(t[a].o=e[a].o??1),(SR7.E.backend||void 0!==e[a].x)&&(t[a].x=e[a].x??0),(SR7.E.backend||void 0!==e[a].y)&&(t[a].y=e[a].y??0),(SR7.E.backend||void 0!==e[a].r)&&(t[a].r=e[a].r??0),(SR7.E.backend||void 0!==e[a].sx)&&(t[a].sx=e[a].sx??1),(SR7.E.backend||void 0!==e[a].sy)&&(t[a].sy=e[a].sy??1),(SR7.E.backend||void 0!==e[a].m)&&(t[a].m=e[a].m??!1),(SR7.E.backend||void 0!==e[a].e)&&(t[a].e=e[a].e??"power2.inOut"),(SR7.E.backend||void 0!==e[a].row)&&(t[a].row=e[a].row??1),(SR7.E.backend||void 0!==e[a].col)&&(t[a].col=e[a].col??1),"in"==a?((SR7.E.backend||void 0!==e[a].mo)&&(t[a].mo=e[a].mo??80),(SR7.E.backend||void 0!==e[a].mou)&&(t[a].mou=e[a].mou??!1),(SR7.E.backend||void 0!==e[a].moo)&&(t[a].moo=e[a].moo??!1)):(SR7.E.backend||void 0!==e.out.a)&&(t[a].a=e[a].a??"true"));return(SR7.E.backend||void 0!==e.addOns)&&(t.addOns=e.addOns??SR7.D.getBGAnim_Addons()),t},SR7.D.getBGAnim_Addons=function(){return{}},_tpt.R??={},_tpt.R.defaults=_tpt.extend?_tpt.extend(_tpt.R.defaults,{status:2,version:"1.0"}):{status:2,version:"1.0"}}();