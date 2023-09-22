import React from 'react'
import SectionTitle from '../common/SectionTitle'
import PurpilTitle from '../common/PurpilTitle'
import Link from 'next/link'
import Image from 'next/image'

const OurValue = () => {
  return (
    <section>
      <div className='container py-12'>
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-12">
          <div className='w-full mb-4 order-2 lg:order-1'>
            <div className='flex items-end gap-4'>
              <div className='relative basis-2/3 mb-8'>
                <Image src='/assets/value1.png' alt='Our value img 1' width={100} height={100} className='w-full' />
                <div className='bg-purpil absolute bottom-[-2rem] left-[-27px] w-[170px] h-[118px] z-[-1]'></div>
              </div>
              <Image src='/assets/value2.png' alt='Our value img 2' width={100} height={100} className='w-full basis-1/3 mt-4' />
            </div>
          </div>
          <div className='w-full mb-4 order-1 lg:order-2'>
            <SectionTitle sectionName='Our value'>
              Unlocking <br />
              Real Appraisal <br />
              <PurpilTitle>Services</PurpilTitle>
            </SectionTitle>
            <div className="block sm:flex items-center gap-4">
              <Link href='#' className='register font-medium capitalize text-white my-4'>
                get started free
              </Link>
              <p>
                Our experts can provide valuable insights <br className='hidden sm:block' />
                and assist you in identifying properties.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default OurValue