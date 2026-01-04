import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ]

  const [active, setActive] = useState('projects')

  const handleNavClick = (id) => {
    setActive(id)
  }

  return (
    <header className="sticky top-0 z-30 py-4 bg-[color:var(--sand)]/90 backdrop-blur-md border-b border-[color:var(--caramel)]/20">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          {/* Left: Logo + name */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[color:var(--leafy)]/30 flex items-center justify-center overflow-hidden border border-[color:var(--caramel)]/30">
              <Image src="/images/logo.png" alt="Logo" width={40} height={40} priority />
            </div>
            <div>
              <div className="text-base md:text-lg font-semibold" style={{color:'var(--espresso)'}}>Eshrat Kamal Nova</div>
              <div className="text-[11px] uppercase tracking-[0.2em]" style={{color:'var(--leafy)'}}>Full Stack Developer</div>
            </div>
          </div>

          {/* Center: Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = active === item.id
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm md:text-base relative transition-colors ${isActive ? 'font-medium' : ''}`}
                  style={{
                    color: isActive ? 'var(--caramel)' : 'var(--espresso)',
                  }}
                >
                  {item.label}
                  <span
                    className={`${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0'} transition-transform duration-200 absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full`}
                    style={{ backgroundColor: 'var(--caramel)' }}
                  />
                </a>
              )
            })}
          </nav>

          {/* Right: Resume button */}
          <div className="flex items-center gap-4">
            <a href="/Eshrat-Kamal-Nova-Frontend-Developer-Resume.pdf" download className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-white rounded-full shadow-sm hover:scale-105 transition-transform"
              style={{ backgroundImage: 'linear-gradient(90deg, var(--caramel), var(--cinnamon))' }}>
              <span className="text-sm md:text-base font-medium">Resume</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14m7-7H5" />
              </svg>
            </a>
            <button className="md:hidden p-2 rounded-lg bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
      </div>
    </header>
  )
}
