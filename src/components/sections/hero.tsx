"use client"

import React from 'react';
import Link from 'next/link';
import { FallbackImage } from '@/components/ui/fallback-image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';
import { AnimatedText } from '@/components/animated-text';
import { Badge } from '@/components/ui/badge';

import { ParticleBackground } from '@/components/ui/particles';
import { GradientText } from '@/components/ui/gradient-text';
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
    <section id="hero" className="relative min-h-[100dvh] w-full overflow-hidden bg-background text-foreground bg-pattern">
      {/* Elegant golden gradient orbs */}
      <div className="absolute top-20 -left-20 md:-left-40 w-64 md:w-[500px] h-64 md:h-[500px] bg-gradient-to-br from-primary/15 to-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-20 md:-right-40 w-64 md:w-[500px] h-64 md:h-[500px] bg-gradient-to-tl from-accent/15 to-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl px-4 md:px-6 min-h-[100dvh] flex items-center relative z-10 py-16 pt-20 md:py-20 md:pt-32">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center w-full">
          
          {/* Profile Image - First on mobile */}
          <div className="flex justify-center items-center md:order-2 order-1">
            <div className="relative group">
              {/* Outer rotating ring */}
              <div className="absolute -inset-4 md:-inset-5 rounded-full border-2 border-dashed border-primary/30 animate-spin-slow" />
              
              {/* Animated gradient glow */}
              <div className="absolute -inset-3 md:-inset-4 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-50 blur-2xl group-hover:opacity-70 transition-opacity duration-500 animate-gradient-x" />
              
              {/* Elegant gold gradient border ring */}
              <div className="relative p-1.5 rounded-full gold-gradient shadow-2xl glow-gold">
                {/* Inner container with image */}
                <div className="w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-card ring-4 ring-white/50">
                  <FallbackImage
                    src={profile.images[0]?.src || ""}
                    fallbackSrc={profile.images[0]?.fallback || "https://placehold.co/400x400/FFFBF5/B8860B?text=HT"}
                    alt={profile.images[0]?.alt || "Profile"}
                    width={400}
                    height={400}
                    priority
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Experience badge - top right */}
              <div className="absolute top-2 -right-2 md:top-4 md:-right-4 z-10">
                <div className="px-4 py-2 md:px-5 md:py-2.5 rounded-full gold-gradient text-white shadow-lg glow-gold animate-float">
                  <span className="font-bold text-xs md:text-sm whitespace-nowrap drop-shadow-sm">{profile.yearsExperience} Years</span>
                </div>
              </div>
              
              {/* Hire Me badge - bottom left */}
              <div className="absolute bottom-2 -left-2 md:bottom-4 md:-left-4 z-10">
                <div className="px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-white/95 backdrop-blur-sm border-2 border-primary/30 shadow-xl animate-float flex items-center gap-2" style={{ animationDelay: '1s' }}>
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="font-bold text-xs md:text-sm text-foreground">Hire Me</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:order-1 order-2">
            {/* Available badge */}
            {profile.availableForHire && (
              <div className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 md:mb-6 animate-fade-in-up">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs md:text-sm font-medium text-primary">Available for hire</span>
              </div>
            )}
            
            {/* Animated heading - smaller on mobile */}
            <div className="w-full">
              <AnimatedText
                phrases={profile.typingPhrases}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
              />
            </div>
            
            {/* Description - more concise on mobile */}
            <p className="mt-4 md:mt-6 max-w-xl text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <GradientText className="font-semibold">{profile.tagline}</GradientText>
            </p>

            {/* Highlight badges - horizontal scroll on mobile */}
            <div className="flex gap-2 mt-4 md:mt-6 overflow-x-auto pb-2 w-full justify-center md:justify-start animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              {profile.highlights.map((item) => (
                <Badge key={item} variant="secondary" className="px-2.5 py-1 text-xs md:text-sm whitespace-nowrap flex-shrink-0">
                  {item}
                </Badge>
              ))}
            </div>
            
            {/* CTA Buttons - full width on mobile */}
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Button asChild size="lg" className="w-full sm:w-auto font-bold text-sm md:text-base h-11 md:h-12">
                <Link href="#projects">
                  View My Work 
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto font-bold border-primary/50 hover:bg-primary/10 text-sm md:text-base h-11 md:h-12">
                <Link href="#contact">
                  <MessageCircle className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  Let&apos;s Talk
                </Link>
              </Button>
            </div>

            {/* Social links - larger touch targets on mobile */}
            <div className="mt-8 md:mt-10 flex gap-3 md:gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <Link 
                  key={href} 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                  aria-label={label}
                >
                  <div className="p-3 md:p-3 rounded-full bg-secondary/50 border border-border/50 transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary/10 group-active:scale-95 active:bg-primary/20">
                    <Icon className="h-5 w-5 md:h-5 md:w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on very small screens */}
      <div className="hidden sm:block absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 md:w-6 md:h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1.5 md:pt-2">
          <div className="w-1 h-1.5 md:h-2 rounded-full bg-muted-foreground/50 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
