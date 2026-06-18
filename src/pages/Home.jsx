// src/pages/Home.jsx
import { useEffect, useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '../components/SEO';
import FadeIn from '../components/FadeIn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import StarIcon from '@mui/icons-material/Star';
import useParallax from '../hooks/useParallax';
import useTextReveal from '../hooks/useTextReveal';
import useGsapReveal from '../hooks/useGsapReveal';
import ParallaxWatermark from '../components/ParallaxWatermark';
import SectionHeader from '../components/SectionHeader';
import CornerBrackets from '../components/CornerBrackets';

gsap.registerPlugin(ScrollTrigger);

/* ── Stock Images ─────────────────────────── */
const IMG = {
  hero: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1600&q=80',
  heroDrone: 'https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=800&q=80',
  dna: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&q=80',
  product1: 'https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=600&q=80',
  product2: 'https://images.unsplash.com/photo-1508444845599-5c89863b1c44?w=600&q=80',
  product3: 'https://images.unsplash.com/photo-1524143986875-3b098d78b363?w=600&q=80',
  agriculture: 'https://images.unsplash.com/photo-1586771107445-b3e7eb9f5a43?w=600&q=80',
  inspection: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&q=80',
  defence: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&q=80',
  research: 'https://images.unsplash.com/photo-1581092160607-ee67df30d0ec?w=600&q=80',
  newgen: 'https://images.unsplash.com/photo-1593113630400-ea4288922497?w=1200&q=80',
};

/* ── Data ─────────────────────────────────── */
const stats = [
  { value: '500+', label: 'Components Delivered' },
  { value: '20+', label: 'Industry Partners' },
  { value: '5+', label: 'Years Innovating' },
  { value: '100%', label: 'Made in India' },
];

const products = [
  { name: 'High-Thrust Motor Series', tag: 'PROPULSION', price: 'Get Quote', img: IMG.product1 },
  { name: 'Carbon Fibre Frame X3', tag: 'AIRFRAME', price: 'Get Quote', img: IMG.product2 },
  { name: 'Swarm Control Module', tag: 'AVIONICS', price: 'Get Quote', img: IMG.product3 },
];

const industries = [
  { icon: '🌾', title: 'Precision Agriculture', desc: 'UAV solutions for accurate, efficient and sustainable yield optimisation.' },
  { icon: '🏭', title: 'Industrial Inspection', desc: 'Aerial systems built for complex industrial monitoring operations.' },
  { icon: '🛡️', title: 'Defence & Surveillance', desc: 'Mission-critical components engineered for reliability and adaptability.' },
  { icon: '🔬', title: 'Research & Development', desc: 'Precision platforms supporting cutting-edge aerospace research.' },
];

const voices = [
  { quote: 'Killis Bird components set a new benchmark for precision and reliability. Their UAV solutions transformed our operations.', name: 'Rajiv Sharma', role: 'CTO, AeroVentures Ltd.' },
  { quote: 'The attention to engineering detail is extraordinary. We have partnered with Killis Bird for three consecutive projects.', name: 'Priya Nair', role: 'Director of Operations, DefenceTech Systems' },
  { quote: 'Innovation, quality, and unmatched support — Killis Bird is truly a world-class UAV partner.', name: 'Arjun Menon', role: 'Head of Procurement, SkyAgri Corp' },
];

const partners = ['AeroVentures', 'DefenceTech', 'SkyAgri Corp', 'InspectX', 'SwarmLabs', 'AviaNXT'];

/* ── Sub-Components for Parallax ─────────── */
const HeroBackground = () => {
  const ref = useParallax(35);
  return (
    <div ref={ref} className="absolute inset-0 w-full h-[130%] z-0">
      <img
        src={IMG.hero}
        alt="UAV drone flying over landscape"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/65" />
    </div>
  );
};

const DnaImage = () => {
  const ref = useParallax(15);
  return (
    <div className="img-accent overflow-hidden rounded-2xl aspect-[4/3]">
      <img
        ref={ref}
        src={IMG.dna}
        alt="Killis Bird UAV engineering"
        className="w-full h-[120%] object-cover"
        loading="lazy"
      />
    </div>
  );
};

const NewGenImage = () => {
  const ref = useParallax(20);
  return (
    <div className="relative rounded-none overflow-hidden aspect-[21/9] h-[360px] md:h-[480px] border border-border group">
      <img
        ref={ref}
        src={IMG.newgen}
        alt="New generation UAV drone fleet"
        className="w-full h-[125%] object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.div
          whileHover={{ scale: 1.08 }}
          className="w-20 h-20 bg-skyroot rounded-none flex items-center justify-center shadow-soft cursor-pointer relative group"
        >
          <span className="text-white text-3xl pl-1">▶</span>
          <CornerBrackets color="#ffffff" size="8px" thickness="1.5px" hoverShift />
        </motion.div>
      </div>
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-6 bottom-6 bg-white rounded-none border border-border p-4 shadow-card z-10"
      >
        <p className="font-heading font-bold text-black text-2xl leading-none">4K+</p>
        <p className="text-muted text-xs font-medium mt-1">Flight Hours Tested</p>
      </motion.div>
      <CornerBrackets color="#f97316" size="12px" thickness="2px" hoverShift />
    </div>
  );
};

const IndustriesMosaic = () => {
  const col1Ref = useParallax(12);
  const col2Ref = useParallax(-12);
  return (
    <div className="grid grid-cols-2 gap-4 h-[520px] overflow-hidden">
      <div ref={col1Ref} className="flex flex-col gap-4 h-[115%]">
        <div className="flex-1 rounded-2xl overflow-hidden">
          <img src={IMG.agriculture} alt="Agricultural UAV" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="h-40 rounded-2xl overflow-hidden">
          <img src={IMG.inspection} alt="Industrial inspection drone" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>
      <div ref={col2Ref} className="flex flex-col gap-4 h-[115%] translate-y-[-8%]">
        <div className="h-40 rounded-2xl overflow-hidden">
          <img src={IMG.defence} alt="Defence UAV system" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="flex-1 rounded-2xl overflow-hidden">
          <img src={IMG.research} alt="Research drone platform" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

/* ── Main Component ───────────────────────── */
const Home = () => {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const productsRef = useRef(null);
  const dnaRef = useRef(null);
  const industriesRef = useRef(null);

  const heroHeadingRef = useTextReveal();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero elements reveal
      gsap.fromTo('.hero-eyebrow', { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.2, ease: 'power3.out' });
      gsap.fromTo('.hero-body', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.7, ease: 'power3.out' });
      gsap.fromTo('.hero-btns', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, delay: 0.9, ease: 'power3.out' });
      gsap.fromTo('.hero-float-badge', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, delay: 1.2, ease: 'power3.out' });

      // Stats counter animation
      gsap.fromTo('.stat-item', { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: statsRef.current, start: 'top 85%', once: true }
      });

      // Products stagger
      gsap.fromTo('.product-card', { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: productsRef.current, start: 'top 80%', once: true }
      });

      // DNA section reveal
      gsap.fromTo('.dna-text .reveal-item', { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: dnaRef.current, start: 'top 75%', once: true }
      });

      // Industries
      gsap.fromTo('.industry-item', { opacity: 0, x: -30 }, {
        opacity: 1, x: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: industriesRef.current, start: 'top 80%', once: true }
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <SEO title="Home" description="Killis Bird — Precision Engineered UAV components. Built in India. Trusted Worldwide." />

      {/* ── HERO (FULL SCREEN IMAGE & CENTERED TEXT) ── */}
      <section ref={heroRef} className="relative h-screen bg-black overflow-hidden flex items-center justify-center pt-[72px]">
        <HeroBackground />
        <div className="grid-pattern text-white/5 absolute inset-0 z-10" />

        <div className="relative z-20 max-w-4xl mx-auto px-6 md:px-8 text-center flex flex-col items-center">
          <div className="hero-eyebrow eyebrow text-skyroot justify-center">
            Imagine · Ideate · Innovate
          </div>

          <h1
            ref={heroHeadingRef}
            className="hero-heading font-heading font-bold text-white leading-[1.1] mb-6 overflow-hidden text-center"
            style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.8rem)', letterSpacing: '-0.02em' }}
          >
            <span className="reveal-line inline-block">Precision</span> <span className="reveal-line inline-block text-skyroot">Engineered.</span><br />
            <span className="reveal-line inline-block">Innovation</span> <span className="reveal-line inline-block text-white/70">Delivered.</span>
          </h1>

          <p className="hero-body text-white/80 text-body-lg max-w-2xl mb-10 leading-relaxed text-center">
            Redefining unmanned aerial systems through innovative, indigenous solutions
            designed to elevate performance and reliability.
          </p>

          <div className="hero-btns flex flex-wrap gap-4 justify-center">
            <Link to="/creations" className="btn-primary">
              Explore Creations <ArrowForwardIcon sx={{ fontSize: 18 }} />
            </Link>
            <Link to="/our-dna" className="btn-secondary !border-white/30 !text-white hover:!border-skyroot hover:!text-skyroot">
              Discover Our DNA
            </Link>
          </div>
        </div>

        <div className="hero-float-badge absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-none px-5 py-2.5 shadow-card z-20 text-center">
          <p className="text-[9px] font-heading font-bold text-white/60 uppercase tracking-widest mb-0.5">Built in India</p>
          <p className="font-heading font-bold text-skyroot text-xs">Trusted Worldwide 🇮🇳</p>
        </div>
      </section>

      {/* ── STATS (WHITE BACKGROUND) ── */}
      <section ref={statsRef} className="section-sm bg-white border-y border-border relative">
        <div className="max-w-content mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className={`stat-item text-center py-4 ${i < 3 ? 'lg:border-r border-border' : ''}`}>
                <div className="stat-number text-h2 mb-2">{s.value}</div>
                <div className="text-eyebrow font-heading font-bold text-muted uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED CREATIONS (NAVY BACKGROUND) ── */}
      <section ref={productsRef} className="section bg-navy-50 relative overflow-hidden">
        <ParallaxWatermark className="right-0 top-0 text-[clamp(6rem,14vw,16rem)] text-navy-200/20" speed={25}>
          CREATIONS
        </ParallaxWatermark>
        <div className="max-w-content mx-auto px-6 md:px-8 relative z-10">
          <FadeIn className="flex items-end justify-between mb-12">
            <SectionHeader eyebrow="" title="Best" orangeTitle="Creations" className="!mb-0" />
            <Link to="/creations" className="hidden md:flex items-center gap-2 text-skyroot font-heading font-bold text-sm hover:gap-3 transition-all duration-300">
              View All <ArrowRightAltIcon />
            </Link>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <div key={i} className="product-card card group">
                <div className="card-img aspect-[4/3] bg-white">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-6 bg-white">
                  <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-white bg-black px-2.5 py-1 rounded-md inline-block mb-3">
                    {p.tag}
                  </span>
                  <h3 className="font-heading font-bold text-black text-h4 mb-3 group-hover:text-skyroot transition-colors">{p.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-bold text-skyroot text-sm">{p.price}</span>
                    <Link to="/contact" className="btn-primary !py-2 !px-4 !text-xs !rounded-none">
                      Enquire <ArrowForwardIcon sx={{ fontSize: 14 }} className="card-arrow transition-transform" />
                    </Link>
                  </div>
                </div>
                <CornerBrackets color="#f97316" size="10px" thickness="1.5px" hoverShift />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DNA (WHITE BACKGROUND) ── */}
      <section ref={dnaRef} className="section bg-white relative overflow-hidden">
        <ParallaxWatermark className="right-0 top-1/2 -translate-y-1/2 text-[clamp(8rem,16vw,22rem)] text-navy-100/30" speed={15}>
          PRO
        </ParallaxWatermark>
        <div className="max-w-content mx-auto px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="dna-text">
              <SectionHeader eyebrow="Who We Are" title="The DNA of" orangeTitle="Killis Bird" />
              <p className="reveal-item text-muted text-body-lg leading-relaxed mb-4">
                At Killis Birds, our core is precision engineered with imagination, ideation, and innovation.
                This DNA powers the design and delivery of next-generation UAV components and solutions that
                expand the possibilities of aerospace and defense.
              </p>
              <p className="reveal-item text-muted text-body-lg leading-relaxed mb-6">
                Each creation embodies visionary thinking, rigorous engineering, and uncompromising excellence
                — we shape the future of flight.
              </p>

              <blockquote className="reveal-item accent-left mb-8">
                <p className="font-heading font-bold text-black text-lg italic">
                  "Where Precision Meets Innovation"
                </p>
              </blockquote>

              <div className="reveal-item grid grid-cols-3 gap-6 mb-8">
                {[
                  { val: '8K', unit: '', label: 'Resolution' },
                  { val: '15', unit: 'km', label: 'Range' },
                  { val: '74', unit: 'mph', label: 'Speed' },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="font-heading font-bold text-3xl text-black leading-none">
                      {s.val}<span className="text-skyroot text-lg ml-0.5">{s.unit}</span>
                    </div>
                    <div className="text-muted text-xs font-medium mt-1">{s.label}</div>
                  </div>
                ))}
              </div>

              <Link to="/our-dna" className="reveal-item btn-primary">
                Explore Our DNA <ArrowForwardIcon sx={{ fontSize: 18 }} />
              </Link>
            </div>

            <div className="dna-image relative">
              <DnaImage />
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-4 bottom-8 bg-white border border-border rounded-none px-5 py-3 shadow-card z-10"
              >
                <p className="text-muted text-xs font-medium">Starting from</p>
                <p className="font-heading font-bold text-skyroot text-lg">Custom Quote</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEW GEN (NAVY BACKGROUND) ── */}
      <section className="section bg-navy-50 relative overflow-hidden">
        <ParallaxWatermark className="left-0 top-1/2 -translate-y-1/2 text-[clamp(6rem,12vw,14rem)] text-navy-200/20" speed={20}>
          A NEW GEN
        </ParallaxWatermark>
        <div className="max-w-content mx-auto px-6 md:px-8 relative z-10">
          <FadeIn className="text-center flex flex-col items-center">
            <SectionHeader eyebrow="Next Gen" title="A New Gen of" orangeTitle="UAV Solutions" centered />
            <p className="text-muted text-body-lg max-w-xl mx-auto mb-10 text-center">
              Whether you are building for precision agriculture, industrial applications,
              advanced surveillance or defense — Killis Birds is your trusted collaborator in flight.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <NewGenImage />
          </FadeIn>
        </div>
      </section>

      {/* ── INDUSTRIES (WHITE BACKGROUND) ── */}
      <section ref={industriesRef} className="section bg-white relative overflow-hidden">
        <ParallaxWatermark className="right-0 bottom-0 translate-y-1/4 text-[clamp(8rem,16vw,20rem)] text-navy-100/30" speed={18}>
          SKILLS
        </ParallaxWatermark>
        <div className="max-w-content mx-auto px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader eyebrow="" title="Industries We" orangeTitle="Empower" />
              <p className="reveal-item text-muted text-body-lg mb-10 max-w-md leading-relaxed">
                Our UAV components and solutions are designed to adapt seamlessly across industries,
                delivering accuracy for farming, efficiency for industries, and reliability for defense missions.
              </p>

              <div className="space-y-6">
                {industries.map((ind, i) => (
                  <div key={i} className="industry-item flex items-start gap-4 py-4 border-b border-border/50 group cursor-default">
                    <span className="text-2xl shrink-0">{ind.icon}</span>
                    <div>
                      <h4 className="font-heading font-bold text-black text-h4 mb-1 group-hover:text-skyroot transition-colors duration-300">{ind.title}</h4>
                      <p className="text-muted text-body">{ind.desc}</p>
                    </div>
                    <ArrowRightAltIcon className="ml-auto text-skyroot opacity-0 group-hover:opacity-100 transition-all duration-300 shrink-0 mt-1" />
                  </div>
                ))}
              </div>

              <Link to="/creations" className="btn-primary mt-8 inline-flex">
                View Creations <ArrowForwardIcon sx={{ fontSize: 18 }} />
              </Link>
            </div>

            <FadeIn direction="right" delay={0.2}>
              <IndustriesMosaic />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS (NAVY BACKGROUND) ── */}
      <section className="section bg-navy-50 relative overflow-hidden">
        <ParallaxWatermark className="left-0 bottom-0 text-[clamp(6rem,14vw,18rem)] text-navy-200/20" speed={22}>
          TRUST
        </ParallaxWatermark>
        <div className="max-w-content mx-auto px-6 md:px-8 relative z-10">
          <SectionHeader eyebrow="" title="Voices of" orangeTitle="Trust" centered />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {voices.map((v, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="up">
                <div className="bg-white border border-border rounded-none p-6 hover:border-skyroot hover:shadow-card transition-all duration-400 group relative">
                  <FormatQuoteIcon sx={{ fontSize: 32, color: '#f97316', opacity: 0.3 }} />
                  <p className="text-dark text-body leading-relaxed italic mt-3 mb-6">{v.quote}</p>
                  <div className="flex items-center gap-3 border-t border-border pt-4">
                    <div className="w-10 h-10 rounded-none bg-navy-50 flex items-center justify-center font-heading font-bold text-skyroot text-sm shrink-0">
                      {v.name[0]}
                    </div>
                    <div>
                      <p className="font-heading font-bold text-black text-sm">{v.name}</p>
                      <p className="text-skyroot text-xs font-medium">{v.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5 mt-3">
                    {[...Array(5)].map((_, si) => (
                      <StarIcon key={si} sx={{ fontSize: 14, color: '#f97316' }} />
                    ))}
                  </div>
                  <CornerBrackets color="#f97316" size="10px" thickness="1.5px" hoverShift />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERS (WHITE BACKGROUND) ── */}
      <section className="section-sm bg-white border-y border-border">
        <div className="max-w-content mx-auto px-6 md:px-8">
          <SectionHeader eyebrow="Collaborators" title="Our" orangeTitle="Partners" centered />
          <div className="flex flex-wrap justify-center mt-8">
            {partners.map((p, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="px-8 py-4 text-muted hover:text-black font-heading font-bold text-sm tracking-widest uppercase transition-colors duration-300 cursor-default border-r border-border last:border-0">
                  {p}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA (ORANGE BACKGROUND) ── */}
      <section className="section section-orange">
        <div className="grid-pattern text-white" />
        <FadeIn className="max-w-3xl mx-auto px-6 md:px-8 text-center relative z-10">
          <h2 className="font-heading font-bold text-white mb-5 leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', letterSpacing: '-0.02em' }}>
            Ready to Shape the Future of Flight?
          </h2>
          <p className="text-white/80 text-body-lg leading-relaxed max-w-xl mx-auto mb-10">
            With innovation at our core, we empower partners worldwide to achieve mission success
            through technologies that are robust, adaptable, and future-ready.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-white">
              Request a Quote <ArrowForwardIcon sx={{ fontSize: 18 }} />
            </Link>
            <Link to="/creations" className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-white text-white font-heading font-bold px-8 py-3.5 rounded-none transition-all duration-300 text-sm">
              Explore Creations
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
};

export default Home;
