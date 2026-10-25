import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		pubDate: z.string().or(z.date()).transform((val) => new Date(val)),
		updatedDate: z.string().optional().transform((str) => (str ? new Date(str) : undefined)),
		heroImage: z.string().optional(),
    draft: z.boolean().default(false),
	}),
});

export const collections = { blog };
