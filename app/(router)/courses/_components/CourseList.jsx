// import GlobalApi from '@/app/_utils/GlobalApi'
// import React, { useEffect } from 'react'
// import Link from 'next/link'
// import getAllCourseList from '@/app/_utils/GlobalApi'
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
// import { useState } from 'react'
// import CourseItem from './CourseItem'
// import { Link } from 'lucide-react'
// function CourseList() {
//   const  [CourseList, setCourseList] =useState([]);
//     useEffect(() => {
//         getAllCourses();
//     }, [])
//     const getAllCourses = () => {
//         GlobalApi.getAllCourseList().then(resp => {
//             console.log(resp);
//             setCourseList(resp.courseLists);
//     })
// }
//   return (
//     <div className='p-5 bg-white mt-6'>
//       {/* Title and Filter */}
//       <div>
//     <h2 className='text-[18px] font-bold text-primary'>All Courses</h2>
//     <Select>
//   <SelectTrigger className="w-[180px]">
//     <SelectValue placeholder="Select" />
//   </SelectTrigger>
//   <SelectContent>
//     <SelectItem value="light">All</SelectItem>
//     <SelectItem value="dark">Paid</SelectItem>
//     <SelectItem value="system">Free</SelectItem>
//   </SelectContent>
// </Select>

//       </div>
//       {/* Display Course List */}
//       <div className='grid grid-col-2 lg:grid-col-3 gap-4 grid-flow-col'>
//         {CourseList?.length>0?  CourseList.map((item,index) => (
//           <Link href={`/course-preview/`+item.slug}>
//           <div key={index}>
//             <CourseItem course={item}/>
//             </div>
//             <Link/>
//         )):
//         [1,2,3,4,5,6,7].map((item,index) => (
//           <div key={index} className='w-full h-[240px] rounded-xl margin-2 bg-slate-200 animate-bounce'>

//           </div>
//         )
//         }
//       </div>
//     </div>
//   )
// }

// export default CourseList


import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import CourseItem from './CourseItem'

function CourseList() {
  const [CourseList, setCourseList] = useState([]);

  useEffect(() => {
    getAllCourses();
  }, []);

  const getAllCourses = () => {
    GlobalApi.getAllCourseList().then(resp => {
      console.log(resp);
      setCourseList(resp.courseLists);
    });
  };

  return (
    <div className='p-5 bg-white mt-6'>
      {/* Title and Filter */}
      <div>
        <h2 className='text-[18px] font-bold text-primary'>All Courses</h2>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="paid">Paid</SelectItem>
            <SelectItem value="free">Free</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* Display Course List */}
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
        {CourseList?.length > 0 ? 
          CourseList.map((item, index) => (
            <div key={index}>
              <Link href={`/course-preview/${item.slug}`}>
                
                  <CourseItem course={item} />
              
              </Link>
            </div>
          )) : 
          [1, 2, 3, 4, 5, 6, 7].map((item, index) => (
            <div key={index} className='w-full h-[240px] rounded-xl margin-2 bg-slate-200 animate-pulse'>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default CourseList
