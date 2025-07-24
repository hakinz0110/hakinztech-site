import { GraduationCap, Wrench, Lightbulb } from 'lucide-react';

const corePrinciples = [
    {
        Icon: GraduationCap,
        title: "Grounded in Engineering",
        description: "My background in Metallurgical Engineering instilled a rigorous, detail-oriented approach to problem-solving that I apply to every line of code and every design decision."
    },
    {
        Icon: Wrench,
        title: "Pragmatic Builder",
        description: "I focus on building practical, robust, and scalable solutions that solve real-world problems and provide lasting value to users and businesses."
    },
    {
        Icon: Lightbulb,
        title: "Creative Technologist",
        description: "I am passionate about not just what technology can do, but how it can be used to create intuitive, beautiful, and engaging user experiences."
    }
]

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute top-0 left-0 h-full w-full bg-transparent" style={{
                backgroundImage: 'radial-gradient(circle, hsl(var(--accent)/.1) 1px, transparent 1px)',
                backgroundSize: '2rem 2rem'
            }}/>
        </div>
      <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
                <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    From Metallurgy to Modern Web
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                    <p>
                    My journey began in the world of Metallurgical Engineering, where precision and problem-solving are paramount. This unique background instilled in me a meticulous approach to complex systems—a perspective I now bring to the digital realm.
                    </p>
                    <p>
                    Today, as a <span className="font-semibold text-primary">Software Engineer</span>, I forge elegant code and intuitive user experiences with the same passion and precision. I thrive on transforming innovative ideas into scalable, user-centric applications that make a difference.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
                {corePrinciples.map(({ Icon, title, description }) => (
                    <div key={title} className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 dark:bg-white/5 bg-gray-900/5">
                        <div className="p-3 rounded-md bg-primary/10">
                            <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-headline text-lg font-semibold text-foreground">{title}</h3>
                            <p className="text-sm text-muted-foreground mt-1">{description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
