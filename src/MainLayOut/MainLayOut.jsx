import React from 'react'
import { Outlet } from 'react-router-dom'

export default function MainLayOut() {
  return (
    <div className='inter'>
      <Outlet></Outlet>
    </div>
  )
}
