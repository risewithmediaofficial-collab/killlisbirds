// src/components/sections/TechnicalSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from '../FadeIn';
import useParallax from '../../hooks/useParallax';
import ParallaxWatermark from '../ParallaxWatermark';
import SectionHeader from '../SectionHeader';
import SmartImage from '../SmartImage';

const NewGenImage = () => {
  const ref = useParallax(20);
  return (
    <div className="relative rounded-none overflow-hidden aspect-[16/9] sm:aspect-[21/9] h-[220px] sm:h-[300px] md:h-[400px] lg:h-[480px] group">
      <SmartImage
        ref={ref}
        src="https://images.unsplash.com/photo-1593113630400-ea4288922497?w=1200&q=80"
        alt="New generation UAV drone fleet"
        className="w-full h-[125%] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-skyroot rounded-none flex items-center justify-center shadow-soft cursor-pointer relative group"
        >
          <span className="text-white text-2xl sm:text-3xl pl-0.5 sm:pl-1">▶</span>
        </motion.div>
      </div>
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-3 bottom-3 sm:right-6 sm:bottom-6 bg-white rounded-none border border-border p-2.5 sm:p-4 shadow-card z-10"
      >
        <p className="font-heading font-bold text-black text-lg sm:text-2xl leading-none">4K+</p>
        <p className="text-muted text-[10px] sm:text-xs font-medium mt-0.5 sm:mt-1">Flight Hours Tested</p>
      </motion.div>
    </div>
  );
};

const TechnicalSection = () => {
  return (
    <section data-stack-section className="bg-navy-50 relative overflow-hidden px-4 py-[72px] sm:px-6 md:px-8 lg:py-[88px]">
      <ParallaxWatermark className="left-0 top-1/2 -translate-y-1/2 text-[clamp(4rem,12vw,14rem)] text-navy-200/20" speed={20}>
        A NEW GEN
      </ParallaxWatermark>
      <div className="max-w-content mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <FadeIn className="text-center flex flex-col items-center">
          <SectionHeader eyebrow="Next Gen" title="A New Gen of" orangeTitle="UAV Solutions" centered />
          <p className="text-muted text-sm sm:text-body-lg max-w-xl mx-auto mb-6 sm:mb-10 text-center leading-relaxed">
            Whether you are building for precision agriculture, industrial applications,
            advanced surveillance or defense — Killis Birds is your trusted collaborator in flight.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <NewGenImage />
        </FadeIn>
      </div>
    </section>
  );
};

export default TechnicalSection;
