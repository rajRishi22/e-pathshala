import { Button } from '@/components/ui/button'
import { BellDot, Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='p-4 bg-white flex justify-between'>
        <div className='flex gap-2 border p-2'>
            <Search className='h-5 w-5 outline-none'/>
            <input type="text" placeholder="Search..." name="" id="" className='outline-none' />
            
        </div>
        <div className='flex items-center gap-4'> 
        <BellDot/>
        <Button>SignIn</Button>
        </div>
    </div>
  )
}

export default Header