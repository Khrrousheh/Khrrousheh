import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { defaultSeoPage, seoPages } from '../data/seo'
import { Footer } from './Footer'
import { Seo } from './Seo'

const navItems = [
  ['about', '/about'],
  ['experience', '/experience'],
  ['projects', '/projects'],
  ['skills', '/skills'],
  ['credentials', '/credentials'],
  ['contact', '/contact'],
]

export function Layout() {
  const location = useLocation()
  const page = seoPages[location.pathname] || defaultSeoPage

  return (
    <>
      <Seo page={page} />

      <nav>
        <div className="nav-inner">
          <NavLink className="nav-id" to="/" aria-label="Mahdi Khrrousheh home">
            <span>~/</span>khrrousheh
          </NavLink>
          <div className="nav-links" aria-label="Primary navigation">
            {navItems.map(([label, href]) => (
              <NavLink key={label} to={href}>
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      <main className="page-shell" key={location.pathname}>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}
