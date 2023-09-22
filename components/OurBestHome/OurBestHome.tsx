'use client'
import React from 'react'
import SectionTitle from '../common/SectionTitle'
import PurpilTitle from '../common/PurpilTitle'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { bestHomes } from '@/constants/bestHomes'
import Image from 'next/image'
import './OurBestHome.scss'
import 'swiper/css/navigation'

const OurBestHome = () => {
  return (
    <section className='our-best-home py-12'>
      <div className='container'>
        <SectionTitle sectionName='Our Best homes' className='text-center mb-8' align>
          Find your <PurpilTitle>dream</PurpilTitle> <br />home here
        </SectionTitle>
        <div className=''>
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {bestHomes.map(({ imgUrl, location, price }, i) => (
              <SwiperSlide key={`${price + i}`}>
                <div className="relative">
                  <Image src={imgUrl} alt={location} width={100} height={100} priority className='w-full mb-4' />
                  <p className='location font-synonym font-semibold text-white lg:text-[1.6rem] absolute bottom-4 lg:bottom-8 left-4 lg:left-8'>{location}</p>
                  <div className='price absolute bottom-[0.5rem] lg:bottom-[1.5rem] right-4 lg:right-8'>
                    <p className='font-synonym font-semibold text-white lg:text-[1.4rem] '>{price}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='block md:flex items-center gap-4'>
          <div className='relative basis-1/2'>
            <Image src='/assets/bestHome2.svg' alt='bestHome2' width={100} height={100} className='w-full mb-4' />
            <div className='other-price absolute top-4 right-4'>
              <p className='font-synonym font-semibold text-white lg:text-[1.4rem]'>
                $10,000
              </p>
            </div>
          </div>
          <div className='relative basis-1/2'>
            <Image src='/assets/bestHome3.svg' alt='bestHome3' width={100} height={100} className='w-full mb-4' />
            <div className='other-price absolute top-4 right-4'>
              <p className='font-synonym font-semibold text-white lg:text-[1.4rem]'>
                $10,000
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurBestHome