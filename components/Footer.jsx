// src/components/Footer.jsx
import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-textMain mb-4">E-Store</h3>
            <p className="text-textLight mb-4">Your one-stop shop for premium products and top-tier services. Quality you can trust.</p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-accentOrange rounded-full flex items-center justify-center cursor-pointer hover:bg-accentOrangeStrong transition-colors"></div>
              <div className="w-8 h-8 bg-accentGreen rounded-full flex items-center justify-center cursor-pointer hover:bg-accentGreenStrong transition-colors"></div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-textMain mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/products" className="text-textLight hover:text-accentOrangeStrong transition-colors">Products</Link></li>
              <li><Link href="/services" className="text-textLight hover:text-accentOrangeStrong transition-colors">Services</Link></li>
              <li><Link href="/about" className="text-textLight hover:text-accentOrangeStrong transition-colors">About Us</Link></li>
              <li><Link href="/admin" className="text-textLight hover:text-accentOrangeStrong transition-colors">Admin Panel</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-textMain mb-4">Contact Us</h4>
            <ul className="space-y-3 text-textLight">
              <li className="flex items-center space-x-2">
                <FiMail className="text-accentOrangeStrong" />
                <span>support@estore.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <FiPhone className="text-accentOrangeStrong" />
                <span>+1 (234) 567-890</span>
              </li>
              <li className="flex items-center space-x-2">
                <FiMapPin className="text-accentOrangeStrong" />
                <span>123 Light Street, White City</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-textLight">
          <p>&copy; {new Date().getFullYear()} E-Store. All rights reserved. Crafted with light and love.</p>
        </div>
      </div>
    </footer>
  );
}