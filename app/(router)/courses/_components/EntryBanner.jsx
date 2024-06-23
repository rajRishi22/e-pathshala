import React from 'react'
import Image from 'next/image'
function EntryBanner() {
  return (
    <div className='flex gap-5 items-center bg-white rounded-xl p-5'>
        <Image src='/logo.svg' width={100} height={100}/>
        <div>
            <h2>Welcome to E-pathshala</h2>
            <h2>One stop solution to your college placements.</h2>
        </div>
        
    </div>
  )
}

export default EntryBanner