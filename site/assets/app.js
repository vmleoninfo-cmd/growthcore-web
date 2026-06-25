(function () {
  // ── Reveal on scroll ────────────────────────────────
  function reveal() {
    var els = [].slice.call(document.querySelectorAll('.reveal'));
    if (!els.length) return;
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
      }, { rootMargin: '0px 0px -8% 0px' });
      els.forEach(function (el) { io.observe(el); });
    } else {
      els.forEach(function (el) { el.classList.add('in'); });
    }
    // safety net
    setTimeout(function () { els.forEach(function (el) { el.classList.add('in'); }); }, 2500);
  }

  // ── Scrollspy (resalta sección activa) ──────────────
  function scrollspy() {
    var links = [].slice.call(document.querySelectorAll('.nav-links a[href^="#"]'));
    if (!links.length) links = [].slice.call(document.querySelectorAll('.nav a[href^="#"]'));
    if (!links.length) return;
    var st = document.createElement('style');
    st.textContent = '.nav-links a.nav-active,.nav a.nav-active{color:#15803D!important;font-weight:600}';
    document.head.appendChild(st);
    var map = {};
    links.forEach(function (a) { var id = (a.getAttribute('href') || '').slice(1); if (id) { var s = document.getElementById(id); if (s) map[id] = a; } });
    if (!('IntersectionObserver' in window)) return;
    var markers = [].slice.call(document.querySelectorAll('.marker'));
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) {
          links.forEach(function (a) { a.classList.remove('nav-active'); });
          if (map[e.target.id]) map[e.target.id].classList.add('nav-active');
          markers.forEach(function (m) { m.classList.remove('active'); });
          var mk = e.target.querySelector('.marker'); if (mk) mk.classList.add('active');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    Object.keys(map).forEach(function (id) { io.observe(document.getElementById(id)); });
  }

  // ── Menú hamburguesa móvil ──────────────────────────
  function burger() {
    var navLinks = document.querySelector('.nav-links');
    if (!navLinks || document.querySelector('.nav-burger')) return;
    var bar = document.querySelector('.nav') || navLinks.parentElement;
    var st = document.createElement('style');
    st.textContent = '.nav-burger{display:none;background:none;border:0;cursor:pointer;flex-direction:column;justify-content:center;gap:5px;padding:8px;margin-left:auto}.nav-burger span{display:block;width:24px;height:2px;background:#0A1022;border-radius:2px;transition:.25s}@media(max-width:879px){.nav-burger{display:flex}.gc-nav-open .nav-links{display:flex!important;flex-direction:column;position:absolute;top:100%;left:0;right:0;background:#F8FAFC;padding:20px 24px;gap:18px;border-top:1px solid rgba(10,16,34,.08);box-shadow:0 12px 30px rgba(10,16,34,.12);z-index:60}.gc-nav-open .nav-burger span:nth-child(1){transform:translateY(7px) rotate(45deg)}.gc-nav-open .nav-burger span:nth-child(2){opacity:0}.gc-nav-open .nav-burger span:nth-child(3){transform:translateY(-7px) rotate(-45deg)}}';
    document.head.appendChild(st);
    var btn = document.createElement('button');
    btn.className = 'nav-burger';
    btn.setAttribute('aria-label', 'Menú');
    btn.innerHTML = '<span></span><span></span><span></span>';
    var cta = bar.querySelector('.nav-cta');
    if (cta && cta.parentElement) cta.parentElement.insertBefore(btn, cta); else bar.appendChild(btn);
    btn.addEventListener('click', function () { bar.classList.toggle('gc-nav-open'); });
    navLinks.addEventListener('click', function (e) { if (e.target.tagName === 'A') bar.classList.remove('gc-nav-open'); });
  }

  // ── Cookies + modal privacidad ──────────────────────
  function cookies() {
    var st = document.createElement('style');
    st.textContent = '#gc-cookie-banner{position:fixed;left:16px;right:16px;bottom:16px;max-width:560px;margin:0 auto;background:#0A1022;color:#F8FAFC;padding:16px 18px;border-radius:14px;box-shadow:0 12px 40px rgba(0,0,0,.3);font-family:DM Sans,sans-serif;font-size:14px;line-height:1.5;z-index:9999;display:flex;flex-direction:column;gap:12px}#gc-cookie-banner a{color:#22C55E;cursor:pointer;text-decoration:underline}#gc-cookie-banner .gc-row{display:flex;justify-content:flex-end}#gc-cookie-banner button{background:#22C55E;color:#0A1022;border:0;border-radius:8px;padding:9px 18px;font-weight:600;cursor:pointer;font-family:Space Grotesk,sans-serif}#gc-modal{position:fixed;inset:0;background:rgba(10,16,34,.6);display:none;align-items:center;justify-content:center;z-index:10000;padding:20px}#gc-modal.open{display:flex}#gc-modal .gc-card{background:#fff;color:#0A1022;max-width:620px;max-height:80vh;overflow:auto;border-radius:16px;padding:30px;font-family:DM Sans,sans-serif;font-size:14px;line-height:1.6}#gc-modal h3{font-family:Space Grotesk,sans-serif;margin-bottom:14px}#gc-modal .gc-x{float:right;cursor:pointer;font-size:22px;color:#64748B;border:0;background:none;line-height:1}';
    document.head.appendChild(st);
    var modal = document.createElement('div');
    modal.id = 'gc-modal';
    modal.innerHTML = '<div class="gc-card"><button class="gc-x" aria-label="Cerrar">&times;</button><h3>Privacidad y Cookies</h3><p>GrowthCore (usegrowthcore.com) respeta tu privacidad. Los datos que nos envías por formularios o WhatsApp se usan únicamente para contactarte y prestarte el servicio; no se venden a terceros.</p><p style="margin-top:12px">Usamos cookies propias y de terceros para medir el rendimiento del sitio y mejorar tu experiencia. Puedes aceptarlas o seguir navegando.</p><p style="margin-top:12px">Para ejercer tus derechos de acceso, rectificación o eliminación de datos, contáctanos por los canales de la web.</p><p style="margin-top:12px;color:#64748B;font-size:12px">Versión preliminar, sujeta a actualización.</p></div>';
    document.body.appendChild(modal);
    function openM(e) { if (e) e.preventDefault(); modal.classList.add('open'); }
    function closeM() { modal.classList.remove('open'); }
    modal.addEventListener('click', function (e) { if (e.target === modal || (e.target.className && String(e.target.className).indexOf('gc-x') >= 0)) closeM(); });
    try {
      var fnav = document.querySelector('footer nav');
      if (fnav) { var a = document.createElement('a'); a.href = '#'; a.textContent = 'Privacidad y cookies'; a.addEventListener('click', openM); fnav.appendChild(a); }
    } catch (e) {}
    var ok = true;
    try { ok = !localStorage.getItem('gc_cookie_ok'); } catch (e) {}
    if (ok) {
      var ban = document.createElement('div');
      ban.id = 'gc-cookie-banner';
      ban.innerHTML = '<div>Usamos cookies para mejorar tu experiencia y medir el rendimiento del sitio. <a id="gc-cookie-more">Más información</a></div><div class="gc-row"><button id="gc-cookie-ok">Aceptar</button></div>';
      document.body.appendChild(ban);
      document.getElementById('gc-cookie-ok').addEventListener('click', function () { try { localStorage.setItem('gc_cookie_ok', '1'); } catch (e) {} ban.remove(); });
      document.getElementById('gc-cookie-more').addEventListener('click', openM);
    }
  }

  // ── Scroll progress bar ─────────────────────────────
  function scrollProgress() {
    var bar = document.getElementById('scroll-progress');
    if (!bar) return;
    function upd() {
      var st = window.scrollY || document.documentElement.scrollTop;
      var hh = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = 'scaleX(' + (hh > 0 ? Math.min(st / hh, 1) : 0) + ')';
    }
    window.addEventListener('scroll', upd, { passive: true });
    window.addEventListener('resize', upd); upd();
  }

  // ── Lead form → CRM + WhatsApp ──────────────────────
  function leadForm() {
    var f = document.getElementById('gc-lead-form');
    if (!f) return;
    var utm = {};
    try { var p = new URLSearchParams(location.search); ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach(function (k) { var v = p.get(k); if (v) utm[k] = v; }); } catch (e) {}
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var d = {};
      [].slice.call(f.querySelectorAll('input,select,textarea')).forEach(function (el) { if (el.name) d[el.name] = (el.value || '').trim(); });
      if (!d.name || !d.whatsapp) { return; }
      var notes = [d.plan && ('Plan elegido: ' + d.plan), d.email && ('Email: ' + d.email), 'Origen: web GrowthCore'].filter(Boolean).join(' | ');
      var body = Object.assign({ name: d.name, phone: d.whatsapp, company: d.company || undefined, plan: d.plan || undefined, notes: notes || undefined }, utm);
      try { fetch('https://crm.usegrowthcore.com/api/webhook', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }).catch(function () {}); } catch (e) {}
      var closing = d.plan ? ('Quiero empezar con: ' + d.plan + '.') : 'Quiero mi diagnóstico gratis.';
      var txt = encodeURIComponent('Hola GrowthCore 👋\n\nNombre: ' + d.name + '\nWhatsApp: ' + d.whatsapp + (d.email ? '\nEmail: ' + d.email : '') + (d.company ? '\nNegocio: ' + d.company : '') + (d.plan ? '\nPlan elegido: ' + d.plan : '') + '\n\n' + closing);
      try { window.open('https://wa.me/56991088138?text=' + txt, '_blank'); } catch (e) {}
      f.hidden = true;
      var ok = document.getElementById('gc-form-ok'); if (ok) { ok.hidden = false; ok.classList.add('in'); }
    });
  }

  // ── Selector de plan → contexto del formulario ──────
  function planPicker() {
    var f = document.getElementById('gc-lead-form');
    if (!f) return;
    var input = document.getElementById('gc-plan-input');
    var chip = document.getElementById('gc-plan-chip');
    var nameEl = document.getElementById('gc-plan-name');
    var clear = document.getElementById('gc-plan-clear');
    var sec = document.getElementById('contacto');
    var h2 = sec && sec.querySelector('h2');
    var lede = sec && sec.querySelector('.lede');
    var submit = f.querySelector('button[type="submit"]');
    var def = { h2: h2 ? h2.innerHTML : '', lede: lede ? lede.textContent : '', btn: submit ? submit.innerHTML : '' };
    function setPlan(plan, tag) {
      if (!plan) return;
      if (input) input.value = plan + (tag ? (' (' + tag + ')') : '');
      if (nameEl) nameEl.textContent = plan + (tag ? (' — ' + tag) : '');
      if (chip) chip.hidden = false;
      if (h2) h2.innerHTML = 'Activemos tu <span class="hl">' + plan + '.</span>';
      if (lede) lede.textContent = 'Déjanos tus datos y coordinamos la puesta en marcha de ' + plan + ' por WhatsApp en menos de 24 horas. Sin compromiso.';
      if (submit) submit.innerHTML = 'Quiero empezar con ' + plan + ' <span class="arrow">→</span>';
    }
    function reset() {
      if (input) input.value = '';
      if (chip) chip.hidden = true;
      if (h2) h2.innerHTML = def.h2;
      if (lede) lede.textContent = def.lede;
      if (submit) submit.innerHTML = def.btn;
    }
    [].slice.call(document.querySelectorAll('[data-plan]')).forEach(function (a) {
      a.addEventListener('click', function () { setPlan(a.getAttribute('data-plan'), a.getAttribute('data-plan-tag') || ''); });
    });
    if (clear) clear.addEventListener('click', reset);
  }

  function init() { reveal(); scrollspy(); burger(); cookies(); scrollProgress(); leadForm(); planPicker(); }
  if (document.readyState !== 'loading') init(); else document.addEventListener('DOMContentLoaded', init);
})();
