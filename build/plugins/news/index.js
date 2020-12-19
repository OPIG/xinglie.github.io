import"../../gallery/mx-more/index.js";let t,i={class:"xl-bC"},e={class:"xl-bM"},l={class:"xl-bG"},s={class:"xl-bI"},a={class:"xl-bK"},r={class:"xl-bL"};import o from"../../lib/magix.js";import d from"../../os/ctrl.js";import x from"./bridge.js";import h from"../../lib/cron.js";import n from"../../lib/agent.js";o.applyStyle("xl-p",'.xl-bC{height:28px;line-height:28px;padding:0 26px;background:#ddd;color:#333;position:-webkit-sticky;position:sticky;top:0}.xl-bD{float:left;padding:0 5px;cursor:pointer}.xl-bE{background:#fff}.xl-bF{display:inline-grid;grid-template-columns:70% 30%;grid-template-rows:86%;grid-template-areas:"xl-b xl-a" "xl-_ xl-_";width:410px;height:120px;margin:10px;padding:5px;background:#fafafa;border-radius:4px;transition:box-shadow .25s;cursor:pointer}.xl-bF:hover{box-shadow:0 3px 6px 0 rgba(0,0,0,.08)}.xl-bG{font-size:18px;padding:5px}.xl-bH{grid-area:xl-_;color:#aaa;font-size:12px}.xl-bI{width:120px;height:80px;align-items:center}.xl-bJ{width:auto;height:auto;max-width:100%;max-height:100%}.xl-bK,.xl-bL{display:inline-block;height:22px;line-height:22px}.xl-bK{max-width:190px;overflow:hidden}.xl-bL{float:right}.xl-bM{display:table}');let p=[{text:"\u5168\u90e8",id:"BBM54PGA"},{text:"\u5a31\u4e50",id:"BA10TA81"},{text:"\u4f53\u80b2",id:"BA8E6OEO"},{text:"\u8d22\u7ecf",id:"BA8EE5GM"},{text:"\u519b\u4e8b",id:"BAI67OGG"},{text:"\u79d1\u6280",id:"BA8D4A3R"},{text:"\u624b\u673a",id:"BAI6I0O5"},{text:"\u6570\u7801",id:"BAI6JOD9"},{text:"\u65f6\u5c1a",id:"BA8F6ICN"},{text:"\u6e38\u620f",id:"BAI6RHDK"},{text:"\u6559\u80b2",id:"BA8FF5PR"},{text:"\u5065\u5eb7",id:"BDC4QSV3"},{text:"\u65c5\u6e38",id:"BEO4GINL"}],c={icon:'<svg viewBox="0 0 1039 1024"><path d="M906.589 0H132.688A132.79 132.79 0 0 0 0 132.688v605.318a132.79 132.79 0 0 0 132.688 132.79h220.411l70.828 102.882a116.181 116.181 0 0 0 191.422 0l70.828-102.922H906.59a132.79 132.79 0 0 0 132.79-132.79V132.688A132.79 132.79 0 0 0 906.589 0zm48.458 738.006a48.52 48.52 0 0 1-48.458 48.459H641.866l-95.894 139.409a31.951 31.951 0 0 1-52.667 0l-95.895-139.41H132.688a48.52 48.52 0 0 1-48.458-48.458V132.688a48.52 48.52 0 0 1 48.458-48.458h773.9a48.52 48.52 0 0 1 48.459 48.458z" fill="#1ACAD8"/><path d="M288.665 368.176a63.33 63.33 0 1 0 63.33 63.33 63.33 63.33 0 0 0-63.33-63.33zm230.973 0a63.33 63.33 0 1 0 63.33 63.33 63.33 63.33 0 0 0-63.33-63.33zm230.973 0a63.33 63.33 0 1 0 63.331 63.33 63.33 63.33 0 0 0-63.33-63.33z" fill="#1ACAD8"/></svg>',appId:"news_detail",title:"\u65b0\u95fb\u8be6\u60c5",width:500,height:650,min:!0,close:!0,dockY:30,view:"~xl/plugins/news/detail"},g=(t,i,e)=>{x._bP(i,e),d._C(t,c)},m=t=>{let i=[170,170,170],e=[85,-170,-170],l=t/1e4;l>1&&(l=1);let s=[];for(let t=0;t<e.length;t++){let a=`0${(e[t]*l+i[t]|0).toString(16)}`.slice(-2);s.push(a)}return`#${s.join("")}`};export default o.View.extend({tmpl:(o,d,x,h,n,p,c,g)=>{let m,b,u,f,_,A,w,B,v=[],{cats:k,active:y,loading:E,error:C,list:I,getColor:z}=o;m=[];for(let t=k.length,i=0;i<t;i+=1){let t=k[i];f=[d(0,h(t.text))],u="xl-bD",t.id==y&&(u+=" xl-bE"),b=[d("div",{"mx5-click":t.id!=y&&x+"\x1e_bV({id:'"+g(t.id)+"'})",class:u},f)],m.push(...b)}if(v.push(d("div",i,m)),E)t?m=[t]:(b=[d(0,"loading...")],m=[t=d("div",{_:"_",class:"xl-w"},b)]),v.push(...m);else if(C)m=[d(0,h(C))],v.push(...m);else{b=[];for(let t=I.length,i=0;i<t;i+=1){let t=I[i];A=[d(0,h(t.title))],_=[d("div",l,A)],A=[d("img",{loading:"lazy",class:"xl-bJ",src:h(t.imgsrc)},1)],_.push(d("div",s,A)),w=[d(0,"\u6765\u6e90\uff1a"+h(t.source))],A=[d("span",a,w)],w=[d(0,h(t.ptime)+"\u2003")],B=[d(0,"\u8bc4\u8bba\uff1a"+h(t.commentCount))],w.push(d("span",{style:"color:"+h(z(t.commentCount))},B)),A.push(d("span",r,w)),_.push(d("div",{class:"xl-bH","mx5-click":x+"\x1e\x1e_bW({detail:'"+c(p,t,"\x1ei."+i)+"'})"},A)),f=[d("div",{class:"xl-bF","mx5-click":x+"\x1e_aP({detail:'"+c(p,t,"\x1ei."+i)+"'})"},_)],b.push(...f)}m=[d("div",e,b),d("div",{"mx5-owner":x,"mx5-intersect":x+"\x1e_aJ()","mx5-view":"~xl/gallery/mx-more/index?placeholder=%E6%9B%B4%E5%A4%9A%E6%96%B0%E9%97%BB%E5%8A%A0%E8%BD%BD%E4%B8%AD..."})],v.push(...m)}return d(x,0,v)},init(){this.set({active:p[0].id,cats:p,list:[],start:0,size:20,getColor:m,loading:!0});let t=()=>{(0===this.get("start")||this.root.scrollTop<50)&&(this.root.scrollTop=0,this.set({list:[]}),this._bS())};h._s(t,6e5,!1,"_bT"),this.ondestroy=()=>{h._t(t)}},assign:()=>!1,async _bS(){try{let t=this.get("active"),i=this.get("start"),e=this.get("size"),l=o.mark(this,"_bU"),s=await((t,i,e)=>new Promise((l,s)=>{let a="https://3g.163.com/touch/reconstruct/article/list/{id}wangning/{start}-{end}.html?_={guid}".replace("{id}",t).replace("{start}",i.toString()).replace("{end}",e.toString()).replace("{guid}",o.guid("thx_"));n.request(a,0,!0).then(i=>{let e=JSON.parse(i.slice(9,-1));l(e[t+"wangning"])}).catch(s)}))(t,i,e);if(l()){let t=this.get("list");t.push(...s),this.digest({error:null,loading:!1,list:t})}}catch(t){this.digest({loading:!1,error:t})}delete this._aI},render(){this._bS()},"_bV<click>"(t){let{id:i}=t.params;this.root.scrollTop=0,this.digest({list:[],loading:!0,active:i,start:0}),this._bS()},"_aP<click>"(t){if(!t.fromComment){let{detail:i}=t.params;g(this,i)}},"_bW<click>"(t){t.fromComment=!0;let{detail:i}=t.params;g(this,i,!0)},"_aJ<intersect>"(){if(!this.get("loading")&&!this._aI){this._aI=1;let t=this.get("start")+this.get("size");this.set({start:t}),this._bS()}}});