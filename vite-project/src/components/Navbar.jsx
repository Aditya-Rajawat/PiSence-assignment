import React, { useState } from 'react'
import sidebar from '../assets/sidebar.svg'
import userProfile from '../assets/user.png'
import Sidebar from './Sidebar';
import cross from '../assets/cross.svg'

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open)
    }

  return (
    <div className='w-full bg-gray-300 py-6 flex px-8 h-20 justify-between items-center'>
         {open ? <img className='w-10 h-10 cursor-pointer z-20' src={cross} alt="" onClick={handleClick} /> : <img className='w-7 h-7 cursor-pointer z-20' src={sidebar} alt="" onClick={handleClick} />} 
        {open ? <Sidebar /> : null}
        <img className='w-10 h-10 cursor-pointer' src={userProfile} alt="" />
    </div>
  )
}

export default Navbar