import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-32">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {/* Left Section */}
          <div className="w-full lg:w-1/3">
            <h2 className="text-2xl font-bold text-white">BYTE<span className="text-yellow-500">SMOKE</span></h2>
            <p className="mt-4">P: 0113 217 7723</p>
            <p className="mt-1">E: enquiries@byte-smoke.co.usa</p>
            <div className="flex space-x-4 mt-4">
              {/* Social Media Icons */}
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white">
                <FaFacebookF size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white">
                <FaInstagram size={20} />
              </a>
              <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-white">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Center Section: Shopping Links */}
          <div className="w-full lg:w-1/3">
            <h3 className="text-xl font-semibold text-white">Shopping Links</h3>
            <ul className="mt-4 space-y-2">
              {['Cigarettes', 'Menthol Cigarette Alternatives', 'Hand Rolling Tobacco', 'Pipes', 'Cigars', 'Review & Win £50', 'Join our Newsletter', 'Account Login'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section: Helpful Links and Contact */}
          <div className="w-full lg:w-1/3">
            <h3 className="text-xl font-semibold text-white">Helpful Links</h3>
            <ul className="mt-4 space-y-2">
              {['New Customer FAQ', 'Delivery Information', 'Returns Information', 'Click & Collect Information', 'Tobacconist in Otley', 'About Age Verification', 'Read our Reviews', 'Our Story', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-white font-semibold">0113 217 7723</p>
            <p className="text-gray-400">Lines open tomorrow at 9 AM</p>
            <div className="flex space-x-4 mt-4">
              {/* Payment Method Icons */}
              <img src="/visa.png" alt="Visa" className="h-8" />
              <img src="/mastercard.png" alt="Mastercard" className="h-8" />
              <img src="/amex.png" alt="Amex" className="h-8" />
              <img src="/aits.png" alt="AITS" className="h-8" />
            </div>
          </div>
        </div>

        {/* Bottom Section: Legal and Ecommerce */}
        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col lg:flex-row justify-between">
          <p className="text-gray-400 text-sm">© Byte Holdings USA Limited. E&OE. Company Reg. 10622615.</p>
          <p className="text-gray-400 text-sm">
            eCommerce by <a href="#" className="text-white hover:text-yellow-500">Byte Light</a> 🤝 Ecommerce Etc
          </p>
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Statement</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
