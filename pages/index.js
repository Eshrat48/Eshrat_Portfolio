import Head from 'next/head'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

export default function Home(){
  return (
    <>
      <Head>
        <title>Eshrat Kamal Nova — Frontend Developer</title>
        <meta name="description" content="Frontend developer portfolio of Eshrat Kamal Nova" />
      </Head>
      <Header />
      <Hero />
      <main>
        {/* Content Sections */}
        <div className="container mt-12">
        <section className="grid gap-8">

          <section>
            <h2 className="text-2xl font-semibold" style={{color:'var(--espresso)'}}>Skills</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {['React.js','Next.js','JavaScript (ES6+)','Tailwind CSS','DaisyUI','Framer Motion'].map((skill) => (
                <li key={skill} className="px-3 py-1 rounded" style={{backgroundColor:'var(--leafy)', color:'var(--espresso)'}}>{skill}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold" style={{color:'var(--espresso)'}}>Projects</h2>
            <ul className="mt-3 space-y-3">
              <li className="p-4 rounded border" style={{backgroundColor:'var(--sand)', borderColor:'var(--leafy)'}}>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="font-semibold" style={{color:'var(--espresso)'}}>HabitTracker — MERN Stack Habit App</div>
                    <div className="text-sm" style={{color:'var(--caramel)'}}>A full-stack habit management platform with authentication and streak tracking.</div>
                  </div>
                  <div className="space-x-2 text-sm" style={{color:'var(--caramel)'}}>
                    <a className="underline" href="#">Live</a>
                    <a className="underline" href="#">Client</a>
                    <a className="underline" href="#">Server</a>
                  </div>
                </div>
              </li>
              <li className="p-4 rounded border" style={{backgroundColor:'var(--sand)', borderColor:'var(--leafy)'}}>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="font-semibold" style={{color:'var(--espresso)'}}>AppHub — App Showcase Web Platform</div>
                    <div className="text-sm" style={{color:'var(--caramel)'}}>Responsive SPA for browsing and managing hero apps with analytics and smooth UI.</div>
                  </div>
                  <div className="space-x-2 text-sm" style={{color:'var(--caramel)'}}>
                    <a className="underline" href="#">Live</a>
                    <a className="underline" href="#">GitHub</a>
                  </div>
                </div>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold" style={{color:'var(--espresso)'}}>Achievements</h2>
            <ul className="mt-3 list-disc list-inside" style={{color:'var(--espresso)'}}>
              <li>4th Place in Bangladesh, IEEE Xtreme 19.0 Programming Competition</li>
              <li>Finalist, ULAB Nutrition Olympiad 2025</li>
              <li>Participant – Hult Prize (Tech & Innovation Track)</li>
            </ul>
          </section>
        </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
