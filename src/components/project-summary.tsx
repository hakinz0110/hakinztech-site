"use client";

import React, { useState } from 'react';
import { summarizeProject } from '@/ai/flows/project-summarizer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BotMessageSquare, Sparkles, Wand2 } from 'lucide-react';
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
    <Card className="bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20 backdrop-blur-sm">
      <CardHeader className="p-4 md:p-6">
        <CardTitle className="flex items-center gap-2 md:gap-3 font-headline text-base md:text-xl">
          <div className="p-1.5 md:p-2 rounded-lg bg-accent/10">
            <BotMessageSquare className="h-4 w-4 md:h-5 md:w-5 text-accent" />
          </div>
          <span>AI Project Summarizer</span>
        </CardTitle>
        <CardDescription className="text-xs md:text-sm">
          Get an AI-powered quick summary of this project.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 md:p-6 pt-0 md:pt-0">
        <Button 
          onClick={handleSummarize} 
          disabled={isLoading}
          className="font-semibold h-10 md:h-11 text-sm md:text-base w-full sm:w-auto"
          variant={summary ? "outline" : "default"}
        >
          {isLoading ? (
            <>
              <Wand2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : summary ? (
            <>
              <Sparkles className="mr-2 h-4 w-4" />
              Regenerate
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-4 w-4" />
              Generate TL;DR
            </>
          )}
        </Button>

        {isLoading && (
          <div className="mt-4 space-y-2 p-3 md:p-4 rounded-lg bg-background/50">
            <Skeleton className="h-3 md:h-4 w-full" />
            <Skeleton className="h-3 md:h-4 w-full" />
            <Skeleton className="h-3 md:h-4 w-3/4" />
          </div>
        )}

        {error && (
          <div className="mt-4 p-3 md:p-4 rounded-lg bg-destructive/10 border border-destructive/20">
            <p className="text-destructive text-xs md:text-sm">{error}</p>
          </div>
        )}

        {summary && !isLoading && (
          <div className="mt-4 rounded-lg border border-accent/20 bg-background/80 p-3 md:p-4 backdrop-blur-sm">
            <div className="flex items-start gap-2 md:gap-3">
              <div className="p-1 md:p-1.5 rounded-md bg-accent/10 mt-0.5 flex-shrink-0">
                <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-accent" />
              </div>
              <p className="text-foreground text-sm md:text-base leading-relaxed">{summary}</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
