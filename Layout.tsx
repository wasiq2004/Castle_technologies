/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from './UI';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 glass border-b border-white/10' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
            <span className="text-white font-bold text-xl">C</span>
          </div>
          <span className="text-xl font-display font-bold tracking-tight">Castle<span className="text-primary">Tech</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-gray-400'}`}
            >
              {link.name}
            </Link>
          ))}
          <Button variant="primary" className="text-sm py-2 px-5">
            Start Project
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium flex items-center justify-between ${location.pathname === link.path ? 'text-primary' : 'text-gray-400'}`}
                >
                  {link.name}
                  <ChevronRight className="w-4 h-4" />
                </Link>
              ))}
              <Button variant="primary" className="w-full mt-4">
                Start Project
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-bg-soft border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="text-lg font-display font-bold tracking-tight">Castle<span className="text-primary">Tech</span></span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            Building the future of technology with innovative AI, web, and automation solutions for modern businesses.
          </p>
        </div>
        
        <div>
          <h4 className="font-display font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
            <li><Link to="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-6">Services</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/services" className="hover:text-primary transition-colors">AI Solutions</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Web Development</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">App Development</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Cloud & DevOps</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-6">Newsletter</h4>
          <p className="text-sm text-gray-400 mb-4">Stay updated with our latest innovations.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary w-full"
            />
            <Button variant="primary" className="px-4 py-2 rounded-lg">Join</Button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>© 2026 Castle Technologies. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};
