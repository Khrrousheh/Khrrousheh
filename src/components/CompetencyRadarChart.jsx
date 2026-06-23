import { competencyLevels, competencyScore } from '../data/portfolio'

const center = 150
const radius = 104
const maxScore = competencyLevels.length

function pointFor(index, total, value = maxScore) {
  const angle = -Math.PI / 2 + (index * Math.PI * 2) / total
  const distance = (radius * value) / maxScore

  return {
    x: center + Math.cos(angle) * distance,
    y: center + Math.sin(angle) * distance,
  }
}

function averageScore(role) {
  const total = role.skills.reduce((sum, skill) => sum + competencyScore[skill.level], 0)

  return total / role.skills.length
}

function compactLabel(label) {
  return label
    .replace(' Engineer', '')
    .replace('Software', 'SW')
    .replace('Structured output', 'Structured')
    .replace('Prompt engineering', 'Prompt')
    .replace('Gemini & OpenAI APIs', 'AI APIs')
    .replace('PostgreSQL / SQL', 'SQL')
}

export function CompetencyRadarChart({ matrix, selectedRole }) {
  const chartLabel =
    selectedRole === 'all'
      ? 'Radar chart of average competency by role'
      : `Radar chart of skill competency for ${selectedRole}`
  const chartScores =
    matrix.length === 1
      ? matrix[0].skills.map((skill) => ({
          label: skill.name,
          score: competencyScore[skill.level],
        }))
      : matrix.map((role) => ({
          label: role.role,
          score: averageScore(role),
        }))

  const polygon = chartScores
    .map((item, index) => {
      const point = pointFor(index, chartScores.length, item.score)

      return `${point.x},${point.y}`
    })
    .join(' ')
  return (
    <div className="radar-card">
      <svg className="radar-chart" viewBox="0 0 300 300" role="img" aria-label={chartLabel}>
        {[1, 2, 3, 4, 5].map((ring) => (
          <polygon
            className="radar-ring"
            key={ring}
            points={chartScores
              .map((_, index) => {
                const point = pointFor(index, chartScores.length, ring)

                return `${point.x},${point.y}`
              })
              .join(' ')}
          />
        ))}
        {chartScores.map((_, index) => {
          const point = pointFor(index, chartScores.length)

          return <line className="radar-axis" x1={center} y1={center} x2={point.x} y2={point.y} key={index} />
        })}
        <polygon className="radar-area" points={polygon} />
        {chartScores.map((item, index) => {
          const point = pointFor(index, chartScores.length, item.score)
          const label = pointFor(index, chartScores.length, maxScore + 0.45)

          return (
            <g key={item.label}>
              <circle className="radar-point" cx={point.x} cy={point.y} r="4" />
              <text className="radar-label" x={label.x} y={label.y}>
                {compactLabel(item.label)}
              </text>
            </g>
          )
        })}
      </svg>
      <div className="radar-legend">
        {chartScores.map((item) => (
          <div className="radar-score" key={item.label}>
            <span>{item.label}</span>
            <b>{item.score.toFixed(1)} <span>/ {maxScore}</span></b>
          </div>
        ))}
      </div>
    </div>
  )
}
