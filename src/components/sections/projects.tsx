"use client";

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { projects, Project } from '@/lib/data';

const FILTERS = ['All', 'Web', 'Mobile', 'UI/UX', 'VA'];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects;
    }
    return projects.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="py-20 md:py-32 bg-background relative overflow-hidden animate-glow">
        <div className="absolute inset-0 z-0 opacity-5" style={{
            backgroundImage: 'repeating-conic-gradient(hsl(var(--background)) 0% 25%, hsl(var(--primary)/.1) 0% 50%)',
            backgroundPosition: '0 0, 32px 32px',
            backgroundSize: '64px 64px',
        }}/>
      <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Projects & Portfolio</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A few highlights from my growing portfolio. Click on any project to see the case study.
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
            <Link key={project.id} href={`/projects/${project.slug}`} className="group">
                <Card className="overflow-hidden bg-card/50 border-border/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-2 h-full flex flex-col">
                  <div className="overflow-hidden">
                    <Image
                      src={project.imageUrls[0]}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint="technology project screenshot"
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                    <h3 className="font-headline text-xl font-semibold text-foreground">{project.title}</h3>
                    <p className="mt-2 text-muted-foreground flex-grow">{project.description}</p>
                  </CardContent>
                </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
