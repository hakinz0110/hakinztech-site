import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';

export const metadata: Metadata = {
  title: 'HakinzTech Digital Forge',
  description: 'Software Engineer | Web / Mobile Developer | UI/UX Designer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&family=Source+Code+Pro:wght@400;600&display=swap" rel="stylesheet"></link>
      </head>
      <body className="font-body antialiased selection:bg-primary selection:text-primary-foreground bg-background">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
