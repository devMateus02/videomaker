import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import foto1 from '../assets/feed/feed1.webp'
import foto2 from '../assets/feed/feed2.webp'
import foto3 from '../assets/feed/feed3.webp'
import foto4 from '../assets/feed/feed4.webp'
import foto5 from '../assets/feed/feed5.webp'
import foto6 from '../assets/feed/feed6.webp'
import foto7 from '../assets/feed/feed7.webp'
import foto8 from '../assets/feed/feed8.webp'

const fotos = [foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8]

export default function FotoCarousel(props) {
  return (
    <div className="w-[250px] ">
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
       className='rounded-3xl' 
       data-aos='fade-down'
       data-aos-delay={props.delay}
      >
        {fotos.map((foto, i) => (
          <SwiperSlide key={i} className='rounded-3xl'>
            <img
            loading='lazy'
              src={foto}
              alt={`Foto ${i + 1}`}
              className="w-full h-[160px] object-fill rounded-3xl shadow-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
