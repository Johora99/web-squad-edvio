import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayOut from '../MainLayOut/MainLayOut'
import HomePage from '../Pages/HomePage'

export default function RouterProvider() {
  return (
    <Routes>
      <Route path='/' element={<MainLayOut></MainLayOut>}>
         <Route index element={<HomePage></HomePage>}></Route>
      </Route>
    </Routes>
  )
}
