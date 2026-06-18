// src/components/Footer.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FlightIcon from '@mui/icons-material/Flight';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/our-dna', label: 'Our DNA' },
  { to: '/creations', label: 'Creations' },
  { to: '/assistance', label: 'Assistance' },
  { to: '/journey', label: 'Journey' },
  { to: '/blog', label: 'Blog' },
];

const Footer = () => (
  <footer className="bg-black text-white relative overflow-hidden border-t border-white/[0.06]">
    {/* Subtle bg watermark */}
    <div
      className="absolute right-0 bottom-0 font-heading font-bold leading-none select-none pointer-events-none opacity-[0.02] text-white"
      style={{ fontSize: 'clamp(8rem, 18vw, 22rem)' }}
    >
      KB
    </div>

    <div className="relative z-10 max-w-content mx-auto px-6 md:px-8 pt-16 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">

        {/* Brand — col span 4 */}
        <div className="lg:col-span-4">
          <Link to="/" className="flex items-center mb-5 group">
            <img 
              src="/assests/KILLIS BIRD - LOGO.png" 
              alt="Killis Bird Logo" 
              className="h-12 md:h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </Link>
          <p className="text-white/50 text-sm leading-relaxed mb-2">Imagine. Ideate. Innovate.</p>
          <p className="text-skyroot font-semibold text-sm mb-6">🇮🇳 Built in India. Trusted Worldwide.</p>

          <div className="flex gap-2.5">
            {[
              { Icon: LinkedInIcon, href: '#', label: 'LinkedIn' },
              { Icon: TwitterIcon, href: '#', label: 'Twitter' },
              { Icon: YouTubeIcon, href: '#', label: 'YouTube' },
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                whileHover={{ scale: 1.12, y: -2 }}
                className="w-9 h-9 rounded-lg border border-white/10 hover:border-skyroot hover:bg-skyroot flex items-center justify-center transition-all duration-300"
              >
                <Icon sx={{ fontSize: 16 }} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Navigate — col span 2 */}
        <div className="lg:col-span-2">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-5">Navigate</h4>
          <ul className="space-y-3">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-white/60 hover:text-skyroot text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                >
                  <span className="w-0 group-hover:w-3 h-px bg-skyroot transition-all duration-300 rounded-full" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact — col span 3 */}
        <div className="lg:col-span-3">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-5">Connect</h4>
          <ul className="space-y-3.5">
            <li className="flex items-start gap-2.5">
              <LocationOnIcon sx={{ fontSize: 16, color: '#f97316', mt: 0.25, flexShrink: 0 }} />
              <span className="text-white/60 text-sm leading-relaxed">
                Killis Bird Technologies Pvt. Ltd.<br />Plot No.107,
Pollupalli SIDCO Industrial Estate,
Gangasandiram, Krishnagiri 635115
              </span>
            </li>
            <li>
              <a href="mailto:info@killisbird.com"
                className="flex items-center gap-2.5 text-white/60 hover:text-skyroot text-sm transition-colors"
              >
                <EmailIcon sx={{ fontSize: 15, color: '#f97316', flexShrink: 0 }} />
                info@killisbird.com
              </a>
            </li>
            <li>
              <a href="tel:+918000000000"
                className="flex items-center gap-2.5 text-white/60 hover:text-skyroot text-sm transition-colors"
              >
                <PhoneIcon sx={{ fontSize: 15, color: '#f97316', flexShrink: 0 }} />
                 +91 72007 43683
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter — col span 3 */}
        <div className="lg:col-span-3">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-5">Stay Updated</h4>
          <p className="text-white/50 text-sm mb-4 leading-relaxed">
            Latest UAV innovations delivered to your inbox.
          </p>
          <form className="flex flex-col gap-2.5" onSubmit={e => e.preventDefault()}>
            <input
              type="email"
              placeholder="your@email.com"
              className="bg-white/5 border border-white/10 focus:border-skyroot text-white placeholder-white/30 rounded-lg px-4 py-2.5 text-sm outline-none transition-colors"
            />
            <button
              type="submit"
              className="bg-skyroot hover:bg-skyroot-dark text-white font-bold py-2.5 rounded-lg text-sm transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Subscribe <ArrowForwardIcon sx={{ fontSize: 16 }} />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-white/30 text-xs">
          © {new Date().getFullYear()} Killis Bird Technologies Pvt. Ltd. All rights reserved.
        </p>
        <p className="text-white/20 text-xs">
          Precision Engineered. Innovation Delivered.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
