/*!1.1.0 kooboy_li@163.com*/
import _ from"./magix.js";let o=window.requestAnimationFrame,t=Date.now,e=[],l=0,r=()=>{for(let o=0;o<e.length;o++){let l=e[o];l._n?(e.splice(o,1),o--):t()-l._o>=l._p&&(l._o=t(),_.task(l._q,null,null,l._r))}e.length?o(r):l=0};export default{_s(n,f,a,i){e.push({_q:n,_p:f,_o:t(),_r:i}),a&&_.toTry(n),l||(l=1,o(r))},_t(_){for(let o of e)o._q==_&&(o._n=1)},_u(_){for(let o of e)o._q==_&&(o._o=t())}};