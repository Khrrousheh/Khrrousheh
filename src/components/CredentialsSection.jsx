import { credentials, interests, languages } from '../data/portfolio'
import { ChipRow } from './Chip'
import { Section } from './Section'

export function CredentialsSection() {
  return (
    <Section id="credentials" eyebrow="credentials" title="Education & background">
      <div className="cred-grid">
        <div className="cred-block">
          <h4>Education & certifications</h4>
          {credentials.map((item) => (
            <div className="cred-item" key={item.title}>
              <div className="title">{item.title}</div>
              {item.sub && <div className="sub">{item.sub}</div>}
            </div>
          ))}
        </div>

        <div className="cred-block">
          <h4>Languages</h4>
          {languages.map(([language, level]) => (
            <div className="lang-row" key={language}>
              <span>{language}</span>
              <span>{level}</span>
            </div>
          ))}

          <h4 className="spaced-heading">Interests</h4>
          <ChipRow items={interests} className="skills" />
        </div>
      </div>
    </Section>
  )
}
