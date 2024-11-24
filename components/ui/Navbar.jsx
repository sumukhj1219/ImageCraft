'use client'
import { UserButton } from '@clerk/nextjs'
import React from 'react'
import { usePathname } from 'next/navigation'
import { ArrowUp, Image } from 'lucide-react'

const Navbar = () => {
  
  const pathname = usePathname();
  const routes = [
    {
      icon: <Image />,
      label: 'Upload a new image',
      href: '/image-upload',
    },
  ];
  return (
    <div className="navbar bg-base-100 fixed z-10">
      <div className="flex-1">
        <div className='block md:hidden'>
          <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>Upload <ArrowUp /></button>
          <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello! </h3>
              <p className="py-4">
                {routes.map((route)=>(
                  <span key={route.href} className='p-3 w-full bg-base-200 rounded-md ring-1 ring-white'>
                     <a key={route.href} href={route.href} className='hover:bg-base-300 text-lg'>{route.label} 📷</a>
                  </span>
                ))}
              </p>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
        <a className="btn btn-ghost items-center justify-center text-xl hidden md:block text-muted" href='/'>
          ImageCraft
        </a>
      </div>
      <div className="md:flex gap-x-2 mr-10 md:mr-5">
        <UserButton />
      </div>
    </div>
  )
}

export default Navbar
