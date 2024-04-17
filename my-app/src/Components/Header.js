import React from 'react'
import BaseTransFull from '../Assets/BaseTransFull.png'
import { Link } from "react-router-dom"



function Header() {
  return (
    <>
    <div className="navbar justify-center bg-amber-950">               
      <div className="navbar-center gap-10">
        <Link to='/' className='hover:text-yellow-600'>Home</Link>
        <Link to='/' className='hover:text-yellow-600'  >About Us</Link>
        <Link to='/' className=''><img className="w-52 h-92" src= {BaseTransFull}></img> </Link>
        <Link to='/' className='hover:text-yellow-600'>Services</Link>
        <Link to='/' className='hover:text-yellow-600'>Contact Us</Link>
      </div>
  </div>
  </>
  )
}

export default Header