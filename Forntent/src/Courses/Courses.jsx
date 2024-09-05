import React from 'react'
import NavBar from '../Component/NavBar'
import Footer from '../Component/Footer'
import Course from '../Component/Course'

export default function Courses() {

  return (
    <div>
      <NavBar/>
      <div className='min-h-screen'>
      <Course/>
      </div>
     
      <Footer/>
    </div>
  )
}
