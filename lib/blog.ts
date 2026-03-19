import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

export interface Post {
  slug:        string
  title:       string
  description: string
  date:        string
  category:    string
  readTime:    string
  featured:    boolean
  content:     string
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(BLOG_DIR)) return []

  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.mdx'))

  return files
    .map(file => {
      const raw  = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8')
      const { data, content } = matter(raw)
      return {
        slug:        data.slug        || file.replace('.mdx', ''),
        title:       data.title       || '',
        description: data.description || '',
        date:        data.date        || '',
        category:    data.category    || '',
        readTime:    data.readTime    || '5 min',
        featured:    data.featured    || false,
        content,
      } as Post
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post | null {
  const posts = getAllPosts()
  return posts.find(p => p.slug === slug) || null
}

export function getCategories(): string[] {
  const posts = getAllPosts()
  return [...new Set(posts.map(p => p.category))].filter(Boolean)
}