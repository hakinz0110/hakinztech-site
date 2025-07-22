import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const stats = [
  {
    src: "https://github-readme-stats.vercel.app/api?username=hakinz0110&show_icons=true&theme=tokyonight&count_private=true&hide=issues&bg_color=2A2A2A&text_color=FAFAFA&icon_color=63B5FF&title_color=40E0D0&hide_border=true",
    alt: "GitHub Stats",
    width: 495,
    height: 195,
  },
  {
    src: "https://streak-stats.demolab.com?user=hakinz0110&theme=tokyonight&background=2A2A2A&fire=63B5FF&ring=40E0D0&currStreakNum=FAFAFA&sideNums=FAFAFA&currStreakLabel=40E0D0&sideLabels=FAFAFA&dates=muted&hide_border=true",
    alt: "GitHub Streak",
    width: 495,
    height: 195,
  },
];

const topLangs = {
    src: "https://github-readme-stats.vercel.app/api/top-langs/?username=hakinz0110&layout=compact&theme=tokyonight&bg_color=2A2A2A&text_color=FAFAFA&icon_color=63B5FF&title_color=40E0D0&hide_border=true",
    alt: "Top Languages",
    width: 320,
    height: 195,
}

export function Github() {
  return (
    <section id="github" className="py-20 md:py-32 bg-background/95">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">GitHub Stats & Contributions</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A look at my activity and contributions on GitHub.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center justify-center">
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {stats.map((stat) => (
                <Card key={stat.alt} className="bg-card/50 border-border/50 p-4 transition-transform duration-300 hover:-translate-y-2">
                    <Image
                        src={stat.src}
                        alt={stat.alt}
                        width={stat.width}
                        height={stat.height}
                        unoptimized
                        className="w-full h-auto"
                    />
                </Card>
            ))}
            </div>
            <div className="flex justify-center">
                <Card className="bg-card/50 border-border/50 p-4 transition-transform duration-300 hover:-translate-y-2">
                    <Image
                        src={topLangs.src}
                        alt={topLangs.alt}
                        width={topLangs.width}
                        height={topLangs.height}
                        unoptimized
                        className="w-full h-auto"
                    />
                </Card>
            </div>
        </div>
      </div>
    </section>
  );
}
