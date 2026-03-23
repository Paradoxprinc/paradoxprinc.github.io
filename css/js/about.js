/**
 * about.js
 * Handles:
 * - Generic .animate reveal observer
 * - Skill bar width animations (triggered on scroll)
 */
document.addEventListener('DOMContentLoaded', () => {

  /* ── Generic fade-up observer ── */
  const fadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll('.animate').forEach(el => fadeObserver.observe(el));

  /* ── Skill bars ── */
  const barObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
            bar.style.width = (bar.dataset.w || 0) + '%';
          });
          barObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );
  document.querySelectorAll('.skills-col').forEach(el => barObserver.observe(el));

});
