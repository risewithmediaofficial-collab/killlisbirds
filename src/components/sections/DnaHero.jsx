import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import BiotechIcon from '@mui/icons-material/Biotech';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import DecorativeDots from '../common/DecorativeDots';
import FloatingInfoCard from '../common/FloatingInfoCard';

gsap.registerPlugin(ScrollTrigger);

const navItems = [
  {
    id: 'foundation',
    Icon: BiotechIcon,
    title: 'The DNA of Killis Bird',
    highlight: 'Killis Bird',
    text: 'Imagination, ideation, and innovation — powering next-generation UAV components and solutions.'
  },
  {
    id: 'values',
    Icon: LightbulbIcon,
    title: 'What Drives Everything',
    highlight: 'Everything',
    text: 'Bold ideas, practical thinking, and relentless innovation drive everything we do.'
  },
  {
    id: 'purpose',
    Icon: GpsFixedIcon,
    title: 'Our Vision',
    highlight: 'Vision',
    text: 'To set the global standard for innovative and distinctive UAV components and solutions.'
  },
  {
    id: 'people',
    Icon: RocketLaunchIcon,
    title: 'Our Mission',
    highlight: 'Mission',
    text: 'To empower our partners with reliability, excellence, and forward-thinking aerospace solutions.'
  }
];

const DnaHero = () => {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const ctx = gsap.context(() => {
      gsap.from('.dna-hero-word', { y: 54, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.13 });
      gsap.from('.dna-hero-reveal', { y: 24, opacity: 0, duration: 0.75, ease: 'power3.out', stagger: 0.11, delay: 0.35 });
      gsap.from('.dna-hero-drone', { x: 80, opacity: 0, duration: 1.05, ease: 'power3.out', delay: 0.25 });
      gsap.from('.dna-hero-late', { y: 24, scale: 0.96, opacity: 0, duration: 0.85, ease: 'power3.out', stagger: 0.1, delay: 0.55 });
    }, root);

    return () => ctx.revert();
  }, []);

  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      ref={rootRef}
      className="relative min-h-[calc(100vh-82px)] overflow-hidden bg-[linear-gradient(90deg,#fff_0%,#fff_48%,#fff8f1_48%,#fff8f1_100%)] pt-10 max-lg:bg-[linear-gradient(180deg,#fff_0%,#fff8f1_100%)] max-sm:pt-5"
      aria-labelledby="dna-hero-title"
    >
      <div className="mx-auto grid min-h-[calc(100vh-215px)] w-full max-w-[1380px] grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] items-center gap-10 px-[clamp(20px,5vw,80px)] max-lg:min-h-0 max-lg:grid-cols-1">
        <div className="relative z-[2] py-8 pl-7 max-sm:pl-5">
          <span className="absolute left-0 top-5 h-[74px] w-[74px] border-l-2 border-t-2 border-[#ff6b00] max-sm:h-12 max-sm:w-12" aria-hidden="true" />
          <h1 id="dna-hero-title" className="font-heading text-[clamp(72px,7vw,120px)] font-normal leading-[0.94] tracking-[-0.07em] text-[#111111] max-sm:text-[clamp(48px,16vw,64px)]" aria-label="Imagine. Ideate. Innovate.">
            <span className="dna-hero-word block">Imagine.</span>
            <span className="dna-hero-word block">Ideate.</span>
            <span className="dna-hero-word block text-[#ff6b00]">Innovate.</span>
          </h1>
          <p className="dna-hero-reveal mt-7 font-serif text-[clamp(22px,2vw,28px)] italic text-[#11151a] max-sm:text-[21px]">“Where Precision Meets Innovation”</p>
          <span className="dna-hero-reveal my-6 block h-1 w-[58px] bg-[#ff6b00]" aria-hidden="true" />
          <p className="dna-hero-reveal max-w-[545px] text-lg leading-[1.75] text-[#67707d] max-sm:text-base">
            Precision-engineered UAV components and solutions, built to expand the possibilities of aerospace and defence.
          </p>
        </div>

        <div className="relative min-h-[590px] max-lg:min-h-[460px] max-sm:min-h-[330px]" aria-label="Killis Bird UAV technology visual">
          <DecorativeDots className="absolute left-[16%] top-[48%] opacity-65 max-sm:hidden" />
          <span className="absolute inset-y-0 -right-20 left-[4%] rounded-l-[42%] bg-gradient-to-br from-[#fff5ec] to-[#f8e6d8] max-sm:inset-y-[8%] max-sm:-right-[18%] max-sm:left-[6%]" aria-hidden="true" />
          <svg className="dna-hero-late absolute bottom-12 left-[-1%] h-[220px] w-[108%] opacity-50 max-sm:hidden [&_path]:fill-none [&_path]:stroke-[#ff6b00]/30 [&_path]:stroke-[1.1]" viewBox="0 0 760 260" aria-hidden="true">
            <path d="M0 210 C110 150 160 196 240 126 C302 74 342 160 410 119 C486 72 542 158 604 129 C672 96 706 143 760 116" />
            <path d="M0 246 C116 184 176 226 254 159 C318 104 356 191 428 148 C498 107 559 194 625 160 C687 128 724 173 760 150" />
            {Array.from({ length: 12 }).map((_, index) => (
              <path key={index} d={`M${index * 68} 260 L${300 + index * 38} 88`} />
            ))}
          </svg>
          <img
            className="dna-hero-drone absolute right-[-38px] top-[12%] z-[2] w-full max-w-[min(830px,105%)] rotate-[6deg] drop-shadow-[0_34px_44px_rgba(17,21,26,0.18)] max-lg:right-0 max-lg:top-[8%]"
            src="/assests/DRONE1-removebg-preview.png"
            alt="Killis Bird precision UAV"
            width="900"
            height="560"
            loading="eager"
            decoding="async"
          />
          <FloatingInfoCard
            className="dna-hero-late absolute right-[9%] top-[13%] z-[3] max-sm:right-0 max-sm:top-[4%] max-sm:scale-[0.86] max-sm:origin-top-right"
            icon={GpsFixedIcon}
            eyebrow="Precision"
            title="In Every Detail"
          />
          <span className="absolute bottom-10 right-3 h-[74px] w-[74px] border-b-2 border-r-2 border-[#ff6b00] max-sm:h-12 max-sm:w-12" aria-hidden="true" />
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1380px] px-[clamp(20px,5vw,80px)]">
        <div className="dna-hero-late relative z-[5] -mt-2 grid grid-cols-4 rounded-t-[20px] border border-[#f1dfd1] border-b-2 border-b-[#ff6b00] bg-white/95 shadow-[0_24px_54px_rgba(17,21,26,0.08)] after:absolute after:bottom-[-10px] after:left-1/2 after:h-5 after:w-5 after:-translate-x-1/2 after:rotate-45 after:border-b-2 after:border-r-2 after:border-[#ff6b00] after:bg-white max-xl:grid-cols-2 max-sm:grid-cols-1">
          {navItems.map(({ id, Icon, title, highlight, text }, index) => (
            <button
              key={id}
              type="button"
              className={`group border-r border-[#f1dfd1] bg-transparent p-8 text-left transition-all duration-300 hover:-translate-y-1 hover:bg-[#fff8f1] focus-visible:-translate-y-1 focus-visible:bg-[#fff8f1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#ff6b00] max-sm:border-b max-sm:border-r-0 max-sm:p-6 ${index === 1 ? 'max-xl:border-r-0' : ''} ${index < 2 ? 'max-xl:border-b' : ''} ${index === 3 ? 'border-r-0 max-sm:border-b-0' : ''}`}
              onClick={() => scrollTo(id)}
            >
              <Icon aria-hidden="true" sx={{ fontSize: 36 }} className="mb-3.5 text-[#ff6b00] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105" />
              <span className="mb-4 block h-0.5 w-8 bg-[#ff6b00]" aria-hidden="true" />
              <strong className="block text-[21px] leading-[1.18] text-[#111111]">
                {title.replace(highlight, '')}
                <em className="not-italic text-[#ff6b00]">{highlight}</em>
              </strong>
              <p className="mt-4 text-[15px] leading-[1.72] text-[#67707d]">{text}</p>
            </button>
          ))}
        </div>
        <p className="flex items-center justify-center gap-2 py-8 text-center text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#11151a] max-sm:flex-wrap max-sm:text-[10px]">
          <TravelExploreIcon aria-hidden="true" sx={{ fontSize: 18 }} className="text-[#ff6b00]" />
          <span className="text-[#ff6b00]">Built in India.</span> Trusted Worldwide.
        </p>
      </div>
    </section>
  );
};

export default DnaHero;
