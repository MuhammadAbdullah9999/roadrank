import { getCollection, type CollectionEntry } from 'astro:content';
import { site } from '../site.config';

export type Post = CollectionEntry<'blog'>;

export async function getPosts(): Promise<Post[]> {
  return (await getCollection('blog')).sort((a, b) => +b.data.date - +a.data.date);
}
export const readTime = (post: Post) => Math.max(2, Math.round((post.body ?? '').split(/\s+/).length / 210));
export const catMeta = (name: string) => site.categories[name] ?? { emoji: '📄', from: '#222', to: '#444' };
export const fmtDate = (d: Date) => d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
