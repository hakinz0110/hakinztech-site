import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <Card className="overflow-hidden shadow-lg border-2 border-primary/20">
              <Image
                src="https://placehold.co/600x600"
                alt="Hakinz_Tech"
                width={600}
                height={600}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                data-ai-hint="professional developer portrait"
              />
            </Card>
          </div>
          <div className="md:col-span-3">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              About Me
            </h2>
            <p className="mt-6 text-lg text-muted-foreground space-y-4">
              I'm <span className="font-bold text-primary">Hakinz_Tech</span> — a versatile tech enthusiast with a deep passion for full-stack development, mobile app creation, and intuitive UI/UX design. My journey spans from metallurgical engineering to software engineering, giving me a unique perspective on problem-solving.
              <br /><br />
              I love transforming complex ideas into scalable, user-friendly digital products that address real-world challenges. I am constantly exploring emerging technologies to stay at the forefront of innovation and shape the future of tech.
            </p>
            <blockquote className="mt-8 border-l-4 border-accent pl-4 italic text-accent-foreground/80">
              "I’m a mix of metals and code – forging digital solutions with the same precision as alloys in the lab."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
