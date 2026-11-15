import { projects } from '../data/portfolioData'
import ProjectArtwork from './ProjectArtwork'

export default function ProjectsSection() {
  return (
    <section className="projects-section page-shell" id="projects">
      <div className="section-heading">
        <div>
          <p className="section-label section-label--red">
            <span>02</span> Selected projects
          </p>
          <h2>Made with intent.</h2>
        </div>
        <p className="section-heading__description">
          A selection of products, experiments, and ideas. Every project card
          opens its own link, which you can update in the portfolio data.
        </p>
      </div>

      <div className="project-list">
        {/* Keep later projects above earlier cards as they enter the mobile stack. */}
        {projects.map((project, index) => (
          <a
            className={'project-card project-card--' + project.color + (index % 2 ? ' project-card--reverse' : '')}
            href={project.url}
            key={project.number}
            style={{
              '--stack-top': 82 + index * 18 + 'px',
              zIndex: index + 1,
            }}
            target="_blank"
            rel="noreferrer"
            aria-label={'Open ' + project.title + ' project'}
          >
            <div className="project-card__content">
              <div className="project-card__eyebrow">
                <span className="project-number">{project.number}</span>
                <span>{project.category}</span>
                <span className="project-status">{project.status}</span>
              </div>
              <div className="project-card__main">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className="project-card__metric">
                <span>Project note</span>
                <strong>{project.metric}</strong>
              </div>
              <div className="project-card__bottom">
                <ul className="tag-list" aria-label="Technologies and skills">
                  {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                <span className="project-link-button">
                  View project <span aria-hidden="true">↗</span>
                </span>
              </div>
            </div>
            <ProjectArtwork
              type={project.artwork}
              label={'Illustration for ' + project.title}
            />
          </a>
        ))}
      </div>
    </section>
  )
}
