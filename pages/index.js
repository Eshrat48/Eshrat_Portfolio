import Head from 'next/head'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

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
      <Contact />
      <Footer />
    </>
  )
}
