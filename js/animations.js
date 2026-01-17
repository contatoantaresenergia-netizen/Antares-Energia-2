import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
  
  // 1. HERO - Parallax no background
  gsap.to('.hero-background', {
    yPercent: 40,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
    }
  });

  // 2. HERO - Texto entrando
  const heroTitle = new SplitType('.hero h1', { types: 'words' });
  gsap.from(heroTitle.words, {
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out',
  });

  // 3. NÚMEROS (500+, 15MW, etc) - CountUp animado
  const stats = document.querySelectorAll('.stat-number');
  stats.forEach(stat => {
    const target = parseInt(stat.textContent);
    
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
            stat.textContent = Math.floor(stat.textContent) + '+';
          }
        });
      },
      once: true
    });
  });

  // 4. CARDS DE SISTEMAS - Entrada em stagger
  gsap.from('.tech-card', {
    y: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.tech-section',
      start: 'top 70%',
    }
  });

  // 5. SEÇÕES - Fade suave
  gsap.utils.toArray('.section').forEach(section => {
    gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: 'top 75%',
      }
    });
  });

  // 6. FAQ - Accordion com animação
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    gsap.set(answer, { height: 0, overflow: 'hidden' });
    
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      
      if (isOpen) {
        gsap.to(answer, { height: 0, duration: 0.3 });
        item.classList.remove('active');
      } else {
        gsap.to(answer, { height: 'auto', duration: 0.3 });
        item.classList.add('active');
      }
    });
  });
}

// 7. HOVER EFFECTS - Magnetic Button
export function initHoverEffects() {
  const buttons = document.querySelectorAll('.btn-primary');
  
  buttons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      gsap.to(button, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
    
    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)'
      });
    });
  });
}
