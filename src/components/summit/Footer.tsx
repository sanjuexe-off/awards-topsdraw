import React from 'react';

// Import the logo (ensure logo512.png is in the public or src/assets directory)
import logo from '/logo512.png';

// Placeholder icons using Lucide or SVGs (replace with your icon library if needed)
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: <Twitter />, label: 'X', href: 'https://x.com/TopsdrawUAE' },
  { icon: <Facebook />, label: 'Facebook', href: 'https://www.facebook.com/topsdraw' },
  { icon: <Instagram />, label: 'Instagram', href: 'https://www.instagram.com/topsdraw/?igshid=YmMyMTA2M2Y%3D' },
  { icon: <Linkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/company/topsdraw/' },
];

const Footer = () => (
  <footer className="w-full bg-gradient-to-r from-summit-purple/5 via-white to-summit-red/5 border-t border-gray-200 py-8 mt-16">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4">
      {/* Back to Topsdraw */}
      <a href="https://topsdraw.com/" className="flex items-center gap-3 hover:opacity-80 transition-opacity" target="_blank" rel="noopener noreferrer">
        <img src={logo} alt="Topsdraw Logo" className="h-10 w-10 rounded bg-white p-1 shadow-sm" />
        <span className="font-bold text-lg tracking-wide text-gray-800">Back to Topsdraw</span>
      </a>
      {/* Social Links */}
      <div className="flex items-center gap-4">
        <span className="font-semibold mr-2 text-gray-700">Join Our Community</span>
        {socialLinks.map((item, idx) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-gray-200 p-2 hover:bg-white hover:text-summit-purple transition-colors text-gray-600"
            aria-label={item.label}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer; 