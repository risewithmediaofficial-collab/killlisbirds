// src/components/sections/Hero.jsx
import React, { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useParallax from '../../hooks/useParallax';
import AnimatedTitle from '../AnimatedTitle';
import SmartImage from '../SmartImage';

const IMG = {
  hero: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1600&q=80',
};

const HeroBackground = () => {
  const ref = useParallax(35);
  return (
    <div ref={ref} className="absolute inset-0 z-0 h-[130%] w-full">
      <SmartImage
        src={IMG.hero}
        alt="UAV drone flying over landscape"
        loading="eager"
        fetchPriority="high"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/65" />
    </div>
  );
};

const Hero = () => {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-eyebrow', { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.2, ease: 'power3.out' });
      gsap.fromTo('.hero-body', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.7, ease: 'power3.out' });
      gsap.fromTo('.hero-btns', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, delay: 0.9, ease: 'power3.out' });
      gsap.fromTo('.hero-float-badge', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, delay: 1.2, ease: 'power3.out' });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-4 pt-[76px] sm:px-6">
      <HeroBackground />
      <div className="grid-pattern absolute inset-0 z-10 text-white/5" />

      <div className="relative z-20 mx-auto mt-14 flex max-w-4xl flex-col items-center px-2 text-center sm:mt-16 sm:px-6 md:mt-20 md:px-8">
        <div className="hero-eyebrow eyebrow justify-center text-skyroot max-sm:mb-3 max-sm:text-[10px]">
          Imagine · Ideate · Innovate
        </div>

        <AnimatedTitle
          as="h1"
          segments={[
            { text: 'Precision' },
            { text: 'Engineered.', className: 'text-skyroot' },
            { break: true },
            { text: 'Innovation' },
            { text: 'Delivered.', className: 'text-white/70' }
          ]}
          className="hero-heading mb-3 sm:mb-4"
          textClassName="font-heading font-bold text-center text-white leading-[0.9]"
          textStyle={{ fontSize: 'clamp(1.85rem, 6.7vw, 4.1rem)', letterSpacing: '-0.04em' }}
          baseOpacity={0.16}
          baseRotation={1.5}
          blurStrength={9}
        />

        <p className="hero-body max-w-[36rem] text-center text-sm leading-relaxed text-white/80 sm:text-base md:text-body-lg">
          Redefining unmanned aerial systems through innovative, indigenous solutions
          designed to elevate performance and reliability.
        </p>

        <div className="hero-btns mt-7 flex w-full flex-col items-center justify-center gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
          <Link to="/creations" className="btn-primary w-full justify-center sm:w-auto">
            Explore Creations <ArrowForwardIcon sx={{ fontSize: 18 }} />
          </Link>
          <Link to="/our-dna" className="btn-secondary w-full justify-center !border-white/30 !text-white hover:!border-skyroot hover:!text-skyroot sm:w-auto">
            Discover Our DNA
          </Link>
        </div>

        <div className="hero-float-badge mt-5 rounded-none border border-white/20 bg-white/10 px-4 py-2 text-center shadow-card backdrop-blur-md sm:mt-6 sm:px-5 sm:py-2.5">
          <p className="mb-0.5 text-[9px] font-heading font-bold uppercase tracking-widest text-white/60">Built in India</p>
          <p className="text-xs font-heading font-bold text-skyroot">Trusted Worldwide 🇮🇳</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
