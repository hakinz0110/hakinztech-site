"use client";

import React, { useState } from 'react';
import { summarizeProject } from '@/ai/flows/project-summarizer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BotMessageSquare, Sparkles } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

type ProjectSummaryProps = {
  projectDescription: string;
};

export function ProjectSummary({ projectDescription }: ProjectSummaryProps) {
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSummarize = async () => {
    setIsLoading(true);
    setError(null);
    setSummary(null);

    try {
      const result = await summarizeProject({ projectDescription });
      setSummary(result.summary);
    } catch (err) {
      setError("Sorry, I couldn't generate a summary at this time.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="bg-card/50 border-accent/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline text-xl">
          <BotMessageSquare className="h-6 w-6 text-accent" />
          <span>AI Project Summarizer</span>
        </CardTitle>
        <CardDescription>
          Get a quick, AI-generated summary of this project.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button onClick={handleSummarize} disabled={isLoading}>
          <Sparkles className="mr-2 h-4 w-4" />
          {isLoading ? 'Generating...' : 'Generate TL;DR'}
        </Button>

        {isLoading && (
          <div className="mt-4 space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        )}

        {error && (
          <p className="mt-4 text-destructive">{error}</p>
        )}

        {summary && (
          <div className="mt-4 rounded-md border border-border bg-background p-4">
            <p className="text-foreground">{summary}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
