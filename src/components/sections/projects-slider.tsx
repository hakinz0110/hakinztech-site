"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { projects, Project } from '@/lib/data';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

export function ProjectsSlider() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-background relative overflow-hidden animate-glow">
        <div className="absolute inset-0 z-0 opacity-5" style={{
            backgroundImage: 'repeating-conic-gradient(hsl(var(--background)) 0% 25%, hsl(var(--primary)/.1) 0% 50%)',
            backgroundPosition: '0 0, 32px 32px',
            backgroundSize: '64px 64px',
        }}/>
      <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Projects & Portfolio</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A few highlights from my growing portfolio. Click on any project to see the case study.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project: Project, index) => (
            <Card key={project.id} className="overflow-hidden bg-card/50 border-border/50 backdrop-blur-sm shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-8">
              <div className="flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                  </div>
                  <h3 className="font-headline text-2xl md:text-3xl font-bold text-foreground mb-4">{project.title}</h3>
                  <p className="text-muted-foreground text-lg mb-6">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    {project.liveSiteUrl && (
                      <Button asChild>
                        <Link href={project.liveSiteUrl} target="_blank">
                          <ExternalLink className="mr-2" />
                          Live Site
                        </Link>
                      </Button>
                    )}
                    {project.sourceCodeUrl && (
                        <Button asChild variant="secondary">
                            <Link href={project.sourceCodeUrl} target="_blank">
                                <Github className="mr-2" />
                                Source Code
                            </Link>
                        </Button>
                    )}
                  </div>

                  <Button asChild variant="ghost" className="justify-start p-0 h-auto hover:bg-transparent">
                     <Link href={`/projects/${project.slug}`}>
                        Read Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
              </div>
              
              {project.imageUrls && project.imageUrls.length > 0 && (
                <Carousel className="w-full">
                  <CarouselContent>
                      {project.imageUrls.map((url, index) => (
                      <CarouselItem key={index}>
                          <div className="p-1">
                              <CardContent className="flex aspect-[16/9] items-center justify-center p-0 rounded-lg overflow-hidden">
                                  <Image
                                      src={url}
                                      alt={`${project.title} - Image ${index + 1}`}
                                      width={1200}
                                      height={675}
                                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                      data-ai-hint="technology project screenshot"
                                  />
                              </CardContent>
                          </div>
                      </CarouselItem>
                      ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2"/>
                </Carousel>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
