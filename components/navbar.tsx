'use client'

import { useEffect, useState } from 'react'

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export function Navbar() {
  const [active, setActive] = useState('about')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Primary"
        className="block-3d mx-auto flex max-w-5xl items-center justify-between gap-3 border-4 border-wood-dark bg-wood px-3 py-2 sm:m-3 sm:px-4"
      >
        <a
          href="#top"
          className="flex items-center gap-2 font-pixel text-[10px] text-cloud text-shadow-pixel-sm sm:text-xs"
        >
          <span
            aria-hidden="true"
            className="block h-6 w-6 border-2 border-dirt-dark bg-grass block-3d"
            style={{
              backgroundImage:
                'linear-gradient(var(--grass) 55%, var(--dirt) 55%)',
            }}
          />
          <span className="hidden sm:inline">Althan Nguyen</span>
        </a>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="nav-links"
          className="block-3d border-2 border-wood-dark bg-dirt px-3 py-2 font-pixel text-[10px] text-cloud sm:hidden"
        >
          {open ? 'X' : 'MENU'}
        </button>

        <ul
          id="nav-links"
          className={`${
            open ? 'flex' : 'hidden'
          } absolute inset-x-0 top-full mt-1 flex-col gap-1 border-4 border-wood-dark bg-wood p-2 sm:static sm:mt-0 sm:flex sm:flex-row sm:items-center sm:gap-1 sm:border-0 sm:bg-transparent sm:p-0`}
        >
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                aria-current={active === link.id ? 'true' : undefined}
                className={`block border-2 px-3 py-2 font-pixel text-[10px] transition-colors ${
                  active === link.id
                    ? 'border-torch bg-dirt-dark text-torch text-shadow-pixel-sm'
                    : 'border-transparent text-cloud/90 hover:border-dirt-dark hover:bg-dirt/60'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
