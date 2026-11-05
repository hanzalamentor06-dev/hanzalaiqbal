(()=>{
const C=window.SITE_CONFIG||{links:{}},A=window.ABOUT_CONTENT;
const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
const toast=$('#toast');let tt;
function say(m){toast.textContent=m;toast.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>toast.classList.remove('on'),3200)}
function closeMenu(){$('#menu').classList.remove('open');const b=$('.burger');b.setAttribute('aria-expanded','false');b.setAttribute('aria-label','Open menu')}
$$('[data-link]').forEach(a=>{const k=a.dataset.link;const u=k==='email'?(C.email?'mailto:'+C.email:''):(C.links||{})[k];
 if(u){a.href=u;if(/^https?:/.test(u)){a.target='_blank';a.rel='noopener noreferrer'}}
 else a.addEventListener('click',e=>{e.preventDefault();closeMenu();say(k==='email'?'Add your email address in js/config.js to enable this button.':'This link is a placeholder. Add it in js/config.js or build that page later.')})});
if(C.email){const m=$('#f-mail');if(m)m.textContent=C.email}
const burger=$('.burger');
burger.addEventListener('click',()=>{const o=$('#menu').classList.toggle('open');burger.setAttribute('aria-expanded',o);burger.setAttribute('aria-label',o?'Close menu':'Open menu')});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
const hd=$('header');addEventListener('scroll',()=>hd.classList.toggle('scrolled',scrollY>12),{passive:true});
$('#yr').textContent=new Date().getFullYear();
/* content */
$('#a-h').textContent=A.headline;$('#a-sub').textContent=A.subtitle;
$('#a-intro').innerHTML=A.intro.map(p=>`<p>${esc(p)}</p>`).join('');
$('#a-facts').innerHTML=A.facts.map(f=>`<div><dt>${esc(f[0])}</dt><dd>${esc(f[1])}</dd></div>`).join('');
$('#a-honest-t').textContent=A.honestTitle;$('#a-honest').textContent=A.honest;
$('#a-skills').innerHTML=[...A.groups].sort((a,b)=>a.order-b.order).map((g,i)=>`<article class="card sk ${g.level==='Main focus'?'main':''} rv" style="--d:${(i%2)*.08}s"><span class="lvl">${esc(g.level)}</span><h3>${esc(g.title)}</h3><p class="sd">${esc(g.description)}</p><ul>${g.items.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>${g.note?`<p class="gn">${esc(g.note)}</p>`:''}</article>`).join('');
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.1});
$$('.rv').forEach(el=>io.observe(el));
})();
