// scripts/embed-content.ts

import { Index } from '@upstash/vector';
import { fullModulesData } from '../data/modules';
import { guidesData } from '../data/guides';
import { insightsData } from '../data/insights';
import 'dotenv/config';

const index = new Index({
  url: process.env.UPSTASH_VECTOR_REST_URL!,
  token: process.env.UPSTASH_VECTOR_REST_TOKEN!,
});

function chunkText(text: string, maxLength = 500): string[] {
  return text.split('\n\n').filter(p => p.trim().length > 50);
}

async function embedAll() {
  console.log('Starting embedding...');

  // Modules embed kar
  for (const module of fullModulesData) {
    for (const chapter of module.chapters) {
      for (const lesson of chapter.lessons) {
        const text = `${lesson.title}\n${lesson.description}\n${lesson.content}`;
        const chunks = chunkText(text);
        
        if (chunks.length === 0) continue;

        await index.upsert(
          chunks.map((chunk, i) => ({
            id: `module-${module.id}-lesson-${lesson.id}-${i}`,
            data: chunk,
            metadata: { 
              source: 'module',
              moduleId: module.id,
              lessonId: lesson.id,
              title: lesson.title 
            }
          }))
        );
      }
    }
  }
  console.log('Modules done');

  // Guides embed kar
  for (const guide of guidesData) {
    const chunks = chunkText(guide.content);
    if (chunks.length === 0) continue;

    await index.upsert(
      chunks.map((chunk, i) => ({
        id: `guide-${guide.slug}-${i}`,
        data: chunk,
        metadata: { source: 'guide', slug: guide.slug, title: guide.title }
      }))
    );
  }
  console.log('Guides done');

  // Insights embed kar
  for (const insight of insightsData) {
    const chunks = chunkText(insight.content);
    if (chunks.length === 0) continue;

    await index.upsert(
      chunks.map((chunk, i) => ({
        id: `insight-${insight.slug}-${i}`,
        data: chunk,
        metadata: { source: 'insight', slug: insight.slug, title: insight.title }
      }))
    );
  }
  console.log('Insights done');

  console.log('✅ All content embedded successfully!');
}

embedAll().catch(console.error);
