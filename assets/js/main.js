
async function loadConfig(){
  try{
    const res = await fetch('assets/js/site.config.json');
    const cfg = await res.json();
    // Fill UI
    document.querySelectorAll('[data-name]').forEach(e=> e.textContent = cfg.name);
    document.querySelector('[data-tagline]').textContent = cfg.tagline;
    document.querySelector('[data-bio]').textContent = cfg.bio;
    document.querySelector('[data-location]').textContent = cfg.location;
    document.querySelector('[data-email]').href = `mailto:${cfg.email}`;
    document.querySelector('[data-email]').textContent = cfg.email;
    if(cfg.facebook) document.querySelector('[data-facebook]').href = cfg.facebook;
    if(cfg.instagram) document.querySelector('[data-instagram]').href = cfg.instagram;
    if(cfg.github) document.querySelector('[data-github]').href = cfg.github;
    if(cfg.threads) document.querySelector('[data-threads]').href = cfg.threads;
    const links = cfg.links || [];
    const ul = document.getElementById('quick-links');
    ul.innerHTML = '';
    links.forEach(x=>{
      const li = document.createElement('li');
      li.innerHTML = `<a class="btn" href="${x.href}" target="_blank" rel="noopener">${x.label}</a>`;
      ul.appendChild(li);
    });
  }catch(e){ console.error(e); }
}

// theme toggle
const toggle = ()=>{
  const dark = document.documentElement.dataset.theme !== 'light';
  document.documentElement.dataset.theme = dark ? 'light':'dark';
  localStorage.setItem('theme', document.documentElement.dataset.theme);
}
function initTheme(){
  const saved = localStorage.getItem('theme');
  if(saved) document.documentElement.dataset.theme = saved;
}

// smooth scroll
function smoothNav(){
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const id = a.getAttribute('href').slice(1);
      const t = document.getElementById(id);
      if(t){
        e.preventDefault();
        t.scrollIntoView({behavior:'smooth'});
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', ()=>{
  initTheme();
  loadConfig();
  smoothNav();
  document.getElementById('themeToggle').addEventListener('click', toggle);
});
