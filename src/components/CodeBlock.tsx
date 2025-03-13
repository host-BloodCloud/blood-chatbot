
import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  language: string;
  code: string;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, code, className = '' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div 
      className={cn(
        "relative my-4 rounded-xl overflow-hidden",
        "bg-black/90 dark:bg-black/90",
        "border border-slate-700/30 dark:border-slate-700/30",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between p-2 bg-slate-900/90 dark:bg-slate-900/90 text-slate-300">
        <span className="text-xs font-mono">{language}</span>
        <button
          onClick={handleCopy}
          className="p-1 rounded hover:bg-slate-700/50 transition-colors"
          aria-label="Copy code"
        >
          {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto scrollbar-thin text-sm">
        <code className="font-mono text-slate-300">{code}</code>
      </pre>
    </motion.div>
  );
};

export default CodeBlock;
