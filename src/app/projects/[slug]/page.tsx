import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getProjects, getProjectBySlug } from '@/lib/content';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ArrowLeft, ExternalLink, Github, Folder, Code2, Smartphone, Palette, Briefcase, Calendar, Layers } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const categoryIcons: Record<string, React.ElementType> = {
  'Web': Code2,
  'Mobile': Smartphone,
  'UI/UX': Palette,
  'VA': Briefcase,
};

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  'Web': { bg: 'bg-blue-500/10', text: 'text-blue-600', border: 'border-blue-500/20' },
  'Mobile': { bg: 'bg-purple-500/10', text: 'text-purple-600', border: 'border-purple-500/20' },
  'UI/UX': { bg: 'bg-orange-500/10', text: 'text-orange-600', border: 'border-orange-500/20' },
  'VA': { bg: 'bg-green-500/10', text: 'text-green-600', border: 'border-green-500/20' },
};

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map(project => ({
    slug: project.slug,
  }));
}

function ProjectHero({ category, title, description }: { category: string; title: string; description: string }) {
  const Icon = categoryIcons[category] || Folder;
  const colors = categoryColors[category] || { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary/20' };
  
  return (
    <div className={`relative w-full rounded-2xl overflow-hidden ${colors.bg} border ${colors.border}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent" />
      <div className="relative flex flex-col items-center justify-center py-16 md:py-24 px-6 text-center">
        <div className={`p-4 rounded-2xl ${colors.bg} border ${colors.border} mb-6`}>
          <Icon className={`h-12 w-12 md:h-16 md:w-16 ${colors.text}`} />
        </div>
        <h2 className="font-headline text-xl md:text-2xl font-bold text-foreground mb-2">{title}</h2>
        <p className="text-foreground/70 text-sm md:text-base max-w-md">{description}</p>
      </div>
    </div>
  );
}


export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const hasImages = project.imageUrls && project.imageUrls.length > 0;
  const Icon = categoryIcons[project.category] || Folder;
  const colors = categoryColors[project.category] || { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary/20' };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 pt-20 md:pt-24">
        <div className="container mx-auto max-w-4xl px-4 md:px-6 py-8 md:py-12">
          
          {/* Back Navigation */}
          <Link 
            href="/#projects" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </Link>

          {/* Project Header */}
          <div className="mb-8">
            {/* Category Badge */}
            <div className="flex items-center gap-2 mb-4">
              <Badge className={`${colors.bg} ${colors.text} border ${colors.border} font-medium`}>
                <Icon className="h-3 w-3 mr-1.5" />
                {project.category}
              </Badge>
            </div>
            
            {/* Title */}
            <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              {project.title}
            </h1>
            
            {/* Short Description */}
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mb-10">
            {project.liveSiteUrl && (
              <Button asChild size="lg" className="font-semibold">
                <Link href={project.liveSiteUrl} target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
            )}
            {project.sourceCodeUrl && (
              <Button asChild variant="outline" size="lg" className="font-semibold">
                <Link href={project.sourceCodeUrl} target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </Link>
              </Button>
            )}
          </div>

          {/* Project Image/Hero */}
          <div className="mb-10">
            {hasImages ? (
              <Carousel className="w-full">
                <CarouselContent>
                  {project.imageUrls.map((url, index) => (
                    <CarouselItem key={index}>
                      <div className="relative aspect-video rounded-2xl overflow-hidden border border-border/50">
                        <Image
                          src={url}
                          alt={`${project.title} - Screenshot ${index + 1}`}
                          fill
                          className="object-cover"
                          priority={index === 0}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {project.imageUrls.length > 1 && (
                  <>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                  </>
                )}
              </Carousel>
            ) : (
              <ProjectHero 
                category={project.category} 
                title={project.title}
                description={project.description}
              />
            )}
          </div>

          {/* Project Details */}
          <div className="space-y-8">
            {/* Tech Stack */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Layers className="h-5 w-5 text-primary" />
                <h2 className="font-headline text-lg font-semibold">Tech Stack</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="text-sm px-3 py-1">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* About */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="h-5 w-5 text-primary" />
                <h2 className="font-headline text-lg font-semibold text-foreground">About This Project</h2>
              </div>
              <div className="prose prose-stone max-w-none">
                <p className="text-foreground/80 leading-relaxed text-base md:text-lg">
                  {project.longDescription}
                </p>
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <Link 
                href="/#projects" 
                className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                View More Projects
              </Link>
              <Button asChild className="font-semibold">
                <Link href="/#contact">
                  Let&apos;s Work Together
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
