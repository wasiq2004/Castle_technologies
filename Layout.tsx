/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight, Loader2 } from 'lucide-react';
import { BrandLogo, Button } from './UI';
import { Link, useLocation } from 'react-router-dom';
import { submitNewsletterSignup } from './lib/forms';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 glass border-b border-white/10' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2 group">
          <BrandLogo className="h-10 w-auto sm:h-12" />
        </Link>

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
          <Button variant="primary" className="px-5 py-2 text-sm" href="/contact">
            Start Project
          </Button>
        </div>

        <button
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="text-white md:hidden"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass overflow-hidden border-b border-white/10"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center justify-between text-lg font-medium ${location.pathname === link.path ? 'text-primary' : 'text-gray-400'}`}
                >
                  {link.name}
                  <ChevronRight className="h-4 w-4" />
                </Link>
              ))}
              <Button variant="primary" className="mt-4 w-full" href="/contact">
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
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNewsletterSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      await submitNewsletterSignup({ email });
      setEmail('');
      setStatus('success');
    } catch (error) {
      console.error('Newsletter signup error:', error);
      setErrorMessage(error instanceof Error ? error.message : 'Signup failed. Please try again.');
      setStatus('error');
    }
  };

  return (
    <footer className="border-t border-white/5 bg-bg-soft px-4 pb-10 pt-20 sm:px-6">
      <div className="mx-auto mb-16 grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-4">
        <div className="col-span-1">
          <Link to="/" className="mb-6 flex items-center gap-2">
            <BrandLogo className="h-12 w-auto sm:h-14" />
          </Link>
          <p className="text-sm leading-relaxed text-gray-400">
            Building the future of technology with innovative AI, web, and automation solutions for modern businesses.
          </p>
        </div>

        <div>
          <h4 className="mb-6 font-display font-bold">Quick Links</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/" className="transition-colors hover:text-primary">Home</Link></li>
            <li><Link to="/about" className="transition-colors hover:text-primary">About Us</Link></li>
            <li><Link to="/services" className="transition-colors hover:text-primary">Services</Link></li>
            <li><Link to="/projects" className="transition-colors hover:text-primary">Projects</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-6 font-display font-bold">Services</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/services" className="transition-colors hover:text-primary">AI Solutions</Link></li>
            <li><Link to="/services" className="transition-colors hover:text-primary">Web Development</Link></li>
            <li><Link to="/services" className="transition-colors hover:text-primary">App Development</Link></li>
            <li><Link to="/services" className="transition-colors hover:text-primary">Cloud & DevOps</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-6 font-display font-bold">Newsletter</h4>
          <p className="mb-4 text-sm text-gray-400">Stay updated with our latest innovations.</p>
          <form className="space-y-3" onSubmit={handleNewsletterSubmit}>
            <div className="flex flex-col gap-2 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  if (status !== 'idle') setStatus('idle');
                }}
                placeholder="Email address"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm focus:border-primary focus:outline-none"
              />
              <Button
                variant="primary"
                type="submit"
                className="rounded-lg px-4 py-2 sm:min-w-[110px]"
                icon={status === 'loading' ? Loader2 : undefined}
              >
                {status === 'loading' ? 'Joining...' : 'Join'}
              </Button>
            </div>
            {status === 'success' && <p className="text-sm text-green-400">Thanks. We sent this signup to the admin inbox.</p>}
            {status === 'error' && <p className="text-sm text-red-400">{errorMessage || 'Signup failed. Please try again.'}</p>}
          </form>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-center text-xs text-gray-500 md:flex-row md:text-left">
        <p>&copy; 2026 Castle Technologies. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-6">
          <Link to="/legal#privacy" className="transition-colors hover:text-white">Privacy Policy</Link>
          <Link to="/legal#terms" className="transition-colors hover:text-white">Terms of Service</Link>
          <Link to="/legal#cookies" className="transition-colors hover:text-white">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
};
