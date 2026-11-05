(()=>{
const C=window.SITE_CONFIG||{links:{}},D=window.SERVICES_CONTENT;
const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
const toast=$('#toast');let tt;
function say(m){toast.textContent=m;toast.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>toast.classList.remove('on'),3200)}
function closeMenu(){$('#menu').classList.remove('open');const b=$('.burger');b.setAttribute('aria-expanded','false');b.setAttribute('aria-label','Open menu')}
const ph=()=>say('The Contact page is not built yet. Add its address in js/config.js to enable this button.');
function bind(root){$$('[data-link]',root).forEach(a=>{const k=a.dataset.link;const u=k==='email'?(C.email?'mailto:'+C.email:''):(C.links||{})[k];
 if(u){a.href=u;if(/^https?:/.test(u)){a.target='_blank';a.rel='noopener noreferrer'}}
 else a.addEventListener('click',e=>{e.preventDefault();closeMenu();say(k==='email'?'Add your email address in js/config.js to enable this button.':'This link is a placeholder. Add it in js/config.js or build that page later.')})})}
const svg=p=>`<svg viewBox="0 0 24 24" aria-hidden="true">${p}</svg>`;
const IC={chat:'<path d="M4 5h16v11H9l-5 4z"/><path d="M8 9h8M8 12h5"/>',pin:'<path d="M12 21s-6-5.2-6-10a6 6 0 0112 0c0 4.8-6 10-6 10z"/><circle cx="12" cy="11" r="2.2"/>',link:'<path d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1-1"/>',chart:'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',cart:'<path d="M3 4h2l2.5 11h10L20 7H6"/><circle cx="9" cy="19" r="1.5"/><circle cx="17" cy="19" r="1.5"/>',video:'<rect x="3" y="6" width="13" height="12" rx="2"/><path d="M16 10l5-3v10l-5-3"/>',spark:'<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/>',store:'<path d="M5 8h14l-1 12H6zM9 8a3 3 0 016 0"/>',search:'<circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5"/>',check:'<path d="M5 12l5 5 9-10"/>'};
const PL={instagram:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',facebook:'<path d="M14 8h3V4h-3a4 4 0 00-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z"/>',tiktok:'<path d="M14 3v11a4 4 0 11-4-4M14 3c.3 2.6 2 4.4 5 4.6"/>',pinterest:'<circle cx="12" cy="12" r="9"/><path d="M11 8.5c2.5-.8 4.5.5 4 3-.4 2-2.2 3-3.5 2.2M11.5 12.5L10 20"/>',youtube:'<rect x="3" y="6" width="18" height="12" rx="4"/><path d="M10.5 9.5v5l4.5-2.5z"/>'};
/* header text */
$('#s-h').textContent=D.headline;$('#s-sub').textContent=D.subtitle;$('#s-intro').textContent=D.intro;
/* services */
const price=s=>s.pricingType==='from'&&s.price?'From '+s.price:s.pricingType==='fixed'&&s.price?s.price:'Contact for Pricing';
const list=D.services.filter(s=>s.active!==false).sort((a,b)=>a.order-b.order);
$('#s-grid').innerHTML=list.map((s,i)=>`<article class="card svc2 ${s.featured?'feat':''} ${i<2?'top':''} rv" style="--d:${(i%3)*.08}s">
 <div class="svh"><div class="ico">${svg(IC[s.icon]||IC.spark)}</div>${s.featured?'<span class="tagf">Longest-running experience</span>':''}</div>
 <h3>${esc(s.title)}</h3><p class="sd">${esc(s.fullDescription)}</p>
 ${s.experience?`<p class="exp"><b>Experience:</b> ${esc(s.experience)}</p>`:''}
 <h4>Services include</h4><ul>${s.features.map(f=>`<li>${esc(f)}</li>`).join('')}</ul>
 ${s.note?`<p class="gn">${esc(s.note)}</p>`:''}
 <div class="svf"><span class="pr">${esc(price(s))}</span><button type="button" class="btn ${s.featured?'btn-p':'btn-s'}" data-service="${esc(s.title)}" aria-label="Discuss this service: ${esc(s.title)}">Discuss This Service</button></div></article>`).join('');
$('#s-grid').addEventListener('click',e=>{const b=e.target.closest('[data-service]');if(!b)return;
 const u=(C.links||{}).contact;if(!u){ph();return}
 location.href=u+(u.includes('?')?'&':'?')+'service='+encodeURIComponent(b.dataset.service)});
/* platforms, experience, process */
$('#p-note').textContent=D.platformsNote;
$('#p-grid').innerHTML=D.platforms.map((p,i)=>`<div class="card pl rv" style="--d:${i*.06}s">${svg(PL[p.id]||'')}<h3>${esc(p.name)}</h3><span>${esc(p.status)}</span></div>`).join('');
$('#e-grid').innerHTML=D.experience.map((e,i)=>`<article class="card ex rv" style="--d:${i*.1}s"><b>${esc(e.years)}</b><h3>${esc(e.title)}</h3><p>${esc(e.detail)}</p></article>`).join('');
$('#h-grid').innerHTML=D.process.map((p,i)=>`<li class="card st rv" style="--d:${i*.08}s"><div class="ico">${svg(IC[p.icon]||IC.check)}</div><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p></li>`).join('');
bind(document);
if(C.email){const m=$('#f-mail');if(m)m.textContent=C.email}
const burger=$('.burger');
burger.addEventListener('click',()=>{const o=$('#menu').classList.toggle('open');burger.setAttribute('aria-expanded',o);burger.setAttribute('aria-label',o?'Close menu':'Open menu')});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
const hd=$('header');addEventListener('scroll',()=>hd.classList.toggle('scrolled',scrollY>12),{passive:true});
$('#yr').textContent=new Date().getFullYear();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.08});
$$('.rv').forEach(el=>io.observe(el));
})();
