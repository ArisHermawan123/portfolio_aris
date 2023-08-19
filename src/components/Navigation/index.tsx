import { motion } from 'framer-motion'
import {
  AiOutlineProject,
  AiOutlineHome,
  AiOutlineUser,
  AiFillHome,
  AiOutlineBook,
  AiOutlineMessage,
} from 'react-icons/ai'
import { MdMiscellaneousServices } from 'react-icons/md'
import HeadersIcon from './HeadersIcon'
import './style.css'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Navigation: React.FC = () => {
  const { hash } = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <>
      <div
        className={`hidden fixed w-full hrefp-0 z-50 bg-[var(--color-bg)] sm:flex items-center p-2 h-[75px] lg:px-5 ${
          isScrolled ? 'shadow-lg' : ''
        }`}
      >
        {/* left */}
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="flex items-center"
        >
          <h2 className="h-6 text-gray-300 ml-4 text-lg md:text-2xl font-semibold tracking-[5px] uppercase">
            aris
          </h2>
        </motion.div>
        {/* center */}
        <div className="flex justify-end flex-grow">
          <motion.div
            initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="flex lg:space-x-10"
          >
            <a href="#">
              <HeadersIcon
                active={hash !== '' ? false : true}
                Icon={AiFillHome}
              />
            </a>
            <a href="#about">
              <HeadersIcon
                active={hash !== '#about' ? false : true}
                Icon={AiOutlineUser}
              />
            </a>
            <a href="#experience">
              <HeadersIcon
                Icon={AiOutlineBook}
                active={hash !== '#experience' ? false : true}
              />
            </a>
            <a href="#services">
              <HeadersIcon
                Icon={MdMiscellaneousServices}
                active={hash !== '#services' ? false : true}
              />
            </a>
            <a href="#project">
              <HeadersIcon
                active={hash !== '#project' ? false : true}
                Icon={AiOutlineProject}
              />
            </a>
            <a href="#contact">
              <HeadersIcon
                active={hash !== '#contact' ? false : true}
                Icon={AiOutlineMessage}
              />
            </a>
          </motion.div>
        </div>
        {/* right */}
      </div>
      <div className="h-[75px] w-full hidden sm:block" />

      <nav className="sm:hidden">
        <a href="#" className={hash === '' ? 'active' : ''}>
          <AiOutlineHome />
        </a>
        <a href="#about" className={hash === '#about' ? 'active' : ''}>
          <AiOutlineUser />
        </a>
        <a
          href="#experience"
          className={hash === '#experience' ? 'active' : ''}
        >
          <AiOutlineBook />
        </a>
        <a href="#services" className={hash === '#services' ? 'active' : ''}>
          <MdMiscellaneousServices />
        </a>
        <a href="#project" className={hash === '#project' ? 'active' : ''}>
          <AiOutlineProject />
        </a>
        <a href="#contact" className={hash === '#contact' ? 'active' : ''}>
          <AiOutlineMessage />
        </a>
      </nav>
    </>
  )
}

export default Navigation
