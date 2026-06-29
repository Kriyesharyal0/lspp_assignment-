import { useEffect, useState } from 'react'
import { navLinks } from '../data/staticData'

export default function Header() {
  const [progress, setProgress] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="header">
      <div className="container nav-container">
        <nav className="navbar">
          <div className="navbar__brand" title="Leapfrog Technology">
            <img src="/assets/images/lf-logo.svg" alt="Leapfrog Technology" />
          </div>
          <button
            className="navbar__toggle"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
          <div className={`navbar__menu ${menuOpen ? 'open' : ''}`}>
            <ul className="navbar__links">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <span className="navbar__link">{link.label}</span>
                </li>
              ))}
            </ul>
            <a href="https://www.lftechnology.com/contact" className="btn btn-secondary">
              Get Started →
            </a>
          </div>
        </nav>
      </div>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>
    </header>
  )
}
