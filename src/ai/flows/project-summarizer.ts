'use server';

/**
 * @fileOverview Provides an AI-powered project summarization flow.
 *
 * - summarizeProject - A function that summarizes a project description.
 * - SummarizeProjectInput - The input type for the summarizeProject function.
 * - SummarizeProjectOutput - The return type for the summarizeProject function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeProjectInputSchema = z.object({
  projectDescription: z
    .string()
    .describe('The detailed description of the project to be summarized.'),
});
export type SummarizeProjectInput = z.infer<typeof SummarizeProjectInputSchema>;

const SummarizeProjectOutputSchema = z.object({
  summary: z
    .string()
    .describe('A concise summary of the project, highlighting key aspects and technologies.'),
});
export type SummarizeProjectOutput = z.infer<typeof SummarizeProjectOutputSchema>;

export async function summarizeProject(input: SummarizeProjectInput): Promise<SummarizeProjectOutput> {
  return summarizeProjectFlow(input);
}

const summarizeProjectPrompt = ai.definePrompt({
  name: 'summarizeProjectPrompt',
  input: {schema: SummarizeProjectInputSchema},
  output: {schema: SummarizeProjectOutputSchema},
  prompt: `You are an AI assistant designed to provide concise and informative summaries of software development projects.

  Given the following project description, create a short summary that highlights the project's main purpose, key features, and technologies used. The summary should be easily understandable by someone with limited technical knowledge.

  Project Description: {{{projectDescription}}}
  `, // Ensure projectDescription is correctly passed
});

const summarizeProjectFlow = ai.defineFlow(
  {
    name: 'summarizeProjectFlow',
    inputSchema: SummarizeProjectInputSchema,
    outputSchema: SummarizeProjectOutputSchema,
  },
  async input => {
    const {output} = await summarizeProjectPrompt(input);
    return output!;
  }
);
