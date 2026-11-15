import { portfolio, socialLinks } from '../data/portfolioData'

export default function SiteFooter() {
  return (
    <footer className="site-footer page-shell">
      <div className="site-footer__main">
        <div className="footer-about">
          <a className="wordmark wordmark--footer" href="#top">
            <span>{portfolio.initials}</span>
            <span className="wordmark__divider">//</span>
            <span className="wordmark__name">{portfolio.name}</span>
          </a>
          <p>{portfolio.role}. Building useful things with care and curiosity.</p>
        </div>
        <div className="footer-column">
          <span className="footer-heading">Explore</span>
          <a href="#projects">Selected work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About me</a>
        </div>
        <div className="footer-column">
          <span className="footer-heading">Elsewhere</span>
          {socialLinks.map((item) => (
            <a
              href={item.url}
              key={item.label}
              target={item.url.startsWith('mailto:') ? undefined : '_blank'}
              rel={item.url.startsWith('mailto:') ? undefined : 'noreferrer'}
            >
              {item.label} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
        <div className="footer-column">
          <span className="footer-heading">Say hello</span>
          <a href={'mailto:' + portfolio.email}>{portfolio.email}</a>
          <span>{portfolio.location}</span>
        </div>
      </div>
      <div className="site-footer__bottom">
        <span>© {new Date().getFullYear()} {portfolio.name}</span>
        <a href="#top">Back to top ↑</a>
        <span>Designed with intention.</span>
      </div>
    </footer>
  )
}
