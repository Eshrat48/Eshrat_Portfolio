import Link from 'next/link'

export default function Header() {
  return (
    <header className="py-6">
      <div className="container flex items-center justify-between">
        <div className="text-2xl font-semibold">Eshrat Kamal Nova</div>
        <nav className="space-x-4 text-sm">
          <a className="text-blue-600" href="https://github.com/Eshrat48" target="_blank" rel="noreferrer">GitHub</a>
          <a className="text-blue-600" href="https://www.linkedin.com/in/eshrat-kamal-nova" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="text-blue-600" href="mailto:eshratkamalnova@gmail.com">Contact</a>
        </nav>
      </div>
    </header>
  )
}
