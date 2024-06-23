"use client"
import React, { useEffect } from 'react';
import { BookOpen, School, CircleUser, Book } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function SideNav() {
    const menu = [
        {
            id: 1,
            name: 'All courses',
            icon: Book,
            path:'/allcourses'
        },
        {
            id: 2,
            name: 'Enroll',
            icon: School,
            path:'/enroll'
        },
        {
            id: 3,
            name: 'Profile',
            icon: CircleUser,
            path:'/profile'
        },
        {
            id: 4,
            name: 'Store',
            icon: CircleUser,
            path:'/store'
        },
    ];
    const path=usePathname();
    useEffect(()=>{
        console.log("path",path);
    },[])
    return (
        <div className='bg-white p-5 shadow-sm border h-screen'>
            <Image src='/logo.svg' alt='logo' width={170} height={80} />
            <div className=''>
                {menu.map((item, index) => (
                    <Link href={item.path}>
                    <div key={item.id} className='flex gap-3 mt-1 p-3 text-[20px] items-center text-gray-500 cursor-pointer hover:bg-purple-400 rounded-md'>
                        <item.icon />
                        <h2>{item.name}</h2>
                    </div>
                    </Link>

                ))}
            </div>
        </div>
    );
}

export default SideNav;
