"use client";

import React, { useEffect } from 'react';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';

import { submitContactForm, type ContactFormState } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Linkedin, Twitter, Github, Send } from 'lucide-react';
import Link from 'next/link';

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="M21 5.98a8.5 8.5 0 0 1-2.36 5.23l-3.23 3.23a1.22 1.22 0 0 1-1.73 0l-1.42-1.42a1.22 1.22 0 0 1 0-1.73l3.23-3.23a8.5 8.5 0 0 1 5.5-2.22Z" />
    </svg>
  );

const socialLinks = [
    { name: 'Email', href: 'mailto:hakinztech@gmail.com', icon: Mail },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/hakinz-tech', icon: Linkedin },
    { name: 'Twitter/X', href: 'https://twitter.com/hakinz10', icon: Twitter },
    { name: 'GitHub', href: 'https://github.com/hakinz0110', icon: Github },
    { name: 'WhatsApp', href: 'https://wa.me/2349138477491', icon: WhatsappIcon },
];

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full font-bold transition-transform duration-300 hover:scale-105">
      {pending ? "Sending..." : "Send Message"}
      <Send className="ml-2 h-4 w-4" />
    </Button>
  );
}

export function Contact() {
  const { toast } = useToast();
  const initialState: ContactFormState = { message: "", status: "idle" };
  const [state, formAction] = useActionState(submitContactForm, initialState);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  useEffect(() => {
    if (state.status === 'success') {
      toast({
        title: "Message Sent!",
        description: state.message,
      });
      reset();
    } else if (state.status === 'error') {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast, reset]);
  
  return (
    <section id="contact" className="py-20 md:py-32 bg-background relative overflow-hidden">
       <div className="absolute -bottom-1/2 -right-1/2 -z-1 h-[150%] w-[150%] opacity-5" style={{
            backgroundImage:'radial-gradient(circle at center, hsl(var(--accent)), transparent)',
            transform: 'rotate(45deg)'
       }}/>
      <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Let's Connect</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3">
             <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Send me a message</CardTitle>
                <CardDescription>I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form action={formAction} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your Name" {...register('name')} />
                    {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" {...register('email')} />
                    {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message..." rows={5} {...register('message')} />
                    {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
                  </div>
                  <SubmitButton />
                </form>
              </CardContent>
            </Card>
          </div>
          <div className="md:col-span-2 space-y-6">
             <h3 className="font-headline text-2xl font-semibold">Other ways to connect</h3>
             <p className="text-muted-foreground">You can also find me on these platforms:</p>
             <div className="space-y-4">
                {socialLinks.map(({ name, href, icon: Icon }) => (
                    <Link key={name} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group transition-transform duration-300 hover:scale-105">
                        <div className="p-3 rounded-md bg-secondary group-hover:bg-primary transition-colors">
                            <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                        </div>
                        <div>
                           <p className="font-semibold text-lg">{name}</p>
                           <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">Let's connect</p>
                        </div>
                    </Link>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
