import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export const initHeroAnimations = (): void => {
  const heroBackground = document.querySelector('.hero-background');
  if (heroBackground) {
    gsap.to(heroBackground, {
      yPercent: 40,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    });
  }

  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    const split = new SplitType(heroTitle as HTMLElement, { types: 'words' });
    if (split.words) {
      gsap.from(split.words, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.2,
      });
    }
  }

  const heroSubtitle = document.querySelector('.hero-subtitle');
  if (heroSubtitle) {
    gsap.from(heroSubtitle, {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.8,
      ease: 'power3.out',
    });
  }
};

export const initStatsAnimation = (): void => {
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

export const initCardsAnimation = (): void => {
  const cards = document.querySelectorAll('.tech-card');
  
  if (cards.length > 0) {
    gsap.from(cards, {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.tech-section',
        start: 'top 70%',
      },
    });
  }
};

export const initSectionsAnimation = (): void => {
  const sections = document.querySelectorAll('.animate-section');
  
  sections.forEach((section) => {
    gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: 'top 75%',
      },
    });
  });
};

export const initMagneticButtons = (): void => {
  const buttons = document.querySelectorAll('.btn-magnetic');
  
  buttons.forEach((button) => {
    const btn = button as HTMLElement;
    
    btn.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      gsap.to(btn, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: 'power2.out',
      });
    });
    
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)',
      });
    });
  });
};

export const initAllAnimations = (): void => {
  setTimeout(() => {
    console.log('🎯 initAllAnimations executado');
    
    initHeroAnimations();
    initStatsAnimation();
    initCardsAnimation();
    initSectionsAnimation();
    
    if (window.innerWidth > 768) {
      initMagneticButtons();
    }
  }, 100);
};
