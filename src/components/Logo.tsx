
import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
  const sizes = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16',
  };

  return (
    <motion.div 
      className={`relative ${sizes[size]} aspect-square ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.19, 1.0, 0.22, 1.0] }}
    >
      <motion.div 
        className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 opacity-90"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div 
        className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg"
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        M
      </motion.div>
    </motion.div>
  );
};

export default Logo;
