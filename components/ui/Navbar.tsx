import { UserButton } from '@clerk/nextjs'
import {  currentUser } from '@clerk/nextjs/server'
import React from 'react'

const Navbar = async() => {
  return (
    <div className="navbar bg-base-100 fixed z-10">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">ImageCraft</a>
  </div>
  <div className="flex gap-x-2">
     
      <UserButton  />
    </div>
  </div>
  )
}

export default Navbar
