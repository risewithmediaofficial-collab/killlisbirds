// src/components/sections/Company.jsx
import React, { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useParallax from '../../hooks/useParallax';
import SectionHeader from '../SectionHeader';
import CornerBrackets from '../CornerBrackets';
import ScrollReveal from '../ScrollReveal';
import SmartImage from '../SmartImage';

const stats = [
  { value: '500+', label: 'Components Delivered', desc: 'Precision drone parts shipped worldwide' },
  { value: '20+', label: 'Industry Partners', desc: 'Trusted by major defence & agri operators' },
  { value: '5+', label: 'Years Innovating', desc: 'Pioneering custom swarming firmware' },
  { value: '100%', label: 'Made in India', desc: 'Indigenously designed and assembled' },
];

const DnaImage = () => {
  const ref = useParallax(15);
  return (
    <div className="relative overflow-hidden rounded-none aspect-[4/3] bg-white shadow-lg border border-border/40 group">
      <SmartImage
        ref={ref}
        src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&q=80"
        alt="Killis Bird UAV engineering"
        className="w-full h-[120%] object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <CornerBrackets color="#f97316" size="14px" thickness="1.5px" hoverShift />
    </div>
  );
};

const Company = () => {
  const statsRef = useRef(null);
  const dnaRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Stats counter animation
      gsap.fromTo('.premium-stat-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 85%',
            once: true
          }
        }
      );

      // DNA elements reveal
      gsap.fromTo('.dna-reveal-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: dnaRef.current,
            start: 'top 75%',
            once: true
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Premium Stats Grid */}
      <section ref={statsRef} data-stack-section className="bg-white border-b border-border/60 relative px-6 py-[72px] md:px-8 lg:py-[88px]">
        <div className="max-w-content mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div
                key={i}
                className="premium-stat-card bg-navy-50/10 border border-border/40 rounded-none p-8 hover:bg-white hover:border-skyroot hover:shadow-lg transition-all duration-300 group relative"
              >
                <CornerBrackets color="#f97316" size="8px" thickness="1.5px" hoverShift />
                {/* Webflow template style number line */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[10px] font-heading font-bold text-skyroot uppercase tracking-widest leading-none">KEY METRIC</span>
                  <div className="h-[1px] bg-navy-200 group-hover:bg-skyroot w-8 transition-all duration-300" />
                </div>

                <div className="stat-number text-5xl font-bold font-heading text-black group-hover:text-skyroot transition-colors duration-300 mb-2">
                  {s.value}
                </div>
                <div className="text-sm font-heading font-bold text-black uppercase tracking-wider mb-2">
                  {s.label}
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DNA section */}
      <section ref={dnaRef} data-stack-section className="bg-white relative overflow-hidden px-6 pt-[72px] pb-0 md:px-8 lg:pt-[88px]">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

        <div className="max-w-content mx-auto px-6 md:px-8 relative z-10">

          {/* Centered Header Block */}
          <div className="text-center flex flex-col items-center mb-9 max-w-3xl mx-auto lg:mb-11">
            <span className="text-xs font-heading font-bold text-skyroot uppercase tracking-widest block mb-2">WHO WE ARE</span>
            <SectionHeader eyebrow="" title="The DNA of" orangeTitle="Killis Bird" centered />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center pb-8 lg:gap-12 lg:pb-10">

            <div className="dna-text space-y-6">
              <ScrollReveal containerClassName="dna-reveal-item my-0" textClassName="text-muted text-body-lg leading-relaxed">
                At Killis Birds, our core is precision engineered with imagination, ideation, and innovation.
                This DNA powers the design and delivery of next-generation UAV components and solutions that
                expand the possibilities of aerospace and defense.
              </ScrollReveal>
              <p className="dna-reveal-item text-muted text-body-lg leading-relaxed">
                Each creation embodies visionary thinking, rigorous engineering, and uncompromising excellence
                — we shape the future of flight.
              </p>

              <blockquote className="dna-reveal-item border-l-2 border-skyroot pl-4 py-2 bg-navy-50/20 pr-4 rounded-r-xl">
                <p className="font-heading font-bold text-black text-lg italic">
                  "Where Precision Meets Innovation"
                </p>
              </blockquote>

              <div className="dna-reveal-item grid grid-cols-3 gap-6 border-t border-border/60 pt-6">
                {[
                  { val: '8K', unit: '', label: 'Resolution' },
                  { val: '15', unit: 'km', label: 'Range' },
                  { val: '74', unit: 'mph', label: 'Speed' },
                ].map((s, i) => (
                  <div key={i} className="group">
                    <div className="font-heading font-bold text-3xl text-black leading-none group-hover:text-skyroot transition-colors duration-300">
                      {s.val}<span className="text-skyroot text-lg ml-0.5">{s.unit}</span>
                    </div>
                    <div className="text-muted text-xs font-medium mt-1.5">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="dna-reveal-item pt-4">
                <Link to="/our-dna" className="relative group inline-flex">
                  <span className="btn-primary !rounded-none !py-2.5 !px-6 relative z-10 bg-skyroot text-white font-heading font-bold transition-all duration-300">
                    Explore Our DNA <ArrowForwardIcon sx={{ fontSize: 18, ml: 1 }} />
                  </span>
                  <CornerBrackets color="#f97316" size="6px" thickness="1.5px" hoverShift />
                </Link>
              </div>
            </div>

            <div className="dna-image relative lg:pl-8">
              <DnaImage />
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative mx-auto mt-4 w-[min(100%,260px)] bg-white border border-border/80 rounded-none px-5 py-3 shadow-md z-10 group sm:absolute sm:-right-4 sm:bottom-8 sm:mt-0 sm:w-auto sm:px-6 sm:py-4 sm:shadow-lg"
              >
                <CornerBrackets color="#f97316" size="6px" thickness="1.5px" hoverShift />
                <p className="text-muted text-xs font-medium">Starting from</p>
                <p className="font-heading font-bold text-skyroot text-lg mt-0.5 sm:text-xl">Custom Quote</p>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Company;
