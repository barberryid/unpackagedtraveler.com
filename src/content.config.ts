import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const tripPlans = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/trip-plans' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    date: z.coerce.date(),
    type: z.string().optional(),
    countries: z.array(z.string()).default([]),
    duration: z.string(),
    activity_level: z.string(),
  }),
});

export const collections = {
  'trip-plans': tripPlans,
};
