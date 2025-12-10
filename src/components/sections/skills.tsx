"use client";

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Code2, Server, Smartphone, Palette, Database } from "lucide-react";
import { ScrollReveal } from '@/components/ui/scroll-reveal';

// Skill categories with icons - no arbitrary percentages
const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    gradient: "from-blue-500 to-cyan-500",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"]
  },
  {
    title: "Backend",
    icon: Server,
    gradient: "from-green-500 to-emerald-500",
    skills: ["Node.js", "Python", "Express", "REST APIs", "GraphQL"]
  },
  {
    title: "Database",
    icon: Database,
    gradient: "from-indigo-500 to-violet-500",
    skills: ["PostgreSQL", "MongoDB", "Supabase", "Redis", "Prisma", "MySQL"]
  },
  {
    title: "Mobile",
    icon: Smartphone,
    gradient: "from-purple-500 to-pink-500",
    skills: ["Flutter", "Dart", "React Native", "App Store", "Play Store"]
  },
  {
    title: "Design & Tools",
    icon: Palette,
    gradient: "from-orange-500 to-yellow-500",
    skills: ["Figma", "UI/UX", "Git", "Docker", "AWS", "Vercel"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white">
      {/* Dark section for contrast */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-10 md:mb-16">
            <Badge variant="outline" className="mb-3 md:mb-4 px-3 py-1 text-xs md:text-sm">
              <TrendingUp className="h-3 w-3 mr-1.5" />
              Skills & Expertise
            </Badge>
            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              What I <span className="text-primary">Bring to the Table</span>
            </h2>
            <p className="mt-3 md:mt-4 max-w-2xl mx-auto text-sm md:text-base lg:text-lg text-stone-300 px-4">
              Technical proficiency across multiple domains.
            </p>
          </div>
        </ScrollReveal>

        {/* Core Skills Cards - Clean categorized approach */}
        <ScrollReveal delay={100}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
              {skillCategories.map((category, index) => (
                <ScrollReveal key={category.title} delay={index * 100} direction="up">
                  <div className="group h-full p-5 md:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-primary/50 hover:bg-white/10 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                    {/* Icon Header */}
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h4 className="font-headline text-lg font-semibold text-white mb-3">{category.title}</h4>
                    
                    {/* Skills as tags */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-stone-300 border border-white/5 hover:border-primary/30 hover:text-white transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
