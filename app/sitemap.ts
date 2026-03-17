import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url:             'https://www.kteck.com.br',
      lastModified:     new Date(),
      changeFrequency: 'weekly',
      priority:         1,
    },
    {
      url:             'https://www.kteck.com.br/#funcionalidades',
      lastModified:     new Date(),
      changeFrequency: 'monthly',
      priority:         0.8,
    },
    {
      url:             'https://www.kteck.com.br/#academia',
      lastModified:     new Date(),
      changeFrequency: 'monthly',
      priority:         0.8,
    },
    {
      url:             'https://www.kteck.com.br/#precos',
      lastModified:     new Date(),
      changeFrequency: 'monthly',
      priority:         0.7,
    },
  ]
}