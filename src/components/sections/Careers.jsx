// src/components/sections/Careers.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WorkIcon from '@mui/icons-material/Work';
import FadeIn from '../FadeIn';
import SectionHeader from '../SectionHeader';
import CornerBrackets from '../CornerBrackets';
import ScrollReveal from '../ScrollReveal';
import SmartImage from '../SmartImage';

const openingsSummary = [
  { id: '01', role: 'Aerospace Systems Engineer', dept: 'Engineering', location: 'Bangalore' },
  { id: '02', role: 'Embedded Software Developer', dept: 'Avionics', location: 'Remote' },
];

const Careers = () => {
  return (
    <section data-stack-section className="py-24 px-6 bg-white border-b border-border/40 relative overflow-hidden">
      {/* Background dot pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-content mx-auto px-6 md:px-8 relative z-10">

        {/* Centered Header Block */}
        <div className="text-center flex flex-col items-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-heading font-bold text-skyroot uppercase tracking-widest block mb-2">JOIN OUR MISSION</span>
          <SectionHeader eyebrow="" title="Build the Next" orangeTitle="UAV Generation" centered />
          <ScrollReveal
            containerClassName="mt-2 max-w-3xl"
            textClassName="text-muted text-body-lg text-center leading-relaxed"
            baseOpacity={0.18}
            baseRotation={1.5}
          >
            We are constantly pushing boundaries in structural design, swarming logic, and power systems. Join a team where you can actually make an impact on real aerospace hardware.
          </ScrollReveal>
        </div>

        {/* Content Grid: Left image with pattern, Right openings */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Side: Minimalist Image with Grid Pattern Overlay */}
          <div className="lg:col-span-5 relative overflow-hidden rounded-none aspect-[4/3] shadow-md border border-border/40 bg-black group">
            <SmartImage
              src="https://images.unsplash.com/photo-1581092160607-ee67df30d0ec?w=600&q=80"
              alt="Killis Bird engineering lab"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-all duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 z-10">
              <span className="text-[9px] font-heading font-bold text-white bg-skyroot px-2.5 py-0.5 rounded-none uppercase tracking-wider">
                Krishnagiri Lab
              </span>
            </div>
            <CornerBrackets color="#f97316" size="14px" thickness="1.5px" hoverShift />
          </div>

          {/* Right Side: Stack of Jobs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              {openingsSummary.map((o, i) => (
                <FadeIn key={i} delay={i * 0.1} direction="up">
                  <div className="bg-white border border-border/80 rounded-none p-6 hover:border-skyroot hover:shadow-lg transition-all duration-300 group flex items-start gap-4 relative">
                    <CornerBrackets color="#f97316" size="8px" thickness="1.5px" hoverShift />

                    {/* Webflow template style number */}
                    <span className="font-heading font-bold text-navy-200 group-hover:text-skyroot text-2xl leading-none pt-0.5 transition-colors duration-300">
                      {o.id}
                    </span>

                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center justify-between gap-4 mb-2.5">
                        <h4 className="font-heading font-bold text-black text-lg group-hover:text-skyroot transition-colors duration-300">
                          {o.role}
                        </h4>
                        <span className="text-[9px] font-bold uppercase tracking-widest text-skyroot bg-navy-50/20 px-3 py-1 rounded-none border border-navy-100 shrink-0">
                          {o.dept}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 text-muted text-xs">
                        <WorkIcon sx={{ fontSize: 13, color: '#f97316', opacity: 0.8 }} />
                        <span>Full Time · {o.location}</span>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <div className="pt-2 flex justify-center sm:justify-start">
              <Link to="/journey" className="relative group inline-flex">
                <span className="btn-primary !rounded-none !py-2.5 !px-6 relative z-10 bg-skyroot text-white font-heading font-bold transition-all duration-300">
                  Explore All Job Openings <ArrowForwardIcon sx={{ fontSize: 18, ml: 1 }} />
                </span>
                <CornerBrackets color="#f97316" size="6px" thickness="1.5px" hoverShift />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Careers;
