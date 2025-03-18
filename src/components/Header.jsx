import { useState } from 'react'
import { Link } from "react-router-dom";
import logo from '../assets/logo/logo-final.png';

function Header() {
  return (
    <div className='fixed top-0 left-0 w-full z-50 shadow- lg p-3 bg- white'>
        <Link to='/'><img src={logo} alt='Logo' className='cursor-pointer' /></Link>
    </div>
  )
}

export default Header