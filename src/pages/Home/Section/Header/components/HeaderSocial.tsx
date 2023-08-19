import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
function HeaderSocial() {
  return (
    <motion.div
      initial={{
        y: -100,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        y: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className="flex flex-col gap-5 md:gap-10 text-sm md:text-xl lg:text-2xl"
    >
      <Link to="https://github.com/ArisHermawan123" target="_blank">
        <FaGithub />
      </Link>
      <Link to="http://instagram.com/ariis2908" target="_blank">
        <FaInstagram />
      </Link>
      <Link to="#" target="_blank">
        <BsLinkedin />
      </Link>
    </motion.div>
  )
}

export default HeaderSocial
