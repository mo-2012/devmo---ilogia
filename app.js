(function(){
const D=window.DATA,$=s=>document.querySelector(s),ic={
 w:'<path d="M3 5h18v14H3zM3 9h18"/>',a:'<path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13 6l-2 12"/>',t:'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',s:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/>'};
const cap='<svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true"><path d="M12 3 1 9l11 6 9-4.9V17h2V9zM5 13.2v4L12 21l7-3.8v-4L12 17z"/></svg>';
function render(l){
 const t=D.i18n[l],h=document.documentElement;h.lang=l;h.dir=t.dir;document.title=t.title;$('meta[name=description]').content=t.desc;
 $('meta[property="og:title"]').content=t.title;$('meta[property="og:description"]').content=t.desc;
 const ids=['home','about','partner','services','work','contact'];
 $('#nav').innerHTML=t.nav.map((n,i)=>`<a href="#${ids[i]}">${n}</a>`).join('');
 $('#lang').textContent=t.lang;$('.back').textContent=t.back;
 $('#home').innerHTML=`<div class="wrap"><div class="rise"><h1>${t.hero.h}</h1><p>${t.hero.p}</p><div class="cta"><a class="btn p" href="#about">${t.hero.c1}</a><a class="btn s" href="${D.links.ilogia}" rel="noopener">${t.hero.c2}</a></div></div>
 <div class="link rise" aria-hidden="true"><svg viewBox="0 0 400 260"><rect x="10" y="30" width="150" height="90" rx="12" fill="none" stroke="currentColor" stroke-width="2"/><text x="85" y="86" text-anchor="middle" fill="var(--dm)">&lt;DevMO/&gt;</text>
 <rect x="240" y="140" width="150" height="90" rx="12" fill="var(--il)"/><text x="315" y="196" text-anchor="middle" fill="#fff">ilogia</text>
 <path class="pulse" d="M160 75h40v110h40" fill="none" stroke="var(--il)" stroke-width="3"/><circle cx="160" cy="75" r="5" fill="var(--dm)"/><circle cx="240" cy="185" r="5" fill="var(--il)"/></svg></div></div>`;
 $('#about').innerHTML=`<div class="wrap"><h2>${t.about.h}</h2><p class="lead">${t.about.p}</p><div class="grid">${t.about.items.map(i=>`<div class="card"><h3>${i[0]}</h3><p>${i[1]}</p></div>`).join('')}</div></div>`;
 $('#partner').innerHTML=`<div class="wrap"><h2>${t.part.h}</h2><p class="lead">${t.part.p}</p><div class="grid">${t.part.items.map(i=>`<div class="card">${i}</div>`).join('')}</div></div>`;
 const k=['w','a','t','s'];
 $('#services').innerHTML=`<div class="wrap"><h2>${t.serv.h}</h2><div class="grid">${t.serv.items.map((i,n)=>`<div class="card"><svg viewBox="0 0 24 24" aria-hidden="true">${ic[k[n]]}</svg><h3>${i[0]}</h3><p>${i[1]}</p></div>`).join('')}</div></div>`;
 $('#work').innerHTML=`<div class="wrap"><h2>${t.port.h}</h2><div class="grid">${D.projects.map(p=>`<div class="card"><h3 dir="ltr" style="text-align:start">${p}</h3><p>${t.port.status}</p><p style="margin-top:12px"><a class="btn s sm" href="${D.links.source}" rel="noopener">${t.port.more}</a></p></div>`).join('')}</div>
 <h2 style="margin-top:56px">${t.tech.h}</h2><div class="tech">${D.tech.map(x=>`<span>${x}</span>`).join('')}</div>
 <h2 style="margin-top:56px">${t.proc.h}</h2><ol class="proc">${t.proc.items.map(x=>`<li>${x}</li>`).join('')}</ol></div>`;
 const c=D.contact,rows=Object.keys(t.contact.labels).filter(x=>c[x]).map(x=>`<li><b>${t.contact.labels[x]}</b>${x==='email'?`<a href="mailto:${c[x]}">${c[x]}</a>`:x==='github'?`<a href="${c[x]}" rel="noopener">${c[x]}</a>`:c[x]}</li>`).join('');
 $('#contact').innerHTML=`<div class="wrap"><h2>${t.contact.h}</h2><p class="lead">${t.contact.p}</p><ul class="ct">${rows}</ul><a class="btn p" href="${D.links.source}" rel="noopener">${t.contact.site}</a></div>`;
 $('footer').innerHTML=`<div class="wrap"><div><strong>DevMO Studio</strong> × ilogia<br>© ${new Date().getFullYear()} DevMO. ${t.foot}.</div><div>${t.nav.map((n,i)=>`<a href="#${ids[i]}">${n}</a>`).join(' &nbsp; ')}</div><a href="${D.links.ilogia}" rel="noopener">${t.back}</a></div>`;
 $('#nav').classList.remove('open');
}
$('#lang').onclick=()=>{const l=document.documentElement.lang==='ar'?'en':'ar';try{localStorage.setItem('lang',l)}catch(e){}render(l)};
$('#menu').onclick=()=>$('#nav').classList.toggle('open');
$('#nav').onclick=e=>{if(e.target.tagName==='A')$('#nav').classList.remove('open')};
let s='ar';try{s=localStorage.getItem('lang')||'ar'}catch(e){}
render(s==='en'?'en':'ar');
})();
