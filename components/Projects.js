import { motion } from 'framer-motion';
import { SiReact, SiNodedotjs, SiMongodb, SiFirebase, SiTailwindcss } from 'react-icons/si';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

export default function Projects() {
  const projects = [
    {
      title: 'ScholarStream',
      subtitle: 'Scholarship Management Platform',
      description: 'A comprehensive full-stack MERN scholarship management platform bridging students and universities. Features secure Stripe payments, role-based dashboards, application tracking, admin analytics, and real-time notifications. Streamlines the entire scholarship lifecycle from discovery to approval.',
      image: '/images/ScholarStream.png',
      techStack: ['React.js', 'Node.js', 'MongoDB', 'Firebase', 'Stripe', 'Tailwind CSS'],
      techBadge: { name: 'React', icon: SiReact },
      liveLink: 'https://scholar-stream-client-five.vercel.app/',
      clientLink: 'https://github.com/Eshrat48/ScholarStream-Client.git',
      serverLink: 'https://github.com/Eshrat48/ScholarStream-Server.git',
      featured: true
    },
    {
      title: 'HabitTracker',
      subtitle: 'Daily Habit Management & Streak Tracking App',
      description: 'A modern single-page application helping users build and track daily habits with streak calculations and 30-day progress tracking. Features secure Firebase authentication, community habit sharing, task completion history, and responsive design across all devices.',
      image: '/images/HabitTracker.png',
      techStack: ['React.js', 'Node.js', 'MongoDB', 'Firebase', 'Tailwind CSS'],
      techBadge: { name: 'React', icon: SiReact },
      liveLink: 'https://habit-tracker24.netlify.app/',
      clientLink: 'https://github.com/Eshrat48/habit-tracker-client.git',
      serverLink: 'https://github.com/Eshrat48/habit-tracker-server.git',
      featured: true
    },
    {
      title: 'GreenNest',
      subtitle: 'Modern Plant E-commerce Web Application',
      description: 'A fully responsive plant e-commerce platform with seamless user experience across all devices. Features Google OAuth authentication, detailed plant catalogs, "Plant of the Week" showcase, protected routes, persistent login with localStorage, and real-time profile updates via Context API.',
      image: '/images/GreenNest.png',
      techStack: ['React.js', 'Tailwind CSS', 'Firebase', 'DaisyUI'],
      techBadge: { name: 'React', icon: SiReact },
      liveLink: 'https://green-nest-app.netlify.app/',
      githubLink: 'https://github.com/Eshrat48/green-nest.git',
      featured: false
    },
    {
      title: 'AppHub',
      subtitle: 'Modern App Showcase Platform',
      description: 'A fully responsive web application showcasing curated hero apps with seamless browsing experience. Features live search with real-time filtering, detailed app pages with install functionality, review visualization using Recharts, app management with localStorage persistence, and comprehensive error handling with loading animations.',
      image: '/images/AppHub.png',
      techStack: ['React.js', 'React Router', 'Recharts', 'Tailwind CSS'],
      techBadge: { name: 'React', icon: SiReact },
      liveLink: 'https://euphonious-centaur-1a43b1.netlify.app/',
      githubLink: 'https://github.com/Eshrat48/AppHub.git',
      featured: false
    }
  ];

  const techIcons = {
    'React.js': SiReact,
    'Node.js': SiNodedotjs,
    'MongoDB': SiMongodb,
    'Express.js': SiNodedotjs,
    'Firebase': SiFirebase,
    'Tailwind CSS': SiTailwindcss,
    'Next.js': SiReact,
    'WebSocket': SiNodedotjs
  };

  return (
    <section id="projects" className="w-full py-14 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--espresso)' }}>
              Featured <span style={{ color: 'var(--caramel)' }}>Projects</span>
            </h2>
            <p className="mt-3 text-sm md:text-base max-w-2xl mx-auto" style={{ color: 'var(--caramel)' }}>
              A collection of high-impact applications demonstrating full-stack capabilities, clean code architecture, and modern interface design.
            </p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl overflow-hidden border transition-all hover:shadow-2xl"
              style={{
                backgroundColor: 'var(--espresso)',
                borderColor: 'var(--leafy)'
              }}
            >
              <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Project Image - Left or Right based on index */}
                <div className={`relative overflow-hidden flex items-center justify-center md:min-h-96 ${index % 2 === 1 ? 'md:order-2' : ''}`} style={{ backgroundColor: 'var(--cinnamon)' }}>
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}
                {!project.image && (
                  <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-20">
                    {project.techBadge.icon && <project.techBadge.icon />}
                  </div>
                )}
                  {/* Tech Badge */}
                  <div className="absolute top-6 right-6 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-md flex items-center gap-2 z-10" style={{ backgroundColor: 'rgba(255,255,255,0.9)', color: 'var(--espresso)' }}>
                    {project.techBadge.icon && <project.techBadge.icon className="text-lg" />}
                    {project.techBadge.name}
                  </div>
                </div>

                {/* Project Content - Right or Left based on index */}
                <div className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <h3 className="text-3xl font-bold mb-2" style={{ color: 'var(--sand)' }}>
                    {project.title}
                  </h3>
                  <p className="text-lg mb-4 font-medium" style={{ color: 'var(--caramel)' }}>
                    {project.subtitle}
                  </p>
                  <p className="text-base mb-6 leading-relaxed" style={{ color: 'var(--sand)', opacity: 0.85 }}>
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-7">
                    <div className="text-sm font-semibold uppercase mb-3" style={{ color: 'var(--leafy)' }}>
                      Tech Stack
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {project.techStack.map((tech) => {
                        const IconComponent = techIcons[tech];
                        return (
                          <span
                            key={tech}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium"
                            style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: 'var(--leafy)' }}
                          >
                            {IconComponent && <IconComponent className="text-base" />}
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 flex-wrap">
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-3 rounded-full text-base font-semibold transition-all"
                      style={{ backgroundColor: 'var(--caramel)', color: 'white' }}
                    >
                      <FiExternalLink size={20} />
                      Live Demo
                    </motion.a>
                    
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-base font-semibold hover:opacity-80 transition-opacity"
                        style={{ color: 'var(--leafy)' }}
                      >
                        <FiGithub size={20} />
                        GitHub
                      </a>
                    )}
                    
                    {project.clientLink && (
                      <>
                        <a
                          href={project.clientLink}
                          target="_blank"
                          rel="noreferrer"
                          className="text-base font-semibold hover:opacity-80 transition-opacity underline"
                          style={{ color: 'var(--leafy)' }}
                        >
                          Client
                        </a>
                        <a
                          href={project.serverLink}
                          target="_blank"
                          rel="noreferrer"
                          className="text-base font-semibold hover:opacity-80 transition-opacity underline"
                          style={{ color: 'var(--leafy)' }}
                        >
                          Server
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition-opacity"
            style={{ color: 'var(--caramel)' }}
          >
            View All Projects →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
