import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{backgroundColor:'var(--espresso)'}}>
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{duration:0.7}}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium mb-6" style={{borderColor:'var(--sand)', color:'var(--sand)'}}>
              <span className="w-2 h-2 rounded-full" style={{backgroundColor:'var(--sand)'}}></span>
              AVAILABLE FOR FREELANCE
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span style={{color:'var(--sand)'}}>Hi, I'm Eshrat.</span>
              <br/>
              <span style={{color:'var(--sand)', textShadow:'0 2px 12px rgba(0,0,0,0.35)'}}>Full Stack Developer</span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-base md:text-lg leading-relaxed" style={{color:'var(--leafy)'}}>
              Motivated and detail-oriented Full Stack Developer with experience in React.js, Next.js, Node.js, and modern UI development. I transform ideas into beautiful, functional web applications.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium shadow-lg hover:scale-105 transition-transform" style={{backgroundColor:'var(--caramel)'}}>
                View Projects
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="/Eshrat-Kamal-Nova-Frontend-Developer-Resume.pdf" download className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium border hover:scale-105 transition-transform" style={{borderColor:'var(--sand)', color:'var(--sand)'}}>
                Download Resume
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v12m0 0l-4-4m4 4l4-4M4 16v4h16v-4" />
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap gap-8">
              <div>
                <div className="text-3xl md:text-4xl font-bold" style={{color:'var(--sand)'}}>1+</div>
                <div className="text-sm uppercase tracking-wide" style={{color:'var(--leafy)'}}>Years<br/>Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold" style={{color:'var(--sand)'}}>10+</div>
                <div className="text-sm uppercase tracking-wide" style={{color:'var(--leafy)'}}>Projects<br/>Completed</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold" style={{color:'var(--sand)'}}>3+</div>
                <div className="text-sm uppercase tracking-wide" style={{color:'var(--leafy)'}}>Competitive<br/>Awards</div>
              </div>
            </div>
          </motion.div>

          {/* Right - Profile Photo */}
          <motion.div initial={{opacity:0, scale:0.9}} animate={{opacity:1, scale:1}} transition={{duration:0.7, delay:0.2}} className="relative hidden md:flex justify-center items-center">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Gradient Ring */}
              <div className="absolute inset-0 rounded-full" style={{background: 'linear-gradient(135deg, var(--caramel), var(--cinnamon))', padding: '4px'}}>
                <div className="w-full h-full rounded-full overflow-hidden" style={{backgroundColor:'var(--espresso)'}}>
                  <Image 
                    src="/images/Nova.jpg" 
                    alt="Eshrat Kamal Nova" 
                    width={400} 
                    height={400} 
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
              {/* Badge */}
              <div className="absolute bottom-8 right-0 px-4 py-2 rounded-full text-xs font-semibold shadow-lg" style={{backgroundColor:'var(--caramel)', color:'white'}}>
                <div className="uppercase tracking-wide">Stack</div>
                <div className="text-[10px] opacity-90">Full Stack</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
