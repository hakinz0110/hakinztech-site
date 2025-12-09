"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Save, Plus, X, Loader2, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { ImageUpload } from '@/components/admin/image-upload';
import siteContent from '@/content/site-content.json';

type ProfileImage = {
  src: string;
  fallback: string;
  alt: string;
};

type ProfileData = typeof siteContent.profile;
type SocialData = typeof siteContent.social;

export default function ProfileEditor() {
  const { toast } = useToast();
  const [saving, setSaving] = useState(false);
  const [profile, setProfile] = useState<ProfileData>(siteContent.profile);
  const [social, setSocial] = useState<SocialData>(siteContent.social);
  const [newPhrase, setNewPhrase] = useState('');
  const [newHighlight, setNewHighlight] = useState('');

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
        profile,
        social,
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
          title: "Changes saved! ✅",
          description: "Refresh the main site to see your changes.",
        });
      } else {
        throw new Error('Failed to save');
      }
    } catch (error) {
      toast({
        title: "Error saving",
        description: "Failed to save changes. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const addPhrase = () => {
    if (newPhrase.trim()) {
      setProfile({ ...profile, typingPhrases: [...profile.typingPhrases, newPhrase.trim()] });
      setNewPhrase('');
    }
  };

  const removePhrase = (index: number) => {
    setProfile({
      ...profile,
      typingPhrases: profile.typingPhrases.filter((_, i) => i !== index),
    });
  };

  const addHighlight = () => {
    if (newHighlight.trim()) {
      setProfile({ ...profile, highlights: [...profile.highlights, newHighlight.trim()] });
      setNewHighlight('');
    }
  };

  const removeHighlight = (index: number) => {
    setProfile({
      ...profile,
      highlights: profile.highlights.filter((_, i) => i !== index),
    });
  };

  const updateImage = (index: number, url: string) => {
    const updatedImages = [...profile.images];
    updatedImages[index] = {
      ...updatedImages[index],
      src: url,
      fallback: url || 'https://placehold.co/500x500/2A2A2A/63B5FF?text=HT',
    };
    setProfile({ ...profile, images: updatedImages });
  };

  const addImage = () => {
    const newImage: ProfileImage = {
      src: '',
      fallback: 'https://placehold.co/500x500/2A2A2A/63B5FF?text=HT',
      alt: 'Profile Image',
    };
    setProfile({ ...profile, images: [...profile.images, newImage] });
  };

  const removeImage = (index: number) => {
    setProfile({
      ...profile,
      images: profile.images.filter((_, i) => i !== index),
    });
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
              <h1 className="font-headline font-bold text-lg">Profile & Hero</h1>
              <p className="text-xs text-muted-foreground">Edit your personal information</p>
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
        {/* Basic Info */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
            <CardDescription>Your name, title, and contact details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={profile.title}
                  onChange={(e) => setProfile({ ...profile, title: e.target.value })}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="tagline">Tagline</Label>
              <Textarea
                id="tagline"
                value={profile.tagline}
                onChange={(e) => setProfile({ ...profile, tagline: e.target.value })}
                rows={2}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={profile.location}
                  onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Switch
                checked={profile.availableForHire}
                onCheckedChange={(checked) => setProfile({ ...profile, availableForHire: checked })}
              />
              <Label>Available for hire</Label>
            </div>
          </CardContent>
        </Card>

        {/* Social Links */}
        <Card>
          <CardHeader>
            <CardTitle>Social Links</CardTitle>
            <CardDescription>Your social media profiles</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="github">GitHub</Label>
                <Input
                  id="github"
                  value={social.github}
                  onChange={(e) => setSocial({ ...social, github: e.target.value })}
                  placeholder="https://github.com/username"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="linkedin">LinkedIn</Label>
                <Input
                  id="linkedin"
                  value={social.linkedin}
                  onChange={(e) => setSocial({ ...social, linkedin: e.target.value })}
                  placeholder="https://linkedin.com/in/username"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="twitter">Twitter</Label>
                <Input
                  id="twitter"
                  value={social.twitter}
                  onChange={(e) => setSocial({ ...social, twitter: e.target.value })}
                  placeholder="https://twitter.com/username"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="whatsapp">WhatsApp</Label>
                <Input
                  id="whatsapp"
                  value={social.whatsapp}
                  onChange={(e) => setSocial({ ...social, whatsapp: e.target.value })}
                  placeholder="https://wa.me/1234567890"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Typing Phrases */}
        <Card>
          <CardHeader>
            <CardTitle>Hero Typing Phrases</CardTitle>
            <CardDescription>The animated text that appears in the hero section</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {profile.typingPhrases.map((phrase, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-1.5 text-sm">
                  {phrase}
                  <button onClick={() => removePhrase(index)} className="ml-2 hover:text-destructive">
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                value={newPhrase}
                onChange={(e) => setNewPhrase(e.target.value)}
                placeholder="Add a new phrase..."
                onKeyDown={(e) => e.key === 'Enter' && addPhrase()}
              />
              <Button onClick={addPhrase} size="icon">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Highlights */}
        <Card>
          <CardHeader>
            <CardTitle>Skill Highlights</CardTitle>
            <CardDescription>Short badges shown below your tagline</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {profile.highlights.map((highlight, index) => (
                <Badge key={index} variant="outline" className="px-3 py-1.5 text-sm">
                  {highlight}
                  <button onClick={() => removeHighlight(index)} className="ml-2 hover:text-destructive">
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                value={newHighlight}
                onChange={(e) => setNewHighlight(e.target.value)}
                placeholder="Add a highlight..."
                onKeyDown={(e) => e.key === 'Enter' && addHighlight()}
              />
              <Button onClick={addHighlight} size="icon">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Profile Images */}
        <Card>
          <CardHeader>
            <CardTitle>Profile Images</CardTitle>
            <CardDescription>Images shown in the hero carousel (upload from your computer)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {profile.images.map((image, index) => (
                <div key={index} className="space-y-2">
                  <ImageUpload
                    currentImage={image.src}
                    onUpload={(url) => updateImage(index, url)}
                    folder="profile"
                  />
                  <div className="flex items-center justify-between">
                    <Input
                      value={image.alt}
                      onChange={(e) => {
                        const updated = [...profile.images];
                        updated[index] = { ...updated[index], alt: e.target.value };
                        setProfile({ ...profile, images: updated });
                      }}
                      placeholder="Image description"
                      className="text-xs h-8"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-destructive"
                      onClick={() => removeImage(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <Button onClick={addImage} variant="outline" className="w-full">
              <Plus className="mr-2 h-4 w-4" />
              Add Another Image
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
