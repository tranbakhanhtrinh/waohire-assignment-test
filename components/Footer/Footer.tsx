import React from 'react'
import './Footer.scss'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-black text-white font-synonym py-8 text-[18px]'>
      <div className='container'>
        <div className="block lg:flex justify-between">
          <div className='social'>
            <p className='mb-4'>
              Our experts can provide valuable insights <br className='hidden lg:block' />
              and assist you in identifying properties.
            </p>
            <div className="flex items-center gap-5 mb-4">
              <Image src='/assets/instagram.svg' alt='Instagram' width={19} height={19} style={{ width: 19, height: 19 }} />
              <Image src='/assets/facebook.svg' alt='Facebook' width={19} height={19} style={{ width: 19, height: 19 }} />
              <Image src='/assets/youtube.svg' alt='Facebook' width={24} height={19} style={{ width: 24, height: 19 }} />
            </div>
          </div>
          <div className='navigation-ft block sm:flex justify-between lg:gap-16'>
            <div className='product mb-6 sm:mb-0'>
              <h6 className='text-[20px] font-semibold'>Product</h6>
              <ul>
                <li>Features</li>
                <li>Integrations</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div className='company mb-6 sm:mb-0'>
              <h6 className='text-[20px] font-semibold'>Company</h6>
              <ul>
                <li>About us</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Customers</li>
                <li>Brand</li>
              </ul>
            </div>
            <div className='resources mb-6 sm:mb-0'>
              <h6 className='text-[20px] font-semibold'>Resources</h6>
              <ul>
                <li>Community</li>
                <li>Contract</li>
                <li>DPA</li>
                <li>Terms of services</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="block sm:flex justify-between items-center">
          <p className='mb-4 lg:mb-0'>@2023Capella. All rights reserved</p>
          <Link href='#'>
            Term & Condition
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer