import React, { useEffect } from 'react'

interface PageSEOProps {
  title: string
  description: string
  keywords?: string
  canonical?: string
}

export const PageSEO: React.FC<PageSEOProps> = ({ title, description, keywords, canonical }) => {
  useEffect(() => {
    document.title = title

    const setMeta = (name: string, content: string, attr = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('description', description)
    if (keywords) setMeta('keywords', keywords)
    setMeta('og:title', title, 'property')
    setMeta('og:description', description, 'property')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
      if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', 'canonical')
        document.head.appendChild(link)
      }
      link.setAttribute('href', `https://privyasolution.com${canonical}`)
    }
  }, [title, description, keywords, canonical])

  return null
}
