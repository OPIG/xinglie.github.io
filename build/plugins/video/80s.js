let e={class:"xl-cb"},t={class:"xl-cd"},l={class:"xl-ce"};import r from"../../lib/magix.js";import i from"../../lib/agent.js";let s=/<a\s+href="(\/movie[^"]+)"\s+target="_blank"\s+title="([^"]+)">\s+<img[^>]+_src="([^"]+)"/g;export default r.View.extend({tmpl:(r,i,s,a,n)=>{let o,c,h,p,g=[],{videos:m}=r;for(let r=m.length,s=0;s<r;s+=1){let r=m[s];p=[i("img",{src:a(r.img),loading:"lazy"},1)],h=[i("a",{href:a(r.link),title:"\u67e5\u770b"+a(r.title)+"\u8be6\u60c5",rel:"noopener noreferrer",target:"_blank"},p)],c=[i("div",t,h)],h=[i(0,a(r.title))],c.push(i("div",{class:"xl-ce xl-cf",title:a(r.title)},h)),p=[i(0,"\u817e\u8baf")],h=[i("a",{href:"https://v.qq.com/x/search/?q="+n(r.title),class:"xl-ci",rel:"noopener noreferrer",title:"\u4f7f\u7528\u817e\u8baf\u641c\u7d22"+a(r.title),target:"_blank"},p)],p=[i(0,"\u7231\u5947\u827a")],h.push(i("a",{href:"http://so.iqiyi.com/so/q_"+n(r.title),class:"xl-ci",rel:"noopener noreferrer",title:"\u4f7f\u7528\u7231\u5947\u4e16\u641c\u7d22"+a(r.title),target:"_blank"},p)),c.push(i("div",l,h)),o=[i("div",e,c)],g.push(...o)}return i(s,0,g)},async render(){try{let e=r.mark(this,"_aH"),t=await i.request("http://www.8080s.net/hot",0,!0);if(e()){let e=[];t.replace(s,(t,l,r,i)=>(e.push({link:"http://www.8080s.net"+l,title:r,img:i}),"")),this.digest({videos:e})}}catch(e){alert(e)}}});