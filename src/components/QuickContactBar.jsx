import { motion } from 'framer-motion';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import Folder from './Folder';

const quickLinks = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    href: 'https://wa.me/918000000000?text=Hello%20Killis%20Bird%2C%20I%20want%20to%20know%20more%20about%20your%20UAV%20solutions.',
    Icon: WhatsAppIcon,
    className: 'text-[#25D366]'
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:info@killisbird.com?subject=Killis%20Bird%20Enquiry',
    Icon: EmailIcon,
    className: 'text-skyroot'
  },
  {
    id: 'call',
    label: 'Call',
    href: 'tel:+918000000000',
    Icon: CallIcon,
    className: 'text-black'
  }
];

const QuickContactBar = () => {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="fixed bottom-3 right-3 z-[70] origin-bottom-right scale-[0.34] sm:scale-[0.4] md:bottom-7 md:right-7 md:scale-[0.52] lg:bottom-8 lg:right-8 lg:scale-[0.58]"
    >
      <Folder
        color="#f97316"
        size={1}
        className="drop-shadow-[0_12px_30px_rgba(249,115,22,0.22)]"
        transparentPapers
        items={quickLinks.map(item => (
          <a
            key={item.id}
            href={item.href}
            target={item.id === 'whatsapp' ? '_blank' : undefined}
            rel={item.id === 'whatsapp' ? 'noreferrer' : undefined}
            onClick={event => event.stopPropagation()}
            className="group flex h-full w-full flex-col items-center justify-center gap-1 bg-transparent px-1 py-1 text-center"
          >
            <span className={`flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${item.className}`}>
              <item.Icon sx={{ fontSize: 20 }} />
            </span>
            <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-black/70">
              {item.label}
            </span>
          </a>
        ))}
      />
      <div className="pointer-events-none mt-1 hidden text-right text-[9px] font-bold uppercase tracking-[0.2em] text-black/45 lg:block">
        Quick Contact
      </div>
    </motion.div>
  );
};

export default QuickContactBar;
