import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector((state)=>state.app.isMenuOpen);

  if(!isMenuOpen) return null;
  return (
    <div className='w-40 mt-2 px-4 flex flex-col bg-gray-50  shadow-lg shadow-slate-300 items-start pl-6 h-fit sticky'>
      <h1>Subscription</h1>
      <ul className=''>
        <Link to={'/'}><li className='cursor-pointer'>Home</li></Link>
        <li className='cursor-pointer'>Shorts</li>
        <li className='cursor-pointer'>Videos</li>
        <li className='cursor-pointer'>Live</li>
      </ul>

      <h1 className='py-2'>Subscription</h1>
      <ul className=''>
        <li className='cursor-pointer'>Music</li>
        <li className='cursor-pointer'>Sports</li>
        <li className='cursor-pointer'>Gaming</li>
        <li className='cursor-pointer'>Movies</li>
      </ul>

      <h1 className='py-2'>Watch Later</h1>
      <ul className=''>
        <li className='cursor-pointer'>Music</li>
        <li className='cursor-pointer'>Sports</li>
        <li className='cursor-pointer'>Gaming</li>
        <li className='cursor-pointer'>Movies</li>
      </ul>
    </div>
  )
}

export default Sidebar