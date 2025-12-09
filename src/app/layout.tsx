import type { Metadata, Viewport } from 'next';
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFBF5' },
    { media: '(prefers-color-scheme: dark)', color: '#151310' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'Hakinz_Tech | Software Engineer & Full-Stack Developer',
    template: '%s | Hakinz_Tech',
  },
  description: 'Hakinz_Tech – Software Engineer, Full-Stack Developer, Mobile App Developer & UI/UX Designer. Building beautiful, functional applications that solve real-world problems.',
  keywords: [
    'Software Engineer',
    'Full-Stack Developer',
    'Web Developer',
    'Mobile Developer',
    'UI/UX Designer',
    'React Developer',
    'Next.js Developer',
    'Flutter Developer',
    'Nigeria Developer',
    'Freelance Developer',
    'Hakinz_Tech',
  ],
  authors: [{ name: 'Hakinz_Tech', url: 'https://github.com/hakinz0110' }],
  creator: 'Hakinz_Tech',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Hakinz_Tech | Software Engineer & Full-Stack Developer',
    description: 'Building beautiful, functional applications that solve real-world problems. Available for hire.',
    siteName: 'Hakinz_Tech Portfolio',
    images: [
      {
        url: 'https://famcletgbthuoiiylcox.supabase.co/storage/v1/object/public/portfoliowebsite/profile/hakinz_Tech3.png',
        width: 1200,
        height: 630,
        alt: 'Hakinz_Tech - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hakinz_Tech | Software Engineer & Full-Stack Developer',
    description: 'Building beautiful, functional applications that solve real-world problems.',
    creator: '@hakinz10',
    images: ['https://famcletgbthuoiiylcox.supabase.co/storage/v1/object/public/portfoliowebsite/profile/hakinz_Tech3.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=Source+Code+Pro:wght@400;600&display=swap" 
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased selection:bg-primary selection:text-primary-foreground bg-background min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
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
