import React from 'react'
import Image from 'next/image'

type Props = {
  src: string,
  alt: string,
}

const Facilities = ({ src, alt }: Props) => {
  return (
    <div className='flex items-center gap-3 py-4'>
      <Image src={src} alt={alt} width={30} height={30} />
      <span className='font-inter text-[30px] whitespace-nowrap'>{alt}</span>
    </div>
  )
}

export default Facilities