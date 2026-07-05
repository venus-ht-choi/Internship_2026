// script.js
import siteContent from './content.js';

const content = siteContent;

function populateContent() {
  document.getElementById('brand-mark').textContent = content.brand.mark;
  document.getElementById('brand-name').textContent = content.brand.name;

  document.getElementById('hero-eyebrow').textContent = content.hero.eyebrow;
  document.getElementById('hero-heading').textContent = content.hero.heading;
  document.getElementById('hero-copy').innerHTML = content.hero.copy;
  document.getElementById('primary-btn').textContent = content.hero.primaryBtn;
  document.getElementById('secondary-btn').textContent = content.hero.secondaryBtn;

  const trustRow = document.getElementById('trust-row');
  trustRow.innerHTML = content.trust.map(item => `<span>${item}</span>`).join('');

  document.getElementById('features-heading').textContent = content.features.heading;
  document.getElementById('features-subheading').innerHTML = content.features.subheading;

  const featureGrid = document.getElementById('feature-grid');
  featureGrid.innerHTML = content.features.items.map(item => `
    <article class="feature-card reveal delay-1">
      <div class="feature-icon">${item.icon}</div>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
    </article>
  `).join('');

  document.getElementById('story-eyebrow').textContent = content.story.eyebrow;
  document.getElementById('story-heading').textContent = content.story.heading;
  document.getElementById('story-copy').innerHTML = content.story.copy;

  const statsGrid = document.getElementById('stats-grid');
  statsGrid.innerHTML = content.story.stats.map(stat => `
    <div class="stat">
      <strong>${stat.value}</strong>
      <span>${stat.label}</span>
    </div>
  `).join('');

  const emailLink = document.getElementById('contact-email');
  emailLink.textContent = content.contact.email;
  emailLink.href = `mailto:${content.contact.email}`;
  document.getElementById('contact-eyebrow').textContent = content.contact.eyebrow;
  document.getElementById('contact-heading').textContent = content.contact.heading;
  document.getElementById('contact-copy').innerHTML = content.contact.copy;
}

function initRevealAnimations() {
  const revealElements = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });
  revealElements.forEach(el => observer.observe(el));
}

function updateCurrentYear() {
  const yearEl = document.querySelector('[data-current-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', () => {
  populateContent();
  initRevealAnimations();
  updateCurrentYear();
});