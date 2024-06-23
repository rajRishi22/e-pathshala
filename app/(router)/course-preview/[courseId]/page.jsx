"use client"
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import CourseVideoDescription from '../../_components/CourseVideoDescription'
import GlobalApi from '@/app/_utils/GlobalApi'

function CoursePreview({params}) {
    const [courseInfo,setcourseInfo]=useState();
    useEffect(()=>{
        params&&getCourseInfoById();
    },[params])
    const getCourseInfoById=()=>{
      GlobalApi.getCourseById(params?.courseId).then((resp)=>{
        console.log(resp);
        setcourseInfo(resp?.courseLists);
      })
    }
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-3'>
        {/* title and desc */}
      <div className='col-span-2 bg-purple-300'>

      <CourseVideoDescription courseInfo={courseInfo}/>

      </div>
    </div>
  )
}

export default CoursePreview