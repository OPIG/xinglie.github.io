let l={class:"xl-Q xl-P"},e={class:"xl-R"},a={class:"xl-S"},r={class:"xl-U"},t={class:"xl-V"};import x from"../../lib/magix.js";import i from"./db.js";x.applyStyle("xld",'[mx-view^="~xl/plugins/blog/index"]{background:#3f3e3c}.xl-P:after,.xl-P:before{content:" ";display:table}.xl-P:after{clear:both}.xl-Q{width:1080px;margin:0 auto 20px}.xl-R{margin:20px 5px;background:#222;box-shadow:0 1px 0 hsla(0,0%,100%,.1),inset 0 1px 1px rgba(0,0,0,.7);width:530px;color:#b9b9b9;border-radius:6px;float:left}.xl-S{padding:0 0 0 20px;font:16px/50px Microsoft YaHei,Arial,Helvetica,sans-serif}.xl-T{color:#a6a6a6;text-decoration:none;-webkit-transition:all 1s ease;transition:all 1s ease}.xl-T:hover{padding-left:20px;color:#fff}.xl-U{overflow:hidden;line-height:24px;height:50px;padding:0 20px 5px;color:#616161}.xl-V{background:rgba(1,1,1,.3);border-radius:0 0 6px 6px;padding:0 10px 0 18px;color:#3f3e3c}');export default x.View.extend({tmpl:(x,i,o,s)=>{let p,d,n,c,f,h=[],{list:b}=x;p=[];for(let l=0,x=b,o=x.length;l<o;l++){let o=x[l];f=[i(0,0,s(o.title))],c=[i("a",{class:"xl-T",href:s(o.href),target:"_blank",rel:"noopener noreferrer"},f)],n=[i("h2",a,c)],c=[i(0,0,s(o.desc))],n.push(i("div",r,c)),c=[i(0,0,s(o.date))],n.push(i("div",t,c)),d=[i("div",e,n)],p.push(...d)}return h.push(i("div",l,p)),i(o,0,h)},render(){this.digest({list:i})}});