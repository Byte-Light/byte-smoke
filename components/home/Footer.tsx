import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-purple-900 to-gray-900 text-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-32 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Section: Brand and Social Media */}
        <div className="space-y-6">
          <h2 className="text-3xl font-extrabold text-white">
            BYTE<span className="text-yellow-400">SMOKE</span>
          </h2>
          <p>P: 0113 217 7723</p>
          <p>E: enquiries@byte-smoke.co.usa</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
              <FaFacebookF size={24} />
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-pink-500 transition-colors duration-300">
              <FaInstagram size={24} />
            </a>
            <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>

        {/* Center Section: Shopping Links */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-white">Shopping Links</h3>
          <ul className="space-y-2">
            {['Cigarettes', 'Menthol Cigarette Alternatives', 'Hand Rolling Tobacco', 'Pipes', 'Cigars', 'Review & Win £50', 'Join our Newsletter', 'Account Login'].map((link) => (
              <li key={link}>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section: Helpful Links and Payment Methods */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-white">Helpful Links</h3>
          <ul className="space-y-2">
            {['New Customer FAQ', 'Delivery Information', 'Returns Information', 'Click & Collect Information', 'About Age Verification', 'Read our Reviews', 'Contact Us'].map((link) => (
              <li key={link}>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-white font-semibold">0113 217 7723</p>
          <p className="text-gray-400">Lines open tomorrow at 9 AM</p>
          <div className="flex space-x-4 mt-4">
            <img src="/images/visa.avif" alt="Visa" className="h-8 opacity-80 hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </div>

      {/* Bottom Section: Legal Info and Links */}
      <div className="mt-12 border-t border-gray-600 pt-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-32 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <p className="text-gray-400 text-sm">
            © Byte Holdings USA Limited. E&OE. Company Reg. 10622615.
          </p>
          <p className="text-gray-400 text-sm">
            eCommerce by{' '}
            <a href="#" className="text-white hover:text-yellow-400 transition-colors duration-300">
              Byte Light
            </a>{' '}
            🤝 Ecommerce Etc
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Statement</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
