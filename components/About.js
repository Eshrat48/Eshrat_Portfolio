import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="w-full py-14 md:py-16 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full blur-3xl" style={{backgroundColor:'var(--caramel)'}}></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full blur-3xl" style={{backgroundColor:'var(--leafy)'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
          style={{ color: 'var(--espresso)' }}
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-6 rounded-2xl"
          style={{backgroundColor:'var(--espresso)', color:'var(--sand)', padding:'1.5rem'}}
        >
          {/* Left panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-4">
              <div
                className="w-16 h-16 rounded-full overflow-hidden border"
                style={{ borderColor: 'var(--caramel)' }}
              >
                <img src="/images/Nova.jpg" alt="Eshrat Kamal Nova" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="text-xl font-semibold">Eshrat Kamal Nova</div>
                <div className="text-sm" style={{ color: 'var(--leafy)' }}>
                  Full Stack Developer
                </div>
              </div>
            </div>

            <p className="text-sm leading-6" style={{ color: 'var(--sand)' }}>
              I build accessible, high-performing web applications with React, Next.js, Node.js, and modern UI
              systems. I enjoy bridging design and engineering, crafting experiences that feel polished and
              purposeful.
            </p>
            <p className="text-sm leading-6" style={{ color: 'var(--sand)' }}>
              When not coding, I explore new tools, contribute to open source, or prototype ideas that blend
              automation and delightful UX.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:eshratkamalnova@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: 'var(--caramel)', color: 'white' }}
              >
                Contact Me
              </a>
              <a
                href="https://github.com/Eshrat48"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-full border transition-all duration-300 hover:scale-105 hover:border-opacity-100 hover:shadow-md"
                style={{ borderColor: 'var(--leafy)', color: 'var(--sand)' }}
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/eshrat-kamal-nova"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-full border transition-all duration-300 hover:scale-105 hover:border-opacity-100 hover:shadow-md"
                style={{ borderColor: 'var(--leafy)', color: 'var(--sand)' }}
              >
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-6"
          >
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-xl px-4 py-3 cursor-pointer"
              style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="text-xs font-semibold uppercase" style={{ color: 'var(--leafy)' }}>
                Current Status
              </div>
              <div className="mt-2 text-sm" style={{ color: 'var(--sand)' }}>
                Open to freelance and full-time opportunities.
              </div>
            </motion.div>

            <div>
              <div className="text-sm font-semibold mb-3" style={{ color: 'var(--sand)' }}>
                Education
              </div>
              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="pl-4 border-l"
                  style={{ borderColor: 'var(--caramel)' }}
                >
                  <div className="text-sm font-semibold" style={{ color: 'var(--sand)' }}>
                    BSc Computer Science & Engineering
                  </div>
                  <div className="text-xs" style={{ color: 'var(--leafy)' }}>
                    University of Liberal Arts Bangladesh • 2022 – 2026
                  </div>
                  <div className="text-xs" style={{ color: 'var(--sand)' }}>GPA: 3.54</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="pl-4 border-l"
                  style={{ borderColor: 'var(--leafy)' }}
                >
                  <div className="text-sm font-semibold" style={{ color: 'var(--sand)' }}>
                    Higher School Certificate
                  </div>
                  <div className="text-xs" style={{ color: 'var(--leafy)' }}>
                    Shaheed Bir Uttam Lt. Anwar Girls' College • 2020
                  </div>
                  <div className="text-xs" style={{ color: 'var(--sand)' }}>Result: 5.0</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="pl-4 border-l"
                  style={{ borderColor: 'var(--leafy)' }}
                >
                  <div className="text-sm font-semibold" style={{ color: 'var(--sand)' }}>
                    Secondary School Certificate
                  </div>
                  <div className="text-xs" style={{ color: 'var(--leafy)' }}>
                    Deopara Gono High School • 2018
                  </div>
                  <div className="text-xs" style={{ color: 'var(--sand)' }}>Result: 5.0</div>
                </motion.div>
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold mb-3" style={{ color: 'var(--sand)' }}>
                Achievements
              </div>
              <div className="space-y-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="text-xs"
                  style={{ color: 'var(--sand)' }}
                >
                  🏆 4th Place in Bangladesh, IEEE Xtreme 19.0 Programming Competition
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="text-xs"
                  style={{ color: 'var(--sand)' }}
                >
                  🎖️ Finalist, ULAB Nutrition Olympiad 2025
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="text-xs"
                  style={{ color: 'var(--sand)' }}
                >
                  ⭐ Participant, Hult Prize (Tech & Innovation Track) 2023-2025
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
