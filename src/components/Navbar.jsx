import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  const handleLinkClick = () => {
    setNav(false)
  }

  return (
    <div className='bg-black text-gray-400 h-[80px] w-full flex justify-between items-center fixed top-0 left-0 z-50'>
      <h1 className='text-3xl font-bold primary-color ml-4'>Angel Martinez</h1>
      <ul className='hidden md:flex'>
        <li className='p-5'><a href='#home' className='hover:text-blue-300'>Home</a></li>
        <li className='p-5'><a href='#about' className='hover:text-blue-300'>About</a></li>
        <li className='p-5'><a href='#experience' className='hover:text-blue-300'>Experience</a></li>
        <li className='p-5'><a href='#projects' className='hover:text-blue-300'>Projects</a></li>
        <li className='p-5'><a href='#contact' className='hover:text-blue-300'>Contact</a></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden mr-6'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>

      <div className={nav ? 'fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='text-3xl primary-color m-4'>Angel Martinez</h1>
        <ul className='p-8 text-2xl'>
          <li className='p-2'>
            <a href='#home' className='hover:text-blue-300' onClick={handleLinkClick}>Home</a>
          </li>
          <li className='p-2'>
            <a href='#about' className='hover:text-blue-300' onClick={handleLinkClick}>About</a>
          </li>
          <li className='p-2'>
            <a href='#experience' className='hover:text-blue-300' onClick={handleLinkClick}>Experience</a>
          </li>
          <li className='p-2'>
            <a href='#projects' className='hover:text-blue-300' onClick={handleLinkClick}>Projects</a>
          </li>
          <li className='p-2'>
            <a href='#contact' className='hover:text-blue-300' onClick={handleLinkClick}>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
