import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ParallaxWatermark from '../components/ParallaxWatermark';
import CornerBrackets from '../components/CornerBrackets';
import SecondaryHero from '../components/common/SecondaryHero';
import SecondarySectionIntro from '../components/common/SecondarySectionIntro';
import useBookScrollEffects from '../hooks/useBookScrollEffects';

const contactInfo = [
  { Icon: LocationOnIcon, label: 'Headquarters', lines: ['Killis Bird Technologies Pvt. Ltd.', 'Plot No.107,Pollupalli SIDCO Industrial Estate, Gangasandiram,Krishnagiri, India'] },
  { Icon: EmailIcon, label: 'Email Us', lines: ['info@killisbird.com', 'sales@killisbird.com'], href: 'mailto:info@killisbird.com' },
  { Icon: PhoneIcon, label: 'Call Us', lines: [' +91 72007 43683'], href: 'tel: +91 72007 43683' },
  { Icon: AccessTimeIcon, label: 'Business Hours', lines: ['Monday – Friday', '9:00 AM – 6:00 PM IST'] },
];

const Contact = () => {
  const pageRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  useBookScrollEffects(pageRef);

  const handleChange = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  const inputClassName = 'mt-3 w-full border border-[#f1dfd1] bg-white px-5 py-4 text-sm text-[#111111] outline-none transition-all duration-300 placeholder:text-[#9aa3ad] focus:border-[#ff6b00] focus:ring-2 focus:ring-[#ff6b00]/15';

  return (
    <div ref={pageRef}>
      <SEO title="Contact Us" description="Request a quote or get in touch with the Killis Bird team." />
      <SecondaryHero eyebrow="Get In Touch" title="Let's Build Something" highlight="Extraordinary." description="Whether you are ready to partner, need a custom component, or simply want to explore possibilities — we are here." watermark="HELLO" />

      <section data-stack-section className="relative overflow-hidden bg-[#fff8f1] py-[110px] max-sm:py-[72px]">
        <ParallaxWatermark className="left-0 top-1/2 -translate-y-1/2 text-[clamp(7rem,16vw,20rem)] text-[#111111]/[0.05]" speed={18}>CONNECT</ParallaxWatermark>
        <div className="relative mx-auto grid w-full max-w-[1380px] grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] gap-[clamp(44px,6vw,84px)] px-[clamp(20px,5vw,80px)] max-xl:grid-cols-1">
          <div>
            <SecondarySectionIntro eyebrow="Contact Details" title="Let's Start a" highlight="Conversation" description="Tell us what you are building, what support you need, or where you want to take your UAV programme next." />
            <div className="mt-10 grid gap-5">
              {contactInfo.map(({ Icon, label, lines, href }) => (
                <article key={label} className="book-reveal-card rounded-[18px] border border-[#f1dfd1] bg-white px-6 py-6 shadow-[0_18px_42px_rgba(17,21,26,0.06)]">
                  <div className="flex items-start gap-4">
                    <span className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-[14px] bg-[#fff0e5] text-[#ff6b00]"><Icon sx={{ fontSize: 26 }} /></span>
                    <div>
                      <h3 className="text-[20px] font-extrabold text-[#111111]">{label}</h3>
                      <div className="mt-3 space-y-1.5 text-[15px] leading-[1.75] text-[#67707d]">
                        {lines.map((line, index) => (href && index === 0 ? <a key={line} href={href} className="block hover:text-[#ff6b00]">{line}</a> : <p key={line}>{line}</p>))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-8 flex gap-3">
              {[
                { Icon: LinkedInIcon, href: '#', label: 'LinkedIn' },
                { Icon: TwitterIcon, href: '#', label: 'Twitter' },
                { Icon: YouTubeIcon, href: '#', label: 'YouTube' },
              ].map(({ Icon, href, label }) => (
                <motion.a key={label} href={href} aria-label={label} whileHover={{ y: -2 }} className="book-reveal-card flex h-[50px] w-[50px] items-center justify-center rounded-[14px] border border-[#f1dfd1] bg-white text-[#67707d] transition-all duration-300 hover:border-[#ff6b00] hover:text-[#ff6b00]"><Icon sx={{ fontSize: 22 }} /></motion.a>
              ))}
            </div>
          </div>

          <div>
            {sent ? (
              <div className="book-reveal-card relative rounded-[22px] border border-[#f1dfd1] bg-white px-8 py-16 text-center shadow-[0_22px_48px_rgba(17,21,26,0.08)]">
                <CheckCircleIcon sx={{ fontSize: 66, color: '#ff6b00' }} />
                <h2 className="mt-5 text-[34px] font-extrabold text-[#111111]">Message Received!</h2>
                <p className="mx-auto mt-4 max-w-[430px] text-[16px] leading-[1.78] text-[#67707d]">Thank you for reaching out. Our team will review your request and respond within 24 hours.</p>
                <button onClick={() => setSent(false)} className="mt-8 inline-flex items-center justify-center bg-[#ff6b00] px-7 py-4 text-[15px] font-extrabold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e85f00]">Send Another Message</button>
                <CornerBrackets color="#f97316" size="12px" thickness="2px" hoverShift={false} />
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="book-reveal-card relative rounded-[22px] border border-[#f1dfd1] bg-white p-8 shadow-[0_22px_48px_rgba(17,21,26,0.08)] md:p-10">
                <SecondarySectionIntro eyebrow="Send a Message" title="Request a" highlight="Quote" />
                <CornerBrackets color="#f97316" size="12px" thickness="2px" hoverShift={false} />
                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  <label className="block text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#67707d]">Full Name *<input name="name" type="text" required value={form.name} onChange={handleChange} className={inputClassName} placeholder="Your name" /></label>
                  <label className="block text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#67707d]">Email Address *<input name="email" type="email" required value={form.email} onChange={handleChange} className={inputClassName} placeholder="your@email.com" /></label>
                  <label className="block text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#67707d]">Phone Number<input name="phone" type="tel" value={form.phone} onChange={handleChange} className={inputClassName} placeholder="+91 00000 00000" /></label>
                  <label className="block text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#67707d]">Organisation<input name="company" type="text" value={form.company} onChange={handleChange} className={inputClassName} placeholder="Your company" /></label>
                </div>
                <label className="mt-5 block text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#67707d]">Subject *
                  <select name="subject" required value={form.subject} onChange={handleChange} className={inputClassName + ' appearance-none'}>
                    <option value="">Select a topic</option>
                    <option value="quote">Request a Quote</option>
                    <option value="customization">Custom Component Enquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </label>
                <label className="mt-5 block text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#67707d]">Message *
                  <textarea name="message" rows={5} required value={form.message} onChange={handleChange} className={inputClassName + ' resize-y'} placeholder="Tell us about your project or enquiry…" />
                </label>
                <button type="submit" className="mt-7 inline-flex w-full items-center justify-center gap-2 bg-[#ff6b00] px-7 py-4 text-[15px] font-extrabold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e85f00]">Send Message <ArrowForwardIcon sx={{ fontSize: 18 }} /></button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section data-stack-section className="relative overflow-hidden bg-white py-[110px] max-sm:py-[72px]">
        <ParallaxWatermark className="right-0 bottom-0 translate-y-1/4 text-[clamp(8rem,16vw,20rem)] text-[#ff6b00]/[0.06]" speed={15}>IND</ParallaxWatermark>
        <div className="relative mx-auto w-full max-w-[1380px] px-[clamp(20px,5vw,80px)] text-center"><SecondarySectionIntro eyebrow="Where We Are" title="Based in" highlight="Krishnagiri, India" description="At the heart of India's aerospace and technology corridor — building tomorrow's aerial systems, today." centered /></div>
      </section>
    </div>
  );
};

export default Contact;
