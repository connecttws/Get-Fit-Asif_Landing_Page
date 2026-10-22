"use client";

import React from 'react';
import { IndianRupee } from 'lucide-react';

interface RupeeProps {
  className?: string;
  size?: number;
}

/**
 * Universal Indian Rupee icon using Lucide's IndianRupee vector component.
 * Renders identically across all operating systems, Linux containers, and mobile devices.
 */
export const Rupee: React.FC<RupeeProps> = ({ className = 'w-4 h-4', size }) => {
  return (
    <IndianRupee
      size={size}
      className={`inline-block shrink-0 stroke-[2.5] align-baseline ${className}`}
    />
  );
};
