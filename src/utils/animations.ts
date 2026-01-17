export const initStatsAnimation = () => {
  const stats = document.querySelectorAll('.stat-number');
  
  stats.forEach((stat) => {
    const target = parseInt(stat.getAttribute('data-target') || '0');
    const suffix = stat.getAttribute('data-suffix') || '';
    const prefix = stat.getAttribute('data-prefix') || '';
    
    ScrollTrigger.create({
      trigger: stat,
      start: 'top 80%',
      onEnter: () => {
        gsap.to(stat, {
          textContent: target,
          duration: 2.5,
          ease: 'power2.out',
          snap: { textContent: 1 },
          onUpdate: function() {
            const current = Math.floor(parseFloat((stat as HTMLElement).textContent || '0'));
            (stat as HTMLElement).textContent = prefix + current + suffix;
          },
        });
      },
      once: true,
    });
  });
};
