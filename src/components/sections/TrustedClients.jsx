// src/components/sections/TrustedClients.jsx
import React from 'react';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import StarIcon from '@mui/icons-material/Star';
import FadeIn from '../FadeIn';
import SectionHeader from '../SectionHeader';
import CornerBrackets from '../CornerBrackets';
import ScrollReveal from '../ScrollReveal';

const voices = [
  { 
    quote: 'Killis Bird components set a new benchmark for precision and reliability. Their custom UAV brushless motors and SWARM control systems completely transformed our telemetry operations.', 
    name: 'Rajiv Sharma', 
    role: 'CTO, AeroVentures Ltd.' 
  },
  { 
    quote: 'The attention to aerostructural engineering detail is extraordinary. We have partnered with them for three consecutive custom drone fleet builds and achieved 100% mission success.', 
    name: 'Priya Nair', 
    role: 'Director of Operations, DefenceTech Systems' 
  },
  { 
    quote: 'Unmatched structural integrity, lightweight carbon frames, and incredible technical support. Killis Bird is truly a world-class aerospace component partner.', 
    name: 'Arjun Menon', 
    role: 'Head of Procurement, SkyAgri Corp' 
  },
];

const partners = ['AeroVentures', 'DefenceTech', 'SkyAgri Corp', 'InspectX', 'SwarmLabs', 'AviaNXT'];

const TrustedClients = () => {
  return (
    <>
      {/* ── TESTIMONIALS (ORANGE BACKGROUND) ── */}
      <section data-stack-section className="section bg-navy-50/10 relative overflow-hidden border-t border-b border-border/40">
        <div className="max-w-content mx-auto px-6 md:px-8 relative z-10">
          <div className="text-center flex flex-col items-center mb-12">
            <span className="text-xs font-heading font-bold text-skyroot uppercase tracking-widest block mb-2">CLIENT VERDICTS</span>
            <SectionHeader eyebrow="" title="Voices of" orangeTitle="Trust" centered />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {voices.map((v, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="up">
                <div className="bg-white border border-border/70 rounded-none p-8 hover:border-skyroot hover:shadow-xl hover:-translate-y-2.5 transition-all duration-500 group flex flex-col h-full relative">
                  <CornerBrackets color="#f97316" size="10px" thickness="1.5px" hoverShift />
                  
                  <div className="flex justify-between items-start mb-6">
                    <FormatQuoteIcon sx={{ fontSize: 36, color: '#f97316', opacity: 0.3 }} />
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, si) => (
                        <StarIcon key={si} sx={{ fontSize: 16, color: '#f97316' }} />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-black/85 text-sm leading-relaxed italic mb-8 flex-grow">
                    "{v.quote}"
                  </p>

                  <div className="flex items-center gap-4 border-t border-border/60 pt-6">
                    <div className="w-11 h-11 rounded-none bg-skyroot text-white flex items-center justify-center font-heading font-bold text-base shrink-0 shadow-sm relative group/avatar">
                      <CornerBrackets color="#ffffff" size="4px" thickness="1px" hoverShift={false} />
                      {v.name[0]}
                    </div>
                    <div>
                      <p className="font-heading font-bold text-black text-sm leading-none mb-1.5">{v.name}</p>
                      <p className="text-skyroot text-xs font-medium">{v.role}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERS (WHITE BACKGROUND) ── */}
      <section data-stack-section className="section-sm bg-white border-b border-border/40">
        <div className="max-w-content mx-auto px-6 md:px-8">
          <div className="flex flex-col items-center justify-center text-center">
            <span className="text-[10px] font-heading font-bold text-muted uppercase tracking-widest block mb-4">OUR TRUSTED COLLABORATORS</span>
            <ScrollReveal
              containerClassName="max-w-2xl"
              textClassName="text-sm uppercase tracking-[0.24em] text-black/70"
              baseOpacity={0.22}
              baseRotation={1}
              blurStrength={6}
            >
              Built for demanding missions. Trusted by teams that cannot afford failure.
            </ScrollReveal>
            <div className="flex flex-wrap justify-center items-center gap-y-4 gap-x-2 md:gap-x-8 mt-4">
              {partners.map((p, i) => (
                <FadeIn key={i} delay={i * 0.05}>
                  <div className="relative group inline-flex">
                    <div className="px-6 py-3 bg-navy-50/10 border border-border/40 rounded-none text-black/60 hover:text-skyroot hover:border-skyroot hover:bg-white font-heading font-bold text-xs tracking-widest uppercase transition-all duration-300 cursor-default shadow-sm relative z-10">
                      {p}
                    </div>
                    <CornerBrackets color="#f97316" size="5px" thickness="1px" hoverShift />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustedClients;
