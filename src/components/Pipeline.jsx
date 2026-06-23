import { pipelineStages } from '../data/portfolio'

function highlightDetail(detail, highlight) {
  if (!highlight || !detail.includes(highlight)) {
    return detail
  }

  const [before, after] = detail.split(highlight)
  return (
    <>
      {before}
      <b>{highlight}</b>
      {after}
    </>
  )
}

export function Pipeline() {
  return (
    <>
      <div className="pipeline-label">// how a Khrrousheh agent pipeline actually works</div>
      <div className="pipeline" aria-label="AI agent pipeline stages">
        {pipelineStages.map((stage, index) => (
          <div className="pipeline-segment" key={stage.stage}>
            <div className="node active">
              <div className="dot" />
              <div className="stage">{stage.stage}</div>
              <div className="stage-detail">{highlightDetail(stage.detail, stage.highlight)}</div>
            </div>
            {index < pipelineStages.length - 1 && (
              <div className="connector" aria-hidden="true">
                <div className="pulse" />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}
