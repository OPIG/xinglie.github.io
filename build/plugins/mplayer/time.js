import"../../gallery/mx-slider/index.js";let e={class:"xl-bi"};import t from"../../lib/magix.js";import r from"./player.js";let i=new t.Cache(500,100),s=e=>{if(e|=0,i.has(e))return i.get(e);let t=e/60|0,r=e-60*t,s=("0"+t).slice(-2)+":"+("0"+r).slice(-2);return i.set(e,s),s};export default t.View.extend({tmpl:(t,r,i,s,n,u,d)=>{let l,a=[],{format:f,current:o,percent:p,buffered:c,duration:b}=t;return l=[r(0,0,s(f(o)))],a.push(r("span",e,l),r("div",{$:"percent,buffered",class:"xl-be","mx-update":i+"\x1e_bC()","mx-change":i+"\x1e_bD()","mx-view":"~xl/gallery/mx-slider/index?value="+d(u,p,"\x1ed")+"&buffer=true&bufferValue="+d(u,c,"\x1ee")})),l=[r(0,0,s(f(b)))],a.push(r("span",e,l)),r(i,0,a)},init(){this.set({duration:0,current:0,buffered:0,format:s}),r.on("_b_",e=>{if(!this.get("stop")){let{duration:t,current:r}=e,i=0;t>0&&(i=r/t),this.digest({percent:i,duration:t,current:r,buffered:e.buffered})}})},render(){this.digest()},"_bC<update>"(e){this.digest({stop:!0,current:this.get("duration")*e.percent})},"_bD<change>"(e){this.set({stop:!1});let t=this.get("duration")*e.percent;r._bx(t)},"$doc<keydown>"(e){let{keyCode:t}=e,i=37==t,s=39==t;if(i||s){let{duration:e,current:t}=this.get();i?t-=5:s&&(t+=5),t<0?t=0:t>e&&(t=e),r._bx(t)}}});