import { UserButton } from '@clerk/nextjs'
import {  currentUser } from '@clerk/nextjs/server'
import React from 'react'

const Navbar = async() => {
  const user = await currentUser()
  return (
    <div className="navbar bg-base-100 fixed z-10">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">ImageCraft</a>
  </div>
  <div className="flex gap-x-2">
      <span className='mr-2'>
      {user?.firstName}
      </span>
      <UserButton  />
    </div>
  </div>
  )
}

export default Navbar
