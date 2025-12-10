"use client"

import React from 'react';
import Link from 'next/link';
import { FallbackImage } from '@/components/ui/fallback-image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Github, Linkedin, Twitter, Download, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { getProfile, getSocial } from '@/lib/content';

// Get content from JSON
const profile = getProfile();
const social = getSocial();

const socialLinks = [
  { href: social.github, icon: Github, label: 'GitHub' },
  { href: social.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { href: social.twitter, icon: Twitter, label: 'Twitter' },
  { href: `mailto:${profile.email}`, icon: Mail, label: 'Email' },
];

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[100dvh] w-full overflow-hidden bg-background text-foreground">
      {/* Subtle elegant background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-accent/[0.03]" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/[0.05] to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-accent/[0.05] to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl px-4 md:px-6 min-h-[100dvh] flex items-center relative z-10 py-20 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center w-full">
          
          {/* Profile Image Section */}
          <div className="flex justify-center items-center md:order-2 order-1">
            <div className="relative">
              {/* Decorative elements - positioned outside image */}
              <div className="absolute -top-8 -right-8 md:-top-10 md:-right-10 z-20">
                <div className="px-4 py-2 md:px-5 md:py-2.5 rounded-2xl gold-gradient text-white shadow-xl flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span className="font-bold text-sm whitespace-nowrap">{profile.yearsExperience} Experience</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 z-20">
                <div className="px-4 py-2.5 md:px-5 md:py-3 rounded-2xl bg-white shadow-xl border border-primary/20 flex items-center gap-2.5">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <span className="font-semibold text-sm text-foreground">Open to Work</span>
                </div>
              </div>

              {/* Main image container - clean and elegant */}
              <div className="relative group">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary via-[#D4AF37] to-accent opacity-75 blur-sm group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-1 rounded-full bg-gradient-to-br from-primary via-[#D4AF37] to-accent">
                  <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-white">
                    <FallbackImage
                      src={profile.images[0]?.src || ""}
                      fallbackSrc="https://placehold.co/400x400/FFFBF5/B8860B?text=Your+Photo"
                      alt={profile.images[0]?.alt || "Profile Photo"}
                      width={400}
                      height={400}
                      priority
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content - Clear hierarchy */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:order-1 order-2">
            
            {/* Greeting - warm and personal */}
            <p className="text-lg md:text-xl text-muted-foreground mb-2">
              Hello, I'm
            </p>
            
            {/* Name - Bold and prominent */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
              <span className="gold-gradient-text">{profile.name.replace('_', ' ')}</span>
            </h1>
            
            {/* Title - Clear profession */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground/80 mb-6">
              {profile.title}
            </h2>
            
            {/* Tagline - Compelling value proposition */}
            <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed mb-6">
              {profile.tagline}
            </p>

            {/* Skills badges - Visual proof */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center md:justify-start">
              {profile.highlights.map((item) => (
                <Badge 
                  key={item} 
                  variant="secondary" 
                  className="px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                >
                  {item}
                </Badge>
              ))}
            </div>
            
            {/* CTA Buttons - High contrast, clear actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <Button 
                asChild 
                size="lg" 
                className="gold-gradient text-white font-bold text-base h-12 px-8 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
              >
                <Link href="#projects">
                  View My Work 
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="font-bold text-base h-12 px-8 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200"
              >
                <Link href="#contact">
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Link>
              </Button>
            </div>

            {/* Social links - Prominent and accessible */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground mr-2">Find me on:</span>
              <div className="flex gap-2">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <Link 
                    key={label} 
                    href={href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group"
                    aria-label={label}
                  >
                    <div className="p-3 rounded-xl bg-white border-2 border-border hover:border-primary hover:bg-primary/5 transition-all duration-200 shadow-sm hover:shadow-md">
                      <Icon className="h-5 w-5 text-foreground/70 group-hover:text-primary transition-colors" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground/50">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-current flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-current animate-bounce" />
        </div>
      </div>
    </section>
  );
}
