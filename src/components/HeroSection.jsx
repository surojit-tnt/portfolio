import { portfolio } from '../data/portfolioData'

function PortraitCard() {
  // Optional portrait: put your image in public/profile.jpg and set portfolio.photo
  // in portfolioData.js. The geometric illustration is the default placeholder.
  if (portfolio.photo) {
    return (
      <img
        className="portrait-card__photo"
        src={portfolio.photo}
        alt={portfolio.name}
      />
    )
  }

  return (
    <div className="portrait-placeholder" role="img" aria-label="Add your profile photo here">
      <div className="portrait-placeholder__sun" />
      <div className="portrait-placeholder__head" />
      <div className="portrait-placeholder__body" />
      <span className="portrait-placeholder__label">Your photo goes here</span>
      <span className="portrait-placeholder__initials">{portfolio.initials}</span>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section className="hero-section page-shell" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="eyebrow hero-status">
          <span className="status-dot" />
          {portfolio.availability}
          <span className="hero-location">{portfolio.location}</span>
        </div>

        <div className="hero-heading-wrap">
          {/* <div className="section-kicker">
            <span className="color-squares" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span>Portfolio / 2026</span>
          </div> */}
          <h1 id="hero-title">
            {portfolio.name.split(' ').map((part, index) => (
              <span className="hero-name-line" key={part + index}>
                {part}
              </span>
            ))}
          </h1>
          <p className="hero-role">{portfolio.role}</p>
        </div>

        <p className="hero-introduction" id="about">
          {portfolio.introduction}
        </p>

        <div className="hero-actions">
          <a className="button button--dark" href="#projects">
            Explore my work <span aria-hidden="true">↓</span>
          </a>
          <a className="button button--light" href={'mailto:' + portfolio.email}>
            Get in touch <span aria-hidden="true">↗</span>
          </a>
        </div>

        {/* <div className="hero-disciplines" aria-label="Areas of focus">
          <span>Thoughtful design</span>
          <span>Useful technology</span>
          <span>Careful details</span>
        </div> */}
      </div>

      <div className="hero-visual">
        {/* <div className="hero-visual__index">01 / Profile</div> */}
        <div className="portrait-frame">
          <span className="portrait-frame__yellow" />
          <span className="portrait-frame__blue" />
          <span className="portrait-frame__red" />
          <PortraitCard />
          <div className="portrait-caption">
            <span>{portfolio.name}</span>
            <span>{portfolio.location}</span>
          </div>
        </div>
        {/* <span className="hero-visual__note">Independent / Open to collaboration</span> */}
      </div>
    </section>
  )
}
