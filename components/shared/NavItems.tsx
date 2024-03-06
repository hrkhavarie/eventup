'use client'
import React from 'react'
import { HeaderLinks } from '@/constants';
import Link from 'next/link'
import { usePathname } from 'next/navigation';


const NavItems = () => {
    const pathname = usePathname();
  return (
      <ul className='flex flex-col md:flex-between w-full items-center gap-5 md:flex-row'>
      {HeaderLinks.map((item) => {
        const isActive = pathname === item.route;
        return(
            <li key={item.label} className={`${isActive && 'text-primary-500 font-bold'} flex-center p-medium-16 whitespace-nowrap`}>
                <Link  href={item.route}>{item.label}</Link>
            </li> 
                    )
            }
                )}
                </ul>
        )
}

export default NavItems