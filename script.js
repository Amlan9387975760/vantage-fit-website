// Smooth nav highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => observer.observe(s));

// Contact form submission feedback
document.querySelector('.contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  btn.textContent = '✓ Request Sent!';
  btn.style.background = '#008f6b';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Request Demo';
    btn.style.background = '';
    btn.disabled = false;
    e.target.reset();
  }, 3000);
});

// Animate metric cards on load
document.querySelectorAll('.metric-card').forEach((card, i) => {
  card.style.opacity = '0';
  card.style.transform = 'translateX(40px)';
  card.style.transition = `opacity 0.5s ${i * 0.15}s ease, transform 0.5s ${i * 0.15}s ease`;
  setTimeout(() => {
    card.style.opacity = '1';
    card.style.transform = 'translateX(0)';
  }, 200);
});
