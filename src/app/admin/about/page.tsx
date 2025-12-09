"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Save, Plus, X, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import siteContent from '@/content/site-content.json';

type About = typeof siteContent.about;
type Principle = About['principles'][0];

const ICONS = ['GraduationCap', 'Wrench', 'Lightbulb', 'Code', 'Rocket', 'Star', 'Heart', 'Zap'];

export default function AboutEditor() {
  const { toast } = useToast();
  const [saving, setSaving] = useState(false);
  const [about, setAbout] = useState<About>(siteContent.about);
  const [newParagraph, setNewParagraph] = useState('');

  // Check auth
  useEffect(() => {
    if (sessionStorage.getItem('admin_auth') !== 'true') {
      window.location.href = '/admin';
    }
  }, []);

  const handleSave = async () => {
    setSaving(true);
    try {
      const updatedContent = {
        ...siteContent,
        about,
      };
      
      const response = await fetch('/api/admin/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          password: process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'hakinz2024',
          file: 'site-content.json',
          content: updatedContent,
        }),
      });

      if (response.ok) {
        toast({
          title: "About section saved! ✅",
          description: "Refresh the main site to see your changes.",
        });
      } else {
        throw new Error('Failed to save');
      }
    } catch (error) {
      toast({
        title: "Error saving",
        description: "Failed to save changes.",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const addParagraph = () => {
    if (newParagraph.trim()) {
      setAbout({ ...about, paragraphs: [...about.paragraphs, newParagraph.trim()] });
      setNewParagraph('');
    }
  };

  const updateParagraph = (index: number, value: string) => {
    const updated = [...about.paragraphs];
    updated[index] = value;
    setAbout({ ...about, paragraphs: updated });
  };

  const removeParagraph = (index: number) => {
    setAbout({ ...about, paragraphs: about.paragraphs.filter((_, i) => i !== index) });
  };

  const updatePrinciple = (index: number, updates: Partial<Principle>) => {
    const updated = [...about.principles];
    updated[index] = { ...updated[index], ...updates };
    setAbout({ ...about, principles: updated });
  };

  const addPrinciple = () => {
    setAbout({
      ...about,
      principles: [
        ...about.principles,
        { icon: 'Star', title: 'New Principle', description: 'Description here...' },
      ],
    });
  };

  const removePrinciple = (index: number) => {
    setAbout({ ...about, principles: about.principles.filter((_, i) => i !== index) });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto max-w-4xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button asChild variant="ghost" size="icon">
              <Link href="/admin">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <div>
              <h1 className="font-headline font-bold text-lg">About Section</h1>
              <p className="text-xs text-muted-foreground">Edit your about me content</p>
            </div>
          </div>
          <Button onClick={handleSave} disabled={saving}>
            {saving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
            Save Changes
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-4xl px-4 py-8 space-y-6">
        {/* Headline */}
        <Card>
          <CardHeader>
            <CardTitle>Section Headline</CardTitle>
            <CardDescription>The main title of your about section</CardDescription>
          </CardHeader>
          <CardContent>
            <Input
              value={about.headline}
              onChange={(e) => setAbout({ ...about, headline: e.target.value })}
              placeholder="From Metallurgy to Modern Web"
            />
          </CardContent>
        </Card>

        {/* Paragraphs */}
        <Card>
          <CardHeader>
            <CardTitle>About Paragraphs</CardTitle>
            <CardDescription>Your story and background</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {about.paragraphs.map((paragraph, index) => (
              <div key={index} className="flex gap-2">
                <Textarea
                  value={paragraph}
                  onChange={(e) => updateParagraph(index, e.target.value)}
                  rows={3}
                  className="flex-1"
                />
                <Button variant="ghost" size="icon" onClick={() => removeParagraph(index)}>
                  <X className="h-4 w-4 text-destructive" />
                </Button>
              </div>
            ))}
            <div className="flex gap-2">
              <Textarea
                value={newParagraph}
                onChange={(e) => setNewParagraph(e.target.value)}
                placeholder="Add a new paragraph..."
                rows={3}
                className="flex-1"
              />
              <Button onClick={addParagraph} className="self-end">
                <Plus className="mr-2 h-4 w-4" />
                Add
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Principles */}
        <Card>
          <CardHeader>
            <CardTitle>Core Principles</CardTitle>
            <CardDescription>The cards displayed next to your about text</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {about.principles.map((principle, index) => (
              <div key={index} className="p-4 rounded-lg border border-border/50 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Select
                      value={principle.icon}
                      onValueChange={(value) => updatePrinciple(index, { icon: value })}
                    >
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {ICONS.map((icon) => (
                          <SelectItem key={icon} value={icon}>{icon}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => removePrinciple(index)}>
                    <X className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
                <div className="space-y-2">
                  <Label>Title</Label>
                  <Input
                    value={principle.title}
                    onChange={(e) => updatePrinciple(index, { title: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Description</Label>
                  <Textarea
                    value={principle.description}
                    onChange={(e) => updatePrinciple(index, { description: e.target.value })}
                    rows={2}
                  />
                </div>
              </div>
            ))}
            <Button onClick={addPrinciple} variant="outline" className="w-full">
              <Plus className="mr-2 h-4 w-4" />
              Add Principle
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
