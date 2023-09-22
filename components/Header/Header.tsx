'use client'
import { useState, useRef, useEffect } from 'react'
import './Header.scss'
import Link from 'next/link'
import { navItems } from '@/constants/navItems'

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [activeText, setActiveText] = useState<string>('active1')
  const toggleMenu = (e: any) => {
    e.preventDefault()
    setToggle(!toggle)
  }
  useEffect(() => {
    function handleClickOutside (event: any) {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setToggle(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [buttonRef])

  return (
    <header className='mx-auto p-2.5 lg:px-10'>
      <button ref={buttonRef} className={`burger-btn block sm:hidden ${toggle ? 'change' : ''}`} onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </button>
      <nav className={`nav w-full p-5 bg-white sm:bg-transparent absolute sm:relative flex flex-col sm:flex-row ${toggle ? 'opacity-100 z-[99] visible' : 'opacity-0 sm:opacity-100 invisible sm:visible z-[1]'}`}>
        <ul className='nav--links gap-4 md:gap-[4.438rem] flex justify-center items-center flex-col sm:justify-normal sm:flex-row sm:items-start'>
          {navItems.map(({ className, href, itemName }, i) => (
            <li key={itemName} className={`${className} ${toggle ? 'active-items' : ''}`}>
              <Link
                href={href}
                onClick={() => setActiveText(`active${i}`)}
                className={`${activeText === `active${i}` ? 'active' : ''}`}
              >
                {itemName}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className='flex items-center justify-end gap-3 w-full'>
        <Link href='#' className='capitalize font-semibold'>
          Sign in
        </Link>
        <Link href='#' className='register font-medium capitalize text-white'>
          get started free
        </Link>
      </div>

    </header>
  )
}

export default Header