import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Radar articles: one Markdown file per article in src/content/radar/.
// The file name is the URL slug. Files starting with `_` (e.g. the authoring template) are ignored.
const radar = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/radar' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    // Root-relative path to a file in public/, e.g. /radar/my-article.webp
    image: z.string().startsWith('/'),
    imageAlt: z.string(),
    author: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { radar };
