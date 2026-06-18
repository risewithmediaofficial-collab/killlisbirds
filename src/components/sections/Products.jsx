// src/components/sections/Products.jsx
import React, { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import SectionHeader from '../SectionHeader';
import CornerBrackets from '../CornerBrackets';
import ChromaGrid from '../ChromaGrid';
import ScrollReveal from '../ScrollReveal';

const products = [
  {
    id: '01',
    name: 'High-Thrust Motor Series',
    tag: 'PROPULSION',
    price: 'Get Quote',
    desc: 'Indigenously designed brushless motors optimized for heavy-payload multirotor UAVs.',
    img: 'https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=600&q=80'
  },
  {
    id: '02',
    name: 'Carbon Fibre Frame X3',
    tag: 'AIRFRAME',
    price: 'Get Quote',
    desc: 'Ultra-lightweight aerospace-grade carbon composite frames designed for extreme durability.',
    img: 'https://images.unsplash.com/photo-1508444845599-5c89863b1c44?w=600&q=80'
  },
  {
    id: '03',
    name: 'Swarm Control Module',
    tag: 'AVIONICS',
    price: 'Get Quote',
    desc: 'Sophisticated micro-avionics supporting coordinated swarm drone operations in real-time.',
    img: 'https://images.unsplash.com/photo-1524143986875-3b098d78b363?w=600&q=80'
  },
];

const chromaItems = products.map(product => ({
  id: product.id,
  image: product.img,
  kicker: product.tag,
  title: product.name,
  subtitle: product.price,
  description: product.desc,
  borderColor: '#f97316',
  gradient: 'linear-gradient(160deg, #0f172a, #172554 52%, #ea580c 135%)',
  handle: `KB-${product.id}`
}));

const Products = () => {
  const productsRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.premium-product-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: productsRef.current,
            start: 'top 80%',
            once: true
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={productsRef} data-stack-section className="bg-navy-50/50 relative overflow-hidden px-6 py-[72px] md:px-8 lg:py-[88px]">
      {/* Background dot pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-content mx-auto px-6 md:px-8 relative z-10">

        {/* Centered Header Block */}
        <div className="text-center flex flex-col items-center mb-9 max-w-3xl mx-auto lg:mb-11">
          <span className="text-xs font-heading font-bold text-skyroot uppercase tracking-widest block mb-2">OUR OFFERINGS</span>
          <SectionHeader eyebrow="" title="Best" orangeTitle="Creations" centered />
          <ScrollReveal
            containerClassName="mt-2 max-w-3xl"
            textClassName="text-muted text-body-lg text-center leading-relaxed"
            baseOpacity={0.18}
            baseRotation={1.5}
          >
            Explore our custom series of high-precision components designed to optimize payload delivery, control reliability, and structural stamina.
          </ScrollReveal>
        </div>

        <div className="premium-product-card">
          <ChromaGrid items={chromaItems} className="mx-auto max-w-6xl" />
        </div>

        {/* Centered view all button at bottom */}
        <div className="mt-10 text-center lg:mt-12">
          <Link to="/creations" className="relative group inline-flex">
            <span className="btn-secondary !rounded-none !border-skyroot/20 hover:!border-skyroot hover:!text-skyroot font-heading font-bold relative z-10 transition-all duration-300">
              View All Creations <ArrowRightAltIcon sx={{ ml: 1, fontSize: 18 }} />
            </span>
            <CornerBrackets color="#f97316" size="6px" thickness="1.5px" hoverShift />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
