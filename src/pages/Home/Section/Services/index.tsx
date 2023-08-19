import { BiCheck } from 'react-icons/bi'
import './services.css'
import { dataServiceOffer } from '@data/home'

const Services = () => {
  type DataServiceOffer = {
    id: number
    text: string
  }
  return (
    <section id="services" className="pt-12 sm:pt-28">
      <div className="flex justify-center flex-col items-center space-y-10 mb-12">
        <h2 className="uppercase tracking-[10px] sm:tracking-[20px] text-[var(--color-primary)] shadow-md ml-5 text-gray-500 text-lg sm:text-2xl">
          services
        </h2>
        <h5 className="sm:text-lg text-gray-400 ">What I Offer</h5>
      </div>

      <div className="container services__container flex justify-center">
        <article className="service w-full sm:w-6/12 lg:w-7/12">
          <div className="service__head">
            <h2 className="lg:text-xl text-[#1f1f38] text-center">
              Developer Warranty
            </h2>
          </div>
          <ul className="service__list flex  flex-col justify-center  items-start">
            {dataServiceOffer.map((val: DataServiceOffer) => {
              return (
                <div key={val.id}>
                  <li>
                    <BiCheck className="service__list-icon" />
                    <h1 className="xl:text-xl">{val.text}</h1>
                  </li>
                </div>
              )
            })}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
