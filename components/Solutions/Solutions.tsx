import React from 'react'
import SectionTitle from '../common/SectionTitle'
import PurpilTitle from '../common/PurpilTitle'
import Link from 'next/link'
import Image from 'next/image'
import './Solutions.scss'

const Solutions = () => {
  return (
    <section className='solutions'>
      <div className='container pt-8 pb-4'>
        <div className="block lg:flex gap-4">
          <div className='w-full mb-4'>
            <SectionTitle sectionName='Solution'>
              We assist buyers <br />
              in finding their <br />
              <PurpilTitle>dream homes</PurpilTitle>
            </SectionTitle>
            <div className="block sm:flex items-center gap-4">
              <Link href='#' className='register font-medium capitalize text-white my-4'>
                get started free
              </Link>
              <p>
                Our agents will guide you through the <br />
                entire buying process, from property
              </p>
            </div>
          </div>
          <div className='w-full mb-4'>
            <Image src='/assets/union.svg' alt='Union' width={100} height={100} className='w-full mb-4' />
            <div className="flex items-center justify-center house">
              <Image src='/assets/img1.svg' alt='House 1' width={70} height={70} />
              <Image src='/assets/img2.svg' alt='House 2' width={70} height={70} />
              <div className='bg-purpil font-space-grotesk text-[20px] w-[70px] h-[70px] text-white flex items-center justify-center rounded-full border-solid border-white border-2 house--number'>
                4+
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Solutions