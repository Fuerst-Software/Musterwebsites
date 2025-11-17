// Smooth Scroll für interne Links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

ready(()=>{
  const form=$('#contactForm'); if(!form) return;
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(!form.checkValidity()){ form.classList.add('was-validated'); return; }
    const btn=form.querySelector('button[type="submit"]');
    if(btn){ btn.disabled=true; const t=btn.textContent; btn.textContent='Sende…'; setTimeout(()=>{ alert('Danke! Wir melden uns innerhalb von 24 Stunden.'); form.reset(); btn.disabled=false; btn.textContent=t; },1000); }
  });
});

/* Magnetic buttons */
ready(()=>{
  $$('.magnetic').forEach(el=>{
    const s=18;
    el.addEventListener('mousemove', throttle(e=>{
      const r=el.getBoundingClientRect(); const x=e.clientX-r.left-r.width/2; const y=e.clientY-r.top-r.height/2;
      el.style.transform=`translate(${x/s}px, ${y/s}px)`;
    },16));
    el.addEventListener('mouseleave',()=>{ el.style.transform=''; });
  });
});

// Easter Egg (nur zum Spaß)
console.log("🤠 Willkommen im Wilden Westen, Partner!");

