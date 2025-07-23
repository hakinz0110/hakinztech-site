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
    role="img" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" 
        fill="currentColor"
        />
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
