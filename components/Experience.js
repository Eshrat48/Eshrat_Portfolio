import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';

export default function Experience() {
  const experiences = [
    {
      role: 'Full Stack Developer',
      company: 'Freelance',
      period: '2024 - Present',
      type: 'Remote',
      description: 'Building custom web applications for clients using MERN stack. Delivered responsive, scalable solutions including scholarship management systems and e-commerce platforms.',
      achievements: [
        'Developed 10+ full-stack projects with React, Node.js, and MongoDB',
        'Implemented secure payment integrations using Stripe',
        'Achieved 100% client satisfaction with responsive designs'
      ],
      color: 'var(--caramel)'
    },
    {
      role: 'Competitive Programmer',
      company: 'IEEE Xtreme',
      period: '2024',
      type: 'Competition',
      description: 'Secured 4th place in Bangladesh at IEEE Xtreme 19.0, competing in a 24-hour global programming challenge.',
      achievements: [
        '4th Place in Bangladesh among hundreds of teams',
        'Solved complex algorithmic problems under time pressure',
        'Collaborated effectively in team environment'
      ],
      color: 'var(--leafy)'
    }
  ];

  return (
    <section id="experience" className="w-full py-14 md:py-16 relative overflow-hidden" style={{ backgroundColor: 'var(--sand)' }}>
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full blur-3xl" style={{ backgroundColor: 'var(--caramel)' }}></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full blur-3xl" style={{ backgroundColor: 'var(--leafy)' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          style={{ color: 'var(--espresso)' }}
        >
          Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5, scale: 1.01 }}
              className="rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              style={{ backgroundColor: 'white' }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: exp.color, opacity: 0.2 }}
                  >
                    <FiBriefcase className="text-xl" style={{ color: exp.color }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold" style={{ color: 'var(--espresso)' }}>
                      {exp.role}
                    </h3>
                    <div className="text-base font-medium" style={{ color: exp.color }}>
                      {exp.company}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2" style={{ color: 'var(--espresso)' }}>
                    <FiCalendar className="text-base" />
                    <span>{exp.period}</span>
                  </div>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{ backgroundColor: exp.color, color: 'white' }}
                  >
                    {exp.type}
                  </span>
                </div>
              </div>

              <p className="text-sm leading-6 mb-4" style={{ color: 'var(--espresso)', opacity: 0.8 }}>
                {exp.description}
              </p>

              <div className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * i }}
                    className="flex items-start gap-2 text-sm"
                    style={{ color: 'var(--espresso)' }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: exp.color }}
                    ></span>
                    <span>{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
