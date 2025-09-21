
// Intersections for reveal animations
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
},{threshold:0.08});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Animate numbers (for proof counters)
function animateValue(el, end, dur=1500){
  const start = 0; const rng = end - start; const startTime = performance.now();
  function step(t){
    const p = Math.min((t-startTime)/dur, 1);
    const val = Math.floor(start + rng * (p*p*(3-2*p)));
    el.textContent = val.toLocaleString();
    if(p<1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
document.querySelectorAll('[data-animate-number]').forEach(el=>{
  const end = parseInt(el.dataset.end || "100", 10);
  animateValue(el, end, 1400);
});

// Magnetic buttons & ripple
function attachButtonEffects() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('.btn.magnetic').forEach(btn => {
    const strength = 20;
    btn.addEventListener('mousemove', e => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width/2);
      const y = e.clientY - (r.top + r.height/2);
      btn.style.transform = `translate(${x/strength}px, ${y/strength}px)`;
    });
    btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
  });
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', e => {
      const ripple = document.createElement('span');
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.className = 'ripple';
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = (e.clientX - rect.left - size/2) + 'px';
      ripple.style.top = (e.clientY - rect.top - size/2) + 'px';
      btn.appendChild(ripple);
      setTimeout(()=>ripple.remove(), 650);
    });
  });
}
attachButtonEffects();

// 3D tilt cards
function attachTilt() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const max = 8;
  document.querySelectorAll('.tilt').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      const rx = (py - 0.5) * -2 * max;
      const ry = (px - 0.5) *  2 * max;
      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    });
    card.addEventListener('mouseleave', ()=>{ card.style.transform = 'perspective(900px) rotateX(0) rotateY(0)'; });
  });
}
attachTilt();

// Scroll progress bar
const pb = document.createElement('div');
pb.className = 'progressbar';
document.body.appendChild(pb);
function updateProgress(){
  const h = document.documentElement;
  const scrollTop = h.scrollTop || document.body.scrollTop;
  const height = h.scrollHeight - h.clientHeight;
  const p = Math.max(0, Math.min(1, scrollTop / height));
  pb.style.width = (p*100) + '%';
}
document.addEventListener('scroll', updateProgress, {passive:true}); updateProgress();

// Back-to-top FAB
const fab = document.createElement('a');
fab.href='#top'; fab.className='fab'; fab.setAttribute('aria-label','Back to top'); fab.textContent='↑ Top';
document.body.appendChild(fab);
function toggleFab(){
  const show = (document.documentElement.scrollTop || document.body.scrollTop) > 500;
  fab.classList.toggle('show', show);
}
document.addEventListener('scroll', toggleFab, {passive:true}); toggleFab();
fab.addEventListener('click', (e)=>{ e.preventDefault(); window.scrollTo({top:0, behavior:'smooth'}); });

// Readiness progress line
const progressSpan = document.querySelector('.progressline > span');
if(progressSpan){
  const radios = document.querySelectorAll('#readiness-form input[type=radio]');
  function recalc(){
    const chosen = Array.from(radios).filter(r=>r.checked).length;
    const total = new Set(Array.from(radios).map(r=>r.name)).size;
    const pct = Math.round((chosen/total)*100);
    progressSpan.style.width = pct + '%';
  }
  radios.forEach(r=>r.addEventListener('change', recalc));
  recalc();
}
