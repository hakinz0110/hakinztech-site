"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Code, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Update active section based on scroll position
      const sections = NAV_LINKS.map(link => link.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        isScrolled 
          ? "border-b border-border/60 bg-background/90 backdrop-blur-xl shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-14 md:h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5 md:gap-2 font-bold text-base md:text-lg font-headline group">
          <div className="p-1 md:p-1.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <Code className="h-4 w-4 md:h-5 md:w-5 text-primary" />
          </div>
          <span className="bg-gradient-to-r from-foreground to-foreground bg-clip-text group-hover:from-primary group-hover:to-accent group-hover:text-transparent transition-all duration-300">
            Hakinz_Tech
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <Button 
              key={link.href} 
              asChild 
              variant="ghost" 
              size="sm"
              className={cn(
                "font-semibold transition-all duration-300 hover:bg-primary/10",
                activeSection === link.href.replace('#', '') && "text-primary bg-primary/10"
              )}
            >
              <Link href={link.href}>
                {link.label}
              </Link>
            </Button>
          ))}
          <div className="w-px h-6 bg-border mx-2" />
          <ThemeToggle />
          <Button asChild size="sm" className="ml-2 font-semibold gold-gradient text-white hover:opacity-90">
            <Link href="#contact">
              <Sparkles className="h-4 w-4 mr-1.5" />
              Hire Me
            </Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-1.5">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] p-0">
              <SheetHeader className="sr-only">
                <SheetTitle>Navigation Menu</SheetTitle>
              </SheetHeader>
              
              {/* Mobile Menu Content */}
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-border/50">
                  <Link 
                    href="/" 
                    className="flex items-center gap-2 font-bold text-base font-headline" 
                    onClick={() => setOpen(false)}
                  >
                    <div className="p-1 rounded-lg bg-primary/10">
                      <Code className="h-4 w-4 text-primary" />
                    </div>
                    <span>Hakinz_Tech</span>
                  </Link>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 p-4 space-y-1">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "flex items-center text-base font-medium px-4 py-3 rounded-xl transition-all duration-300 active:scale-[0.98]",
                        activeSection === link.href.replace('#', '') 
                          ? "text-primary bg-primary/10" 
                          : "hover:bg-secondary/50"
                      )}
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                {/* Footer CTA */}
                <div className="p-4 border-t border-border/50 space-y-3">
                  <Button 
                    asChild 
                    className="w-full font-semibold h-11 gold-gradient text-white" 
                    onClick={() => setOpen(false)}
                  >
                    <Link href="#contact">
                      <Sparkles className="h-4 w-4 mr-2" />
                      Hire Me
                    </Link>
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Available for freelance work
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
