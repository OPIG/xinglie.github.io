let e={class:"xl-cn"},s={class:"xl-cp"},l={class:"xl-cq"},r={class:"xl-cr"},a={class:"xl-cx"};import t from"../../lib/magix.js";import i from"../../lib/agent.js";let c=/\.fm-discovery\{[\s\S]+?url\(([^()]+)\)[\s\S]+?<a\s+href="\/([^"]+)"\s+class="q"\s+data-toggle="tooltip"\s+title="[^"]+"\s+data-placement="top">([\S\s]+?)<\/a>[\s\S]+<a[^>]+?rel="nofollow"\s+href="([^"]+)">\s*(\u8c46\u74e3[\S\s]+?)<\/a>[\s\S]+<a[^>]+?rel="nofollow"\s+href="([^"]+)">\s*(IMDB[\S\s]+?)<\/a>[\s\S]+<p\s+class="x-kankan-desc">([\s\S]+?)<\/p>/,n=/<div\s+class="x-kankan-full-desc"\s+style="display:\s*none;">([\s\S]+?)<\/div>/;export default t.View.extend({tmpl:(t,i,c,n,o)=>{let d,m,p,x,h,b,f=[],{videoInfo:g,loading:k}=t;return d=[i("div",{class:"xl-co",style:"background-image:url("+n(g.img)+")"})],p="",m=[i(0,p+=k?"\u5207\u6362\u4e2d...":"\u6362\u4e00\u6362")],d.push(i("button",{type:"button",class:"xl-b5 xl-cy","mx5-click":c+"\x1e_b1()"},m)),b=[i(0,n(g.name))],h=[i("a",{class:"xl-cs xl-ct",href:n(g.detail),rel:"noopener noreferrer",target:"_blank"},b)],x=[i("div",r,h)],b=[i(0,"\u817e\u8baf")],h=[i("a",{href:"https://v.qq.com/x/search/?q="+o(g.name),class:"xl-cs xl-cu xl-cw",rel:"noopener noreferrer",title:"\u4f7f\u7528\u817e\u8baf\u641c\u7d22"+n(g.name),target:"_blank"},b)],b=[i(0,"\u7231\u5947\u827a")],h.push(i("a",{href:"http://so.iqiyi.com/so/q_"+o(g.name),class:"xl-cs xl-cu xl-cw",rel:"noopener noreferrer",title:"\u4f7f\u7528\u7231\u5947\u4e16\u641c\u7d22"+n(g.name),target:"_blank"},b)),b=[i(0,n(g.dbScore))],h.push(i("a",{href:n(g.dbLink),rel:"noopener noreferrer",target:"_blank",class:"xl-cs xl-cv xl-cw"},b)),b=[i(0,n(g.imdbScore))],h.push(i("a",{href:n(g.imdbLink),rel:"noopener noreferrer",target:"_blank",class:"xl-cs xl-cv xl-cw"},b)),x.push(i("div",a,h)),m=[i("div",l,x)],x=[i(0,n(g.desc),1)],m.push(i("div",0,x)),d.push(i("div",s,m)),f.push(i("div",e,d)),i(c,0,f)},async render(){try{let e=t.mark(this,"_aH"),s=await i.request("http://dianying.fm/",0,!0);if(e()){let e={img:"",detail:"",name:"",dbLink:"",dbScore:"",imdbLink:"",imdbScore:"",desc:""};s.replace(c,(s,l,r,a,t,i,c,o,d)=>(e.img=l,e.detail="http://dianying.fm/"+r,e.name=a.trim(),e.dbLink=t,e.dbScore=i.trim(),e.imdbLink=c,e.imdbScore=o.trim(),e.desc=d.trim(),d.replace(n,(s,l)=>(e.desc=l.trim(),s)),s)),this.digest({loading:!1,videoInfo:e})}}catch(e){alert(e),this.set({loading:!1})}},"_b1<click>"(){this.get("loading")||(this.digest({loading:!0}),this.render())}});