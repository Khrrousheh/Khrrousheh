import { projects } from '../data/portfolio'
import { ChipRow } from './Chip'
import { Section } from './Section'

export function ProjectsSection() {
  return (
    <Section id="projects" eyebrow="selected ai systems" title="Things I've built with agents">
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project" key={project.title}>
            <div className={`status ${project.tone}`}>{project.status}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ChipRow items={project.tags} />
          </article>
        ))}
      </div>
    </Section>
  )
}
