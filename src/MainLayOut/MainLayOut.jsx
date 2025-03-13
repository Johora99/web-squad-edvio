import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Shared/Navbar'

export default function MainLayOut() {
  return (
    <div>
      <Navbar/>
      <Outlet></Outlet>
    </div>
  )
}
