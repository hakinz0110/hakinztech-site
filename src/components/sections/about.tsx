import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Award, Target, Code } from 'lucide-react';

const values = [
    {
        Icon: Award,
        title: "Excellence",
        description: "I am committed to delivering high-quality, polished, and robust digital solutions."
    },
    {
        Icon: Target,
        title: "Purpose-Driven",
        description: "I focus on creating products that solve real-world problems and provide tangible value."
    },
    {
        Icon: Code,
        title: "Innovation",
        description: "I continuously explore new technologies to build cutting-edge and future-proof applications."
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
        <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 space-y-6">
                <div className="p-4 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                    <h2 className="font-headline text-3xl font-bold tracking-tight text-black sm:text-4xl">
                        From Metallurgy to Modern Web
                    </h2>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                    <p className="text-lg text-black">
                    My journey began in the world of Metallurgical Engineering, where precision and problem-solving are paramount. This unique background instilled in me a meticulous approach to complex systems, a perspective I now bring to the digital realm. Today, as a <span className="font-bold text-primary">Software Engineer</span>, I forge elegant code and intuitive user experiences with the same passion and precision.
                    </p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                    <p className="text-lg text-black">
                    I thrive on transforming innovative ideas into scalable, user-centric applications. Whether it's full-stack development, native mobile apps, or seamless UI/UX, I am dedicated to building technology that makes a difference.
                    </p>
                </div>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                   {values.map(({ Icon, title, description }) => (
                       <div key={title} className="flex flex-col items-center text-center p-4 rounded-lg bg-white shadow-lg transition-transform duration-300 hover:scale-105">
                           <Icon className="h-10 w-10 text-accent mb-3" />
                           <h3 className="font-headline text-lg font-semibold text-black">{title}</h3>
                           <p className="text-sm text-black/80 mt-1">{description}</p>
                       </div>
                   ))}
                </div>
            </div>
            <div className="order-1 md:order-2">
                <Card className="overflow-hidden shadow-lg border-2 border-primary/20 transition-transform duration-300 hover:scale-105 hover:shadow-primary/20 p-4">
                <Image
                    src="https://luonahsbhiopdibgxutp.supabase.co/storage/v1/object/public/portfolio-images//Akinola%20Abere.png"
                    alt="Hakinz_Tech"
                    width={600}
                    height={700}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 rounded-lg"
                    data-ai-hint="professional developer portrait"
                />
                </Card>
            </div>
        </div>
      </div>
    </section>
  );
}
