var t=this&&this.__awaiter||function(t,e,i,s){return new(i||(i=Promise))(function(h,a){function n(t){try{_(s.next(t))}catch(t){a(t)}}function r(t){try{_(s.throw(t))}catch(t){a(t)}}function _(t){t.done?h(t.value):new i(function(e){e(t.value)}).then(n,r)}_((s=s.apply(t,e||[])).next())})};import e from"../../lib/magix.js";let i="https://jirenguapi.applinzi.com/fm",s=[],h=[],a=new e.Cache(200,50);export default Object.assign({_aZ:()=>fetch(`${i}/getChannels.php`).then(t=>t.json()),_b_:t=>fetch(`${i}/getSong.php?channel=${t}`).then(t=>t.json()),_aW(t){let e=`${i}/getLyric.php?sid=${t}`;return a.has(e)?Promise.resolve(a.get(e)):fetch(e).then(t=>t.json()).then(t=>(a.set(e,t),Promise.resolve(t)))},_as(){return t(this,void 0,void 0,function*(){let{channels:t}=yield this._aZ();return{active:t[0],channels:t}})},_be(t){if(this._ba){clearTimeout(this._bb);let i=this._bc;i||(i={play:!1,buffer:!1});let s=["play","buffer"];for(let h of s)e.has(t,h)||(t[h]=i[h]);this._bc=t,this._bb=setTimeout(()=>{let e=!1;if(i=this._bd){for(let h of s)if(i[h]!=t[h]){e=!0;break}}else e=!0;e&&this.fire("_ax",this._bd=t)},50)}},_bf(){let t=this._ba;if(t){let e=t.buffered,i=0;e.length&&(i=e.end(e.length-1)/t.duration),this.fire("_aO",{duration:t.duration,current:t.currentTime,buffered:i})}},_bj(){if(!this._ba){let t,e=new Audio;e.onprogress=(()=>{this._bf()}),e.onerror=(()=>{clearTimeout(t),t=setTimeout(()=>{this.fire("_au")},2e3)}),e.onended=(()=>{clearTimeout(t),t=setTimeout(()=>{this.fire("_au")},1e3)}),e.onvolumechange=(()=>{this.fire("_bg",{volume:e.volume})}),e.oncanplay=(()=>{this._be({buffer:!1})}),e.onwaiting=(()=>{this._be({buffer:!0})}),e.ontimeupdate=(()=>{this._bh||this._bf()}),e.onplaying=(()=>{this._be({play:!0})}),e.ondurationchange=(()=>{this._bh||this._bf()}),e.onpause=(()=>{this._be({play:e.ended})}),e.onloadedmetadata=(()=>{let t=this._bi,e=!1;for(let i of h)if(i.sid==t.sid){e=!0;break}if(!e)for(let i of s)if(i.sid==t.sid){e=!0;break}e||h.push(t),h.length>50&&h.shift(),this.fire("_ay",{song:t})}),this._ba=e}},_bk(t){this._bj(),this._ba.src=t.url,this._ba.play().catch(t=>{}),this._bi=t},_bl(t){if(this._ba){let e=this._ba.seekable,i=e.length;if(i){let s=e.start(0),h=e.end(i-1);t>=s&&t<=h&&(this._ba.currentTime=t)}else{let t=this._ba.buffered;if(t.length){let e=t.end(t.length-1);this._ba.currentTime=e}}}},_bn(t,e,i){clearTimeout(this._bm),this._bm=setTimeout(()=>{this._av(t,e)},i)},_av(i,a){return t(this,void 0,void 0,function*(){if(this._aD(),this._be({buffer:!0}),a||(a=0==s.length),a)try{let t=e.mark(this,"_av"),{song:s}=yield this._b_(i);if(t()){let t=s[0];t.url?(this.fire("_az",{song:t}),this._bk(t)):this._bn(i,a,50)}}catch(t){this._bn(i,a,2e3)}else{let t=s.pop();h.push(t),this._bk(t),this.fire("_az",{song:t})}})},_aI(){if(h.length>1){this._aD(),this._be({buffer:!0});let t=h.pop();s.push(t),t=h[h.length-1],this._bk(t),this.fire("_az",{song:t})}},_aL(){return this._ba},_aC:()=>h.length>1,_bo(t){this._ba&&(this._ba.volume=t)},_aD(){this._ba&&this._ba.pause()},_aE(){this._ba&&this._ba.play()},_bp(){let t=this._ba;return!!t&&(t.muted=!t.muted,t.muted)},_aw(){this._ba&&(this._ba.currentTime=0,this._ba.play())},_aA(){if(h.length>1){let t=h[h.length-2];return"\u4e0a\u4e00\u9996\uff1a"+t.title+"-"+t.artist}return"\u4e0a\u4e00\u9996\uff1a\u6682\u65e0\u5386\u53f2\u6b4c\u66f2"},_aB(){if(s.length){let t=s[s.length-1];return"\u4e0b\u4e00\u9996\uff1a"+t.title+"-"+t.artist}return"\u4e0b\u4e00\u9996\uff1a\u968f\u673a\u6b4c\u66f2"},_aM(t){this._bh=t,t||this._bf()}},e.Event);