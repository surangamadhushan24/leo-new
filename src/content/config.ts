import { defineCollection, z } from 'astro:content';

const committeeCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    position: z.string(),
    image: z.string(),
    bio: z.string().optional(),
    email: z.string().optional(),
  }),
});

const eventsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    image: z.string().optional(),
  }),
});

const newsletterCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
  }),
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = {
  committee: committeeCollection,
  events: eventsCollection,
  newsletter: newsletterCollection,
  projects: projectsCollection,
};