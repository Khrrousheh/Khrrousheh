import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail, MdPhone } from 'react-icons/md'


export function Footer() {
  return (
    <footer id="contact">
      <div className="wrap">
        <div className="contact-card">
          <div className="eyebrow centered">contact</div>
          <h2>Let's build something structured.</h2>
          <p>
            Open to backend and AI/agentic engineering roles - happy to talk through a specific
            pipeline, a system design problem, or just trade notes on hallucination mitigation.
          </p>

          <div className="contact-pills">
            <a className="pill primary" href="mailto:mahdi.khrrousheh@gmail.com">
              <MdEmail />
              Email me
            </a>

            <a className="pill" href="tel:+972598633610">
              <MdPhone />
              Call / WhatsApp
            </a>

            <a
              className="pill"
              href="https://linkedin.com/in/khrrousheh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
              LinkedIn
            </a>

            <a
              className="pill"
              href="https://github.com/Khrrousheh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              GitHub
            </a>
          </div>
        </div>

        <div className="foot-note">
          Mahdi Khrrousheh - Ramallah, Palestine - built as a React portfolio, no tracking, no
          analytics.
        </div>
      </div>
    </footer>
  )
}
