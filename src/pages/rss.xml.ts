import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site as cfg } from '../site.config';
export async function GET(context: { site: URL }) {
  const posts = (await getCollection('blog')).sort((a, b) => +b.data.date - +a.data.date);
  return rss({
    title: `${cfg.name} blog`,
    description: cfg.blogDescription,
    site: context.site,
    items: posts.map((p) => ({ title: p.data.title, description: p.data.description, pubDate: p.data.date, link: `/blog/${p.id}` })),
  });
}
