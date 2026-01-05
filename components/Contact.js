import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

export default function Contact() {
  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'eshratkamalnova@gmail.com',
      link: 'mailto:eshratkamalnova@gmail.com',
      color: 'var(--caramel)'
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+880 1768-092207',
      color: 'var(--cinnamon)'
    },
    {
      icon: FiPhone,
      label: 'WhatsApp',
      value: '+880 1768-092207',
      link: 'https://wa.me/8801768092207',
      color: 'var(--leafy)'
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      value: 'Eshrat Kamal Nova',
      link: 'https://www.linkedin.com/in/eshrat-kamal-nova',
      color: 'var(--leafy)'
    },
    {
      icon: FiGithub,
      label: 'GitHub',
      value: '@Eshrat48',
      link: 'https://github.com/Eshrat48',
      color: 'var(--espresso)'
    }
  ];

  return (
    <section id="contact" className="w-full py-14 md:py-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, var(--caramel) 0%, transparent 50%), radial-gradient(circle at 80% 80%, var(--leafy) 0%, transparent 50%)`
        }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="text-sm font-semibold uppercase mb-2" style={{ color: 'var(--leafy)' }}>
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--espresso)' }}>
            Let's <span style={{ color: 'var(--caramel)' }}>Connect</span>
          </h2>
          <p className="mt-3 text-sm md:text-base max-w-2xl mx-auto" style={{ color: 'var(--caramel)' }}>
            I'm always open to new opportunities, collaborations, and interesting conversations. Feel free to reach out!
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
                className="p-6 rounded-xl border transition-all hover:shadow-2xl cursor-pointer"
                style={{
                  backgroundColor: 'var(--espresso)',
                  borderColor: 'var(--leafy)'
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-lg mt-1"
                    style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                  >
                    <Icon size={24} style={{ color: item.color }} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold uppercase" style={{ color: 'var(--leafy)' }}>
                      {item.label}
                    </div>
                    <div className="mt-2 text-base font-medium" style={{ color: 'var(--sand)' }}>
                      {item.value}
                    </div>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center p-8 rounded-2xl border"
          style={{
            backgroundColor: 'var(--espresso)',
            borderColor: 'var(--caramel)'
          }}
        >
          <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--sand)' }}>
            Ready to work together?
          </h3>
          <p className="mb-6 text-base" style={{ color: 'var(--sand)', opacity: 0.85 }}>
            Whether you have a project in mind or just want to chat, I'd love to hear from you.
          </p>
          <motion.a
            href="mailto:eshratkamalnova@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-base font-semibold transition-all"
            style={{ backgroundColor: 'var(--caramel)', color: 'white' }}
          >
            <FiMail size={20} />
            Send me an Email
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center gap-6 mt-12"
        >
          <a
            href="https://github.com/Eshrat48"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full transition-all hover:shadow-lg hover:scale-110"
            style={{ backgroundColor: 'var(--espresso)', borderColor: 'var(--leafy)', border: '2px solid' }}
          >
            <FiGithub size={24} style={{ color: 'var(--leafy)' }} />
          </a>
          <a
            href="https://www.linkedin.com/in/eshrat-kamal-nova"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full transition-all hover:shadow-lg hover:scale-110"
            style={{ backgroundColor: 'var(--espresso)', borderColor: 'var(--leafy)', border: '2px solid' }}
          >
            <FiLinkedin size={24} style={{ color: 'var(--leafy)' }} />
          </a>
          <a
            href="mailto:eshratkamalnova@gmail.com"
            className="p-3 rounded-full transition-all hover:shadow-lg hover:scale-110"
            style={{ backgroundColor: 'var(--espresso)', borderColor: 'var(--caramel)', border: '2px solid' }}
          >
            <FiMail size={24} style={{ color: 'var(--caramel)' }} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
