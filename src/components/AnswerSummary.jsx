import { answerHighlights } from '../data/portfolio'
import { Section } from './Section'

export function AnswerSummary() {
  return (
    <Section id="answers" eyebrow="answers" title="Quick answers">
      <div className="answer-grid">
        {answerHighlights.map((item) => (
          <article className="answer-item" key={item.question}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
