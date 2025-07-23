import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ProjectSummary } from '@/components/project-summary';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
  return projects.map(project => ({
    slug: project.slug,
  }));
}

export default function ProjectCaseStudyPage({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <Button asChild variant="ghost" className="mb-8">
             <Link href="/#projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Projects
            </Link>
          </Button>

          <article className="space-y-8">
            <header className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
              <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{project.title}</h1>
              <p className="text-xl text-muted-foreground">{project.description}</p>
            </header>

            <Image
              src={project.imageUrl}
              alt={project.title}
              width={1200}
              height={675}
              className="w-full rounded-lg object-cover border border-border"
              data-ai-hint="technology project screenshot"
              priority
            />

            <div className="prose prose-invert max-w-none text-lg text-foreground">
                <h2 className="font-headline text-3xl font-bold">About this project</h2>
                <p>{project.longDescription}</p>
            </div>
            
            <div className="mt-6">
                <ProjectSummary projectDescription={project.longDescription} />
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
