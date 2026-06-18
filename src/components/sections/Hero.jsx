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
    <section ref={heroRef} className="relative min-h-screen overflow-hidden bg-black pt-[76px]">
      <HeroBackground />
      <div className="grid-pattern absolute inset-0 z-10 text-white/5" />

      {/* Top-left: Title */}
      <div className="absolute left-0 top-[76px] z-20 px-6 pt-10 sm:px-10 sm:pt-14 md:px-16 md:pt-16 lg:px-20 lg:pt-20">
        <AnimatedTitle
          as="h1"
          segments={[
            { text: 'Precision' },
            { text: 'Engineered.', className: 'text-skyroot' },
            { break: true },
            { text: 'Innovation' },
            { text: 'Delivered.', className: 'text-white/70' }
          ]}
          className="hero-heading mb-0"
          textClassName="font-heading font-bold text-left text-white leading-[0.9]"
          textStyle={{ fontSize: 'clamp(2rem, 6.5vw, 4.5rem)', letterSpacing: '-0.03em', wordSpacing: '0.05em' }}
          baseOpacity={0.16}
          baseRotation={1.5}
          blurStrength={9}
        />
      </div>

      {/* Bottom-right: Body + Buttons */}
      <div className="absolute bottom-0 right-0 z-20 flex flex-col items-center gap-5 px-6 pb-14 text-center sm:px-10 sm:pb-16 md:items-end md:px-16 md:pb-20 md:text-right lg:px-20 lg:pb-24">
        <p className="hero-body max-w-[30rem] text-sm leading-relaxed tracking-wide text-white/80 sm:text-base md:text-body-lg">
          Redefining unmanned aerial systems through innovative, indigenous solutions
          designed to elevate performance and reliability.
        </p>

        <div className="hero-btns flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4 md:justify-end">
          <Link to="/creations" className="btn-primary w-full justify-center sm:w-auto">
            Explore Creations <ArrowForwardIcon sx={{ fontSize: 18 }} />
          </Link>
          <Link to="/our-dna" className="btn-secondary w-full justify-center !border-white/30 !text-white hover:!border-skyroot hover:!text-skyroot sm:w-auto">
            Discover Our DNA
          </Link>
        </div>
      </div>

      {/* Spacer to maintain min-h-screen */}
      <div className="min-h-screen" />
    </section>
  );
};

export default Hero;
