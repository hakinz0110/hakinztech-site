"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  User, 
  FolderKanban, 
  Settings, 
  BarChart3, 
  Lock,
  Eye,
  Code
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const adminSections = [
  {
    title: 'Profile & Hero',
    description: 'Edit your name, tagline, images, and social links',
    icon: User,
    href: '/admin/profile',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Projects',
    description: 'Add, edit, or remove portfolio projects',
    icon: FolderKanban,
    href: '/admin/projects',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Skills & Stats',
    description: 'Update your skills, experience, and statistics',
    icon: BarChart3,
    href: '/admin/skills',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    title: 'About Section',
    description: 'Edit your about me content and principles',
    icon: Settings,
    href: '/admin/about',
    color: 'from-green-500 to-emerald-500',
  },
];

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Simple password protection (you should change this!)
  const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'hakinz2024';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
      // Store in session
      sessionStorage.setItem('admin_auth', 'true');
    } else {
      setError('Invalid password');
    }
  };

  // Check session on mount
  React.useEffect(() => {
    if (sessionStorage.getItem('admin_auth') === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto p-3 rounded-full bg-primary/10 w-fit mb-4">
              <Lock className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-2xl">Admin Access</CardTitle>
            <CardDescription>Enter your password to access the admin panel</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                />
              </div>
              {error && <p className="text-sm text-destructive">{error}</p>}
              <Button type="submit" className="w-full">
                <Lock className="mr-2 h-4 w-4" />
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Code className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h1 className="font-headline font-bold text-lg">Hakinz_Tech Admin</h1>
              <p className="text-xs text-muted-foreground">Content Management</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button asChild variant="outline" size="sm">
              <Link href="/" target="_blank">
                <Eye className="mr-2 h-4 w-4" />
                View Site
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => {
                sessionStorage.removeItem('admin_auth');
                setIsAuthenticated(false);
              }}
            >
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-6xl px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-headline font-bold mb-2">Dashboard</h2>
          <p className="text-muted-foreground">
            Manage your portfolio content. Changes are saved directly to your GitHub repository.
          </p>
        </div>

        {/* Section Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {adminSections.map((section) => (
            <Link key={section.href} href={section.href}>
              <Card className="h-full hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${section.color} bg-opacity-20`}>
                      <section.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {section.title}
                      </CardTitle>
                      <CardDescription className="mt-1">
                        {section.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>

        {/* Info Box */}
        <Card className="mt-8 bg-primary/5 border-primary/20">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">💡 How it works</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Edit your content using the forms above</li>
              <li>• Changes are saved to your GitHub repository</li>
              <li>• Your site automatically rebuilds with new content</li>
              <li>• Images are uploaded to your Supabase storage</li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
