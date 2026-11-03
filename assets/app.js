(() => {
 const root=document.documentElement;
 const toggle=document.getElementById('langToggle');
 let lang='zh';
 function setLanguage(next){
   lang=next; root.lang=lang==='zh'?'zh-CN':'en';
   document.querySelectorAll('[data-zh][data-en]').forEach(el=>{
     el.textContent=el.dataset[lang];
   });
   toggle.innerHTML=lang==='zh'?'◎ <b>中 / EN</b>':'◎ <b>EN / 中</b>';
   document.title=lang==='zh'?'DAADR｜去中心化AI自治自由民主共和国（试验区）':'DAADR | Decentralized AI Autonomous Democratic Republic (Pilot Zone)';
 }
 toggle.addEventListener('click',()=>setLanguage(lang==='zh'?'en':'zh'));
 const menu=document.getElementById('menuToggle'), nav=document.getElementById('mainNav');
 menu.addEventListener('click',()=>{
   const open=nav.classList.toggle('open');
   menu.setAttribute('aria-expanded',String(open));
   menu.textContent=open?'×':'☰';
 });
 nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
   nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰';
 }));
 const sections=[...document.querySelectorAll('main section[id]')];
 const links=[...document.querySelectorAll('.nav-link')];
 const observer=new IntersectionObserver(entries=>{
   entries.forEach(entry=>{
     if(entry.isIntersecting){
       links.forEach(link=>link.classList.toggle('active',link.getAttribute('href')==='#'+entry.target.id));
     }
   });
 },{rootMargin:'-35% 0px -55% 0px'});
 sections.forEach(s=>observer.observe(s));
 document.getElementById('year').textContent=new Date().getFullYear();
})();