import Head from 'next/head'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'

export default function Home(){
  return (
    <>
      <Head>
        <title>Eshrat Kamal Nova — Frontend Developer</title>
        <meta name="description" content="Frontend developer portfolio of Eshrat Kamal Nova" />
      </Head>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <main className="mt-12 mb-16">
        {/* Content Sections */}
        <div className="container">
        <section className="grid gap-12">

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
