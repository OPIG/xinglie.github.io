import"../../gallery/mx-slider/index.js";let e={class:"xl-aZ"};import t from"../../lib/magix.js";import r from"./player.js";let i=new t.Cache(500,100),s=e=>{if(e|=0,i.has(e))return i.get(e);let t=e/60|0,r=e-60*t,s=("0"+t).slice(-2)+":"+("0"+r).slice(-2);return i.set(e,s),s};export default t.View.extend({tmpl:(t,r,i,s,n,u,a)=>{let d,l=[],{format:f,current:o,percent:p,buffered:c,duration:h}=t;return d=[r(0,0,s(f(o)))],l.push(r("span",e,d),r("div",{$:"percent,buffered",class:"xl-aV","mx-update":i+"\x1e_bu()","mx-change":i+"\x1e_bv()","mx-view":"~xl/gallery/mx-slider/index?value="+a(u,p,"\x1ed")+"&buffer=true&bufferValue="+a(u,c,"\x1ee")})),d=[r(0,0,s(f(h)))],l.push(r("span",e,d)),r(i,0,l)},init(){this.set({duration:0,current:0,buffered:0,format:s}),r.on("_aS",e=>{if(!this.get("stop")){let{duration:t,current:r}=e,i=0;t>0&&(i=r/t),this.digest({percent:i,duration:t,current:r,buffered:e.buffered})}})},render(){this.digest()},"_bu<update>"(e){this.digest({stop:!0,current:this.get("duration")*e.percent})},"_bv<change>"(e){this.set({stop:!1});let t=this.get("duration")*e.percent;r._bp(t)},"$doc<keydown>"(e){let{keyCode:t}=e,i=37==t,s=39==t;if(i||s){let{duration:e,current:t}=this.get();i?t-=5:s&&(t+=5),t<0?t=0:t>e&&(t=e),r._bp(t)}}});