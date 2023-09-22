import Image from 'next/image'
import React from 'react'
import './About.scss'
import Facilities from '../common/Facilities'
import { facilities } from '@/constants/facilities'

const About = () => {
  return (
    <section className='about pt-16 relative'>
      <h1 className='uppercase text-center font-amulya w-full font-normal'>
        We are a leading <br />
        <strong>real estate <span className='text-purpil'>agency</span></strong>
      </h1>
      <picture>
        <Image src='/assets/bg_about.png' alt='About' className='w-full' width={1841} height={894} />
      </picture>
      <div className='overflow-hidden facility-wrapper border-b-[0.5px] border-t-[0.5px] border-[#A9A7A7] border-solid'>
        <div className='facility-container flex items-center'>
          {facilities.map(({ src, alt }) => (
            <Facilities key={alt} src={src} alt={alt} />
          ))}
        </div>
        <div className='facility-container flex items-center'>
          {facilities.map(({ src, alt }) => (
            <Facilities key={src} src={src} alt={alt} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default About