import Image from 'next/image'
import React from 'react'

type Props = { comment: string, imgUrl: string, customerName: string, customersPos: string }

const Comment = ({ comment, imgUrl, customerName, customersPos }: Props) => {
  return (
    <div className='text-[#010101] text-[18px] bg-white p-[0.5rem] lg:p-4 h-full flex flex-col justify-between'>
      <div className='flex justify-between items-center mb-4'>
        <Image src='/assets/closing-quote.svg' alt='Closing quote' width={40} height={28} className='w-[40px]' style={{ width: 40, height: 28 }} />
        <Image src='/assets/five-star.svg' alt='5 stars' width={114} height={26} style={{ width: 114, height: 26 }} />
      </div>
      <p className='mb-4 grow'>
        {comment}
      </p>
      <div className='flex justify-between items-center'>
        <div className='flex justify-between items-center gap-4'>
          <Image src={imgUrl} alt={customerName} width={70} height={70} style={{ width: 70, height: 70 }} />
          <p className='font-synonym  font-medium'>
            {customerName} <br />
            <span className='text-[15px]'>{customersPos}</span>
          </p>
        </div>
        <Image src='/assets/check.svg' alt='Check' width={24} height={24} style={{ width: 24, height: 24 }} />
      </div>
    </div>
  )
}

export default Comment