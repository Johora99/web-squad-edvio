import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Shared/Footer'

export default function MainLayOut() {
  return (
    <div className='inter'>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}
