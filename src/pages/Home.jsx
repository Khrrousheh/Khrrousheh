import { AboutSection } from '../components/AboutSection'
import { AnswerSummary } from '../components/AnswerSummary'
import { CredentialsSection } from '../components/CredentialsSection'
import { ExperienceSection } from '../components/ExperienceSection'
import { Hero } from '../components/Hero'
import { ProjectsSection } from '../components/ProjectsSection'
import { SkillsSection } from '../components/SkillsSection'

export function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <AnswerSummary />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <CredentialsSection />
    </>
  )
}
