import React from 'react'
import logo from '../assets/logo.svg';

function Header() {
  return (
    <div >
      <header className='w-full h-20 text-xl p-10 py-6 font-semibold border-black flex  justify-between space-x-26'>
        <img src={logo} alt="logo-link"  className='w-40 h-10'/>
        <div className='flex justify-between w-80'>
        <a href="/">Menu</a>
        <a href="/">Location</a>
        <a href="/">About</a>
        </div>
        <button className='bg-red-600 w-20 h-10 rounded-sm box-border p-1 text-sm mr-16' >Login</button>
      </header>
    </div>
  )
}

export default Header
