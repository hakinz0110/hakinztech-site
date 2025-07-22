import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { skills } from '@/lib/data';

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-background/95">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">What I Do</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A snapshot of my technical skills and the tools I use to bring ideas to life.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card key={index} className="bg-card/50 border-border/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <skill.Icon className="h-7 w-7 text-primary" />
                  <span className="font-headline text-2xl">{skill.area}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skill.tools.map((tool, toolIndex) => (
                    <Badge key={toolIndex} variant="secondary" className="text-sm font-medium">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
