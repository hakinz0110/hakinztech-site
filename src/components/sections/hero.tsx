import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { AnimatedText } from '@/components/animated-text';
import { Card } from '@/components/ui/card';

const socialLinks = [
  { href: 'https://github.com/hakinz0110', icon: Github },
  { href: 'https://www.linkedin.com/in/hakinz0110', icon: Linkedin },
  { href: 'https://twitter.com/hakinz_tech', icon: Twitter },
  { href: 'mailto:hakinztech@gmail.com', icon: Mail },
];

export function Hero() {
  return (
    <section id="hero" className="relative h-screen min-h-[800px] w-full overflow-hidden bg-white text-gray-800">
       <div className="absolute inset-0 z-0" style={{
            backgroundImage: 'radial-gradient(circle, hsl(var(--border)) 1px, transparent 1px)',
            backgroundSize: '1.5rem 1.5rem',
            opacity: 0.1,
       }}/>

      <div className="container mx-auto max-w-7xl px-4 md:px-6 h-full flex items-center">
        <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col items-center md:items-start text-center md:text-left bg-black/50 p-8 rounded-lg">
                <AnimatedText
                    phrases={[
                        "Hi there! I'm Hakinz_Tech 👋",
                        "Software Engineer",
                        "Web & Mobile Developer",
                        "UI/UX Designer",
                        "Welcome to my world of innovation 💻🚀",
                    ]}
                />
                <p className="mt-6 max-w-xl text-lg text-gray-200 md:text-xl">
                    I'm a passionate creator, building beautiful and functional applications that solve real-world problems. Let's forge the future, one line of code at a time.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" className="font-bold transition-transform duration-300 hover:scale-105">
                        <Link href="#projects">
                        View My Work <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="secondary" className="font-bold transition-transform duration-300 hover:scale-105">
                        <Link href="#contact">Let's Connect</Link>
                    </Button>
                </div>
                <div className="mt-12 flex gap-6">
                    {socialLinks.map(({ href, icon: Icon }) => (
                        <Link key={href} href={href} target="_blank" rel="noopener noreferrer">
                        <Icon className="h-6 w-6 text-gray-300 transition-colors hover:text-primary" />
                        </Link>
                    ))}
                </div>
            </div>
             <div className="hidden md:flex justify-center items-center">
                <Card className="relative overflow-hidden shadow-2xl border-2 border-primary/20 p-4 animate-float w-full max-w-md aspect-square rounded-full">
                <div className="absolute inset-0 rounded-full border-4 border-accent/20 animate-pulse"/>
                <Image
                    src="https://luonahsbhiopdibgxutp.supabase.co/storage/v1/object/public/portfolio-images//Akinola%20Abere.png"
                    alt="Hakinz_Tech"
                    width={500}
                    height={500}
                    priority
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 rounded-full"
                    data-ai-hint="professional developer portrait"
                />
                </Card>
            </div>
        </div>
      </div>
    </section>
  );
}
