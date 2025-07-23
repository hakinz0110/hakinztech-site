import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/lib/data';

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <section id="blog" className="py-20 md:py-32 bg-background relative overflow-hidden animate-glow">
          <div className="absolute inset-0 z-0 opacity-10" style={{
              backgroundImage: 'radial-gradient(circle, hsl(var(--accent)/.1) 1px, transparent 1px)',
              backgroundSize: '2rem 2rem'
          }}/>
          <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10">
            <div className="text-center">
              <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">From the Forge</h1>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Thoughts on technology, design, and the digital world.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                  <Card className="h-full bg-card/50 border-border/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-2 flex flex-col">
                    <CardHeader>
                      <div className="mb-2">
                        <Badge variant="secondary">{post.date}</Badge>
                      </div>
                      <CardTitle className="font-headline text-xl text-foreground group-hover:text-primary transition-colors">{post.title}</CardTitle>
                      <CardDescription>{post.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-end">
                       <div className="flex items-center text-sm font-semibold text-primary">
                          Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                       </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
