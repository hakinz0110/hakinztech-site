"use client"

import React from 'react';
import Link from 'next/link';
import { FallbackImage } from '@/components/ui/fallback-image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Github, Linkedin, Twitter, Download, Sparkles, MapPin, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { getProfile, getSocial } from '@/lib/content';

const profile = getProfile();
const social = getSocial();

const socialLinks = [
  { href: social.github, icon: Github, label: 'GitHub', color: 'hover:bg-gray-900 hover:text-white' },
  { href: social.linkedin, icon: Linkedin, label: 'LinkedIn', color: 'hover:bg-[#0077B5] hover:text-white' },
  { href: social.twitter, icon: Twitter, label: 'Twitter', color: 'hover:bg-[#1DA1F2] hover:text-white' },
  { href: `mailto:${profile.email}`, icon: Mail, label: 'Email', color: 'hover:bg-primary hover:text-white' },
];

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[100dvh] w-full overflow-hidden">
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50/50 to-yellow-50" />
      
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/20 via-amber-200/30 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-accent/15 via-orange-200/20 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B8860B' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="container mx-auto max-w-7xl px-4 md:px-6 min-h-[100dvh] flex items-center relative z-10 py-20 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center w-full">
          
          {/* Profile Image Section */}
          <div className="flex justify-center items-center md:order-2 order-1">
            <div className="relative">
              {/* Background card for image */}
              <div className="absolute -inset-8 md:-inset-12 bg-white/60 backdrop-blur-sm rounded-[3rem] shadow-2xl shadow-primary/10 border border-white/80" />
              
              {/* Floating stats cards */}
              <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 z-20">
                <div className="px-5 py-3 rounded-2xl bg-white shadow-xl border border-primary/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Experience</p>
                    <p className="font-bold text-foreground">{profile.yearsExperience}</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 z-20">
                <div className="px-5 py-3 rounded-2xl bg-white shadow-xl border border-emerald-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                    </span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Status</p>
                    <p className="font-bold text-emerald-600">Available</p>
                  </div>
                </div>
              </div>

              {/* Main image container */}
              <div className="relative group">
                <div className="absolute -inset-1 rounded-full gold-gradient opacity-75 blur group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-1.5 rounded-full gold-gradient shadow-2xl">
                  <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-white ring-4 ring-white">
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

          {/* Text Content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:order-1 order-2">
            
            {/* Info card container */}
            <div className="w-full max-w-xl bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-xl shadow-primary/5 border border-white/80">
              
              {/* Location & Response time */}
              <div className="flex flex-wrap items-center gap-4 mb-6 justify-center md:justify-start">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>{profile.responseTime}</span>
                </div>
              </div>
              
              {/* Greeting */}
              <p className="text-lg md:text-xl text-muted-foreground mb-2">
                Hello, I'm
              </p>
              
              {/* Name */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-3">
                <span className="gold-gradient-text">{profile.name.replace('_', ' ')}</span>
              </h1>
              
              {/* Title with background */}
              <div className="inline-block mb-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold px-4 py-2 rounded-xl bg-primary/10 text-primary">
                  {profile.title}
                </h2>
              </div>
              
              {/* Tagline */}
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                {profile.tagline}
              </p>

              {/* Skills badges */}
              <div className="flex flex-wrap gap-2 mb-8 justify-center md:justify-start">
                {profile.highlights.map((item) => (
                  <Badge 
                    key={item} 
                    className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-primary/10 to-accent/10 text-primary border-0 hover:from-primary/20 hover:to-accent/20 transition-all"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
                <Button 
                  asChild 
                  size="lg" 
                  className="gold-gradient text-white font-bold text-base h-14 px-8 rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-[1.02] transition-all duration-200"
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
                  className="font-bold text-base h-14 px-8 rounded-xl border-2 border-primary/30 text-primary bg-white hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
                >
                  <Link href="#contact">
                    <Download className="mr-2 h-5 w-5" />
                    Download CV
                  </Link>
                </Button>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <span className="text-sm text-muted-foreground">Connect:</span>
                <div className="flex gap-2">
                  {socialLinks.map(({ href, icon: Icon, label, color }) => (
                    <Link 
                      key={label} 
                      href={href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={label}
                      className={`p-3 rounded-xl bg-white border-2 border-border/50 shadow-sm transition-all duration-200 ${color} hover:scale-110 hover:shadow-md`}
                    >
                      <Icon className="h-5 w-5" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2">
        <div className="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg border border-white">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-xs uppercase tracking-widest font-medium">Scroll to explore</span>
            <div className="w-5 h-8 rounded-full border-2 border-primary/30 flex justify-center pt-1.5">
              <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
