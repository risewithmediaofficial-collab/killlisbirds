import { useLayoutEffect, useRef } from 'react';

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
  <div
    className={`scroll-stack-card relative w-full box-border origin-top will-change-transform ${itemClassName}`.trim()}
    style={{
      backfaceVisibility: 'hidden',
      transformStyle: 'preserve-3d'
    }}
  >
    {children}
  </div>
);

const ScrollStack = ({
  children,
  className = '',
  selector = 'section, footer, .scroll-video-container, [data-stack-section]',
  itemScale = 0.018,
  rotationAmount = 0,
  blurAmount = 0,
  minWidth = 1024
}) => {
  const rootRef = useRef(null);
  const frameRef = useRef(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const sections = Array.from(root.querySelectorAll(selector));
    if (!sections.length) return undefined;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const cards = sections.map((section, index) => {
      const panel =
        Array.from(section.children).find(child => window.getComputedStyle(child).position !== 'absolute') ||
        section.firstElementChild ||
        section;

      section.classList.add('scroll-stack-section');
      panel.classList.add('scroll-stack-card');
      panel.style.willChange = 'transform, filter';
      section.style.zIndex = String(sections.length - index);

      return { section, panel, index };
    });

    const update = () => {
      if (window.innerWidth < minWidth || prefersReducedMotion) {
        cards.forEach(({ panel }) => {
          panel.style.transform = '';
          panel.style.filter = '';
        });
        return;
      }

      const viewportHeight = window.innerHeight;

      cards.forEach(({ section, panel, index }) => {
        const rect = section.getBoundingClientRect();
        const start = viewportHeight * 0.92;
        const end = viewportHeight * 0.22;
        const rawProgress = (start - rect.top) / (start - end);
        const progress = Math.max(0, Math.min(1, rawProgress));
        const scale = Math.max(0.94, 1 - progress * itemScale * index);
        const rotation = rotationAmount ? progress * rotationAmount * index : 0;
        const lift = progress * -6 * index;
        const blur = blurAmount ? Math.min(progress * blurAmount * index, blurAmount * 2) : 0;

        panel.style.transform = `translate3d(0, ${lift}px, 0) scale(${scale}) rotate(${rotation}deg)`;
        panel.style.filter = blur ? `blur(${blur}px)` : '';
      });
    };

    const requestTick = () => {
      if (frameRef.current) return;
      frameRef.current = requestAnimationFrame(() => {
        frameRef.current = null;
        update();
      });
    };

    update();
    window.addEventListener('scroll', requestTick, { passive: true });
    window.addEventListener('resize', requestTick);

    return () => {
      window.removeEventListener('scroll', requestTick);
      window.removeEventListener('resize', requestTick);

      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }

      cards.forEach(({ section, panel }) => {
        panel.style.transform = '';
        panel.style.filter = '';
        panel.style.willChange = '';
        panel.classList.remove('scroll-stack-card');
        section.classList.remove('scroll-stack-section');
        section.style.zIndex = '';
      });
    };
  }, [blurAmount, itemScale, minWidth, rotationAmount, selector]);

  return (
    <div ref={rootRef} className={`scroll-stack-root relative w-full ${className}`.trim()}>
      {children}
    </div>
  );
};

export default ScrollStack;
