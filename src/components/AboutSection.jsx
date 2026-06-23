import { stats } from '../data/portfolio'
import { Section } from './Section'

export function AboutSection() {
  return (
    <Section id="about" eyebrow="about">
      <div className="about-grid">
        <div className="about">
          <p>
            I'm a <strong>software engineer based in Ramallah</strong>, originally trained on
            backend systems - Django, FastAPI, distributed and event-driven architectures - and now
            spending most of my time on the layer above that: agents and pipelines that take messy,
            real-world input and turn it into something a system can trust.
          </p>
          <p>
            That means structured output enforcement, validation logic, and constant tradeoff
            analysis between <strong>latency, cost, and reliability</strong> - not just "call the
            model and hope." I care about AI systems that are{' '}
            <strong>policy-aware and safe to ship</strong>, not just impressive in a demo.
          </p>
          <p>
            Outside of paid work, I'm building an MVP for an AI psychological companion grounded in
            CBT, and I picked up Hebrew along the way - currently at a basic, working level.
          </p>
        </div>
        <div className="stat-list">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <span className="num">{stat.number}</span>
              <span className="label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
