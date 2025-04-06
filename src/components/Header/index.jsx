
import React from 'react'
import { IoBookmarks } from 'react-icons/io5';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
  <header className='flex items-center justify-between mb-10'>

        <Link to="/">
        <img src="public/logo.svg" 
        className='max-w-[150px]'
        alt="" />
        </Link>

        <Link className='flex gap-5 items-center hover:text-gray-300 transition'
         to="/watch-list">
        
        <div className='relative '>
        <IoBookmarks   className='text-xl'/>
       <span  className='absolute right-[-13px] top-[-13px] bg-red-500 size-5 rounded-full grid place-items-center text-sm font-semibold'
       >0</span>
        </div>

        <span>İzleme Listesi</span>
      </Link>
     </header>
  )
}

export default Header;
