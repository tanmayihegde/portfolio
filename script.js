const revealItems = [...document.querySelectorAll('.reveal')];

const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
);

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${index * 60}ms`;
  observer.observe(item);
});
