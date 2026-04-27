/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";
import { ReactNode, Key } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  icon?: LucideIcon;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({ children, onClick, variant = 'primary', className = '', icon: Icon, href, type = 'button' }: ButtonProps) => {
  const baseStyles = "relative px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden group";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]",
    secondary: "bg-white text-black hover:bg-gray-200",
    outline: "border border-white/20 text-white hover:bg-white/5",
    ghost: "text-white hover:bg-white/5"
  };

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {Icon && <Icon className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />}
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          initial={false}
        />
      )}
    </>
  );

  if (href) {
    const isInternal = href.startsWith('/');
    if (isInternal) {
      return (
        <Link to={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
          {content}
        </Link>
      );
    }
    return (
      <a href={href} className={`${baseStyles} ${variants[variant]} ${className}`} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {content}
    </motion.button>
  );
};

interface CardProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
  key?: Key;
}

export const Card = ({ children, className = '', glow = false }: CardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`glass rounded-2xl p-6 transition-all duration-300 hover:border-white/20 group ${glow ? 'hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export const Section = ({ children, className = '', id }: { children: ReactNode; className?: string; id?: string }) => {
  return (
    <section id={id} className={`py-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
      {children}
    </section>
  );
};

export const GradientText = ({ children, className = '' }: { children: ReactNode; className?: string }) => {
  return (
    <span className={`gradient-text ${className}`}>
      {children}
    </span>
  );
};

export const BrandLogo = ({ className = '' }: { className?: string }) => {
  return (
    <img
      src="/assets/CASTLE%20TECHNOLOGIES-04.png"
      alt="Castle Technologies"
      className={className}
    />
  );
};
