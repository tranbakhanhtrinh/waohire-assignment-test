import Image from 'next/image'
import React, { ReactNode } from 'react'

type Props = {
  sectionName?: string;
  className?: string;
  align?: boolean
  children: string | ReactNode
}

const SectionTitle = ({ sectionName, className, align, children }: Props) => {
  return (
    <div className={className}>
      {
        sectionName && <div className={`flex items-center gap-4 mb-[1.625rem] ${align ? 'justify-center' : ''}`}>
          <Image src='/assets/arrow.svg' alt='Arrow' width={20} height={20} />
          <span className='uppercase font-space-grotesk font-bold text-[19px]'>{sectionName}</span>
        </div>
      }

      <h1 className='capitalize leading-[111.023%] font-space-grotesk text-[10vw] sm:text-[8vw] lg:text-[4.5vw] xl:text-[4.5vw] FHD:text-[4.3vw]'>
        {children}
      </h1>
    </div>
  )
}

export default SectionTitle