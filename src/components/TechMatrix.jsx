import { FaAws, FaGithub, FaMicrosoft, FaPython } from 'react-icons/fa'
import { SiDjango, SiFastapi, SiGooglegemini, SiGooglecloud, SiOpenai } from 'react-icons/si'
import { roleTechnologies, technologies } from '../data/portfolio'

const techIcons = {
  Python: FaPython,
  AWS: FaAws,
  Django: SiDjango,
  FastAPI: SiFastapi,
  ChatGPT: SiOpenai,
  Gemini: SiGooglegemini,
  GCP: SiGooglecloud,
  Azure: FaMicrosoft,
  Github: FaGithub,
}

export function TechMatrix({ activeRole }) {
  const activeTechnologies = new Set(roleTechnologies[activeRole] ?? [])

  return (
    <aside className="tech-matrix-panel" aria-label={`${activeRole} technology matrix`}>
      <div className="tech-matrix-label">// stack matrix</div>
      <div className="tech-matrix">
        {technologies.map((technology) => {
          const Icon = techIcons[technology]
          const isActive = activeTechnologies.has(technology)

          return (
            <div className={`tech-cell ${isActive ? 'active' : ''}`.trim()} key={technology}>
              <Icon aria-hidden="true" />
              <span>{technology}</span>
            </div>
          )
        })}
      </div>
    </aside>
  )
}
