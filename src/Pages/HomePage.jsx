import React from 'react'
import Banner from './Banner/Banner'
<<<<<<< HEAD
import CommonQuestion from '../components/CommonQuestion'
import ContactUs from '../components/ContactUs'
import Reviews from '../components/Reviews'
=======
import AllCourses from '../Components/AllCourses/AllCourses'
>>>>>>> upstream/development

export default function HomePage() {
  return (
    <>
    <div>Edivo HomePage</div>
    <Banner></Banner>
<<<<<<< HEAD
    <CommonQuestion></CommonQuestion>
    <Reviews></Reviews>
    <ContactUs></ContactUs>
=======
    <section className='my-10 lg:my-20'>
      <AllCourses></AllCourses>
    </section>
>>>>>>> upstream/development
    </>
    
  )
}
