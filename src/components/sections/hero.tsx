"use client"

import React from 'react';
import Link from 'next/link';
import { FallbackImage } from '@/components/ui/fallback-image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';
import { AnimatedText } from '@/components/animated-text';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
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
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  return (
    <section id="hero" className="relative min-h-[100dvh] w-full overflow-hidden bg-background text-foreground">
      {/* Only show particles on larger screens for performance */}
      <div className="hidden md:block">
        <ParticleBackground />
      </div>
      
      {/* Gradient orbs - smaller on mobile */}
      <div className="absolute top-1/4 -left-16 md:-left-32 w-48 md:w-96 h-48 md:h-96 bg-primary/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 -right-16 md:-right-32 w-48 md:w-96 h-48 md:h-96 bg-accent/20 rounded-full blur-3xl animate-blob animation-delay-2000" />

      <div className="container mx-auto max-w-7xl px-4 md:px-6 min-h-[100dvh] flex items-center relative z-10 py-16 pt-20 md:py-20 md:pt-32">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center w-full">
          
          {/* Profile Image - First on mobile */}
          <div className="flex justify-center items-center md:order-2 order-1">
            <div className="relative">
              {/* Decorative ring - hidden on mobile for cleaner look */}
              <div className="hidden md:block absolute inset-0 rounded-full border-2 border-dashed border-primary/20 animate-spin-slow" style={{ animationDuration: '20s' }} />
              
              <Card className="relative overflow-hidden shadow-xl md:shadow-2xl border-2 border-primary/30 p-1.5 md:p-2 w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary/10 to-accent/10">
                <Carousel
                  plugins={[plugin.current]}
                  className="w-full h-full"
                  opts={{ loop: true }}
                  onMouseEnter={plugin.current.stop}
                  onMouseLeave={plugin.current.reset}
                >
                  <CarouselContent>
                    {profile.images.map((image, index) => (
                      <CarouselItem key={index}>
                        <FallbackImage
                          src={image.src}
                          fallbackSrc={image.fallback}
                          alt={image.alt}
                          width={500}
                          height={500}
                          priority={index === 0}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </Card>

              {/* Floating badges - repositioned for mobile */}
              <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 px-2 py-1 md:px-3 md:py-1.5 rounded-full bg-card border border-border shadow-lg animate-float text-xs md:text-sm">
                <span className="font-semibold">🚀 {profile.yearsExperience} Years</span>
              </div>
              <div className="absolute -bottom-1 -left-2 md:-bottom-2 md:-left-6 px-2 py-1 md:px-3 md:py-1.5 rounded-full bg-card border border-border shadow-lg animate-float text-xs md:text-sm" style={{ animationDelay: '1s' }}>
                <span className="font-semibold">💼 Hire Me</span>
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
