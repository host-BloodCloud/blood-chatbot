
import React from 'react';
import { motion } from 'framer-motion';

interface WebsitePreviewProps {
  url: string;
  title: string;
  description: string;
}

const WebsitePreview: React.FC<WebsitePreviewProps> = ({ url, title, description }) => {
  return (
    <motion.div
      className="w-full overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 flex items-center gap-2">
        <div className="flex space-x-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-amber-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="ml-2 flex-1">
          <div className="bg-white dark:bg-slate-700 text-xs py-1 px-3 rounded-full w-full text-center text-slate-500 dark:text-slate-300 font-mono truncate">
            {url}
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-slate-900 p-6">
        <div className="h-8 w-24 bg-slate-200 dark:bg-slate-700 rounded mb-4"></div>
        <div className="h-4 w-full bg-slate-100 dark:bg-slate-800 rounded mb-2"></div>
        <div className="h-4 w-5/6 bg-slate-100 dark:bg-slate-800 rounded mb-2"></div>
        <div className="h-4 w-4/6 bg-slate-100 dark:bg-slate-800 rounded mb-4"></div>
        
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="col-span-1 h-24 bg-slate-100 dark:bg-slate-800 rounded"></div>
          <div className="col-span-1 h-24 bg-slate-100 dark:bg-slate-800 rounded"></div>
          <div className="col-span-1 h-24 bg-slate-100 dark:bg-slate-800 rounded"></div>
        </div>
        
        <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
          <h3 className="font-medium text-lg mb-2">{title}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default WebsitePreview;
