import Head from 'next/head'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <>
      <Head>
        <title>Eshrat Kamal Nova — Frontend Developer</title>
        <meta name="description" content="Frontend developer portfolio of Eshrat Kamal Nova" />
      </Head>
      <Header />
      <main className="container mt-12">
        <section className="grid gap-8">
          <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
            <h1 className="text-4xl md:text-5xl font-bold">Eshrat Kamal Nova</h1>
            <p className="mt-4 text-lg text-gray-700">Frontend Developer — React.js, Next.js, Tailwind CSS</p>
            <p className="mt-4 text-gray-600">Dhaka, Bangladesh • +8801768-092207 • eshratkamalnova@gmail.com</p>
            <div className="mt-6 flex gap-4">
              <a href="https://github.com/Eshrat48" target="_blank" rel="noreferrer" className="px-4 py-2 bg-blue-600 text-white rounded">GitHub</a>
              <a href="https://www.linkedin.com/in/eshrat-kamal-nova" target="_blank" rel="noreferrer" className="px-4 py-2 border rounded">LinkedIn</a>
            </div>
          </motion.div>

          <section>
            <h2 className="text-2xl font-semibold">Skills</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              <li className="px-3 py-1 bg-gray-100 rounded">React.js</li>
              <li className="px-3 py-1 bg-gray-100 rounded">Next.js</li>
              <li className="px-3 py-1 bg-gray-100 rounded">JavaScript (ES6+)</li>
              <li className="px-3 py-1 bg-gray-100 rounded">Tailwind CSS</li>
              <li className="px-3 py-1 bg-gray-100 rounded">DaisyUI</li>
              <li className="px-3 py-1 bg-gray-100 rounded">Framer Motion</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Projects</h2>
            <ul className="mt-3 space-y-3">
              <li className="p-4 border rounded">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">HabitTracker — MERN Stack Habit App</div>
                    <div className="text-sm text-gray-600">A full-stack habit management platform with authentication and streak tracking.</div>
                  </div>
                  <div className="space-x-2">
                    <a className="text-blue-600" href="#">Live</a>
                    <a className="text-blue-600" href="#">Client</a>
                    <a className="text-blue-600" href="#">Server</a>
                  </div>
                </div>
              </li>
              <li className="p-4 border rounded">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">AppHub — App Showcase Web Platform</div>
                    <div className="text-sm text-gray-600">Responsive SPA for browsing and managing hero apps with analytics and smooth UI.</div>
                  </div>
                  <div className="space-x-2">
                    <a className="text-blue-600" href="#">Live</a>
                    <a className="text-blue-600" href="#">GitHub</a>
                  </div>
                </div>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Achievements</h2>
            <ul className="mt-3 list-disc list-inside text-gray-700">
              <li>4th Place in Bangladesh, IEEE Xtreme 19.0 Programming Competition</li>
              <li>Finalist, ULAB Nutrition Olympiad 2025</li>
              <li>Participant – Hult Prize (Tech & Innovation Track)</li>
            </ul>
          </section>
        </section>
      </main>
      <Footer />
    </>
  )
}
