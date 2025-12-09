import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getProjects, getProjectBySlug } from '@/lib/content';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ProjectSummary } from '@/components/project-summary';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ArrowLeft, ExternalLink, Github, Folder, Code2, Smartphone, Palette, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
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

const categoryColors: Record<string, string> = {
  'Web': 'from-blue-500/20 to-cyan-500/20 border-blue-500/30',
  'Mobile': 'from-purple-500/20 to-pink-500/20 border-purple-500/30',
  'UI/UX': 'from-orange-500/20 to-yellow-500/20 border-orange-500/30',
  'VA': 'from-green-500/20 to-emerald-500/20 border-green-500/30',
};

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map(project => ({
    slug: project.slug,
  }));
}

function ProjectPlaceholder({ category, title }: { category: string; title: string }) {
  const Icon = categoryIcons[category] || Folder;
  const colorClass = categoryColors[category] || 'from-primary/20 to-accent/20 border-primary/30';
  
  return (
    <div className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br ${colorClass} border rounded-lg p-6 md:p-8 min-h-[200px] md:min-h-[300px]`}>
      <Icon className="h-16 w-16 md:h-20 md:w-20 text-muted-foreground/50 mb-3 md:mb-4" />
      <p className="text-muted-foreground/70 text-center font-medium text-sm md:text-lg">{title}</p>
      <Badge variant="outline" className="mt-2 md:mt-3 text-xs md:text-sm">{category}</Badge>
    </div>
  );
}

export default async function ProjectCaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const hasImages = project.imageUrls && project.imageUrls.length > 0;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 pt-14 md:pt-16">
        <div className="container mx-auto max-w-5xl px-4 md:px-6 py-8 md:py-16 lg:py-24">
          {/* Back Button */}
          <Button asChild variant="ghost" className="mb-6 md:mb-8 group h-10 px-3 md:px-4 text-sm">
            <Link href="/#projects">
              <ArrowLeft className="mr-1.5 md:mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Projects
            </Link>
          </Button>

          <article className="space-y-6 md:space-y-10">
            {/* Header */}
            <header className="space-y-4 md:space-y-6">
              {/* Tags - horizontal scroll on mobile */}
              <div className="flex gap-1.5 md:gap-2 overflow-x-auto pb-2 scrollbar-hide">
                <Badge className={`bg-gradient-to-r ${categoryColors[project.category] || ''} text-xs md:text-sm flex-shrink-0`}>
                  {project.category}
                </Badge>
                {project.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="text-xs md:text-sm flex-shrink-0">{tag}</Badge>
                ))}
              </div>
              
              {/* Title */}
              <h1 className="font-headline text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
                {project.title}
              </h1>
              
              {/* Description */}
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                {project.liveSiteUrl && (
                  <Button asChild size="lg" className="font-semibold h-11 md:h-12 text-sm md:text-base w-full sm:w-auto">
                    <Link href={project.liveSiteUrl} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                      View Live Site
                    </Link>
                  </Button>
                )}
                {project.sourceCodeUrl && (
                  <Button asChild variant="outline" size="lg" className="font-semibold h-11 md:h-12 text-sm md:text-base w-full sm:w-auto">
                    <Link href={project.sourceCodeUrl} target="_blank">
                      <Github className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                      Source Code
                    </Link>
                  </Button>
                )}
              </div>
            </header>

            {/* Image Gallery */}
            <div className="rounded-xl overflow-hidden border border-border/50 bg-card/30">
              {hasImages ? (
                <Carousel className="w-full">
                  <CarouselContent>
                    {project.imageUrls.map((url, index) => (
                      <CarouselItem key={index}>
                        <div className="relative aspect-video">
                          <Image
                            src={url}
                            alt={`${project.title} - Image ${index + 1}`}
                            fill
                            className="object-cover"
                            data-ai-hint="technology project screenshot"
                            priority={index === 0}
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {project.imageUrls.length > 1 && (
                    <>
                      <CarouselPrevious className="left-2 md:left-4 h-8 w-8 md:h-10 md:w-10" />
                      <CarouselNext className="right-2 md:right-4 h-8 w-8 md:h-10 md:w-10" />
                    </>
                  )}
                </Carousel>
              ) : (
                <ProjectPlaceholder category={project.category} title={project.title} />
              )}
            </div>

            {/* Project Details */}
            <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
              <CardContent className="p-5 md:p-6 lg:p-8">
                <h2 className="font-headline text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">About this project</h2>
                <div className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                  <p>{project.longDescription}</p>
                </div>
              </CardContent>
            </Card>

            {/* AI Summary */}
            <div>
              <ProjectSummary projectDescription={project.longDescription} />
            </div>

            {/* Navigation */}
            <div className="pt-6 md:pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3">
              <Button asChild variant="ghost" className="group h-11 text-sm md:text-base order-2 sm:order-1">
                <Link href="/#projects">
                  <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  Back to Projects
                </Link>
              </Button>
              <Button asChild className="font-semibold h-11 text-sm md:text-base order-1 sm:order-2">
                <Link href="/#contact">
                  Let&apos;s Work Together
                </Link>
              </Button>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
