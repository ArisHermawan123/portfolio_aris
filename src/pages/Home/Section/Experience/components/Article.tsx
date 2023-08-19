import React, { useState } from 'react'
import { motion } from 'framer-motion'
import '../experience.css'

type ExperienceIcon = {
  val: {
    id: number
    icon: any
    title: string
    progres: string
  }
}

const Article: React.FC<ExperienceIcon> = ({ val }) => {
  const IconComponent = val.icon
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className={`w-[3.5rem] h-[3.5rem] flex justify-center rounded-full cursor-pointer items-center bg-[var(--color-bg)] relative experience-icon ${
          isHovered ? 'hovered opacity-0 duration-300 delay-200' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`text-[var(--color-primary)] rounded-full text-[2.5rem] ${
            isHovered ? 'opacity-0 duration-300 delay-200' : 'opacity-100'
          }`}
        >
          <IconComponent />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className={`${
            isHovered ? 'opacity-100' : 'opacity-0'
          } absolute transition-opacity duration-300`}
        >
          <p
            className={`text-base text-[var(--color-primary)] font-semibold ${
              isHovered ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-700`}
          >
            {val.progres}
          </p>
        </motion.div>
      </motion.div>
      <div>
        <h4>{val.title}</h4>
        <small className="text-light">Experience</small>
      </div>
    </>
  )
}

export default Article
