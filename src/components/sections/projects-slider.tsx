"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getProjects, Project } from '@/lib/content';
import { ExternalLink, Github, ArrowRight, Folder, Code2, Smartphone, Palette, Briefcase } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { GradientText } from '@/components/ui/gradient-text';

const categoryIcons: Record<string, React.ElementType> = {
  'Web': Code2,
  'Mobile': Smartphone,
  'UI/UX': Palette,
  'VA': Briefcase,
};

const categoryColors: Record<string, string> = {
  'Web': 'from-blue-500 to-cyan-500',
  'Mobile': 'from-purple-500 to-pink-500',
  'UI/UX': 'from-orange-500 to-amber-500',
  'VA': 'from-green-500 to-emerald-500',
};

const categoryBgColors: Record<string, string> = {
  'Web': 'from-blue-50 via-cyan-50 to-sky-50',
  'Mobile': 'from-purple-50 via-pink-50 to-fuchsia-50',
  'UI/UX': 'from-orange-50 via-amber-50 to-yellow-50',
  'VA': 'from-green-50 via-emerald-50 to-teal-50',
};

const FILTERS = ['All', 'Web', 'Mobile', 'UI/UX', 'VA'];

// Get projects from JSON content
const projects = getProjects();

function ProjectPlaceholder({ category, title }: { category: string; title: string }) {
  const Icon = categoryIcons[category] || Folder;
  const gradientColor = categoryColors[category] || 'from-primary to-accent';
  const bgColor = categoryBgColors[category] || 'from-amber-50 via-orange-50 to-yellow-50';
  
  return (
    <div className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br ${bgColor} relative overflow-hidden`}>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/30 rounded-full translate-y-1/2 -translate-x-1/2" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
        backgroundSize: '24px 24px'
      }} />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${gradientColor} flex items-center justify-center shadow-lg mb-4`}>
          <Icon className="h-8 w-8 md:h-10 md:w-10 text-white" />
        </div>
        <h4 className="font-bold text-foreground/80 text-base md:text-lg mb-1 max-w-[200px]">{title}</h4>
        <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${gradientColor} text-white`}>
          {category}
        </span>
      </div>
    </div>
  );
}

export function ProjectsSlider() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = React.useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-5" style={{
        backgroundImage: 'repeating-conic-gradient(hsl(var(--background)) 0% 25%, hsl(var(--primary)/.1) 0% 50%)',
        backgroundSize: '40px 40px md:64px md:64px',
      }} />
      <div className="absolute top-1/4 -right-16 md:-right-32 w-48 md:w-96 h-48 md:h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-8 md:mb-12">
            <Badge variant="outline" className="mb-3 md:mb-4 px-3 py-1 text-xs md:text-sm">
              <Folder className="h-3 w-3 mr-1.5" />
              Portfolio
            </Badge>
            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Featured <GradientText>Projects</GradientText>
            </h2>
            <p className="mt-3 md:mt-4 max-w-xl mx-auto text-sm md:text-base lg:text-lg text-muted-foreground px-4">
              A showcase of my work across different domains.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Buttons - Horizontal scroll on mobile */}
        <ScrollReveal delay={100}>
          <div className="flex gap-2 mb-8 md:mb-12 overflow-x-auto pb-2 px-1 justify-start md:justify-center scrollbar-hide">
            {FILTERS.map(filter => {
              const Icon = categoryIcons[filter];
              return (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? 'default' : 'outline'}
                  onClick={() => setActiveFilter(filter)}
                  className="font-semibold transition-all duration-300 active:scale-95 flex-shrink-0 text-xs md:text-sm h-9 md:h-10 px-3 md:px-4"
                  size="sm"
                >
                  {Icon && <Icon className="h-3.5 w-3.5 md:h-4 md:w-4 mr-1 md:mr-1.5" />}
                  {filter}
                </Button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Projects List */}
        <div className="space-y-6 md:space-y-12">
          {filteredProjects.map((project: Project, index) => (
            <ScrollReveal key={project.id} delay={index * 50}>
              <Card className="overflow-hidden bg-card/50 border-border/50 backdrop-blur-sm shadow-lg transition-all duration-500 hover:shadow-2xl hover:border-primary/30 group">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Project Image - First on mobile */}
                  <div className="relative aspect-video lg:aspect-[4/3] order-1 lg:order-2 overflow-hidden bg-muted/20">
                    {project.imageUrls && project.imageUrls.length > 0 && project.imageUrls[0] ? (
                      <Carousel className="w-full h-full" opts={{ loop: true }}>
                        <CarouselContent className="-ml-0">
                          {project.imageUrls.filter(url => url && url.trim() !== '').map((url, imgIndex) => (
                            <CarouselItem key={imgIndex} className="pl-0">
                              <div className="relative aspect-video lg:aspect-[4/3]">
                                <Image
                                  src={url}
                                  alt={`${project.title} - Image ${imgIndex + 1}`}
                                  fill
                                  sizes="(max-width: 768px) 100vw, 50vw"
                                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        {project.imageUrls.filter(url => url && url.trim() !== '').length > 1 && (
                          <>
                            <CarouselPrevious className="left-2 md:left-4 h-8 w-8 md:h-10 md:w-10 bg-white/80 hover:bg-white" />
                            <CarouselNext className="right-2 md:right-4 h-8 w-8 md:h-10 md:w-10 bg-white/80 hover:bg-white" />
                            {/* Image indicators */}
                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                              {project.imageUrls.filter(url => url && url.trim() !== '').map((_, idx) => (
                                <div key={idx} className="w-2 h-2 rounded-full bg-white/60" />
                              ))}
                            </div>
                          </>
                        )}
                      </Carousel>
                    ) : (
                      <ProjectPlaceholder category={project.category} title={project.title} />
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-5 md:p-6 lg:p-8 xl:p-10 flex flex-col justify-center order-2 lg:order-1">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                      <Badge className={`bg-gradient-to-r ${categoryColors[project.category] || 'from-primary to-accent'} text-white text-xs font-semibold border-0`}>
                        {project.category}
                      </Badge>
                      {project.tags.slice(0, 2).map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs font-medium">{tag}</Badge>
                      ))}
                      {project.tags.length > 2 && (
                        <Badge variant="outline" className="text-xs">+{project.tags.length - 2}</Badge>
                      )}
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-headline text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-2 md:mb-4 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-foreground/80 text-sm md:text-base lg:text-lg mb-4 md:mb-6 leading-relaxed line-clamp-3 md:line-clamp-none">
                      {project.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-6">
                      {project.liveSiteUrl && (
                        <Button asChild size="sm" className="text-xs md:text-sm h-9 md:h-10">
                          <Link href={project.liveSiteUrl} target="_blank">
                            <ExternalLink className="mr-1.5 h-3.5 w-3.5 md:h-4 md:w-4" />
                            Live Demo
                          </Link>
                        </Button>
                      )}
                      {project.sourceCodeUrl && (
                        <Button asChild variant="outline" size="sm" className="text-xs md:text-sm h-9 md:h-10">
                          <Link href={project.sourceCodeUrl} target="_blank">
                            <Github className="mr-1.5 h-3.5 w-3.5 md:h-4 md:w-4" />
                            Code
                          </Link>
                        </Button>
                      )}
                    </div>

                    {/* Case Study Link */}
                    <Button asChild variant="ghost" className="justify-start p-0 h-auto hover:bg-transparent text-primary w-fit group/link text-sm md:text-base">
                      <Link href={`/projects/${project.slug}`}>
                        <span className="group-hover/link:underline">View Case Study</span>
                        <ArrowRight className="ml-1.5 md:ml-2 h-3.5 w-3.5 md:h-4 md:w-4 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 md:py-16">
            <Folder className="h-12 w-12 md:h-16 md:w-16 mx-auto text-muted-foreground/30 mb-3 md:mb-4" />
            <p className="text-muted-foreground text-sm md:text-base">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
