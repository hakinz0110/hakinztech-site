import React from 'react';
import Link from 'next/link';
import { Code, Mail, Github, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
  { href: 'https://github.com/hakinz0110', icon: Github },
  { href: 'https://www.linkedin.com/in/hakinz-tech', icon: Linkedin },
  { href: 'https://twitter.com/hakinz10', icon: Twitter },
  { href: 'mailto:hakinztech@gmail.com', icon: Mail },
];

export function Footer() {
  return (
    <footer className="bg-background/95 border-t border-border/50">
      <div className="container mx-auto max-w-7xl px-4 py-8 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
                <Code className="h-6 w-6 text-primary" />
                <span className="font-headline text-lg font-bold">Hakinz_Tech</span>
            </div>
            <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Hakinz_Tech. All rights reserved.
            </p>
            <div className="flex gap-4">
            {socialLinks.map(({ href, icon: Icon }) => (
                <Link key={href} href={href} target="_blank" rel="noopener noreferrer">
                <Icon className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
                </Link>
            ))}
            </div>
        </div>
        <div className="mt-6 text-center text-xs text-muted-foreground/50">
            <p>Thanks for stopping by! 🙌</p>
        </div>
      </div>
    </footer>
  );
}
