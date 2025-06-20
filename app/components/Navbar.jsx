"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay'



const navLinks = [
    {
       title: "Home",
       path: "#Home"
    },
    {
        title: "About",
        path: "#about"
    },
    {
        title: "Projects",
        path: "#projects"
    },
    {
        title: "Contact",
        path: "#contact"
    }
]

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)



  return (
    <nav className='fixed top-0 left-0 right-0 w-full bg-[#121212]/100 z-50 !scroll-smooth'>
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href={'/'} className='font-display text-2xl md:text-3xl font-semibold text-white'>Shayan</Link>
        <div className='mobile-menu block md:hidden'>
            {
                !navbarOpen ? (
                    <button onClick={()=> setNavbarOpen(true)} className='flex item-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white'><Bars3Icon className='w-5 h-5'/></button>
                ):(
                    <button onClick={()=> setNavbarOpen(false)} className='flex item-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white'><XMarkIcon className='w-5 h-5'/></button>
                ) 
            }
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} className='z-10' /> : null}
    </nav>
  )
}

export default Navbar
