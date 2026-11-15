import { useState } from 'react'
import { portfolio } from '../data/portfolioData'

const navigation = [
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="site-header__inner page-shell">
        <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Back to top">
          <span>{portfolio.initials}</span>
          <span className="wordmark__divider">//</span>
          <span className="wordmark__name">{portfolio.name}</span>
        </a>

        <div className="availability-note">
          <span className="availability-note__dot" />
          <span>{portfolio.availability}</span>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? 'Close' : 'Menu'}</span>
          <span className="menu-toggle__icon" aria-hidden="true">
            {menuOpen ? '×' : '☰'}
          </span>
        </button>

        <nav
          className={'main-navigation' + (menuOpen ? ' main-navigation--open' : '')}
          id="main-navigation"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="button button--dark header-contact" href="#contact">
          Let’s talk <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  )
}
