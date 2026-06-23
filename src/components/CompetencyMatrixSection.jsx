import { CompetencyMatrix } from './CompetencyMatrix'
import { Section } from './Section'

export function CompetencyMatrixSection() {
  return (
    <Section id="competency-matrix" eyebrow="competency matrix" title="Role and skill readiness">
      <CompetencyMatrix />
    </Section>
  )
}
