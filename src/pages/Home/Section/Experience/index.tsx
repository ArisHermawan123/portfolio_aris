import './experience.css'
import { motion } from 'framer-motion'
import { experience } from '@data/home'
import Article from './components/Article'

const Experience: React.FC = () => {
  type ExperienceIcon = {
    id: number
    icon: any
    title: string
    progres: string
  }
  return (
    <section id="experience" className="pt-12 sm:pt-28">
      <div className="flex justify-center flex-col items-center space-y-10 mb-12">
        <h2 className="uppercase tracking-[10px] sm:tracking-[20px] text-[var(--color-primary)] shadow-md ml-5 text-gray-500 text-lg sm:text-2xl">
          experience
        </h2>
        <h5 className="sm:text-lg text-gray-400 ">My Recent Work</h5>
      </div>

      <div className="container experience__container">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="experience__frontend"
        >
          <h3>UI/UX Designer</h3>
          <div className="experience__content">
            {experience.map((value: ExperienceIcon) => (
              <article key={value.id} className="experience__details">
                <Article val={value} />
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
