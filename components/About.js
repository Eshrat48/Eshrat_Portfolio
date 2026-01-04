export default function About() {
  return (
    <section id="about" className="w-full py-14 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div
          className="grid md:grid-cols-2 gap-6 rounded-2xl"
          style={{ backgroundColor: 'var(--espresso)', color: 'var(--sand)', padding: '1.5rem' }}
        >
          {/* Left panel */}
          <div className="flex flex-col gap-4">
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium"
                style={{ backgroundColor: 'var(--caramel)', color: 'white' }}
              >
                Contact Me
              </a>
              <a
                href="https://github.com/Eshrat48"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-full border"
                style={{ borderColor: 'var(--leafy)', color: 'var(--sand)' }}
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/eshrat-kamal-nova"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-full border"
                style={{ borderColor: 'var(--leafy)', color: 'var(--sand)' }}
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right panel */}
          <div className="flex flex-col gap-6">
            <div
              className="rounded-xl px-4 py-3"
              style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="text-xs font-semibold uppercase" style={{ color: 'var(--leafy)' }}>
                Current Status
              </div>
              <div className="mt-2 text-sm" style={{ color: 'var(--sand)' }}>
                Open to freelance and full-time opportunities.
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold mb-3" style={{ color: 'var(--sand)' }}>
                Education
              </div>
              <div className="space-y-3">
                <div className="pl-4 border-l" style={{ borderColor: 'var(--caramel)' }}>
                  <div className="text-sm font-semibold" style={{ color: 'var(--sand)' }}>
                    BSc Computer Science & Engineering
                  </div>
                  <div className="text-xs" style={{ color: 'var(--leafy)' }}>
                    University of Liberal Arts Bangladesh • 2022 – 2026
                  </div>
                  <div className="text-xs" style={{ color: 'var(--sand)' }}>GPA: 3.54</div>
                </div>
                <div className="pl-4 border-l" style={{ borderColor: 'var(--leafy)' }}>
                  <div className="text-sm font-semibold" style={{ color: 'var(--sand)' }}>
                    Higher School Certificate
                  </div>
                  <div className="text-xs" style={{ color: 'var(--leafy)' }}>
                    Shaheed Bir Uttam Lt. Anwar Girls' College • 2020
                  </div>
                  <div className="text-xs" style={{ color: 'var(--sand)' }}>Result: 5.0</div>
                </div>
                <div className="pl-4 border-l" style={{ borderColor: 'var(--leafy)' }}>
                  <div className="text-sm font-semibold" style={{ color: 'var(--sand)' }}>
                    Secondary School Certificate
                  </div>
                  <div className="text-xs" style={{ color: 'var(--leafy)' }}>
                    Deopara Gono High School • 2018
                  </div>
                  <div className="text-xs" style={{ color: 'var(--sand)' }}>Result: 5.0</div>
                </div>
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold mb-3" style={{ color: 'var(--sand)' }}>
                Achievements
              </div>
              <div className="space-y-2">
                <div className="text-xs" style={{ color: 'var(--sand)' }}>
                  🏆 4th Place in Bangladesh, IEEE Xtreme 19.0 Programming Competition
                </div>
                <div className="text-xs" style={{ color: 'var(--sand)' }}>
                  🎖️ Finalist, ULAB Nutrition Olympiad 2025
                </div>
                <div className="text-xs" style={{ color: 'var(--sand)' }}>
                  ⭐ Participant, Hult Prize (Tech & Innovation Track) 2023-2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
