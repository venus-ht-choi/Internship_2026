function initRevealAnimations() {
  const revealElements = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    revealElements.forEach((element) => element.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('is-visible');
      observerInstance.unobserve(entry.target);
    });
  }, {
    threshold: 0.18,
    rootMargin: '0px 0px -8% 0px',
  });

  revealElements.forEach((element) => observer.observe(element));
}

function updateCurrentYear() {
  const yearNode = document.querySelector('[data-current-year]');

  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initRevealAnimations();
  updateCurrentYear();
});
