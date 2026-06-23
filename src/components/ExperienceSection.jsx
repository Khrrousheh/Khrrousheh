import { experiences } from '../data/portfolio'
import { ChipRow } from './Chip'
import { Section } from './Section'

export function ExperienceSection() {
  return (
    <Section id="experience" eyebrow="experience" title="Where I've worked">
      <div className="timeline">
        {experiences.map((entry) => (
          <article className="entry" key={`${entry.role}-${entry.company}`}>
            <div className="entry-date">{entry.date}</div>
            <div>
              <div className="entry-role">{entry.role}</div>
              <div className="entry-company">{entry.company}</div>
              <ul>
                {entry.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <ChipRow items={entry.tags} />
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
