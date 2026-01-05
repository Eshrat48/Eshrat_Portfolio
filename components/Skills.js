import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiNextdotjs, 
  SiJavascript, 
  SiTailwindcss, 
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiFigma,
  SiPhp,
  SiLaravel,
  SiTypescript
} from 'react-icons/si';

export default function Skills() {
  const techIcons = {
    'React.js': SiReact,
    'Next.js': SiNextdotjs,
    'JavaScript (ES6+)': SiJavascript,
    'Tailwind CSS': SiTailwindcss,
    'Framer Motion': SiFramer,
    'Node.js': SiNodedotjs,
    'Express.js': SiExpress,
    'MongoDB': SiMongodb,
    'Firebase': SiFirebase,
    'Git': SiGit,
    'GitHub': SiGithub,
    'Vercel': SiVercel,
    'Netlify': SiNetlify,
    'Figma': SiFigma,
    'PHP': SiPhp,
    'Laravel': SiLaravel,
    'TypeScript': SiTypescript
  };

  const skills = [
    {
      category: 'Frontend Development',
      description: 'Crafting responsive, pixel-perfect, and accessible user interfaces. I specialize in building modern SPAs with a focus on performance and user experience.',
      icon: '⚡',
      techStack: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'Framer Motion']
    },
    {
      category: 'Backend Engineering',
      description: 'Architecting secure and scalable server-side systems and RESTful APIs. Experienced with databases and server-side patterns.',
      icon: '🔧',
      techStack: ['Node.js', 'Express.js', 'MongoDB', 'Firebase']
    },
    {
      category: 'DevOps & Tools',
      description: 'Managing deployment pipelines and ensuring high availability infrastructure.',
      icon: '🚀',
      techStack: ['Git', 'GitHub', 'Vercel', 'Netlify', 'Figma']
    }
  ];

  return (
    <section id="skills" className="w-full py-14 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <div className="text-sm font-semibold uppercase mb-2" style={{ color: 'var(--leafy)' }}>
            Technical Toolbox
          </div>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--espresso)' }}>
            Skills & <span style={{ color: 'var(--caramel)' }}>Technologies</span>
          </h2>
          <p className="mt-3 text-base md:text-lg" style={{ color: 'var(--caramel)' }}>
            I build scalable, robust applications using a modern tech stack. Here is a breakdown of my expertise across the development spectrum.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="p-6 rounded-xl border transition-all hover:shadow-2xl cursor-pointer"
              style={{
                backgroundColor: 'var(--espresso)',
                borderColor: 'var(--leafy)',
                color: 'var(--sand)'
              }}
            >
              <div className="text-3xl mb-4">{skill.icon}</div>
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--sand)' }}>
                {skill.category}
              </h3>
              <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--sand)', opacity: 0.8 }}>
                {skill.description}
              </p>
              <div className="pt-5 mt-2 border-t" style={{ borderColor: 'rgba(255,255,255,0.15)' }}>
                <div className="text-sm font-bold uppercase mb-4 tracking-wide" style={{ color: 'var(--leafy)' }}>
                  Tech Stack
                </div>
                <div className="flex flex-wrap gap-4">
                  {skill.techStack.map((tech, techIndex) => {
                    const IconComponent = techIcons[tech];
                    return (
                      <motion.div
                        key={tech}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          type: 'spring',
                          stiffness: 260,
                          damping: 20,
                          delay: index * 0.1 + techIndex * 0.05
                        }}
                        whileHover={{ 
                          scale: 1.2,
                          rotate: [0, -5, 5, 0],
                          transition: { duration: 0.3 }
                        }}
                        className="flex items-center gap-2.5 px-4 py-3 rounded-xl font-semibold cursor-pointer shadow-md hover:shadow-xl transition-shadow"
                        style={{ backgroundColor: 'var(--leafy)', color: 'var(--espresso)' }}
                      >
                        {IconComponent && <IconComponent className="text-2xl" />}
                        <span className="text-sm">{tech}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Current Focus Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: skills.length * 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="p-6 rounded-xl border transition-all hover:shadow-2xl cursor-pointer"
            style={{
              backgroundColor: 'var(--caramel)',
              borderColor: 'var(--cinnamon)',
              color: 'white'
            }}
          >
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-lg font-semibold mb-3">Current Focus & Exploration</h3>
            <p className="text-sm mb-4 leading-relaxed" style={{ opacity: 0.9 }}>
              I am currently expanding my backend capabilities by diving into PHP and the Laravel framework. Additionally, I'm strengthening my TypeScript skills to build more robust and type-safe applications.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              {['PHP', 'Laravel', 'TypeScript'].map((tech, index) => {
                const IconComponent = techIcons[tech];
                return (
                  <motion.div
                    key={tech}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: 'spring',
                      stiffness: 260,
                      damping: 20,
                      delay: skills.length * 0.1 + index * 0.1
                    }}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.3 }
                    }}
                    className="flex items-center gap-2.5 px-4 py-3 rounded-xl font-semibold bg-white text-black cursor-pointer shadow-md hover:shadow-xl transition-shadow"
                  >
                    {IconComponent && <IconComponent className="text-2xl" />}
                    <span className="text-sm">{tech}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
