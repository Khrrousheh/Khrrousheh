import { useMemo, useState } from 'react'
import { competencyLevels, competencyMatrix } from '../data/portfolio'
import { CompetencyMatrixTable } from './CompetencyMatrixTable'
import { CompetencyRadarChart } from './CompetencyRadarChart'

const allRoles = 'all'

function sortMatrix(matrix) {
  return matrix
    .map((role) => ({
      ...role,
      skills: [...role.skills].sort((a, b) => a.name.localeCompare(b.name)),
    }))
    .sort((a, b) => a.role.localeCompare(b.role))
}

export function CompetencyMatrix() {
  const [selectedRole, setSelectedRole] = useState(allRoles)

  const sortedMatrix = useMemo(() => sortMatrix(competencyMatrix), [])
  const filteredMatrix = useMemo(() => {
    if (selectedRole === allRoles) {
      return sortedMatrix
    }

    return sortedMatrix.filter((role) => role.role === selectedRole)
  }, [selectedRole, sortedMatrix])

  return (
    <div className="competency-matrix">
      <div className="competency-toolbar">
        <div className="competency-scale">
          {competencyLevels.map((level, index) => (
            <span key={level}>
              {index + 1}. {level}
            </span>
          ))}
        </div>

        <label className="role-filter">
          <span>Role filter</span>
          <select value={selectedRole} onChange={(event) => setSelectedRole(event.target.value)}>
            <option value={allRoles}>All roles</option>
            {sortedMatrix.map((role) => (
              <option value={role.role} key={role.role}>
                {role.role}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="competency-layout">
        <CompetencyMatrixTable matrix={filteredMatrix} />
        <CompetencyRadarChart matrix={filteredMatrix} selectedRole={selectedRole} />
      </div>
    </div>
  )
}
