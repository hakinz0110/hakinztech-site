"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ArrowLeft, Save, Plus, X, Pencil, Trash2, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { ImageUpload } from '@/components/admin/image-upload';
import projectsData from '@/content/projects.json';

type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  imageUrls: string[];
  tags: string[];
  liveSiteUrl: string;
  sourceCodeUrl: string;
};

const CATEGORIES = ['Web', 'Mobile', 'UI/UX', 'VA'];

const emptyProject: Project = {
  id: '',
  slug: '',
  title: '',
  category: 'Web',
  description: '',
  longDescription: '',
  imageUrls: [],
  tags: [],
  liveSiteUrl: '',
  sourceCodeUrl: '',
};

export default function ProjectsEditor() {
  const { toast } = useToast();
  const [saving, setSaving] = useState(false);
  const [projects, setProjects] = useState<Project[]>(projectsData.projects);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newTag, setNewTag] = useState('');

  // Check auth
  useEffect(() => {
    if (sessionStorage.getItem('admin_auth') !== 'true') {
      window.location.href = '/admin';
    }
  }, []);

  const handleSave = async () => {
    setSaving(true);
    try {
      const response = await fetch('/api/admin/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          password: process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'hakinz2024',
          file: 'projects.json',
          content: { projects },
        }),
      });

      if (response.ok) {
        toast({
          title: "Projects saved! ✅",
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

  const openNewProject = () => {
    setEditingProject({ ...emptyProject });
    setIsDialogOpen(true);
  };

  const openEditProject = (project: Project) => {
    setEditingProject({ ...project });
    setIsDialogOpen(true);
  };

  const saveProject = () => {
    if (!editingProject) return;
    
    // Generate slug from title if empty
    if (!editingProject.slug) {
      editingProject.slug = editingProject.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    }
    if (!editingProject.id) {
      editingProject.id = editingProject.slug;
    }

    const existingIndex = projects.findIndex(p => p.id === editingProject.id);
    if (existingIndex >= 0) {
      // Update existing
      const updated = [...projects];
      updated[existingIndex] = editingProject;
      setProjects(updated);
    } else {
      // Add new
      setProjects([...projects, editingProject]);
    }
    
    setIsDialogOpen(false);
    setEditingProject(null);
  };

  const deleteProject = (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(p => p.id !== id));
    }
  };

  const addTag = () => {
    if (newTag.trim() && editingProject) {
      setEditingProject({
        ...editingProject,
        tags: [...editingProject.tags, newTag.trim()],
      });
      setNewTag('');
    }
  };

  const removeTag = (index: number) => {
    if (editingProject) {
      setEditingProject({
        ...editingProject,
        tags: editingProject.tags.filter((_, i) => i !== index),
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button asChild variant="ghost" size="icon">
              <Link href="/admin">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <div>
              <h1 className="font-headline font-bold text-lg">Projects</h1>
              <p className="text-xs text-muted-foreground">Manage your portfolio projects</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={openNewProject}>
              <Plus className="mr-2 h-4 w-4" />
              Add Project
            </Button>
            <Button onClick={handleSave} disabled={saving}>
              {saving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
              Save All
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-6xl px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <Card key={project.id} className="group hover:border-primary/50 transition-colors">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <Badge variant="outline" className="mb-2">{project.category}</Badge>
                  <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => openEditProject(project)}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive" onClick={() => deleteProject(project.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="secondary" className="text-xs">+{project.tags.length - 3}</Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Add New Card */}
          <Card 
            className="border-dashed cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all flex items-center justify-center min-h-[200px]"
            onClick={openNewProject}
          >
            <div className="text-center text-muted-foreground">
              <Plus className="h-8 w-8 mx-auto mb-2" />
              <p>Add New Project</p>
            </div>
          </Card>
        </div>
      </main>

      {/* Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingProject?.id ? 'Edit Project' : 'New Project'}</DialogTitle>
            <DialogDescription>Fill in the project details below</DialogDescription>
          </DialogHeader>
          
          {editingProject && (
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Title</Label>
                  <Input
                    value={editingProject.title}
                    onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                    placeholder="Project title"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Category</Label>
                  <Select
                    value={editingProject.category}
                    onValueChange={(value) => setEditingProject({ ...editingProject, category: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {CATEGORIES.map((cat) => (
                        <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Short Description</Label>
                <Textarea
                  value={editingProject.description}
                  onChange={(e) => setEditingProject({ ...editingProject, description: e.target.value })}
                  placeholder="Brief description (1-2 sentences)"
                  rows={2}
                />
              </div>

              <div className="space-y-2">
                <Label>Full Description</Label>
                <Textarea
                  value={editingProject.longDescription}
                  onChange={(e) => setEditingProject({ ...editingProject, longDescription: e.target.value })}
                  placeholder="Detailed project description..."
                  rows={4}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Live Site URL</Label>
                  <Input
                    value={editingProject.liveSiteUrl || ''}
                    onChange={(e) => setEditingProject({ ...editingProject, liveSiteUrl: e.target.value })}
                    placeholder="https://..."
                  />
                </div>
                <div className="space-y-2">
                  <Label>Source Code URL</Label>
                  <Input
                    value={editingProject.sourceCodeUrl || ''}
                    onChange={(e) => setEditingProject({ ...editingProject, sourceCodeUrl: e.target.value })}
                    placeholder="https://github.com/..."
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Tags</Label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {editingProject.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary">
                      {tag}
                      <button onClick={() => removeTag(index)} className="ml-1 hover:text-destructive">
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    placeholder="Add tag..."
                    onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                  />
                  <Button type="button" onClick={addTag} size="icon">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Project Images */}
              <div className="space-y-2">
                <Label>Project Images</Label>
                <div className="grid grid-cols-2 gap-4">
                  {editingProject.imageUrls.map((url, index) => (
                    <div key={index} className="relative">
                      <ImageUpload
                        currentImage={url}
                        onUpload={(newUrl) => {
                          const updated = [...editingProject.imageUrls];
                          if (newUrl) {
                            updated[index] = newUrl;
                          } else {
                            updated.splice(index, 1);
                          }
                          setEditingProject({ ...editingProject, imageUrls: updated });
                        }}
                        folder="projects"
                      />
                    </div>
                  ))}
                  <div
                    onClick={() => setEditingProject({ 
                      ...editingProject, 
                      imageUrls: [...editingProject.imageUrls, ''] 
                    })}
                    className="aspect-video rounded-lg border-2 border-dashed border-border hover:border-primary/50 transition-colors cursor-pointer flex items-center justify-center"
                  >
                    <div className="text-center text-muted-foreground">
                      <Plus className="h-6 w-6 mx-auto mb-1" />
                      <span className="text-xs">Add Image</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-4">
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                <Button onClick={saveProject}>Save Project</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
