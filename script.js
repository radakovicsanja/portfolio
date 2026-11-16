// Nav background on scroll
const nav = document.querySelector('.nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Gentle reveal on scroll, staggered
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const siblings = [...el.parentElement.children].filter((c) => c.classList.contains('reveal'));
    el.style.transitionDelay = `${Math.min(siblings.indexOf(el), 5) * 90}ms`;
    el.classList.add('in');
    io.unobserve(el);
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// Project accordion
document.querySelectorAll('.project-row').forEach((row) => {
  row.addEventListener('click', () => {
    const item = row.closest('.project');
    const open = item.classList.toggle('open');
    row.setAttribute('aria-expanded', String(open));
  });
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
