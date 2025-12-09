"use client";

import React, { useActionState } from 'react';
import { Mail, Linkedin, Twitter, Github, Send, MapPin, Clock, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { GradientText } from '@/components/ui/gradient-text';
import { submitContactForm, ContactFormState } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';

const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" fill="currentColor"/>
  </svg>
);

import { getProfile, getSocial } from '@/lib/content';

// Get content from JSON
const profile = getProfile();
const social = getSocial();

const socialLinks = [
  { name: 'LinkedIn', href: social.linkedin, icon: Linkedin, color: 'hover:bg-blue-500/10 hover:border-blue-500/50' },
  { name: 'GitHub', href: social.github, icon: Github, color: 'hover:bg-gray-500/10 hover:border-gray-500/50' },
  { name: 'Twitter', href: social.twitter, icon: Twitter, color: 'hover:bg-sky-500/10 hover:border-sky-500/50' },
  { name: 'WhatsApp', href: social.whatsapp, icon: WhatsappIcon, color: 'hover:bg-green-500/10 hover:border-green-500/50' },
];

const contactInfo = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: MapPin, label: 'Location', value: profile.location, href: null },
  { icon: Clock, label: 'Response', value: profile.responseTime, href: null },
];

const initialState: ContactFormState = {
  message: '',
  status: 'idle',
};

export function Contact() {
  const { toast } = useToast();
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  React.useEffect(() => {
    if (state.status === 'success') {
      toast({
        title: "Message Sent! 🎉",
        description: state.message,
      });
    } else if (state.status === 'error') {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast]);

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -bottom-1/2 -right-1/2 -z-1 h-[150%] w-[150%] opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at center, hsl(var(--accent)), transparent)',
        transform: 'rotate(45deg)'
      }} />
      <div className="absolute top-0 left-0 w-48 md:w-96 h-48 md:h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-10 md:mb-16">
            <Badge variant="outline" className="mb-3 md:mb-4 px-3 py-1 text-xs md:text-sm">
              <Send className="h-3 w-3 mr-1.5" />
              Get In Touch
            </Badge>
            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Let&apos;s <GradientText>Build Something</GradientText> Together
            </h2>
            <p className="mt-3 md:mt-4 max-w-xl mx-auto text-sm md:text-base lg:text-lg text-muted-foreground px-4">
              Open to new projects and opportunities.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <ScrollReveal direction="left">
            <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
              <CardContent className="p-5 md:p-6 lg:p-8">
                <h3 className="font-headline text-lg md:text-xl font-semibold mb-4 md:mb-6">Send me a message</h3>
                <form action={formAction} className="space-y-4 md:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    <div className="space-y-1.5 md:space-y-2">
                      <Label htmlFor="name" className="text-sm">Name</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        placeholder="Your name" 
                        required 
                        className="bg-background/50 h-10 md:h-11 text-sm md:text-base"
                      />
                    </div>
                    <div className="space-y-1.5 md:space-y-2">
                      <Label htmlFor="email" className="text-sm">Email</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="your@email.com" 
                        required 
                        className="bg-background/50 h-10 md:h-11 text-sm md:text-base"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5 md:space-y-2">
                    <Label htmlFor="message" className="text-sm">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Tell me about your project..." 
                      rows={4} 
                      required 
                      className="bg-background/50 resize-none text-sm md:text-base min-h-[100px] md:min-h-[120px]"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full font-semibold h-11 md:h-12 text-sm md:text-base"
                    disabled={isPending}
                  >
                    {isPending ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Sending...
                      </>
                    ) : state.status === 'success' ? (
                      <>
                        <CheckCircle className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                        Sent!
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Contact Info & Social Links */}
          <div className="space-y-4 md:space-y-6">
            {/* Contact Info */}
            <ScrollReveal direction="right">
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-5 md:p-6 lg:p-8">
                  <h3 className="font-headline text-lg md:text-xl font-semibold mb-4 md:mb-6">Contact Info</h3>
                  <div className="space-y-3 md:space-y-4">
                    {contactInfo.map(({ icon: Icon, label, value, href }) => (
                      <div key={label} className="flex items-center gap-3 md:gap-4 group">
                        <div className="p-2.5 md:p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                          <Icon className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs md:text-sm text-muted-foreground">{label}</p>
                          {href ? (
                            <Link href={href} className="font-medium text-sm md:text-base hover:text-primary transition-colors truncate block">
                              {value}
                            </Link>
                          ) : (
                            <p className="font-medium text-sm md:text-base truncate">{value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Social Links */}
            <ScrollReveal direction="right" delay={100}>
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-5 md:p-6 lg:p-8">
                  <h3 className="font-headline text-lg md:text-xl font-semibold mb-4 md:mb-6">Connect with me</h3>
                  <div className="grid grid-cols-2 gap-2 md:gap-3">
                    {socialLinks.map(({ name, href, icon: Icon, color }) => (
                      <Link key={name} href={href} target="_blank" rel="noopener noreferrer">
                        <div className={`p-3 md:p-4 rounded-xl border border-border/50 flex items-center gap-2 md:gap-3 transition-all duration-300 active:scale-95 ${color}`}>
                          <Icon className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                          <span className="font-medium text-xs md:text-sm truncate">{name}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* CTA Banner */}
            <ScrollReveal direction="right" delay={200}>
              <div className="p-4 md:p-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 text-center">
                <p className="text-base md:text-lg font-medium mb-1 md:mb-2">🚀 Ready to start?</p>
                <p className="text-muted-foreground text-xs md:text-sm">
                  I typically respond within 24 hours.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
