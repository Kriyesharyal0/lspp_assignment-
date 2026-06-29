import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { useTestimonials } from '../hooks/useApiData'
import PhotoPlaceholder from './PhotoPlaceholder'

export default function Testimonials() {
  const { testimonials } = useTestimonials()

  if (!testimonials.length) return null

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-heading text-primary text-center">
          Hear it from our former
          <br />
          Student Partners
        </h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonials__slider"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name}>
              <div className="testimonial-card">
                <div className="testimonial-card__image">
                  <PhotoPlaceholder label="Photo goes here" />
                </div>
                <div className="testimonial-card__body">
                  <p>{t.description}</p>
                  <h3>{t.name}</h3>
                  <span>{t.batch}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
