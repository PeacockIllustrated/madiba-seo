
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
    const val = Math.floor(start + rng * (p*p*(3-2*p))); // ease in-out
    el.textContent = val.toLocaleString();
    if(p<1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
document.querySelectorAll('[data-animate-number]').forEach(el=>{
  const end = parseInt(el.dataset.end || "100", 10);
  animateValue(el, end, 1400);
});

// Readiness mini-tool (client-side scoring)
const form = document.querySelector('#readiness-form');
if(form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let score = 0;
    form.querySelectorAll('input[type=radio]:checked').forEach(r=> score += parseInt(r.value,10));
    const bucket = score >= 16 ? 'Greenfield' : score >= 10 ? 'Selective Data Transition' : 'Brownfield';
    const out = document.querySelector('#readiness-output');
    out.innerHTML = `<strong>Recommended approach:</strong> ${bucket}. <br><small>We’ll validate via a 60‑min workshop covering custom code, data volume, integrations and change management.</small>`;
    out.parentElement.classList.add('reveal','in');
    out.scrollIntoView({behavior:'smooth', block:'center'});
  });
}
