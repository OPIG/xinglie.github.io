let e={class:"xl-aF"},t={class:"xl-aD"},a={class:"xl-aG"},l={class:"xl-aH"},o={class:"xl-aI"},r={class:"xl-aJ"};import s from"../../lib/magix.js";import i from"../../gallery/mx-dragdrop/index.js";import p from"../../lib/cron.js";s.applyStyle("xlj",'.xl-aC{background:rgba(0,0,0,.13);border-radius:5px;overflow:hidden;opacity:.1;transition:all .5s}.xl-aC:hover{opacity:.8}.xl-aD{height:4px;background:#bbb}.xl-aE{height:100%;background:#888}.xl-aF{border-radius:4px;background:rgba(0,0,0,.67);transform:translate(90px,-40px);position:absolute;left:0;top:0;padding:4px;font-size:12px}.xl-aF:after{content:" ";width:0;height:0;position:absolute;border:6px solid transparent;border-top-color:rgba(0,0,0,.67);left:50%;top:100%}.xl-aG{position:absolute;left:0;right:0;bottom:0;font-size:140px;color:hsla(0,0%,100%,.13)}.xl-aG,.xl-aH{text-align:center}.xl-aH{border-collapse:collapse;width:100%;border-spacing:0}.xl-aI{background:rgba(0,0,0,.33)}.xl-aJ{font-size:18px}.xl-aK{cursor:pointer;padding:0;border-radius:4px;width:50px;height:30px}.xl-aL,.xl-aL:hover{background:rgba(0,0,0,.27)}');let n="\u65e5\u4e00\u4e8c\u4e09\u56db\u4e94\u516d".split("");export default s.View.extend({mixins:[i],tmpl:(s,i,p,n)=>{let d,h,x,g,u,b,c,y,m,f,w=[],{days:k,esDays:D,percent:v,month:C,weekText:F,weeks:M,year:T,day:S}=s;h=[i(0,0,"\u4eca\u5e74\u5171"+n(k)+"\u5929\uff0c\u8fd8\u6709"+n(Math.ceil(D))+"\u5929")],d=[i("div",e,h)],h=[i("div",{class:"xl-aE",style:"width:"+n(v)+"%"})],d.push(i("div",t,h)),h=[i(0,0,n(C))],d.push(i("div",a,h)),x=[],g=[];for(let e=0,t=F,a=t.length;e<a;e++){b=[i(0,0,n(t[e]))],u=[i("td",o,b)],g.push(...u)}x.push(i("tr",0,g));for(let e=0,t=M,a=t.length;e<a;e++){u=[];for(let a=0,l=t[e],o=l.length;a<o;a++){let e=l[a];y=[],e.otherMonth||(f=[i(0,0,n(e.day))],m=[i("div",r,f)],y.push(...m)),c="xl-aK",e.year==T&&e.month==C&&e.day==S&&(c+=" xl-aL"),b=[i("td",{title:!e.otherMonth&&n(`${e.year}-${e.month}-${e.day}`),class:c},y)],u.push(...b)}g=[i("tr",0,u)],x.push(...g)}return h=[i("tbody",0,x)],d.push(i("table",l,h)),w.push(i("div",{class:"xl-aC","mx-mousedown":p+"\x1e_aC()"},d)),i(p,0,w)},init(){this.set({weekText:n,weekStart:0});let e=this.render.bind(this);p._p(e,6e5),this.ondestroy=(()=>{p._q(e)})},render(){let e,t=new Date,a=t.getFullYear(),l=t.getMonth()+1,o=t.getDate(),r=new Date(t.getFullYear(),0,1,0,0,0).getTime(),s=new Date(t.getFullYear()+1,0,1,0,0,0).getTime(),i=(t.getTime()-r)/(s-r)*100,p=(s-r)/864e5,n=(s-t.getTime())/864e5,d=(7-this.get("weekStart")+new Date(a,l-1,1).getDay())%7,h=[],x=[],g=((e,t)=>32-new Date(e,t-1,32).getDate())(a,l);for(e=1;e<=d;e++)x.push({otherMonth:!0});for(e=1;e<=g;e++)x.push({year:a,day:e,month:l}),(e+d)%7==0&&(h.push(x),x=[]);let u=x.length;if(u){let t=7;for(e=u;e<t&&(x.push({otherMonth:!0}),(e+1)%7!=0||(h.push(x),x=[],6!=h.length));e++);}this.digest({year:a,month:l,day:o,days:p,esDays:n,percent:i.toFixed(2),weeks:h})},"_aC<mousedown>"(e){let t=this.root,a=parseInt(getComputedStyle(t).left),l=parseInt(getComputedStyle(t).top);this._d(e,o=>{let r=o.pageX-e.pageX,s=o.pageY-e.pageY,i=a+r,p=l+s;t.style.left=i+"px",t.style.top=p+"px"})}});