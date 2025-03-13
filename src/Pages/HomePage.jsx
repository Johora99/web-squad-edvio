import React from 'react'
import Banner from './Banner/Banner'
import CommonQuestion from '../components/CommonQuestion'
import ContactUs from '../components/ContactUs'
import Reviews from '../components/Reviews'

export default function HomePage() {
  return (
    <>
    <div>Edivo HomePage</div>
    <Banner></Banner>
    <CommonQuestion></CommonQuestion>
    <Reviews></Reviews>
    <ContactUs></ContactUs>
    </>
    
  )
}
