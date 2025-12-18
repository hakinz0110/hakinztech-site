"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Save, Plus, X, Loader2, GripVertical } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import siteContent from '@/content/site-content.json';

type CoreSkill = typeof siteContent.skills.coreSkills[0];

const GRADIENT_COLORS = [
  { label: 'Blue to Cyan', value: 'from-blue-500 to-cyan-500' },
  { label: 'Purple to Pink', value: 'from-purple-500 to-pink-500' },
  { label: 'Green to Emerald', value: 'from-green-500 to-emerald-500' },
  { label: 'Orange to Yellow', value: 'from-orange-500 to-yellow-500' },
  { label: 'Red to Orange', value: 'from-red-500 to-orange-500' },
  { label: 'Indigo to Purple', value: 'from-indigo-500 to-purple-500' },
];

export default function SkillsEditor() {
  const { toast } = useToast();
  const [saving, setSaving] = useState(false);
  const [skills, setSkills] = useState<CoreSkill[]>(siteContent.skills.coreSkills);
  const [newSkillName, setNewSkillName] = useState('');

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
        skills: { coreSkills: skills },
      };
      
      const password = sessionStorage.getItem('admin_password') || '';
      const response = await fetch('/api/admin/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          password,
          file: 'site-content.json',
          content: updatedContent,
        }),
      });

      if (response.ok) {
        toast({
          title: "Skills saved! ✅",
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

  const updateSkill = (index: number, updates: Partial<CoreSkill>) => {
    const updated = [...skills];
    updated[index] = { ...updated[index], ...updates };
    setSkills(updated);
  };

  const addSkill = () => {
    if (newSkillName.trim()) {
      setSkills([
        ...skills,
        { name: newSkillName.trim(), level: 80, color: 'from-blue-500 to-cyan-500' },
      ]);
      setNewSkillName('');
    }
  };

  const removeSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
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
              <h1 className="font-headline font-bold text-lg">Skills</h1>
              <p className="text-xs text-muted-foreground">Update your technical skills</p>
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
        {/* Core Skills */}
        <Card>
          <CardHeader>
            <CardTitle>Core Technical Skills</CardTitle>
            <CardDescription>Skills displayed with progress bars</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index} className="p-4 rounded-lg border border-border/50 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <GripVertical className="h-4 w-4 text-muted-foreground cursor-grab" />
                    <Input
                      value={skill.name}
                      onChange={(e) => updateSkill(index, { name: e.target.value })}
                      className="w-48"
                    />
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => removeSkill(index)}>
                    <X className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Proficiency Level</span>
                    <span className="font-mono">{skill.level}%</span>
                  </div>
                  <Slider
                    value={[skill.level]}
                    onValueChange={([value]) => updateSkill(index, { level: value })}
                    max={100}
                    step={5}
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-sm">Color Gradient</Label>
                  <div className="flex flex-wrap gap-2">
                    {GRADIENT_COLORS.map((color) => (
                      <button
                        key={color.value}
                        onClick={() => updateSkill(index, { color: color.value })}
                        className={`h-8 w-16 rounded-md bg-gradient-to-r ${color.value} ${
                          skill.color === color.value ? 'ring-2 ring-primary ring-offset-2' : ''
                        }`}
                        title={color.label}
                      />
                    ))}
                  </div>
                </div>

                {/* Preview */}
                <div className="pt-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}

            {/* Add New Skill */}
            <div className="flex gap-2">
              <Input
                value={newSkillName}
                onChange={(e) => setNewSkillName(e.target.value)}
                placeholder="Add new skill..."
                onKeyDown={(e) => e.key === 'Enter' && addSkill()}
              />
              <Button onClick={addSkill}>
                <Plus className="mr-2 h-4 w-4" />
                Add Skill
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
