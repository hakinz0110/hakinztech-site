"use client";

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from '@/components/ui/badge';
import { skillTracks } from '@/lib/data';
import { CheckCircle2, Wrench, Star, TrendingUp } from "lucide-react";
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { GradientText } from '@/components/ui/gradient-text';
import { getSkills } from '@/lib/content';

// Get core skills from JSON content
const skillsContent = getSkills();

function AnimatedProgress({ value, color }: { value: number; color: string }) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 200);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className="relative h-2 md:h-2.5 w-full overflow-hidden rounded-full bg-secondary">
      <div
        className={`h-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out rounded-full`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 lg:py-32 bg-background/95 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10 md:opacity-20" style={{
        background: 'linear-gradient(45deg, hsl(var(--primary)/.1) 25%, transparent 25%), linear-gradient(-45deg, hsl(var(--primary)/.1) 25%, transparent 25%)',
        backgroundSize: '15px 15px md:20px md:20px',
      }} />

      <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-10 md:mb-16">
            <Badge variant="outline" className="mb-3 md:mb-4 px-3 py-1 text-xs md:text-sm">
              <TrendingUp className="h-3 w-3 mr-1.5" />
              Skills & Expertise
            </Badge>
            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              What I <GradientText>Bring to the Table</GradientText>
            </h2>
            <p className="mt-3 md:mt-4 max-w-2xl mx-auto text-sm md:text-base lg:text-lg text-muted-foreground px-4">
              Technical proficiency across multiple domains.
            </p>
          </div>
        </ScrollReveal>

        {/* Core Skills Progress Section - from JSON */}
        <ScrollReveal delay={100}>
          <div className="max-w-4xl mx-auto mb-10 md:mb-16">
            <h3 className="font-headline text-lg md:text-xl font-semibold mb-4 md:mb-8 text-center">Core Technical Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6">
              {skillsContent.coreSkills.map((skill, index) => (
                <ScrollReveal key={skill.name} delay={index * 50} direction="left">
                  <div className="p-3 md:p-4 rounded-lg md:rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 active:scale-[0.98]">
                    <div className="flex justify-between items-center mb-1.5 md:mb-2">
                      <span className="font-medium text-sm md:text-base">{skill.name}</span>
                      <span className="text-xs md:text-sm text-muted-foreground font-mono">{skill.level}%</span>
                    </div>
                    <AnimatedProgress value={skill.level} color={skill.color} />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Detailed Skills Accordion - from data.ts */}
        <div className="max-w-5xl mx-auto">
          <Accordion type="single" collapsible defaultValue="item-0" className="w-full space-y-3 md:space-y-4">
            {skillTracks.map((track, index) => (
              <ScrollReveal key={track.track} delay={index * 100}>
                <AccordionItem 
                  value={`item-${index}`} 
                  className="bg-card/30 backdrop-blur-sm rounded-xl border border-border/50 px-4 md:px-6 transition-all duration-500 hover:border-primary/50 data-[state=open]:shadow-xl data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="hover:no-underline py-4 md:py-6">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="p-2 md:p-3 rounded-lg md:rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/10">
                        <track.Icon className="h-5 w-5 md:h-8 md:w-8 text-primary" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-headline text-base md:text-xl font-semibold">{track.track}</h3>
                        <p className="text-xs md:text-sm text-muted-foreground">{track.description}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pt-2 pb-4 md:pb-6">
                      {/* Technical Skills */}
                      <div className="space-y-4 md:space-y-6 p-4 md:p-6 rounded-xl bg-gradient-to-br from-background/80 to-background/40 border border-border/50">
                        <h4 className="flex items-center gap-2 font-headline text-sm md:text-lg font-semibold">
                          <Wrench className="h-4 w-4 md:h-5 md:w-5 text-accent" />
                          Technical Skills
                        </h4>
                        <div className="space-y-3 md:space-y-4">
                          {track.technicalSkills.map((category) => (
                            <div key={category.title}>
                              <h5 className="font-semibold mb-1.5 md:mb-2 text-xs md:text-sm text-muted-foreground uppercase tracking-wide">{category.title}</h5>
                              <div className="flex flex-wrap gap-1.5 md:gap-2">
                                {category.skills.map((tool) => (
                                  <Badge 
                                    key={tool} 
                                    variant="secondary" 
                                    className="text-xs md:text-sm font-medium px-2 py-0.5 md:px-2.5 md:py-1"
                                  >
                                    {tool}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Soft Skills */}
                      <div className="space-y-3 md:space-y-4 p-4 md:p-6 rounded-xl bg-gradient-to-br from-background/80 to-background/40 border border-border/50">
                        <h4 className="flex items-center gap-2 font-headline text-sm md:text-lg font-semibold">
                          <Star className="h-4 w-4 md:h-5 md:w-5 text-accent" />
                          Soft Skills
                        </h4>
                        <ul className="space-y-2 md:space-y-3">
                          {track.softSkills.slice(0, 5).map((skill) => (
                            <li key={skill} className="flex items-start gap-2 md:gap-3 group">
                              <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-xs md:text-sm text-muted-foreground group-hover:text-foreground transition-colors">{skill}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </ScrollReveal>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
