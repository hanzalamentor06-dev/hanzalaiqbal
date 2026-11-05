(()=>{
const C=window.SITE_CONFIG||{links:{}},CATS=window.PORTFOLIO_CATEGORIES||[];
const P=(window.PORTFOLIO_PROJECTS||[]).filter(p=>p.status!=='unpublished').sort((a,b)=>a.order-b.order);
const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
const catOf=id=>CATS.find(c=>c.id===id)||{label:id,colors:['#FF6B35','#318BFF']};
const esc=s=>String(s).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
const LABEL='SAMPLE PROJECT \u2014 PLACEHOLDER';
/* toast + links */
const toast=$('#toast');let tt;
function say(m){toast.textContent=m;toast.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>toast.classList.remove('on'),3200)}
function closeMenu(){$('#menu').classList.remove('open');const b=$('.burger');b.setAttribute('aria-expanded','false');b.setAttribute('aria-label','Open menu')}
$$('[data-link]').forEach(a=>{const k=a.dataset.link;
 const u=k==='email'?(C.email?'mailto:'+C.email:''):(C.links||{})[k];
 if(u){a.href=u;if(/^https?:/.test(u)){a.target='_blank';a.rel='noopener noreferrer'}}
 else a.addEventListener('click',e=>{e.preventDefault();closeMenu();say(k==='email'?'Add your email address in js/config.js to enable this button.':'This link is a placeholder. Add it in js/config.js or build that page later.')})});
if(C.email){const m=$('#f-mail');if(m)m.textContent=C.email}
/* menu + header */
const burger=$('.burger');
burger.addEventListener('click',()=>{const o=$('#menu').classList.toggle('open');burger.setAttribute('aria-expanded',o);burger.setAttribute('aria-label',o?'Close menu':'Open menu')});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
const hd=$('header');addEventListener('scroll',()=>hd.classList.toggle('scrolled',scrollY>12),{passive:true});
$('#yr').textContent=new Date().getFullYear();
/* reveal */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
const watch=r=>$$('.rv',r).forEach(el=>io.observe(el));watch(document);
/* thumbs */
function thumb(p,big){const c=catOf(p.category);
 if(p.thumbnail)return `<img src="${esc(p.thumbnail)}" alt="${esc(p.title)}" loading="lazy" width="960" height="640">`;
 return `<div class="ph" role="img" aria-label="${esc(p.title)} placeholder image" style="background:linear-gradient(135deg,${c.colors[0]},${c.colors[1]})"><span class="phc">${esc(c.label)}</span></div>`}
/* filters + grid */
const grid=$('#pgrid'),count=$('#count'),fbar=$('#filters');let cur='all';
const tabs=[{id:'all',label:'All Projects'},...CATS];
fbar.innerHTML=tabs.map(t=>{const n=t.id==='all'?P.length:P.filter(p=>p.category===t.id).length;
 return `<button type="button" class="fbtn" data-cat="${t.id}" aria-pressed="${t.id==='all'}">${esc(t.label)}<span class="n">${n}</span></button>`}).join('');
function render(){const list=cur==='all'?P:P.filter(p=>p.category===cur);
 grid.innerHTML=list.length?list.map((p,i)=>`<article class="card pcard rv" style="--d:${(i%3)*.08}s">
  <div class="thumb"><span class="badge">${p.status==='sample'?'Sample':'Project'}</span>${thumb(p)}</div>
  <div class="body"><span class="cat">${esc(catOf(p.category).label)}</span><h3>${esc(p.title)}</h3><p>${esc(p.shortDescription)}</p>
  ${p.status==='sample'?`<span class="lab">${LABEL}</span>`:''}
  <button type="button" class="open" data-id="${esc(p.id)}" aria-haspopup="dialog" aria-label="View details: ${esc(p.title)}">View Details</button></div></article>`).join(''):'<p class="empty">No projects in this category yet.</p>';
 count.textContent=`Showing ${list.length} ${list.length===1?'project':'projects'}${cur==='all'?'':' in '+catOf(cur).label}`;
 watch(grid)}
fbar.addEventListener('click',e=>{const b=e.target.closest('.fbtn');if(!b||b.dataset.cat===cur)return;
 cur=b.dataset.cat;$$('.fbtn',fbar).forEach(x=>x.setAttribute('aria-pressed',x===b));
 grid.classList.add('swap');setTimeout(()=>{render();grid.classList.remove('swap')},matchMedia('(prefers-reduced-motion: reduce)').matches?0:200)});
render();
/* lightbox */
const dlg=$('#lb');let opener=null;
grid.addEventListener('click',e=>{const b=e.target.closest('.open');if(!b)return;
 const p=P.find(x=>x.id===b.dataset.id);if(!p)return;opener=b;
 $('#lb-img').innerHTML=thumb(p,true);$('#lb-cat').textContent=catOf(p.category).label;$('#lb-t').textContent=p.title;
 $('#lb-lab').hidden=p.status!=='sample';$('#lb-d').textContent=p.fullDescription;
 $('#lb-g').innerHTML=(p.gallery||[]).map(u=>`<img src="${esc(u)}" alt="" loading="lazy">`).join('');
 document.body.style.overflow='hidden';dlg.showModal();$('#lb-x').focus()});
$('#lb-x').addEventListener('click',()=>dlg.close());
dlg.addEventListener('click',e=>{if(e.target===dlg)dlg.close()});
dlg.addEventListener('close',()=>{document.body.style.overflow='';if(opener&&document.contains(opener))opener.focus()});
})();
