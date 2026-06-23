import { useState } from 'react'
import { contactLinks } from '../data/portfolio'
import { roles } from '../data/portfolio'
import HeroRole from './HeroRole'
import { Pipeline } from './Pipeline'
import { TechMatrix } from './TechMatrix'

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
  const [roleIndex, setRoleIndex] = useState(0)
  const activeRole = roles[roleIndex]

  return (
    <header className={`hero ${compact ? 'compact-hero' : ''}`.trim()}>
      <div className="wrap">
        <div className="hero-top">
          <div className="hero-copy">
            <HeroRole roleIndex={roleIndex} onRoleIndexChange={setRoleIndex} />
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
          </div>

          <TechMatrix activeRole={activeRole} />
        </div>

        {!compact && <Pipeline />}
      </div>
    </header>
  )
}
