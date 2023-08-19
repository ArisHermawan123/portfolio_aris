import CTA from './components/CTA'
import HeaderSocial from './components/HeaderSocial'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import ProfilePicture from '@assets/images/logo.jpeg'
const Header = () => {
  const [text] = useTypewriter({
    words: [
      'My name is Achmad Aris Hermawan',
      'You can call me Aris',
      'I am a UI/UX Designer',
    ],
    loop: true,
    delaySpeed: 2500,
  })
  return (
    <section className="container pt-10">
      <h4 className="text-gray-300 text-xl text-center">Hello World!</h4>
      <h1 className="text-xl lg:text-3xl font-semibold text-gray-200 px-2 lg:px-10 mb-10 mt-5 text-center">
        <span className="mr-3  text-[#4db5ff]">{text}</span>
        <Cursor cursorColor="#4db5ff" />
      </h1>
      <h4 className="uppercase tracking-[8px] text-gray-400 text-lg xl:text-xl text-center">
        UI/UX Designer
      </h4>
      <CTA />
      <div className="flex w-full justify-between mt-10 md:mt-32 items-center">
        <HeaderSocial />
        <motion.img
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -15, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
            delay: 1,
          }}
          className="rounded-full h-[200px] sm:h-[300px] w-[200px] sm:w-[300px] object-cover mx-auto"
          src={ProfilePicture}
          alt="me"
        />
        <motion.a
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
          className="flex flex-col text-sm md:text-xl text-center"
        >
          <span>S</span>
          <span>C</span>
          <span>R</span>
          <span>O</span>
          <span>L</span>
          <span>L</span>
        </motion.a>
      </div>
    </section>
  )
}

export default Header
