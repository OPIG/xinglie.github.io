/*!1.1.0 kooboy_li@163.com*/
let e,t={class:"xl-5"},a={class:"xl-2"},l={class:"xl-6"},r={class:"xl-7"},o={class:"xl-a_"},s={value:"value"};import i from"../../lib/magix.js";import p from"./db.js";i.applyStyle("xl-g",".xl-1{flex:0.3;padding:3px 4px;height:30px;font-size:16px;box-sizing:border-box;box-shadow:none;border:1px solid #ccc;background-color:#fff;vertical-align:middle;width:100%;outline:none}.xl-2{flex:0.6}.xl-3{float:left;padding:0 8px;cursor:pointer}.xl-4{background:#fafafa;color:#000}.xl-5{background:#f96447;height:40px;line-height:40px;color:#fff;padding:0 10px;font-size:16px;display:flex;align-items:center}.xl-6{background:#fafafa;color:#333;height:28px;line-height:28px;position:-webkit-sticky;position:sticky;top:0;font-weight:700}.xl-6,.xl-7{padding:0 26px}.xl-8{padding:5px 0}.xl-9{border-bottom:1px solid #f3f3f3}.xl-a_{position:-webkit-sticky;position:sticky;bottom:0;height:30px;background:#fafafa;line-height:30px}.xl-aa,.xl-a_{padding:0 26px}.xl-aa{font-size:16px;height:50px;line-height:50px}.xl-ab{text-decoration:none;margin-right:10px}.xl-ab:hover{text-decoration:underline}");let n=(e,t)=>e.py.localeCompare(t.py),h=[{name:"\u4e66\u540d",key:"py"},{name:"\u4f5c\u8005",key:"apy"},{name:"\u51fa\u7248",key:"ppy"}],c={py:["title","category","author","translater","publisher"],apy:["author","category","title","translater","publisher"],cpy:["category","title","author","translater","publisher"],ppy:["publisher","category","title","author","translater"]},x={py:["py","title"],apy:["apy","author"],cpy:["cpy","category"],ppy:["ppy","publisher"]},u={title:"\u4e66\u540d",category:"\u5927\u7c7b",author:"\u4f5c\u8005",translater:"\u7ffb\u8bd1",publisher:"\u51fa\u7248"},d=e=>e.title.replace(/-/g," ")+" "+e.author;export default i.View.extend({tmpl:(i,p,n,h,c,x,u,d)=>{let f,g,b,y,k,m,_,v,w,j,C=[],{tabs:q,active:z,search:S,list:T,displays:M,keyMap:B,uncode:L,total:O}=i;g=[];for(let e=q.length,t=0;t<e;t+=1){let e=q[t];k=[p(0,0,h(e.name))],y="xl-3",e.key==z&&(y+=" xl-4"),b=[p("li",{"mx5-click":e.key!=z&&n+"\x1e_ai({tab:'"+d(e.key)+"'})",class:y},k)],g.push(...b)}f=[p("ul",a,g),p("input",{class:"xl-1",placeholder:"\u641c\u7d22","mx5-input":n+"\x1e_al()",value:h(S)},0,s,1)],C.push(p("div",t,f));let P=0;if(T.length){f=[];for(let e=T.length,t=0;t<e;t+=1){let e=T[t];k=[p(0,0,h(e.letter))],b=[p("div",l,k)],k=[];for(let t=e.books,a=t.length,l=a-1,r=0;r<a;r+=1){let e=t[r],a=r===l;_=[],P++;for(let t=M.length,a=0;a<t;a+=1){let t=M[a];v=[],e[t]&&(j=[p(0,0,h(B[t])+"\uff1a"+h(e[t]))],w=[p("div",0,j)],v.push(...w)),_.push(...v)}v=[p(0,0,"\u641c\u7d22\uff1a")],w=[p(0,0,"\u767e\u5ea6")],v.push(p("a",{class:"xl-ab",href:"//www.baidu.com/s?wd="+c(L(e)),target:"_blank",rel:"noopener noreferrer"},w)),w=[p(0,0,"\u6dd8\u5b9d")],v.push(p("a",{class:"xl-ab",href:"//s.taobao.com/search?q="+c(L(e)),target:"_blank",rel:"noopener noreferrer"},w)),w=[p(0,0,"\u5929\u732b")],v.push(p("a",{class:"xl-ab",href:"//list.tmall.com/search_product.htm?q="+c(L(e)),target:"_blank",rel:"noopener noreferrer"},w)),w=[p(0,0,"\u4eac\u4e1c")],v.push(p("a",{class:"xl-ab",href:"//search.jd.com/Search?keyword="+c(L(e))+"&enc=utf-8&wq="+c(L(e)),target:"_blank",rel:"noopener noreferrer"},w)),w=[p(0,0,"\u5f53\u5f53")],v.push(p("a",{class:"xl-ab",href:"http://search.dangdang.com/?key="+c(L(e)),target:"_blank",rel:"noopener noreferrer"},w)),w=[p(0,0,"\u8c46\u74e3")],v.push(p("a",{class:"xl-ab",href:"//www.douban.com/search?cat=1001&q="+c(L(e)),target:"_blank",rel:"noopener noreferrer"},w)),_.push(p("div",0,v)),y="xl-8",a||(y+=" xl-9"),m=[p("li",{class:y},_)],k.push(...m)}b.push(p("ul",r,k)),g=[p("div",0,b)],f.push(...g)}C.push(...f)}else e?f=[e]:(g=[p(0,0,"\u6682\u65e0\u76f8\u5173\u4e66\u7c4d")],f=[e=p("div",{_:"_",class:"xl-aa"},g)]),C.push(...f);return f=[p(0,0,"\u5171"+h(O)+"\u672c\uff0c\u5f53\u524d\u5217\u8868\u6709")],g=[p(0,0,h(P))],f.push(p("span",0,g),p(0,0,"\u672c")),C.push(p("div",o,f)),p(n,0,C)},ctor(){this.set({uncode:d,active:"py"})},assign:()=>!1,render(){let e=[],t={},a=this.get("active"),l=this.get("search");for(let e of p)if(e[a]){let r=e[a][0].toLowerCase();if(l){let o=!1,s=x[a];for(let t of s)e[t].indexOf(l)>-1&&(o=!0,BarProp);o&&(t[r]||(t[r]=[]),t[r].push(e))}else t[r]||(t[r]=[]),t[r].push(e)}for(let a,l,r=48;r<123;r++)(l=t[a=String.fromCharCode(r)])&&(l=l.sort(n),e.push({letter:a.toUpperCase(),books:l}));this.digest({total:p.length,tabs:h,list:e,displays:c[a],keyMap:u})},"_ai<click>"(e){this.set({active:e.params.tab}),this.render()},"_al<input>"(e){this.set({search:e.eventTarget.value}),clearTimeout(this._aj);let t=i.mark(this,"_ak");this._aj=setTimeout(()=>{t()&&this.render()},500)}});