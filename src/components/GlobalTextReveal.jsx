import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GlobalTextReveal = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return undefined;

    const animations = [];
    const animatedTextTargets = [];
    const animatedImageTargets = [];

    const animateNewTargets = () => {
      const textTargets = Array.from(
        document.querySelectorAll(
          'section p, section li, section blockquote, section h3, section h4'
        )
      ).filter(node => {
        if (node.closest('form, nav, footer, button, a, label, .reveal-group, .book-reveal-card')) return false;
        if (node.classList.contains('scroll-reveal-text')) return false;
        if (node.dataset.textAnimated === 'true') return false;
        return node.textContent?.trim().length > 18;
      });

      const imageTargets = Array.from(
        document.querySelectorAll('section img')
      ).filter(node => {
        if (node.closest('nav, footer, button, a, .image-frame, .book-reveal-card')) return false;
        if (node.dataset.imageAnimated === 'true') return false;
        return true;
      });

      textTargets.forEach(target => {
        target.dataset.textAnimated = 'true';
        animatedTextTargets.push(target);
        animations.push(gsap.fromTo(
          target,
          {
            opacity: 0.12,
            y: 28,
            scale: 0.985,
            filter: 'blur(8px)'
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: 'blur(0px)',
            duration: 0.9,
            ease: 'power3.out',
            onComplete: () => {
              gsap.set(target, { clearProps: 'transform,filter' });
            },
            scrollTrigger: {
              trigger: target,
              start: 'top 88%',
              once: true
            }
          }
        ));
      });

      imageTargets.forEach(target => {
        target.dataset.imageAnimated = 'true';
        animatedImageTargets.push(target);
        animations.push(gsap.fromTo(
          target,
          {
            opacity: 0.1,
            scale: 1.1,
            filter: 'blur(14px)'
          },
          {
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
            duration: 1,
            ease: 'power3.out',
            onComplete: () => {
              gsap.set(target, { clearProps: 'transform,filter' });
            },
            scrollTrigger: {
              trigger: target,
              start: 'top 90%',
              once: true
            }
          }
        ));
      });

      if (textTargets.length || imageTargets.length) {
        ScrollTrigger.refresh();
      }
    };

    animateNewTargets();
    const refreshTimers = [250, 900, 1600].map(delay => window.setTimeout(animateNewTargets, delay));

    return () => {
      refreshTimers.forEach(timer => window.clearTimeout(timer));
      animations.forEach(animation => animation?.scrollTrigger?.kill());
      animations.forEach(animation => animation?.kill());
      animatedTextTargets.forEach(target => {
        delete target.dataset.textAnimated;
        target.style.opacity = '';
        target.style.transform = '';
        target.style.filter = '';
      });
      animatedImageTargets.forEach(target => {
        delete target.dataset.imageAnimated;
        target.style.opacity = '';
        target.style.transform = '';
        target.style.filter = '';
      });
    };
  });

  return null;
};

export default GlobalTextReveal;
