import React from 'react'
import NavLink from './NavLink'
import Link from 'next/link'



const MenuOverlay = ({ links }) => {
  return (
    



    <ul className='flex flex-col py-4 items-center '>{links.map((link, index) => (
    <li key={index} className='py-4'>
    <NavLink href={link.path} title={link.title} />
    </li>
    ))}
    </ul>
    
  )
}

export default MenuOverlay
