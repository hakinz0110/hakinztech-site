"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';
import { AnimatedText } from '@/components/animated-text';
import { Card, CardContent } from '@/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"


const socialLinks = [
  { href: 'https://github.com/hakinz0110', icon: Github },
  { href: 'https://www.linkedin.com/in/hakinz-tech', icon: Linkedin },
  { href: 'https://twitter.com/hakinz10', icon: Twitter },
  { href: 'mailto:hakinztech@gmail.com', icon: Mail },
];

const profileImages = [
    {
      src: "https://famcletgbthuoiiylcox.supabase.co/storage/v1/object/public/portfoliowebsite/profile/hakinz_Tech3.png",
      alt: "Hakinz_Tech - Professional Portrait 1",
      hint: "professional developer portrait"
    },
    {
        src: "https://famcletgbthuoiiylcox.supabase.co/storage/v1/object/public/portfoliowebsite/profile/hakinz_Tech6.png",
        alt: "Hakinz_Tech - Professional Portrait 4",
        hint: "professional developer portrait"
    },
    {
        src: "https://famcletgbthuoiiylcox.supabase.co/storage/v1/object/public/portfoliowebsite/profile/Hakinz-Tech2.png",
        alt: "Hakinz_Tech - Professional Portrait 7",
        hint: "professional developer portrait"
    }
]

export function Hero() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden bg-background text-foreground py-20 md:pt-32 animate-glow">
       <div className="absolute inset-0 z-0" style={{
            backgroundImage: 'radial-gradient(circle, hsl(var(--border)) 1px, transparent 1px)',
            backgroundSize: '1.5rem 1.5rem',
            opacity: 0.1,
       }}/>

      <div className="container mx-auto max-w-7xl px-4 md:px-6 h-full flex items-center">
        <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col items-center md:items-start text-center md:text-left p-8 rounded-lg md:order-1 order-2 animate-fade-in-up">
                <AnimatedText
                    phrases={[
                        "Hi there! I'm Hakinz_Tech 👋",
                        "Software Engineer",
                        "Web & Mobile Developer",
                        "UI/UX Designer",
                        "Welcome to my world of innovation 💻🚀",
                    ]}
                />
                <p className="mt-6 max-w-xl text-lg text-foreground md:text-xl">
                    I'm a passionate creator, building beautiful and functional applications that solve real-world problems. Let's forge the future, one line of code at a time.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                    <Button asChild size="lg" className="w-full sm:w-auto font-bold transition-transform duration-300 hover:scale-105">
                        <Link href="#projects">
                        View My Work <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto font-bold transition-transform duration-300 hover:scale-105">
                        <Link href="#contact">
                           Contact Me <MessageCircle className="ml-2 h-5 w-5" />
                        </Link>
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
             <div className="flex justify-center items-center md:order-2 order-1">
                <Card className="relative overflow-hidden shadow-2xl border-2 border-primary/20 p-4 animate-float w-full max-w-xs md:max-w-md aspect-square rounded-full">
                <div className="absolute inset-0 rounded-full border-4 border-accent/20 animate-pulse"/>
                 <Carousel
                    plugins={[plugin.current]}
                    className="w-full h-full"
                    opts={{
                        loop: true,
                    }}
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                 >
                    <CarouselContent>
                        {profileImages.map((image, index) => (
                            <CarouselItem key={index}>
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={500}
                                    height={500}
                                    priority={index === 0}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 rounded-full"
                                    data-ai-hint={image.hint}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
                </Card>
            </div>
        </div>
      </div>
    </section>
  );
}
