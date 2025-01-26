import rss from '@astrojs/rss'
import { getAllPosts, getDatabase } from '../lib/notion/client'
import { getPostLink } from '../lib/blog-helpers'

export async function GET() {
  const [posts, database] = await Promise.all([getAllPosts(), getDatabase()])

  return rss({
    title: database.Title,
    description: database.Description,
    site: import.meta.env.SITE,
    xmlns: {
      content: 'http://purl.org/rss/1.0/modules/content/',
      wfw: 'http://wellformedweb.org/CommentAPI/',
      atom: 'http://www.w3.org/2005/Atom',
      dc: 'http://purl.org/dc/elements/1.1/',
      sy: 'http://purl.org/rss/1.0/modules/syndication/',
      slash: 'http://purl.org/rss/1.0/modules/slash/',
      media: 'http://search.yahoo.com/mrss/',
    },
    items: posts.map((post) => ({
      link: new URL(getPostLink(post.Slug), import.meta.env.SITE).toString(),
      title: post.Title,
      description: post.Excerpt,
      pubDate: new Date(post.Date),
    })),
    customData: `<atom:link href="https://arkxv.com/rss.xml" rel="self" type="application/rss+xml" /><language>ja</language>`,
  })
}