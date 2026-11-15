import { experience } from '../data/portfolioData'

export default function ExperienceSection() {
  return (
    <section className="experience-section section-band" id="experience">
      <div className="page-shell">
        <div className="section-heading">
          <div>
            <p className="section-label section-label--blue">
              <span>01</span> Experience archive
            </p>
            <h2>Where I’ve made a difference</h2>
          </div>
          <p className="section-heading__description">
            A few chapters from my work. Replace these starter cards with roles,
            collaborations, and outcomes from your own path.
          </p>
        </div>

        <div className="experience-grid">
          {/* Mobile CSS reads this staggered offset to build the scroll stack. */}
          {experience.map((item, index) => (
            <article
              className={'experience-card experience-card--' + item.color}
              key={item.period + item.role}
              style={{
                '--stack-top': 82 + index * 18 + 'px',
                zIndex: index + 1,
              }}
            >
              <div className="experience-card__topline">
                <span>{item.period}</span>
                <span className="experience-card__marker">{item.company}</span>
              </div>
              <h3>{item.role}</h3>
              <p className="experience-card__company">{item.company}</p>
              <p className="experience-card__summary">{item.summary}</p>
              <div className="experience-card__impact">
                <span>{item.impact}</span>
                <span className="impact-arrow" aria-hidden="true">↗</span>
              </div>
              <ul className="tag-list" aria-label="Focus areas">
                {item.focus.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
