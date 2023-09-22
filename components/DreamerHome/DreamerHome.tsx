'use client'
import React from 'react'
import PurpilTitle from '../common/PurpilTitle'
import SectionTitle from '../common/SectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react'
import { houseList } from '@/constants/houseList'
import './DreamerHome.scss'
import Image from 'next/image'
import Link from 'next/link'
import { FreeMode } from 'swiper/modules'

const DreamerHome = () => {
  return (
    <section className='dreamerHome py-12'>
      <div className='container'>
        <SectionTitle sectionName='Dreamer Home' className='text-center mb-8' align>
          If you&apos;re in need of <PurpilTitle>rental</PurpilTitle> services
        </SectionTitle>
      </div>
      <div className='px-4 md:ps-4 md:pe-0 '>
        <Swiper
          spaceBetween={20}
          // centeredSlides={true}
          className="mySwiper"
          modules={[FreeMode]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              initialSlide: 0,
              centeredSlides: false
            },
            768: {
              slidesPerView: 2,
              initialSlide: 0,
              freeMode: false
            },
            1024: {
              slidesPerView: 4,
              initialSlide: 1,
              centeredSlides: true
            },
          }}
        >
          {houseList.map(({ imgUrl, houseName, houseDesc, btnBook }, i) => (
            <SwiperSlide key={`${houseName + i}`}>
              <Image src={imgUrl} alt={houseName} width={100} height={100} className='mb-4' />
              <h1 className='font-inter text-[1.875rem] mb-4'>{houseName}</h1>
              <p className='font-synonym text-[1.125rem] mb-4'>{houseDesc}</p>
              <p className='flex items-center gap-4 font-space-grotesk font-bold text-[1.2rem] uppercase'>
                <Link href='#'>{btnBook}</Link>
                <span><Image src='/assets/arrow1.svg' alt='Arrow 1' width={15} height={15} /></span>
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default DreamerHome