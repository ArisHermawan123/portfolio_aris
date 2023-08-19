import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

type SwiperJsProps = {
  val: {
    image: string[]
  }
}

const SwiperJs: React.FC<SwiperJsProps> = ({ val }) => {
  return (
    <Swiper
      spaceBetween={30}
      effect={'fade'}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        bulletActiveClass: 'swiper-pagination-bullet-active bg-[#b66a08]',
        bulletClass: 'swiper-pagination-bullet mt-20',
      }}
      modules={[Autoplay, Pagination, Navigation, EffectFade]}
      className="mySwiper mt-[-1px]"
    >
      {val.image.map((url: string, index: number) => (
        <SwiperSlide key={index}>
          <img src={url} alt="main banner" />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SwiperJs
