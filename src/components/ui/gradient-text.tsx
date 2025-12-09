"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

export function GradientText({ children, className, animate = false }: GradientTextProps) {
  return (
    <span
      className={cn(
        'bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent',
        animate && 'animate-gradient bg-[length:200%_auto]',
        className
      )}
    >
      {children}
    </span>
  );
}
