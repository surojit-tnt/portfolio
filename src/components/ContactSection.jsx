import { useState } from 'react'
import { portfolio } from '../data/portfolioData'

export default function ContactSection() {
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(portfolio.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      // If clipboard access is blocked, opening a draft still gives visitors a way to reach you.
      window.location.href = 'mailto:' + portfolio.email
    }
  }

  return (
    <section className="contact-section page-shell" id="contact">
      <div className="contact-panel">
        <span className="contact-shape contact-shape--blue" />
        <span className="contact-shape contact-shape--red" />
        <div className="contact-panel__content">
          <p className="section-label section-label--yellow">
            <span>03</span> Start a conversation
          </p>
          <h2>Have a good project in mind?</h2>
          <p className="contact-intro">
            Tell me what you are building, where you need a hand, or simply say hello.
            I’d love to hear about it.
          </p>
          <div className="contact-actions">
            <button className="button button--yellow" type="button" onClick={copyEmail}>
              {copied ? 'Email copied!' : 'Copy my email'}
              <span aria-hidden="true">{copied ? '✓' : '↗'}</span>
            </button>
            <a className="button button--outline-light" href={'mailto:' + portfolio.email}>
              Write an email <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="contact-panel__details">
            <span><i /> Usually replies within two working days</span>
            <span><i /> Based in {portfolio.location}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
