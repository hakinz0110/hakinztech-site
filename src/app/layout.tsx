import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

export const metadata: Metadata = {
  title: 'HakinzTech Digital Forge',
  description: 'Hakinz_Tech – Web Developer, Designer & Innovator.',
  openGraph: {
    title: 'HakinzTech Portfolio',
    description: 'Explore my projects, skills, and contact me for collaborations.',
    images: ['https://dummyimage.com/1200x630/000/fff.jpg&text=Hakinz_Tech+AI+Project'],
  },
  twitter: {
    card: 'summary_large_image',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="https://img.icons8.com/ios-filled/32/000000/artificial-intelligence.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&family=Source+Code+Pro:wght@400;600&display=swap" rel="stylesheet"></link>
      </head>
      <body className="font-body antialiased selection:bg-primary selection:text-primary-foreground bg-background">
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            {children}
            <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
