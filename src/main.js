// MedCore v2 interactions — Cedar-style motion, no dependencies
import './style.css';

(function () {
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Scroll progress + nav shadow ---------- */
  var nav = document.getElementById('navbar');
  var progress = document.getElementById('scrollProgress');
  var onScroll = function () {
    var y = window.scrollY;
    nav.classList.toggle('scrolled', y > 8);
    var h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('navMenu');
  toggle.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    toggle.classList.toggle('x', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      menu.classList.remove('open');
      toggle.classList.remove('x');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- Scroll-spy ---------- */
  var links = Array.prototype.slice.call(menu.querySelectorAll('.nav-link'));
  var sections = links
    .map(function (l) { return document.querySelector(l.getAttribute('href')); })
    .filter(Boolean);
  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          links.forEach(function (l) {
            l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id);
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---------- Scroll reveal + inview graphics ---------- */
  var revealEls = document.querySelectorAll('.reveal, .waterfall, .metric, .est-card');
  if ('IntersectionObserver' in window && !prefersReduced) {
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          ro.unobserve(e.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -6% 0px' });
    revealEls.forEach(function (el) { ro.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- Animated counters (supports decimals) ---------- */
  var animateCount = function (el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var decimals = parseInt(el.getAttribute('data-decimal') || '0', 10);
    var suffix = el.getAttribute('data-suffix') || '';
    var prefix = el.textContent.trim().startsWith('+') ? '+' : (el.innerHTML.trim().startsWith('+') ? '+' : '');
    if (el.parentElement && el.parentElement.tagName === 'STRONG' && el.parentElement.textContent.trim().startsWith('+')) prefix = '';
    var dur = 1400, start = null;
    var step = function (t) {
      if (!start) start = t;
      var p = Math.min((t - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = (target * eased).toFixed(decimals) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    if (prefersReduced) { el.textContent = target.toFixed(decimals) + suffix; return; }
    requestAnimationFrame(step);
  };
  var counters = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { animateCount(e.target); co.unobserve(e.target); }
      });
    }, { threshold: 0.5 });
    counters.forEach(function (c) { co.observe(c); });
  } else {
    counters.forEach(animateCount);
  }

  /* ---------- Logo marquee: duplicate for seamless loop ---------- */
  var track = document.getElementById('marqueeTrack');
  if (track) {
    track.innerHTML += track.innerHTML;
  }

  /* ---------- Hero parallax blobs + tilt cards ---------- */
  var hero = document.querySelector('.hero');
  var blobs = document.querySelector('.hero-blobs');
  if (hero && blobs && !prefersReduced) {
    hero.addEventListener('mousemove', function (e) {
      var r = hero.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5;
      var y = (e.clientY - r.top) / r.height - 0.5;
      blobs.style.transform = 'translate(' + x * 22 + 'px,' + y * 22 + 'px)';
    });
  }
  // Subtle 3D tilt on dashboard cards (desktop pointers only)
  if (window.matchMedia('(pointer: fine)').matches && !prefersReduced) {
    document.querySelectorAll('[data-tilt]').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var r = card.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5;
        var y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = 'perspective(900px) rotateY(' + x * 7 + 'deg) rotateX(' + -y * 7 + 'deg) translateY(-4px)';
      });
      card.addEventListener('mouseleave', function () { card.style.transform = ''; });
    });
    // Magnetic buttons
    document.querySelectorAll('.magnetic').forEach(function (btn) {
      btn.addEventListener('mousemove', function (e) {
        var r = btn.getBoundingClientRect();
        var x = e.clientX - r.left - r.width / 2;
        var y = e.clientY - r.top - r.height / 2;
        btn.style.transform = 'translate(' + x * 0.08 + 'px,' + y * 0.12 + 'px)';
      });
      btn.addEventListener('mouseleave', function () { btn.style.transform = ''; });
    });
  }

  /* ---------- Discharge countdown demo ---------- */
  var cd = document.getElementById('countdownDemo');
  var bar = document.getElementById('countdownBar');
  var secs = 27 * 60 + 14;
  var total = secs;
  if (cd) {
    setInterval(function () {
      secs = secs > 60 ? secs - 1 : total;
      var m = Math.floor(secs / 60), s = secs % 60;
      cd.textContent = m + ':' + (s < 10 ? '0' + s : s) + ' remaining';
      if (bar) bar.style.width = Math.max(8, (secs / total) * 100) + '%';
    }, 1000);
  }

  /* ---------- FAQ accordion (single-open, accessible) ---------- */
  var items = document.querySelectorAll('.acc-item');
  items.forEach(function (item) {
    var btn = item.querySelector('.acc-btn');
    var panel = item.querySelector('.acc-panel');
    btn.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      items.forEach(function (o) {
        o.classList.remove('open');
        o.querySelector('.acc-btn').setAttribute('aria-expanded', 'false');
        o.querySelector('.acc-panel').style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });
  if (items.length) items[0].querySelector('.acc-btn').click();

  /* ---------- Lead form ---------- */
  var form = document.getElementById('leadForm');
  var status = document.getElementById('formStatus');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = document.getElementById('fName');
    var email = document.getElementById('fEmail');
    var hosp = document.getElementById('fHosp');
    if (!name.value.trim() || !hosp.value.trim() || !/.+@.+\..+/.test(email.value)) {
      status.textContent = 'Please complete name, valid work email, and hospital.';
      status.className = 'form-status err';
      return;
    }
    var btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    status.textContent = 'Sending…';
    status.className = 'form-status';
    setTimeout(function () {
      status.textContent = '✓ Received. Our pilot team will reach out within 1 business day.';
      status.className = 'form-status ok';
      form.reset();
      btn.disabled = false;
    }, 700);
  });
})();
