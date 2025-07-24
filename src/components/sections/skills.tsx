import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Badge } from '@/components/ui/badge';
import { skillTracks } from '@/lib/data';
import { CheckCircle2, Wrench, Star } from "lucide-react";

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-background/95 relative overflow-hidden animate-glow">
       <div className="absolute inset-0 z-0 opacity-20" style={{
            background: 'linear-gradient(45deg, hsl(var(--primary)/.1) 25%, transparent 25%), linear-gradient(-45deg, hsl(var(--primary)/.1) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, hsl(var(--primary)/.1) 75%), linear-gradient(-45deg, transparent 75%, hsl(var(--primary)/.1) 75%)',
            backgroundSize: '20px 20px',
        }} />
      <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">My Expertise</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            I bring a unique blend of skills from technology, engineering, and professional services to every project. Here's a look at what I can do.
          </p>
        </div>
        <div className="mt-12 max-w-5xl mx-auto">
          <Accordion type="single" collapsible defaultValue="item-0" className="w-full space-y-4">
            {skillTracks.map((track, index) => (
              <AccordionItem key={track.track} value={`item-${index}`} className="bg-card/30 backdrop-blur-sm rounded-lg border border-border/50 px-6 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1">
                 <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-4 py-4">
                        <div className="p-3 rounded-md bg-primary/10">
                            <track.Icon className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-headline text-xl font-semibold text-left">{track.track}</h3>
                            <p className="text-sm text-muted-foreground text-left">{track.description}</p>
                        </div>
                    </div>
                </AccordionTrigger>
                <AccordionContent>
                    <div className="grid md:grid-cols-2 gap-8 pt-4 pb-6">
                        <div className="space-y-6 bg-background p-6 rounded-lg border border-border shadow-inner transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-foreground dark:bg-white dark:text-black">
                            <h4 className="flex items-center gap-2 font-headline text-lg font-semibold">
                               <Wrench className="h-5 w-5 text-accent" />
                               Technical Skills
                            </h4>
                            <div className="space-y-4">
                                {track.technicalSkills.map((category) => (
                                    <div key={category.title}>
                                        <h5 className="font-semibold mb-2">{category.title}</h5>
                                        <div className="flex flex-wrap gap-2">
                                            {category.skills.map((tool) => (
                                                <Badge key={tool} variant="secondary" className="text-sm font-medium dark:bg-gray-200 dark:text-black">
                                                {tool}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                         <div className="space-y-4 bg-background p-6 rounded-lg border border-border shadow-inner transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-foreground dark:bg-white dark:text-black">
                            <h4 className="flex items-center gap-2 font-headline text-lg font-semibold mb-4">
                                <Star className="h-5 w-5 text-accent" />
                                Soft Skills
                            </h4>
                            <ul className="space-y-2">
                            {track.softSkills.map((skill) => (
                                <li key={skill} className="flex items-center gap-2">
                                   <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                                   <span>{skill}</span>
                                </li>
                            ))}
                            </ul>
                        </div>
                    </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
