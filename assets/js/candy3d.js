/* SevaSphere v41: Candy 3D click ripple. Hover, press and tilt are done in CSS and site.js. */
(function () {
  'use strict';
  if (window.matchMedia && matchMedia('(prefers-reduced-motion:reduce)').matches) return;
  var SEL = '.btn,.btn-accent,.btn-line,.btn-ghost,.btn-w,.gc .go,.tc .go';
  document.addEventListener('pointerdown', function (e) {
    var b = e.target.closest && e.target.closest(SEL);
    if (!b || b.disabled || b.getAttribute('aria-disabled') === 'true') return;
    var r = b.getBoundingClientRect();
    if (!r.width || !r.height || r.width > 600) return;
    var d = Math.max(r.width, r.height) * 2.2, s = document.createElement('span');
    s.className = 'cd-ring';
    s.setAttribute('aria-hidden', 'true');
    s.style.cssText = 'width:' + d + 'px;height:' + d + 'px;left:' + (e.clientX - r.left - d / 2) + 'px;top:' + (e.clientY - r.top - d / 2) + 'px';
    b.classList.add('cd-rip');
    b.appendChild(s);
    setTimeout(function () {
      if (s.parentNode) s.parentNode.removeChild(s);
      if (!b.querySelector('.cd-ring')) b.classList.remove('cd-rip');
    }, 650);
  }, { passive: true });
})();

/* ssb-ripple: SevaSphere home buttons ripple and card tilt */
(function(){
  document.addEventListener('pointerdown',function(e){var b=e.target.closest&&e.target.closest('.ssb');if(!b)return;var r=b.getBoundingClientRect(),d=Math.max(r.width,r.height)*2.2,s=document.createElement('span');s.className='ripple';s.style.cssText='width:'+d+'px;height:'+d+'px;left:'+(e.clientX-r.left-d/2)+'px;top:'+(e.clientY-r.top-d/2)+'px';b.appendChild(s);setTimeout(function(){s.remove()},650)});
  var calm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches,hov=window.matchMedia&&matchMedia('(hover: hover)').matches;
  if(calm||!hov)return;
  function init(){document.querySelectorAll('.ss-card').forEach(function(el){el.addEventListener('pointermove',function(e){var r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;el.style.setProperty('--ry',(x*8).toFixed(2)+'deg');el.style.setProperty('--rx',(-y*6).toFixed(2)+'deg')});el.addEventListener('pointerleave',function(){el.style.removeProperty('--rx');el.style.removeProperty('--ry')})})}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();

/* ss-chat: "Chat with Us" opens the helper chat */
(function(){document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('#ss-chat');if(!b)return;var f=document.querySelector('#cscbot .cb-fab');if(f&&f.getAttribute('aria-expanded')!=='true')f.click();else if(!f)location.href='contact.html'})})();
