import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Company</h3>
            <ul>
              <li className="mb-2">
                <a href="/about" className="hover:underline">About Us</a>
              </li>
              <li className="mb-2">
                <a href="/services" className="hover:underline">Services</a>
              </li>
              <li className="mb-2">
                <a href="/careers" className="hover:underline">Careers</a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="hover:underline">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Customer Service</h3>
            <ul>
              <li className="mb-2">
                <a href="/faq" className="hover:underline">FAQ</a>
              </li>
              <li className="mb-2">
                <a href="/support" className="hover:underline">Support</a>
              </li>
              <li className="mb-2">
                <a href="/returns" className="hover:underline">Returns</a>
              </li>
              <li className="mb-2">
                <a href="/shipping" className="hover:underline">Shipping Info</a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-blue-600 hover:text-blue-800" aria-label="Facebook">
                <FaFacebookF className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" className="text-blue-400 hover:text-blue-600" aria-label="Twitter">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" className="text-pink-500 hover:text-pink-700" aria-label="Instagram">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" className="text-blue-700 hover:text-blue-900" aria-label="LinkedIn">
                <FaLinkedinIn className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
            <form className="flex flex-col">
              <input
                type="email"
                placeholder="Your email address"
                className="mb-4 p-2 rounded-lg border border-gray-700 bg-gray-800 text-white"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow-lg">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} UniversalTickets LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
