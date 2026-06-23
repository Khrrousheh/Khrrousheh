import { projects, roles, technologies } from './portfolio'

const siteUrl = (import.meta.env.VITE_SITE_URL || 'https://khrrousheh.github.io/Khrrousheh').replace(
  /\/$/,
  '',
)

const personId = `${siteUrl}/#mahdi-khrrousheh`

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': personId,
  name: 'Mahdi Khrrousheh',
  alternateName: 'Khrrousheh',
  url: siteUrl,
  image: `${siteUrl}/og-image.svg`,
  jobTitle: roles,
  description:
    'AI software engineer and backend engineer based in Ramallah, focused on Python, FastAPI, Django, LLM agents, structured output validation, RAG, and cloud systems.',
  email: 'mailto:mahdi.khrrousheh@gmail.com',
  telephone: '+972598633610',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ramallah',
    addressCountry: 'PS',
  },
  knowsAbout: [
    ...technologies,
    'AI agents',
    'LLM validation',
    'Structured outputs',
    'Prompt engineering',
    'RAG',
    'Backend systems',
    'Cloud architecture',
  ],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Al-Quds University',
  },
  sameAs: ['https://linkedin.com/in/khrrousheh/', 'https://github.com/Khrrousheh'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who is Mahdi Khrrousheh?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mahdi Khrrousheh is an AI software engineer and backend engineer based in Ramallah. He works on Python backends, LLM agents, structured output validation, RAG systems, and cloud deployments.',
      },
    },
    {
      '@type': 'Question',
      name: 'What AI engineering work does Mahdi Khrrousheh do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'He builds agent pipelines, structured extraction systems, prompt-controlled assistants, RAG chatbots, and validation layers using tools such as FastAPI, Pydantic, LangChain, Gemini, OpenAI APIs, and GCP.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I contact Mahdi Khrrousheh?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The fastest contact paths are email at mahdi.khrrousheh@gmail.com, LinkedIn at linkedin.com/in/khrrousheh, or GitHub at github.com/Khrrousheh.',
      },
    },
  ],
}

const projectSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: projects.map((project, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'CreativeWork',
      name: project.title,
      description: project.description,
      keywords: project.tags.join(', '),
      creator: { '@id': personId },
    },
  })),
}

const sharedKeywords = [
  'Mahdi Khrrousheh',
  'AI Software Engineer',
  'Backend Engineer',
  'Python Engineer',
  'FastAPI',
  'Django',
  'LLM agents',
  'RAG',
  'Pydantic',
  'Ramallah software engineer',
]

export const seoPages = {
  '/': {
    title: 'Mahdi Khrrousheh | AI Software Engineer, Backend Engineer',
    description:
      'Portfolio of Mahdi Khrrousheh, an AI software engineer in Ramallah building Python backends, LLM agents, RAG systems, structured outputs, and cloud-ready AI pipelines.',
    keywords: sharedKeywords,
    about: ['AI software engineering', 'Python backend systems', 'LLM agent pipelines'],
    personSchema,
    faqSchema,
  },
  '/about': {
    title: 'About Mahdi Khrrousheh | AI and Backend Software Engineer',
    description:
      'Learn about Mahdi Khrrousheh, a Ramallah-based software engineer focused on reliable AI systems, backend architecture, structured validation, and cloud deployments.',
    keywords: [...sharedKeywords, 'software engineer Ramallah', 'AI systems design'],
    about: ['professional background', 'AI systems design', 'backend engineering'],
    personSchema,
  },
  '/experience': {
    title: 'Experience | Mahdi Khrrousheh',
    description:
      'Work experience across AI agent systems, backend engineering, cloud systems, healthcare platforms, research tooling, and full-stack product development.',
    keywords: [...sharedKeywords, 'software engineering experience', 'cloud systems'],
    about: ['software engineering experience', 'AI agent work', 'cloud systems'],
    personSchema,
    schemaType: 'ProfilePage',
  },
  '/projects': {
    title: 'AI and Backend Projects | Mahdi Khrrousheh',
    description:
      'Selected projects by Mahdi Khrrousheh, including AI resume processing agents, an AI psychological companion MVP, and AidNexus first-aid assistant on Gemini and GCP.',
    keywords: [...sharedKeywords, 'AI projects', 'Gemini SDK', 'LangChain projects'],
    about: ['AI projects', 'LLM assistants', 'structured output systems'],
    personSchema,
    faqSchema: projectSchema,
  },
  '/skills': {
    title: 'Skills | Mahdi Khrrousheh',
    description:
      'Skills matrix for Mahdi Khrrousheh covering AI/LLM systems, prompt engineering, RAG, Python, FastAPI, Django, React, cloud platforms, Docker, and CI/CD.',
    keywords: [...sharedKeywords, 'AI skills matrix', 'Python FastAPI Django', 'cloud DevOps'],
    about: ['AI skills', 'backend skills', 'cloud and DevOps skills'],
    personSchema,
  },
  '/credentials': {
    title: 'Credentials | Mahdi Khrrousheh',
    description:
      'Education and credentials for Mahdi Khrrousheh, including BSc Computer Science, prompt engineering, AWS re/Start, Microsoft AI training, and Python certifications.',
    keywords: [...sharedKeywords, 'BSc Computer Science', 'AWS re/Start', 'Prompt Engineering'],
    about: ['education', 'certifications', 'software engineering credentials'],
    personSchema,
  },
  '/contact': {
    title: 'Contact Mahdi Khrrousheh | AI Software Engineer',
    description:
      'Contact Mahdi Khrrousheh for backend systems, AI agent pipelines, LLM validation, RAG systems, or full-stack software engineering work.',
    keywords: [...sharedKeywords, 'hire AI software engineer', 'contact backend engineer'],
    about: ['contact', 'software engineering work', 'AI consulting'],
    personSchema,
  },
}

export const defaultSeoPage = seoPages['/']
