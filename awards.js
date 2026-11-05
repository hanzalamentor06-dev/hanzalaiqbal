(()=>{
const C=window.SITE_CONFIG||{links:{}},D=window.AWARDS_CONTENT,PREVIEW=!!C.showSamplePreview;
const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
const toast=$('#toast');let tt;
function say(m){toast.textContent=m;toast.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>toast.classList.remove('on'),3200)}
function closeMenu(){$('#menu').classList.remove('open');const b=$('.burger');b.setAttribute('aria-expanded','false');b.setAttribute('aria-label','Open menu')}
$$('[data-link]').forEach(a=>{const k=a.dataset.link;const u=k==='email'?(C.email?'mailto:'+C.email:''):(C.links||{})[k];
 if(u){a.href=u;if(/^https?:/.test(u)){a.target='_blank';a.rel='noopener noreferrer'}}
 else a.addEventListener('click',e=>{e.preventDefault();closeMenu();say(k==='email'?'Add your email address in js/config.js to enable this button.':'This link is a placeholder. Add it in js/config.js or build that page later.')})});
if(C.email){const m=$('#f-mail');if(m)m.textContent=C.email}
const svg=p=>`<svg viewBox="0 0 24 24" aria-hidden="true">${p}</svg>`;
const AW='<circle cx="12" cy="9" r="5"/><path d="M9 13.5L7.500 21 12 18.500 16.500 21 15 13.500"/>';
$('#w-label').textContent=D.label;$('#w-h').textContent=D.headline;$('#w-desc').textContent=D.description;
/* achievements: PUBLIC RULE = published AND not sample. Preview flag shows stamped samples for design review only. */
const show=a=>a.status!=='archived'&&((a.status==='published'&&!a.sample)||(PREVIEW&&a.sample));
const list=D.achievements.filter(show).sort((a,b)=>a.order-b.order);
$('#w-banner').hidden=!(PREVIEW&&list.some(a=>a.sample));
$('#w-list').innerHTML=list.length?list.map((a,i)=>`<li class="tl rv" style="--d:${(i%3)*.08}s"><article class="card ach">
 ${a.sample?'<span class="stamp">SAMPLE / UNVERIFIED</span>':''}
 <div class="ah">${a.image?`<img src="${esc(a.image)}" alt="Certificate or supporting image for ${esc(a.title)}" loading="lazy" width="96" height="72">`:`<div class="ico">${svg(AW)}</div>`}
 <div><span class="cat">${esc(a.categoryLabel||a.category)}${a.year?' &middot; '+esc(a.year):''}</span><h3>${esc(a.title)}</h3></div></div>
 ${a.organization?`<p class="org">${esc(a.organization)}</p>`:''}<p class="sd">${esc(a.shortDescription)}</p>
 ${a.verificationUrl&&!a.sample?`<a class="vl" href="${esc(a.verificationUrl)}" target="_blank" rel="noopener noreferrer">View verification</a>`:''}</article></li>`).join(''):`<li class="empty">${esc(D.achievementsEmpty)}</li>`;
/* foundation */
const F=D.foundation;$('#f-h').textContent=F.title;
const meta=[F.institute,F.period,F.grade].filter(Boolean);
$('#f-card').innerHTML=`<div class="ico">${svg('<path d="M3 9l9-5 9 5-9 5z"/><path d="M7 11.500V16c2.500 2 7.500 2 10 0v-4.500"/>')}</div><h3>${esc(F.qualification)}</h3>${meta.length?`<p class="fm">${meta.map(esc).join(' &middot; ')}</p>`:''}<p class="sd">${esc(F.summary)}</p>`.replace(/\.500/g,'.5');
$('#f-items').innerHTML=F.items.map((x,i)=>`<li class="card fi rv" style="--d:${i*.07}s"><h4>${esc(x.title)}</h4><p>${esc(x.text)}</p></li>`).join('');
/* skills */
$('#k-note').textContent=D.skillsNote;
const DEMO=[72,58,65,50,80];let n=0;
$('#k-groups').innerHTML=D.skillGroups.map(g=>`<section class="card kg rv" aria-labelledby="kg-${g.id}"><h3 id="kg-${g.id}">${esc(g.title)}</h3>${g.skills.map(s=>{
 let lv=Number.isFinite(s.level)?Math.max(0,Math.min(100,s.level)):null,ph=false;
 if(lv===null&&PREVIEW){lv=DEMO[n++%5];ph=true}
 const lab=lv===null?`${s.name}: level not set yet`:`${s.name}: ${ph?'placeholder level':'self-assessed'} ${lv} percent`;
 return `<div class="sk2"><div class="skr"><span>${esc(s.name)}</span><span class="pc">${lv===null?'Level not set':lv+'%'+(ph?' (placeholder)':'')}</span></div>
 <div class="bar ${lv===null?'unset':''}" role="progressbar" aria-label="${esc(lab)}" ${lv===null?'':`aria-valuemin="0" aria-valuemax="100" aria-valuenow="${lv}"`}><i style="--lv:${lv===null?0:lv}%"></i></div></div>`}).join('')}</section>`).join('');
const burger=$('.burger');
burger.addEventListener('click',()=>{const o=$('#menu').classList.toggle('open');burger.setAttribute('aria-expanded',o);burger.setAttribute('aria-label',o?'Close menu':'Open menu')});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
const hd=$('header');addEventListener('scroll',()=>hd.classList.toggle('scrolled',scrollY>12),{passive:true});
$('#yr').textContent=new Date().getFullYear();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.1});
$$('.rv').forEach(el=>io.observe(el));
})();
