import img1 from '../assets/logos/1.webp'
import img2 from '../assets/logos/2.webp'
import img3 from '../assets/logos/3.webp'
import img4 from '../assets/logos/4.webp'
import img5 from '../assets/logos/5.webp'
import img7 from '../assets/logos/7.webp'
import img8 from '../assets/logos/8.webp'
import img9 from '../assets/logos/9.webp'
import img10 from '../assets/logos/10.webp'
import img11 from '../assets/logos/11.webp'



// Carrossel Infinito das Logos
function InfiniteLogoCarousel(props) {
  const logos = [
    img1, img2, img3, img4, img5,
    img7, img8, img9, img10, img11
  ]

  const duplicated = [...logos, ...logos]

  return (
    <div className="overflow-hidden py-10 " data-aos='fade-down' data-aos-delay={props.delay} >
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>

      <div className="relative w-full  ">
        <div
          className="flex w-max animate-scroll"
          style={{
            animation: 'scroll 50s linear infinite',
          }}
        >
          {duplicated.map((logo, i) => (
            <img
              loading='lazy'
              key={i}
              src={logo}
              alt={`Logo ${i}`}
              className="h-45 lg:h-55 mx-8 transition duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  )
}





export default InfiniteLogoCarousel
 