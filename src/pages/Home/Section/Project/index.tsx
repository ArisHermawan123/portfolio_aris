import { Link } from 'react-router-dom'
import { data } from '@data/home'
import Info from '@components/Modal/Info'
import SwiperJs from './components/SwiperJs'
import './project.css'
const Project = () => {
  type DummyDataUser = {
    id: number
    image: string[]
    title: string
    demo: string
    figma: string
  }

  return (
    <section id="project" className="pt-12 sm:pt-28">
      <div className="flex justify-center flex-col items-center space-y-10 mb-12">
        <h2 className="uppercase tracking-[10px] sm:tracking-[20px] text-[var(--color-primary)] shadow-md ml-5 text-gray-500 text-lg sm:text-2xl">
          projects
        </h2>
        <h5 className="sm:text-lg text-gray-400 ">My Recent Work</h5>
      </div>

      <div className="container flex justify-center items-start flex-wrap gap-10">
        {data.map((val: DummyDataUser) => {
          const handleDemo = () => {
            if (val.demo === 'none') {
              Info()
            } else {
              window.open(val.demo, '_blank')
            }
          }
          return (
            <article
              key={val.id}
              className="w-full bg-[var(--color-bg-variant)] rounded-3xl p-10 sm:w-7/12 md:w-7/12 lg:w-5/12 lg:p-4  h-full x:h-8/12 flex flex-col justify-center"
            >
              <div className="w-full md:p-10 ">
                <SwiperJs val={val} />
              </div>
              <h3 className="text-lg md:text-xl lg:px-2 lg:text-2xl my-2 w-full font-medium">
                {val.title}
              </h3>
              <div className="portfolio__item-cta">
                <Link to={val.figma} className="btn" target="_blank">
                  Figma
                </Link>
                <button onClick={handleDemo} className="btn btn-primary">
                  Live Demo
                </button>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Project
