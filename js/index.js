/**
 * index.js
 * Scroll-reveal for timeline items on the home page.
 */
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 120);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.tl-item').forEach(el => observer.observe(el));
});

// ── QUOTE OF THE DAY ──
async function loadQuote() {
  const textEl   = document.getElementById('quote-text');
  const authorEl = document.getElementById('quote-author');
  try {
    const res  = await fetch('http://api.quotable.io/quotes/random?tags=education|success|wisdom');
    const data = await res.json();
    textEl.textContent   = data[0].content;
    authorEl.textContent = '— ' + data[0].author;
  } catch {
    textEl.textContent   = 'The more that you read, the more things you will know.';
    authorEl.textContent = '— Dr. Seuss';
  } finally {
    textEl.classList.add('loaded');
    authorEl.classList.add('loaded');
  }
}
loadQuote();


