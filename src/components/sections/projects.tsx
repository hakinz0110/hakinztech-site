"use client";

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';
import { projects, Project } from '@/lib/data';
import { ProjectSummary } from '@/components/project-summary';

const FILTERS = ['All', 'Web', 'Mobile', 'UI/UX'];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects;
    }
    return projects.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="py-20 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5" style={{
            backgroundImage: 'repeating-conic-gradient(hsl(var(--background)) 0% 25%, hsl(var(--primary)/.1) 0% 50%)',
            backgroundPosition: '0 0, 32px 32px',
            backgroundSize: '64px 64px',
        }}/>
      <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Projects & Portfolio</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A few highlights from my growing portfolio.
          </p>
        </div>
        <div className="mt-8 flex justify-center gap-2 md:gap-4">
          {FILTERS.map(filter => (
            <Button
              key={filter}
              variant={activeFilter === filter ? 'default' : 'outline'}
              onClick={() => setActiveFilter(filter)}
              className="font-semibold transition-transform duration-300 hover:scale-105"
            >
              {filter}
            </Button>
          ))}
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project: Project) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <Card className="group overflow-hidden cursor-pointer bg-card/50 border-border/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-2">
                  <div className="overflow-hidden">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint="technology project screenshot"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                    <h3 className="font-headline text-xl font-semibold text-foreground">{project.title}</h3>
                    <p className="mt-2 text-muted-foreground">{project.description}</p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="font-headline text-2xl md:text-3xl text-primary">{project.title}</DialogTitle>
                  <DialogDescription className="text-base text-muted-foreground">{project.description}</DialogDescription>
                </DialogHeader>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  <div>
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full rounded-lg object-cover"
                       data-ai-hint="technology project screenshot"
                    />
                  </div>
                  <div className="space-y-4">
                     <h4 className="font-headline text-lg font-semibold">About this project</h4>
                     <p className="text-muted-foreground">{project.longDescription}</p>
                     <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="outline">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                   <ProjectSummary projectDescription={project.longDescription} />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
