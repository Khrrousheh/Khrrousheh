export const roles = [
  'AI Software Engineer',
  'Full Stack Engineer',
  'Python Engineer',
  'Backend Engineer',
  'Cloud Manager',
]

export const technologies = [
  'Python',
  'AWS',
  'Django',
  'FastAPI',
  'ChatGPT',
  'Gemini',
  'GCP',
  'Azure',
  'Github',
]

export const roleTechnologies = {
  'AI Software Engineer': ['Python', 'FastAPI', 'ChatGPT', 'Gemini', 'GCP', 'Github'],
  'Full Stack Engineer': ['Python', 'Django', 'FastAPI', 'AWS', 'Azure', 'Github'],
  'Python Engineer': ['Python', 'Django', 'FastAPI', 'AWS', 'Github'],
  'Backend Engineer': ['Python', 'Django', 'FastAPI', 'AWS', 'Azure', 'Github'],
  'Cloud Manager': ['AWS', 'GCP', 'Azure', 'Github', 'Python'],
}

export const contactLinks = [
  {
    label: 'mahdi.khrrousheh@gmail.com',
    href: 'mailto:mahdi.khrrousheh@gmail.com',
    primary: true,
  },
  { label: '+972 59 863 3610', href: 'tel:+972598633610' },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/khrrousheh/',
    external: true,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Khrrousheh',
    external: true,
  },
]

export const pipelineStages = [
  {
    stage: '01 - input',
    detail: 'Raw, unstructured resume / data',
  },
  {
    stage: '02 - parse',
    detail: 'Agent normalizes into a Unicode schema',
    highlight: 'Unicode schema',
  },
  {
    stage: '03 - validate',
    detail: 'Prompt constraints + Pydantic checks',
    highlight: 'Pydantic checks',
  },
  {
    stage: '04 - output',
    detail: 'System-ready profile, <10% hallucination',
    highlight: '<10% hallucination',
  },
]

export const stats = [
  { number: '4+ yrs', label: 'backend & cloud engineering' },
  { number: '<10%', label: 'hallucination rate, resume agent pipeline' },
  { number: '3', label: 'AI agent systems shipped or in build' },
]

export const experiences = [
      {
    date: 'May 2026 - Present',
    role: 'Technical Consultant, Cloud Systems',
    company: 'Cafehub - Language Exchange | Amman,Jordan (Remote)',
    bullets: [
      'Automation Review.',
      'Reporting .',
      'Start up representative.',
    ],
    tags: ['TypeScript', 'Firebase', 'GCP', 'Slack API'],
  },
  {
    date: 'Dec 2025 - May 2026',
    role: 'Software Engineer, Support Systems',
    company: 'ASAL Technologies - Rawabi (on-site)',
    bullets: [
      'Develop and support distributed systems across microservices, serverless, and monolithic architectures for internal ASAL and Rawabi systems.',
      'Built internal tools including a Competency Matrix, lead generation tooling, resume coding, and a RAG chatbot for internal policy lookup.',
      'Build agents and install local LLMs (Ollama, Gemma 3) alongside backend integrations and containerized deployments.',
    ],
    tags: ['React / TS', 'ShadCN', 'Firebase', 'Docker', 'Ollama', 'LangChain'],
  },
  {
    date: 'Aug 2025 - May 2026',
    role: 'Contracted Metaverse Researcher',
    company: 'Upsellon Brands (TASE: UPSL)',
    bullets: [
      '3-month research engagement analyzing the business feasibility of metaverse brand activations.',
      'Developed software applications to customer specifications across Decentraland and related platforms.',
    ],
    tags: ['TypeScript', 'NFTs', 'Decentraland', 'Express.js'],
  },
  {
    date: 'Aug 2025 - May 2026',
    role: 'Research & Development Engineer',
    company: 'Cafehub - Language Exchange',
    bullets: [
      'Tracked user activity and built a compliance system for reporting prohibited behavior.',
      'Integrated backend services with Slack for application-wide expandability tracking, plus automated quarterly reporting.',
    ],
    tags: ['Python', 'Firebase', 'Pandas', 'Slack API'],
  },
  {
    date: 'Mar 2024 - Feb 2025',
    role: 'Software Engineer',
    company: 'Aeliasoft (outsourcing for MEG IT) - Palestine',
    bullets: [
      'Built backend systems for a healthcare quality management platform using Django REST Framework, including widget-based data visualization.',
      'Designed scalable, HIPAA/GDPR-aligned database schemas and migrated legacy data without integrity loss.',
      'Raised code quality through SAST and linting standards, and implemented CI/CD pipelines for automated testing and deployment.',
    ],
    tags: ['Python', 'Django REST', 'Angular', 'GitLab CI/CD', 'SAST'],
  },
  {
    date: 'May 2023 - Feb 2024',
    role: 'Research Assistant',
    company: 'Institute for Palestinian Studies',
    bullets: [
      'Validated legacy documents and GIS data against historical archives and maps.',
      'Ran manual data pipelining - processing and extraction tied to each phase of historical verification.',
      'Advised on service infrastructure, database architecture, and administration.',
    ],
    tags: ['MS SQL Server', 'AWS Gateways', 'On-prem pipelines'],
  },
  {
    date: 'Aug 2022 - May 2023',
    role: 'Researcher & Software Engineer (Freelance)',
    company: 'Independent - Palestine',
    bullets: [
      'Built data pipelines and dashboards in Python/Pandas for academic and research use cases, and shipped cloud backends on AWS and Azure.',
      'Developed several websites for startups and ran manual QA on the Yalla Reyada mobile app.',
      'Supported a two-phase psychological research study with teenagers across several locations in Palestine.',
    ],
    tags: ['Python', 'Pandas / NumPy', 'FastAPI', 'Django', 'AWS / Azure'],
  },
]

export const projects = [
  {
    status: 'Production-oriented',
    tone: 'live',
    title: 'AI Resume Processing Agents',
    description:
      'A two-stage agent pipeline: one agent parses and normalizes unstructured resumes into a standardized schema, a second converts that into a system-ready profile. Prompt constraints and validation logic keep the hallucination rate under 10%, with ongoing latency-vs-cost tradeoff analysis on model and prompt choice.',
    tags: ['Structured output', 'Pydantic', 'Prompt eng.'],
  },
  {
    status: 'MVP - in progress',
    tone: 'progress',
    title: 'AI Psychological Companion',
    description:
      'A CBT-grounded AI companion built on Gemini/LLM APIs, with a safe-response system designed around controlled outputs and fallback behavior. Backend orchestration and validation run through FastAPI, LangChain, LangSmith, and Pydantic, with React + Vite + Tailwind on the front end. RAG for domain grounding and eventual review by mental health professionals is next.',
    tags: ['FastAPI', 'LangChain', 'Vertex AI', 'RAG (planned)'],
  },
  {
    status: 'Deployed',
    tone: 'live',
    title: 'AidNexus - First-Aid Assistant',
    description:
      "An LLM-powered assistant on Gemini + GCP that gives contextual first-aid guidance, using prompt engineering and structured outputs to keep responses usable under pressure. Deployed on Streamlit, with a pre-designed prompt feeding the Gemini SDK as the agent's core.",
    tags: ['Gemini SDK', 'GCP', 'Streamlit'],
  },
]

export const skillGroups = [
  {
    title: 'AI / LLM systems',
    skills: [
      {
        name: 'Gemini & OpenAI APIs',
        icon: 'aiApi',
        projectCount: 3,
        bullets: ['Resume agents', 'AidNexus assistant', 'CBT companion MVP'],
      },
      {
        name: 'Prompt engineering',
        icon: 'prompt',
        projectCount: 4,
        bullets: ['Structured extraction', 'Safety prompts', 'First-aid response control'],
      },
      {
        name: 'AI agents',
        icon: 'agent',
        projectCount: 3,
        bullets: ['Resume parser', 'Policy RAG chatbot', 'Local LLM agents'],
      },
      {
        name: 'Structured output',
        icon: 'schema',
        projectCount: 3,
        bullets: ['Pydantic schemas', 'Validated profiles', 'Controlled assistant replies'],
      },
      {
        name: 'Hallucination mitigation',
        icon: 'shield',
        projectCount: 2,
        bullets: ['Resume QA loop', 'Healthcare/first-aid response checks'],
      },
      {
        name: 'RAG',
        icon: 'rag',
        projectCount: 2,
        bullets: ['Internal policy lookup', 'Domain grounding planned'],
      },
      {
        name: 'Fine-tuning',
        icon: 'brain',
        projectCount: 1,
        bullets: ['Experimentation and model adaptation practice'],
      },
      {
        name: 'MCP',
        icon: 'mcp',
        projectCount: 1,
        bullets: ['Tool-aware agent architecture practice'],
      },
      {
        name: 'AI safety / policy-aware design',
        icon: 'safety',
        projectCount: 2,
        bullets: ['CBT companion safeguards', 'Internal policy assistant'],
      },
    ],
  },
  {
    title: 'AI tooling',
    skills: [
      {
        name: 'LangChain',
        icon: 'langchain',
        projectCount: 3,
        bullets: ['RAG chatbot', 'Agent orchestration', 'CBT companion MVP'],
      },
      {
        name: 'LangSmith',
        icon: 'langsmith',
        projectCount: 1,
        bullets: ['Tracing and evaluation for LLM workflows'],
      },
      {
        name: 'Pydantic / Pydantic AI',
        icon: 'pydantic',
        projectCount: 3,
        bullets: ['Schema validation', 'Structured outputs', 'FastAPI contracts'],
      },
      {
        name: 'GenKit',
        icon: 'genkit',
        projectCount: 1,
        bullets: ['Self-practice with AI flow tooling'],
      },
      {
        name: 'Ollama',
        icon: 'ollama',
        projectCount: 2,
        bullets: ['Local LLM installs', 'Gemma 3 experiments'],
      },
    ],
  },
  {
    title: 'Backend & APIs',
    skills: [
      {
        name: 'Python - Django / FastAPI / Flask',
        icon: 'python',
        projectCount: 6,
        bullets: ['Healthcare APIs', 'Research pipelines', 'AI backends'],
      },
      {
        name: 'Node.js / Express',
        icon: 'node',
        projectCount: 2,
        bullets: ['Metaverse apps', 'Service integrations'],
      },
      {
        name: 'REST APIs',
        icon: 'api',
        projectCount: 5,
        bullets: ['Django REST', 'FastAPI services', 'Internal tools'],
      },
      {
        name: 'Microservices',
        icon: 'microservices',
        projectCount: 3,
        bullets: ['Support systems', 'Distributed backends', 'Cloud services'],
      },
      {
        name: 'Event-driven systems',
        icon: 'events',
        projectCount: 2,
        bullets: ['Slack automations', 'Internal service workflows'],
      },
      {
        name: 'Async IO',
        icon: 'async',
        projectCount: 2,
        bullets: ['FastAPI patterns', 'External API orchestration'],
      },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      {
        name: 'React.js',
        icon: 'react',
        projectCount: 4,
        bullets: ['Internal tools', 'Portfolio', 'AI companion frontend'],
      },
      {
        name: 'Next.js',
        icon: 'next',
        projectCount: 1,
        bullets: ['Self-practice and app scaffolding'],
      },
      {
        name: 'TypeScript',
        icon: 'typescript',
        projectCount: 3,
        bullets: ['React tools', 'Decentraland work', 'Typed frontends'],
      },
      {
        name: 'TailwindCSS',
        icon: 'tailwind',
        projectCount: 3,
        bullets: ['Vite frontends', 'ShadCN interfaces', 'Responsive systems'],
      },
      {
        name: 'ShadCN',
        icon: 'shadcn',
        projectCount: 2,
        bullets: ['Internal dashboards', 'Competency Matrix UI'],
      },
    ],
  },
  {
    title: 'Data & infrastructure',
    skills: [
      {
        name: 'PostgreSQL',
        icon: 'postgres',
        projectCount: 3,
        bullets: ['Backend schemas', 'Application persistence', 'Analytics queries'],
      },
      {
        name: 'MySQL',
        icon: 'mysql',
        projectCount: 2,
        bullets: ['Legacy data work', 'Backend persistence'],
      },
      {
        name: 'Redis',
        icon: 'redis',
        projectCount: 1,
        bullets: ['Caching and queue practice'],
      },
      {
        name: 'Qdrant',
        icon: 'qdrant',
        projectCount: 1,
        bullets: ['Vector search practice for RAG'],
      },
      {
        name: 'Pandas / NumPy',
        icon: 'pandas',
        projectCount: 4,
        bullets: ['Research dashboards', 'Quarterly reports', 'Data cleanup'],
      },
      {
        name: 'EDA & data pipelines',
        icon: 'pipeline',
        projectCount: 4,
        bullets: ['Historical validation', 'Research datasets', 'AI preprocessing'],
      },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      {
        name: 'AWS',
        icon: 'aws',
        projectCount: 4,
        bullets: ['Cloud backends', 'Gateway work', 'AWS re/Start foundation'],
      },
      {
        name: 'GCP / Vertex AI',
        icon: 'gcp',
        projectCount: 3,
        bullets: ['Gemini integrations', 'AidNexus', 'Vertex AI planning'],
      },
      {
        name: 'Azure',
        icon: 'azure',
        projectCount: 2,
        bullets: ['Cloud backends', 'Microsoft AI training context'],
      },
      {
        name: 'Firebase',
        icon: 'firebase',
        projectCount: 3,
        bullets: ['Cafehub backend', 'Internal tools', 'Realtime app data'],
      },
      {
        name: 'Docker',
        icon: 'docker',
        projectCount: 4,
        bullets: ['Containerized backends', 'Local LLM services', 'Deployments'],
      },
      {
        name: 'Kubernetes',
        icon: 'kubernetes',
        projectCount: 1,
        bullets: ['Deployment practice and platform familiarity'],
      },
      {
        name: 'CI/CD - GitHub Actions / GitLab',
        icon: 'cicd',
        projectCount: 3,
        bullets: ['GitLab pipelines', 'Automated tests', 'Deployment workflows'],
      },
    ],
  },
]

export const competencyLevels = [
  'learn',
  'self-practice',
  'deployed',
  'production',
  'work experience',
]

export const competencyScore = Object.fromEntries(
  competencyLevels.map((level, index) => [level, index + 1]),
)

export const competencyMatrix = [
  {
    role: 'AI Software Engineer',
    skills: [
      { name: 'Prompt engineering', level: 'work experience', evidence: 'Resume agents, AidNexus, CBT companion safety flows' },
      { name: 'Structured output', level: 'production', evidence: 'Pydantic-validated resume/profile conversion' },
      { name: 'RAG', level: 'deployed', evidence: 'Internal policy lookup chatbot' },
      { name: 'LangChain', level: 'deployed', evidence: 'Agent orchestration and retrieval workflows' },
      { name: 'Gemini & OpenAI APIs', level: 'production', evidence: 'Production-oriented assistant and extraction systems' },
    ],
  },
  {
    role: 'Full Stack Engineer',
    skills: [
      { name: 'React.js', level: 'work experience', evidence: 'Internal tools and portfolio interfaces' },
      { name: 'TypeScript', level: 'deployed', evidence: 'React and Decentraland applications' },
      { name: 'FastAPI', level: 'deployed', evidence: 'AI companion and API services' },
      { name: 'Django REST', level: 'work experience', evidence: 'Healthcare quality management platform' },
      { name: 'TailwindCSS / ShadCN', level: 'deployed', evidence: 'Internal dashboards and tool UIs' },
    ],
  },
  {
    role: 'Python Engineer',
    skills: [
      { name: 'Python', level: 'work experience', evidence: 'Backend services, research tooling, data pipelines' },
      { name: 'Pandas / NumPy', level: 'work experience', evidence: 'Research dashboards and reporting pipelines' },
      { name: 'Pydantic', level: 'production', evidence: 'Schema enforcement for AI outputs and APIs' },
      { name: 'Django', level: 'work experience', evidence: 'Django REST production backend work' },
      { name: 'FastAPI', level: 'deployed', evidence: 'AI backend orchestration services' },
    ],
  },
  {
    role: 'Backend Engineer',
    skills: [
      { name: 'REST APIs', level: 'work experience', evidence: 'Django REST, FastAPI, Express services' },
      { name: 'Microservices', level: 'work experience', evidence: 'Support systems across distributed architectures' },
      { name: 'Docker', level: 'production', evidence: 'Containerized deployments and local LLM services' },
      { name: 'PostgreSQL / SQL', level: 'work experience', evidence: 'Schema design, migrations, historical datasets' },
      { name: 'CI/CD', level: 'production', evidence: 'GitLab pipelines and automated deployment workflows' },
    ],
  },
  {
    role: 'Cloud Manager',
    skills: [
      { name: 'AWS', level: 'work experience', evidence: 'Cloud backends, gateways, AWS re/Start foundation' },
      { name: 'GCP / Vertex AI', level: 'deployed', evidence: 'Gemini/GCP assistant deployments' },
      { name: 'Azure', level: 'deployed', evidence: 'Cloud backend work and Microsoft AI context' },
      { name: 'Firebase', level: 'work experience', evidence: 'Cafehub backend and internal tooling' },
      { name: 'Kubernetes', level: 'self-practice', evidence: 'Deployment and orchestration practice' },
    ],
  },
]

export const credentials = [
  {
    title: 'BSc, Computer Science',
    sub: 'Al-Quds University, East Jerusalem - 2016 - 2020',
  },
  { title: 'Prompt Engineering', sub: '100 Days School - Nov 2025' },
  { title: 'ZAKA AI Bootcamp', sub: 'Microsoft AI Jordan' },
  { title: 'AWS re/Start Graduate', sub: 'Cloud technologies' },
  { title: 'McKinsey Forward Program', sub: 'Leadership' },
  {
    title: 'Scientific Computing with Python - JS Algorithms & Data Structures',
  },
]

export const languages = [
  ['Arabic', 'Native'],
  ['English', 'Professional'],
  ['Hebrew', 'Above Basic (A2)'],
]

export const interests = [
  'AI systems design',
  'Agentic architectures',
  'Applied ML',
  'Human-centered AI',
]
