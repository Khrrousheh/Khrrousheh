import { skillGroups } from '../data/portfolio'
import { SkillIcon } from './SkillIcon'

export function SkillBadgeGrid() {
  return (
    <div className="skill-badge-groups">
      {skillGroups.map((group) => (
        <div className="skill-badge-group" key={group.title} aria-labelledby={`${group.title}-skills`}>
          <h4 id={`${group.title}-skills`}>{group.title}</h4>
          <div className="skill-badge-grid">
            {group.skills.map((skill) => (
              <article className="skill-badge" key={skill.name}>
                <div className="skill-badge-icon">
                  <SkillIcon name={skill.icon} />
                </div>
                <h5>{skill.name}</h5>
                <ul>
                  <li>{skill.projectCount} project/work context{skill.projectCount === 1 ? '' : 's'}</li>
                  {skill.bullets.slice(0, 2).map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
