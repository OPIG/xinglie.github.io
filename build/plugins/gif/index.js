import"../../gallery/mx-more/index.js";let t={class:"xl-aF"},a={class:"xl-aG"},e={class:"xl-aH"},s={class:"xl-aJ"},i={class:"xl-aL"},l={class:"xl-aI"};import h from"../../lib/magix.js";import r from"../../lib/agent.js";h.applyStyle("xl-l",'.xl-aF{margin:10px}.xl-aG{margin-bottom:10px;border:1px solid #ccc;border-radius:5px}.xl-aH{font-size:16px;font-weight:700;margin:5px 0 0 10px}.xl-aI{height:18px;margin-left:10px;font-size:12px}.xl-aJ{padding:10px;min-height:100px}.xl-aK{width:auto;height:auto;max-width:100%;min-height:50px;position:relative}.xl-aK:before{content:"\u56fe\u7247\u65e0\u6cd5\u663e\u793a\u2299\ufe4f\u2299";position:absolute;display:inline-flex;top:-4px;left:0;height:calc(100% + 8px);width:calc(100% + 200px);background-color:#ebebeb;border-radius:4px;justify-content:center;align-items:center;color:#a2a2a2}.xl-aL{font-size:18px}');let o=(t,a)=>{let e;do{e=Math.ceil(Math.random()*t)}while(1===a[e]);return a[e]=1,e},c=(t,a)=>t.w-a.w,n=[{_aE(){this._aB=500,this._aC={},this._aD="https://www.soogif.com/hotGif?start=${0}&size=20"},_aF(){let t=this._aD,a=this._aC,e=o(this._aB,a);return new Promise(async a=>{let s=[];t=t.replace("${0}",e);try{let a=await r.request(t,0,!0),e=JSON.parse(a);if(0==e.code){let t=e.data.result;for(let a of t)s.push({name:a.title,from:"soogif.com",img:a.gifurl})}}catch(t){}a(s)})}},{_aE(){this._aB=400,this._aC={},this._aD="http://www.gaoxiaogif.com/"},_aF(){let t=this._aD,a=this._aC,e=o(this._aB,a);return new Promise(async a=>{let s="";e>1&&(s=`index_${e}.html`);let i=[];try{let a=await r.request(t+s,0,!0,"gb2312"),e=/'pic':'([^']+)','text':'([^']+)'[\s\S]+?<i\s+class="icon-clock"><\/i>([0-9\-]+)/g;a.replace(e,(t,a,e,s)=>(i.push({name:e,img:a,date:s,from:"\u641e\u7b11GIF\u56fe\u7247\u96c6"}),""))}catch(t){}a(i)})}},{_aE(){this._aB=50,this._aC={},this._aD="https://interface.sina.cn/tech/gif/album.d.json?format=json&num=20&page="},_aF(){let t=this._aD,a=this._aC,e=o(this._aB,a);return new Promise(async a=>{let s=[];try{let a=await r.request(t+e,0,!0),i=JSON.parse(a);if(i.data)for(let t of i.data)s.push({name:t.name,img:t.img_url,date:t.createtime,from:"\u65b0\u6d6a\u8da3\u56fe"})}catch(t){}a(s)})}},{_aE(){this._aB=500,this._aC={},this._aD="http://quicklol.com/"},_aF(){let t=this._aD,a=this._aC,e=o(this._aB,a);return new Promise(async a=>{let s="";e>1&&(s=`page/${e}/`);let i=[];try{let a=await r.request(t+s,0,!0),e=/<img[\s\S]+?class="[^"]+?wp-image-\d+"\s+src="([^"]+)"[\s\S]+?data-a2a-title="([^"]+)"/g;a.replace(e,(t,a,e)=>(i.push({name:e,img:a,from:"quicklol.com"}),""))}catch(t){}a(i)})}},{_aE(){this._aB=102,this._aC={},this._aD="http://xiaohua.zol.com.cn/qutu/${0}.html"},_aF(){let t=this._aD,a=this._aC,e=o(this._aB,a);return new Promise(async a=>{let s=[];try{t=t.replace("${0}",e);let a=await r.request(t,0,!0,"gbk"),i=/<span\s+class="article-title"><[^>]+>([\s\S]+?)<\/[^>]+><\/span>[\s\S]+?<div\s+class="summary-text">[\s\S]+?src="([^"]+)"/g;a.replace(i,(t,a,e)=>(e=e.replace(/\/t_s300x2000\//,"/t_s600x5000/"),s.push({name:a,img:e,date:"",from:"xiaohua.zol.com.cn"}),""))}catch(t){}a(s)})}},{_aE(){this._aB=847,this._aC={},this._aD="http://www.tucaojie.com/"},_aF(){let t=this._aD,a=this._aC,e=o(this._aB,a);return new Promise(async a=>{let s=[],i="";e>1&&(i=`index_${e}.html`);try{let a=await r.request(t+i,0,!0),e=/<img[^>]+?src="[^>]*?\/(d\/file\/[^"]+)"[^>]+alt="([^"]+)"/g;a.replace(e,(a,e,i)=>(s.push({name:i,img:t+e,date:"",from:"\u5410\u69fd\u8857"}),""))}catch(t){}a(s)})}},{_aE(){this._aB=31099,this._aC={},this._aD="https://www.biedoul.com/index/${0}/"},_aF(){let t=this._aD,a=this._aC,e=o(this._aB,a);return new Promise(async a=>{let s=[];t=t.replace("${0}",e);try{let a=await r.request(t,0,!0),e=/<DD>[\S\s]+?<STRONG>([\s\S]*?)<\/STRONG>[\S\s]+?<DD>([\s\S]+?)<\/DD>/g,i=/<img([^>]+?)src="(\/[^>]+)"/gi;a.replace(e,(t,a,e)=>(e=e.replace(i,(t,a,e)=>`<img${a}src="https://www.biedoul.com${e}"`),s.push({name:a,text:e,date:"",from:"\u522b\u9017\u4e86"}),""))}catch(t){}a(s)})}},{_aE(){this._aB=50,this._aC={},this._aD="http://www.budejie.com/${0}"},_aF(){let t=this._aD,a=this._aC,e=o(this._aB,a);return new Promise(async a=>{let s=[];t=t.replace("${0}",e);try{let a=await r.request(t,0,!0),e=/<div class="j-r-list-c-desc">\s*<a[^>]+>([\S\s]+?)<\/a>[\s\S]+?<img[^>]+?data-original="([^"]+)"/g;a.replace(e,(t,a,e)=>(s.push({name:a,img:e,date:"",from:"\u767e\u601d\u4e0d\u5f97\u59d0"}),""))}catch(t){}a(s)})}},{_aE(){this._aB=195,this._aC={},this._aD="http://www.51xiaohua.com/ye${0}.html"},_aF(){let t=this._aD,a=this._aC,e=o(this._aB,a);return new Promise(async a=>{let s=[];t=t.replace("${0}",e);try{let a=await r.request(t,0,!0),e=/<a href="\/baoxiaoegao\/(\d+)\.html">([\s\S]+?)<\/a>[\s\S]+?<a href="\/baoxiaoegao\/\1\.html"><img\s+src="([^"]+)"/g;a.replace(e,(t,a,e,i)=>(s.push({name:e,img:i,date:"",from:"51\u7b11\u8bdd\u7f51"}),""))}catch(t){}a(s)})}},{_aE(){this._aB=1072,this._aC={},this._aD="https://www.xiaohua.com/duanzi?page=${0}"},_aF(){let t=this._aD,a=this._aC,e=o(this._aB,a);return new Promise(async a=>{let s=[];t=t.replace("${0}",e);try{let a=await r.request(t,0,!0),e=/<p class="fonts">\s+<a href="\/detail\/\d+">([\s\S]+?)<\/a>/g;a.replace(e,(t,a)=>(s.push({name:name,text:a,date:"",from:"\u7b11\u8bdd\u7f51"}),""))}catch(t){}a(s)})}}];export default h.View.extend({tmpl:(h,r,o,c)=>{let n,m,_,p,g,u,d=[],{list:x}=h;n=[];for(let t=x.length,h=0;h<t;h+=1){let t=x[h];p=[r(0,c(t.name))],_=[r("div",e,p)],p=[],t.text&&(u=[r(0,c(t.text),1)],g=[r("div",i,u)],p.push(...g)),t.img&&(g=[r("img",{loading:"lazy",class:"xl-aK",src:c(t.img)},1)],p.push(...g)),_.push(r("div",s,p)),p=[r(0,"\u6765\u6e90:"+c(t.from)+" "+c(t.date))],_.push(r("div",l,p)),m=[r("div",a,_)],n.push(...m)}return n.push(r("div",{"mx5-owner":o,"mx5-intersect":o+"\x1e_aJ()","mx5-view":"~xl/gallery/mx-more/index"})),d.push(r("div",t,n)),r(o,0,d)},init(){let t=[];for(let a of n)a._aE(),t.push({s:a,w:0});this._aG=t,this.set({list:[]})},assign:()=>!1,async render(){let t=this._aG,a=Math.min(1+Math.ceil(Math.random()*t.length/1.5),t.length),e=t.sort(c).slice(0,a),s=[];for(let t of e)t.w+=1,s.push(t.s._aF());let i=h.mark(this,"_aH"),l=await Promise.all(s);if(i()){let t=this.get("list");if(l.length>1){let a=0,e={};do{let s=Math.floor(Math.random()*l.length),i=l[s];i.length?t.push(i.pop()):1!==e[s]&&(e[s]=1,a++)}while(a!=l.length)}else t.push(...l[0]);this.digest({list:t})}delete this._aI},"_aJ<intersect>"(){this._aI||(this._aI=1,this.render())}});