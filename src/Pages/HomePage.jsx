import React from 'react'
import Banner from './Banner/Banner'
import AllCourses from '../Components/AllCourses/AllCourses'

export default function HomePage() {
  return (
    <>
    <div>Edivo HomePage</div>
    <Banner></Banner>
    <section className='my-10 lg:my-20'>
      <AllCourses></AllCourses>
    </section>
    </>
    
  )
}
