import { contactLinks } from '../data/portfolio'
import { Pipeline } from './Pipeline'

function HeroLink({ link }) {
  return (
    <a
      className={`pill ${link.primary ? 'primary' : ''}`.trim()}
      href={link.href}
      target={link.external ? '_blank' : undefined}
      rel={link.external ? 'noopener noreferrer' : undefined}
    >
      {link.label}
    </a>
  )
}

export function Hero({ compact = false }) {
  return (
    <header className={`hero ${compact ? 'compact-hero' : ''}`.trim()}>
      <div className="wrap">
        <div className="hero-eyebrow">
          <span className="key">role:</span> <span className="val">"ai_software_engineer"</span>
        </div>
        <h1>Mahdi Khrrousheh</h1>
        <div className="role-line">
          backend & full-stack engineer - LLM systems, agentic AI, structured pipelines
        </div>
        <p className="tagline">
          4+ years building scalable backend and cloud-native systems, with the last two spent
          turning unstructured, unreliable inputs into structured, validated, production-ready AI
          pipelines - agents that parse, check, and ship clean output instead of guesses.
        </p>

        <div className="hero-links">
          {contactLinks.map((link) => (
            <HeroLink link={link} key={link.label} />
          ))}
          <span className="pill location-pill">Ramallah, Palestine</span>
        </div>

        {!compact && <Pipeline />}
      </div>
    </header>
  )
}
