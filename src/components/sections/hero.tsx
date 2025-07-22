import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { AnimatedText } from '@/components/animated-text';

const socialLinks = [
  { href: 'https://github.com/hakinz0110', icon: Github },
  { href: 'https://www.linkedin.com/in/hakinz0110', icon: Linkedin },
  { href: 'https://twitter.com/hakinz_tech', icon: Twitter },
  { href: 'mailto:hakinztech@gmail.com', icon: Mail },
];

export function Hero() {
  return (
    <section id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 h-full w-full bg-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute -z-10 h-96 w-96 animate-blob rounded-full bg-primary/20 blur-3xl filter" />
          <div className="animation-delay-2000 absolute -z-10 h-96 w-96 animate-blob rounded-full bg-accent/20 blur-3xl filter" />
          <div className="animation-delay-4000 absolute -z-10 h-96 w-96 animate-blob rounded-full bg-primary/10 blur-3xl filter" />
        </div>
      </div>
      <div className="container relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 text-center">
        <AnimatedText
          phrases={[
            "Hi there! I'm Hakinz_Tech 👋",
            "Software Engineer",
            "Web & Mobile Developer",
            "UI/UX Designer",
            "Welcome to my world of innovation 💻🚀",
          ]}
        />
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          A versatile tech enthusiast transforming ideas into scalable digital products, solving real-world problems, and learning emerging technologies that shape the future.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="font-bold">
            <Link href="#projects">
              View My Work <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="font-bold">
            <Link href="#contact">Let's Connect</Link>
          </Button>
        </div>
        <div className="mt-12 flex gap-6">
          {socialLinks.map(({ href, icon: Icon }) => (
            <Link key={href} href={href} target="_blank" rel="noopener noreferrer">
              <Icon className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
