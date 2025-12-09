"use client";

import React from 'react';
import { GraduationCap, Wrench, Lightbulb, Code2, Rocket, Users, Award, LucideIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { GradientText } from '@/components/ui/gradient-text';
import { getAbout, getStats } from '@/lib/content';

// Get content from JSON
const about = getAbout();
const statsData = getStats();

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Wrench,
  Lightbulb,
};

const stats = [
  { value: statsData.yearsExperience, label: "Years Exp.", Icon: Award },
  { value: statsData.projectsCompleted, label: "Projects", Icon: Rocket },
  { value: statsData.happyClients, label: "Clients", Icon: Users },
  { value: statsData.technologies, label: "Tech Stack", Icon: Code2 },
];

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 h-full w-full" style={{
          backgroundImage: 'radial-gradient(circle, hsl(var(--accent)/.15) 1px, transparent 1px)',
          backgroundSize: '1.5rem 1.5rem md:2rem md:2rem'
        }} />
      </div>
      <div className="absolute top-1/2 right-0 w-48 md:w-96 h-48 md:h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        {/* Stats Section - 2x2 grid on mobile */}
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 lg:gap-8 mb-12 md:mb-20">
            {stats.map((stat) => (
              <div 
                key={stat.label}
                className="text-center p-4 md:p-6 rounded-xl md:rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 group active:scale-95"
              >
                <stat.Icon className="h-6 w-6 md:h-8 md:w-8 mx-auto mb-2 md:mb-3 text-primary group-hover:scale-110 transition-transform" />
                <div className="font-headline text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                  <GradientText>{stat.value}</GradientText>
                </div>
                <div className="text-xs md:text-sm text-muted-foreground mt-0.5 md:mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

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
                  <div className="group flex items-start gap-3 md:gap-4 p-4 md:p-5 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl active:scale-[0.98]">
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
