"use client"
import React from 'react'
import EntryBanner from './_components/EntryBanner'
import CourseList from './_components/CourseList'
import SideBanners from './_components/SideBanners'
import SideNav from '../_components/SideNav'

function page() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 p-5'>
      <div className='col-span-3'>
        <EntryBanner />
        {/* Courselist section */}
        <CourseList/>
      </div>
      <div>
        <SideBanners/>
      </div>
    </div>
  )
}

export default page