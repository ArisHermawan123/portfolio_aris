import About from './Section/About'
import Contact from './Section/Contact'
import Experience from './Section/Experience'
import Header from './Section/Header'
import Project from './Section/Project'
import Services from './Section/Services'

const index = () => {
  return (
    <>
      <Header />
      <About />
      <Experience />
      <Services />
      <Project />
      <Contact />
    </>
  )
}

export default index
