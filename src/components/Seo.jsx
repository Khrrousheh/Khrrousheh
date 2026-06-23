import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const siteUrl = (import.meta.env.VITE_SITE_URL || 'https://khrrousheh.github.io/Khrrousheh').replace(
  /\/$/,
  '',
)

const defaultImage = `${siteUrl}/og-image.svg`

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })
}

function upsertLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`)

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }

  element.setAttribute('href', href)
}

function upsertJsonLd(id, data) {
  let element = document.getElementById(id)

  if (!element) {
    element = document.createElement('script')
    element.id = id
    element.type = 'application/ld+json'
    document.head.appendChild(element)
  }

  element.textContent = JSON.stringify(data)
}

function absolutePath(pathname) {
  return pathname === '/' ? siteUrl : `${siteUrl}${pathname}`
}

function buildBreadcrumb(pathname, title) {
  const itemListElement = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: siteUrl,
    },
  ]

  if (pathname !== '/') {
    itemListElement.push({
      '@type': 'ListItem',
      position: 2,
      name: title.replace(' | Mahdi Khrrousheh', ''),
      item: absolutePath(pathname),
    })
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement,
  }
}

export function Seo({ page }) {
  const location = useLocation()
  const canonical = absolutePath(location.pathname)
  const title = page.title
  const image = page.image || defaultImage

  useEffect(() => {
    document.title = title

    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: page.description,
    })
    upsertMeta('meta[name="keywords"]', {
      name: 'keywords',
      content: page.keywords.join(', '),
    })
    upsertMeta('meta[name="author"]', {
      name: 'author',
      content: 'Mahdi Khrrousheh',
    })
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: 'index, follow, max-image-preview:large',
    })

    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'profile' })
    upsertMeta('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: 'Mahdi Khrrousheh',
    })
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title })
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: page.description,
    })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonical })
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: image })
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: 'en_US' })

    upsertMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    })
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title })
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: page.description,
    })
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image })

    upsertLink('canonical', canonical)

    upsertJsonLd('person-jsonld', page.personSchema)
    upsertJsonLd('page-jsonld', {
      '@context': 'https://schema.org',
      '@type': page.schemaType || 'ProfilePage',
      name: title,
      description: page.description,
      url: canonical,
      mainEntity: { '@id': `${siteUrl}/#mahdi-khrrousheh` },
      about: page.about,
    })
    upsertJsonLd('breadcrumb-jsonld', buildBreadcrumb(location.pathname, title))

    if (page.faqSchema) {
      upsertJsonLd('faq-jsonld', page.faqSchema)
    }
  }, [canonical, image, location.pathname, page, title])

  return null
}
