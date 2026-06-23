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
  {
    label: 'Portfolio site',
    href: 'https://khrrousheh.github.io/Khrrousheh/',
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
    date: 'Dec 2025 - Present',
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
    tags: [
      'Gemini & OpenAI APIs',
      'Prompt engineering',
      'AI agents',
      'Structured output',
      'Hallucination mitigation',
      'RAG',
      'Fine-tuning',
      'MCP',
      'AI safety / policy-aware design',
    ],
  },
  {
    title: 'AI tooling',
    tags: ['LangChain', 'LangSmith', 'Pydantic / Pydantic AI', 'GenKit', 'Ollama'],
  },
  {
    title: 'Backend & APIs',
    tags: [
      'Python - Django / FastAPI / Flask',
      'Node.js / Express',
      'REST APIs',
      'Microservices',
      'Event-driven systems',
      'Async IO',
    ],
  },
  {
    title: 'Frontend',
    tags: ['React.js', 'Next.js', 'TypeScript', 'TailwindCSS', 'ShadCN'],
  },
  {
    title: 'Data & infrastructure',
    tags: ['PostgreSQL', 'MySQL', 'Redis', 'Qdrant', 'Pandas / NumPy', 'EDA & data pipelines'],
  },
  {
    title: 'Cloud & DevOps',
    tags: [
      'AWS',
      'GCP / Vertex AI',
      'Azure',
      'Firebase',
      'Docker',
      'Kubernetes',
      'CI/CD - GitHub Actions / GitLab',
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
  ['Hebrew', 'Basic (A1)'],
]

export const interests = [
  'AI systems design',
  'Agentic architectures',
  'Applied ML',
  'Human-centered AI',
]
