
'use server';
/**
 * @fileOverview A conversational AI assistant flow for "Avi".
 *
 * - chatWithAvi - A function that handles the conversation with the chatbot.
 * - AviChatInput - The input type for the chatWithAvi function.
 * - AviChatOutput - The return type for the chatWithAvi function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { getCategories } from '@/lib/data';

const categories = getCategories().map(c => c.id);

const MessageSchema = z.object({
  role: z.enum(['user', 'model']),
  content: z.string(),
});

const AviChatInputSchema = z.object({
  history: z.array(MessageSchema).describe("The conversation history."),
  message: z.string().describe("The latest user message."),
});
export type AviChatInput = z.infer<typeof AviChatInputSchema>;

const AviChatOutputSchema = z.object({
  response: z.string().describe("The chatbot's response."),
});
export type AviChatOutput = z.infer<typeof AviChatOutputSchema>;


const aviPrompt = ai.definePrompt({
  name: 'aviPrompt',
  input: { schema: AviChatInputSchema },
  output: { schema: AviChatOutputSchema },
  prompt: `You are Avi, a friendly and helpful shopping assistant for a Tijuana-based marketplace app called "Tijuana Shop".

Your personality is:
- Friendly, approachable, and slightly informal. Use "tú" instead of "usted".
- Knowledgeable about the app's features but avoid making up features that don't exist.
- Proactive in helping users find what they need.

Your main goal is to help users navigate the marketplace. You can:
- Answer questions about how the app works (selling, buying, chatting).
- Give shopping recommendations.
- Help users formulate search queries. For example, if a user says "busco una bici barata", you can suggest they search for "bicicleta" and use the price filter.
- Provide general advice on safe online shopping practices.

Available product categories are: ${categories.join(', ')}.

Keep your responses concise and helpful. Always respond in Spanish.

Here is the conversation history:
{{#each history}}
  {{#if (eq role 'user')}}User: {{content}}{{/if}}
  {{#if (eq role 'model')}}Avi: {{content}}{{/if}}
{{/each}}

User: {{{message}}}
Avi:`,
});

export async function chatWithAvi(input: AviChatInput): Promise<AviChatOutput> {
    const { output } = await aviPrompt(input);
    return output!;
}
