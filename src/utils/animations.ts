import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export const initHeroAnimations = () => {
  // Parallax no background
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

  // Texto entrando
  const heroTitle = document.querySelector('.hero h1');
  if (heroTitle) {
    const split = new SplitType(heroTitle as HTMLElement, { types: 'words' });
    gsap.from(split.words, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
    });
  }
};

export const initStatsAnimation = () => {
  const stats = document.querySelectorAll('.stat-number');
  
  stats.forEach((stat) => {
    const target = parseInt(stat.getAttribute('data-target') || '0');
    const suffix = stat.getAttribute('data-suffix') || '+';
    
    ScrollTrigger.create({
      trigger: stat,
      start: 'top 80%',
      onEnter: () => {
        gsap.to(stat, {
          textContent: target,
          duration: 2,
          ease: 'power1.out',
          snap: { textContent: 1 },
          onUpdate: function() {
            (stat as HTMLElement).textContent = 
              Math.floor(parseFloat((stat as HTMLElement).textContent || '0')) + suffix;
          },
        });
      },
      once: true,
    });
  });
};

export const initCardsAnimation = () => {
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

export const initMagneticButtons = () => {
  const buttons = document.querySelectorAll('.btn-primary');
  
  buttons.forEach((button) => {
    button.addEventListener('mousemove', (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const rect = (button as HTMLElement).getBoundingClientRect();
      const x = mouseEvent.clientX - rect.left - rect.width / 2;
      const y = mouseEvent.clientY - rect.top - rect.height / 2;
      
      gsap.to(button, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: 'power2.out',
      });
    });
    
    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)',
      });
    });
  });
};
