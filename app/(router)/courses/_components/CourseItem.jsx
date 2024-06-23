import { Item } from '@radix-ui/react-select'
import Image from 'next/image'
import React from 'react'
import { Book, BookIcon } from 'lucide-react'
function CourseItem({course}) {
  return (
    <div className='border rounded-xl p-1 hover:shadow-xl shadow-purple cursor-pointer'>
        <Image src={course?.banner?.url}
        width={350}
        height={150}
        alt="banner"
        className='rounded-xl'
        />
        <div >
            <h2 className='font-medium'>{course.name}</h2>
            <div className='flex justify-between'>
            <h2 className='text-sm text-gray-500'>{course.author}</h2>
            <div className='flex gap-1'>
            <Image src='/youtube.png' alt='youtube' width={20} height={20}/>
            {/* <h2 className='text-[14px] text-gray-400'>Watch on Youtube</h2> */}
            <BookIcon/>
            </div>

            </div>
        </div>
            <h2>{course?.free?'Free':'Paid'}</h2>
    </div>
  )
}

export default CourseItem