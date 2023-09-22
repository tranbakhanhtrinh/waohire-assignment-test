'use client'
import React from 'react'
import SectionTitle from '../common/SectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation } from 'swiper/modules'
import './Customers.scss'
import { customersCmt } from '@/constants/customersCmt'
import Comment from '../common/Comment'

const Customers = () => {
  return (
    <section className='customers py-12 pe-0'>
      <div className="container lg:mr-0 lg:pe-0">
        <div className="block lg:flex">
          <div className='mb-4 lg:mb-0 lg:basis-[70%]'>
            <SectionTitle>
              Our <span className='font-medium'>customers</span> <br />
              think we’re <br />
              the best
            </SectionTitle>
            <div className="flex items-center gap-4 swiper-btn">
              <div className='swiper-btn--prev'></div>
              <div className='swiper-btn--next'></div>
            </div>
          </div>
          <Swiper
            spaceBetween={20}
            className="mySwiper"
            // freeMode={true}
            modules={[FreeMode, Navigation]}
            navigation={
              {
                nextEl: '.swiper-btn--next',
                prevEl: '.swiper-btn--prev',
              }
            }
            breakpoints={{
              320: {
                slidesPerView: 1,
                centeredSlides: true,
                freeMode: false
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
              1400: {
                slidesPerView: 3,
                // centeredSlides: true,
                // freeMode: false,
                // initialSlide: 1,
              }
            }}
          >
            {customersCmt.map(({ comment, imgUrl, customerName, customersPos }, i) => (
              <SwiperSlide key={`${customerName + i}`}>
                <Comment comment={comment} imgUrl={imgUrl} customerName={customerName} customersPos={customersPos} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Customers