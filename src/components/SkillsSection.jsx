import { skillGroups } from '../data/portfolio'
import { ChipRow } from './Chip'
import { Section } from './Section'

export function SkillsSection() {
  return (
    <Section id="skills" eyebrow="skills" title="What I work with">
      <div className="skill-grid">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <h4>{group.title}</h4>
            <ChipRow items={group.tags} className="skills" />
          </div>
        ))}
      </div>
    </Section>
  )
}
