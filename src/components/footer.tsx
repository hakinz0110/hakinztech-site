import React from 'react';
import Link from 'next/link';
import { Code, Mail, Github, Linkedin, Twitter, Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socialLinks = [
  { href: 'https://github.com/hakinz0110', icon: Github, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/hakinz-tech', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://twitter.com/hakinz10', icon: Twitter, label: 'Twitter' },
  { href: 'mailto:hakinztech@gmail.com', icon: Mail, label: 'Email' },
];

const quickLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="bg-card/50 border-t border-border/50 relative">
      {/* Back to top button */}
      <div className="absolute -top-4 md:-top-5 left-1/2 -translate-x-1/2">
        <Button
          asChild
          size="icon"
          variant="outline"
          className="rounded-full shadow-lg bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 active:scale-95 h-8 w-8 md:h-10 md:w-10"
        >
          <Link href="#hero" aria-label="Back to top">
            <ArrowUp className="h-3.5 w-3.5 md:h-4 md:w-4" />
          </Link>
        </Button>
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-8 md:py-12 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-3 md:space-y-4 text-center sm:text-left">
            <Link href="/" className="inline-flex items-center gap-2 font-bold text-base md:text-lg font-headline group">
              <div className="p-1 md:p-1.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Code className="h-4 w-4 md:h-5 md:w-5 text-primary" />
              </div>
              <span>Hakinz_Tech</span>
            </Link>
            <p className="text-xs md:text-sm text-muted-foreground max-w-xs mx-auto sm:mx-0 leading-relaxed">
              Software Engineer crafting beautiful, functional applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 md:space-y-4 text-center sm:text-left">
            <h3 className="font-headline font-semibold text-sm md:text-base">Quick Links</h3>
            <nav className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-2 md:flex-col md:gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-3 md:space-y-4 text-center sm:text-left sm:col-span-2 md:col-span-1">
            <h3 className="font-headline font-semibold text-sm md:text-base">Connect</h3>
            <div className="flex gap-2 md:gap-3 justify-center sm:justify-start">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <Link 
                  key={href} 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 md:p-2.5 rounded-lg bg-secondary/50 border border-border/50 hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all duration-300 active:scale-95"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
            <p className="text-xs md:text-sm text-muted-foreground">
              Available for freelance projects
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
          <p className="text-xs md:text-sm text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} Hakinz_Tech. All rights reserved.
          </p>
          <p className="text-xs md:text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="h-3 w-3 text-red-500 fill-red-500" /> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
