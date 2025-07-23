import { notFound } from 'next/navigation';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Badge } from '@/components/ui/badge';
import { blogPosts } from '@/lib/data';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <article className="py-20 md:py-32 bg-background relative overflow-hidden">
          <div className="container mx-auto max-w-3xl px-4 md:px-6">
            <header className="mb-12 text-center">
              <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{post.title}</h1>
              <p className="mt-4 text-lg text-muted-foreground">{post.description}</p>
              <div className="mt-6">
                <Badge variant="outline">{post.date}</Badge>
              </div>
            </header>
            <div
              className="prose prose-invert lg:prose-xl mx-auto"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
