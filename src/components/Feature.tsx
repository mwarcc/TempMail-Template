import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div className="glass-effect p-6 rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-1 dark:bg-gray-800/50 dark:border dark:border-gray-700">
      <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-xl flex items-center justify-center mx-auto mb-4">
        <Icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100 text-center">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed text-center">{description}</p>
    </div>
  );
}