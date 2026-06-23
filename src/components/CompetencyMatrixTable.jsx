import { competencyLevels, competencyScore } from '../data/portfolio'

function LevelMeter({ level }) {
  return (
    <div className="level-meter" aria-label={`${level} competency`}>
      {competencyLevels.map((item) => (
        <span className={competencyScore[item] <= competencyScore[level] ? 'filled' : ''} key={item} />
      ))}
    </div>
  )
}

export function CompetencyMatrixTable({ matrix }) {
  return (
    <div className="competency-table-wrap">
      <table className="competency-table">
        <caption>Competency matrix by target role, skill, level, and evidence.</caption>
        <thead>
          <tr>
            <th>Skill</th>
            <th>Level</th>
            <th>Grade</th>
            <th>Evidence</th>
          </tr>
        </thead>
        <tbody>
          {matrix.flatMap((role) =>
            role.skills.map((skill) => (
              <tr key={`${role.role}-${skill.name}`}>
                <td>{skill.name}</td>
                <td>
                  <span className="level-pill">{skill.level}</span>
                </td>
                <td>
                  <LevelMeter level={skill.level} />
                </td>
                <td>{skill.evidence}</td>
              </tr>
            )),
          )}
        </tbody>
      </table>
    </div>
  )
}
