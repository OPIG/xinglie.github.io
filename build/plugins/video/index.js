/*!1.0.2 kooboy_li@163.com*/
let e={class:"xl-bQ"},l={value:"value"},t={selected:"selected"};import i from"../../lib/magix.js";import s from"./vip.js";i.applyStyle("xlo",".xl-bP{height:30px;box-sizing:border-box}.xl-bQ{background:#fff;padding:2px 10px}.xl-bR{height:130px;position:absolute;top:-31px;width:100%;transition:top .25s}.xl-bR:hover{top:0}.xl-bS{width:50%;height:26px;outline:none;font-size:16px;padding:0 4px;border-radius:4px;box-sizing:border-box;border:1px solid #ccc}.xl-bT{width:30%;border:1px solid #ccc}.xl-bU,.xl-bT{height:26px;outline:none;font-size:16px;padding:0 4px;background:none;margin-left:10px}.xl-bU{width:80px;border-radius:4px}.xl-bV{width:98%;height:calc(100% - 40px);margin:0 1%}.xl-bW{width:100%;margin:0;height:100%}");export default i.View.extend({tmpl:(i,s,o,n)=>{let x,r,a,c,p,d,b=[],{list:h,si:g,maxState:u,url:m}=i,f=h[g].url;a=[s("input",{class:"xl-bS",placeholder:"\u8bf7\u8f93\u5165/\u7c98\u8d34\u64ad\u653e\u5730\u5740","mx-change":o+"\x1e_cd()",value:n(m)},0,l,1)],c=[];for(let e=h.length,l=0;l<e;l++){let e=h[l];d=[s(0,0,n(e.name))],p=[s("option",{value:n(e.url),selected:l==g},d,t)],c.push(...p)}return a.push(s("select",{class:"xl-bT","mx-change":o+"\x1e_cc()"},c)),c=[s(0,0,"\u64ad\u653e")],a.push(s("button",{_:"_",type:"button",class:"xl-bU","mx-click":o+"\x1e_ce()"},c)),r=[s("div",e,a)],x="xl-bP",u&&f&&(x+=" xl-bR"),b.push(s("div",{class:x},r)),f&&(x="xl-bV",u&&(x+=" xl-bW"),r=[s("iframe",{src:n(f)+n(encodeURIComponent(m)),sandbox:"allow-scripts allow-same-origin",allowfullscreen:!0,scrolling:"no",frameborder:"0",class:x})],b.push(...r)),s(o,0,b)},init(e){this.assign(e),this.set({si:0,url:""})},assign(e){return this.set(e),!0},render(){this.digest({list:s})},"_cc<change>"(e){let l=e.eventTarget.selectedIndex;this.set({si:l})},"_cd<change>"(e){let l=e.eventTarget.value;this.set({url:l})},"_ce<click>"(){this.digest()}});