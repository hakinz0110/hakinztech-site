"use client";

import React from 'react';
import { GraduationCap, Wrench, Lightbulb, LucideIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { GradientText } from '@/components/ui/gradient-text';
import { getAbout } from '@/lib/content';

// Get content from JSON
const about = getAbout();

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Wrench,
  Lightbulb,
};

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 relative overflow-hidden bg-white">
      {/* Solid white background for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white" />
      
      {/* Decorative accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <ScrollReveal direction="left">
            <div className="space-y-4 md:space-y-6">
              <Badge variant="outline" className="px-3 py-1 text-xs md:text-sm">
                About Me
              </Badge>
              <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                <GradientText>{about.headline}</GradientText>
              </h2>
              <div className="space-y-3 md:space-y-4 text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                {about.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Principles Cards - Stack on mobile */}
          <div className="grid grid-cols-1 gap-3 md:gap-4">
            {about.principles.map((principle, index) => {
              const Icon = iconMap[principle.icon] || Lightbulb;
              return (
                <ScrollReveal key={principle.title} delay={index * 100} direction="right">
                  <div className="group flex items-start gap-3 md:gap-4 p-4 md:p-5 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-primary/20 shadow-md transition-all duration-300 hover:border-primary/40 hover:shadow-xl active:scale-[0.98]">
                    <div className="p-2.5 md:p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/10 group-hover:scale-110 transition-transform flex-shrink-0">
                      <Icon className="h-5 w-5 md:h-7 md:w-7 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-headline text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {principle.title}
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground mt-0.5 md:mt-1 leading-relaxed">{principle.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
