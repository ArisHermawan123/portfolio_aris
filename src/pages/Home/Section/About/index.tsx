import { FaAward, FaFolder } from 'react-icons/fa'
import ProfilePicture from '@assets/images/logo.jpeg'
import { motion } from 'framer-motion'
import './about.css'

const About = () => {
  return (
    <section id="about" className="pt-12 sm:pt-28">
      <div className="flex justify-center flex-col items-center space-y-10 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="uppercase tracking-[10px] sm:tracking-[20px] text-[var(--color-primary)] shadow-md ml-5 text-gray-500 text-lg sm:text-2xl"
        >
          about
        </motion.h2>
        <motion.h5
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="sm:text-lg text-gray-400"
        >
          Get In Touch
        </motion.h5>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        viewport={{ once: true }}
        className="container about__container"
      >
        <div className="about__me">
          <div className="about__me-image">
            <img src={ProfilePicture} alt="about img" />
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="about__content"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="about__cards"
          >
            <motion.article whileHover={{ scale: 1.1 }} className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 months Personal Project</small>
            </motion.article>

            <motion.article whileHover={{ scale: 1.1 }} className="about__card">
              <FaFolder className="about__icon" />
              <h5>Projects</h5>
              <small>2 Completed</small>
            </motion.article>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <p className="xl:text-xl text-gray-300 font-medium">
              When I was in grade 10 I started learning about ui ux design.
              currently I only have a laptop and internet as a resource, without
              taking training or paid courses.
            </p>
            <p className="xl:text-xl text-gray-300 font-medium">
              I study at SMK 3 Bekasi City majoring in telecommunications
              computer network engineering, with school I know my future goal is
              to become a ui ux design, after school I want to continue to a
              higher level, namely studying in the field of design.
            </p>
          </motion.div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
            href="#contact"
            className="btn btn-primary"
          >
            Let's Talk
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
