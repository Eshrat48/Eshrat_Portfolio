import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiExternalLink, FiGithub } from 'react-icons/fi';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-start justify-center p-4 pt-20 md:pt-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-4xl my-8 rounded-2xl shadow-2xl"
              style={{ backgroundColor: 'white' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: 'var(--espresso)', color: 'white' }}
              >
                <FiX className="text-xl" />
              </button>

              {/* Project Image */}
              <div className="w-full h-64 md:h-80 overflow-hidden rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 max-h-[70vh] overflow-y-auto">
                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: 'var(--espresso)' }}>
                  {project.title}
                </h2>
                <p className="text-lg mb-6" style={{ color: 'var(--leafy)' }}>
                  {project.subtitle}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold uppercase mb-3" style={{ color: 'var(--espresso)' }}>
                    Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{ backgroundColor: 'var(--sand)', color: 'var(--espresso)' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold uppercase mb-3" style={{ color: 'var(--espresso)' }}>
                    Project Overview
                  </h3>
                  <p className="text-sm leading-6" style={{ color: 'var(--espresso)', opacity: 0.8 }}>
                    {project.description}
                  </p>
                </div>

                {/* Challenges */}
                {project.challenges && (
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold uppercase mb-3" style={{ color: 'var(--espresso)' }}>
                      Challenges Faced
                    </h3>
                    <ul className="space-y-2">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm" style={{ color: 'var(--espresso)' }}>
                          <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--caramel)' }}></span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Future Improvements */}
                {project.improvements && (
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold uppercase mb-3" style={{ color: 'var(--espresso)' }}>
                      Future Improvements
                    </h3>
                    <ul className="space-y-2">
                      {project.improvements.map((improvement, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm" style={{ color: 'var(--espresso)' }}>
                          <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--leafy)' }}></span>
                          <span>{improvement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-4 border-t" style={{ borderColor: 'var(--sand)' }}>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    style={{ backgroundColor: 'var(--caramel)' }}
                  >
                    <FiExternalLink className="text-lg" />
                    <span>View Live</span>
                  </a>
                  {project.clientLink && (
                    <a
                      href={project.clientLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-md"
                      style={{ backgroundColor: 'var(--sand)', color: 'var(--espresso)' }}
                    >
                      <FiGithub className="text-lg" />
                      <span>Client Code</span>
                    </a>
                  )}
                  {project.serverLink && (
                    <a
                      href={project.serverLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-md"
                      style={{ backgroundColor: 'var(--sand)', color: 'var(--espresso)' }}
                    >
                      <FiGithub className="text-lg" />
                      <span>Server Code</span>
                    </a>
                  )}
                  {project.githubLink && !project.clientLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-md"
                      style={{ backgroundColor: 'var(--sand)', color: 'var(--espresso)' }}
                    >
                      <FiGithub className="text-lg" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
