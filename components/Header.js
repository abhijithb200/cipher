import React, { useState, useEffect } from 'react'
import { ChatIcon, UserIcon } from '@heroicons/react/outline'

function Header() {
    const [profiletoggle, setProfileToggle] = useState(false)

    useEffect(() => {
        // const user = prompt('Your name')
        localStorage.setItem('username', 'Abhijith B');
    }, [])

    return (
        <div className='flex bg-white mb-2 px-2 items-center justify-between shadow-md h-20 '>

            <div className='flex space-x-2 '>
                <p className='text-2xl  font-medium text-sky-500'>CIPHER</p>
                <p className='text-sm font-thin w-56  '>Common Integrated Platform for HigherEducation and Research</p>
            </div>
            <div className='flex space-x-5 justify-center max-h-20 font-medium  text-black cursor-pointer'>
                <p className='hover:border-b-4 border-blue-500 py-7 px-3'>Home</p>
                <p className='hover:border-b-4 border-yellow-500 py-7 px-3'>About</p>
                <p className='hover:border-b-4 border-green-500 py-7 px-3'>Courses</p>
                <p className='hover:border-b-4 border-orange-500 py-7 px-3'>Colleges</p>
            </div>
            <div
                className={`flex flex-col  py-3 cursor-pointer relative  `}>
                <ChatIcon className='h-6' />
                <p className=''>Messaging</p>
                <div className='h-3 w-3
                absolute right-6 bg-green-300 rounded-full'>

                </div>
            </div>
            <div className='flex items-center space-x-3 pr-8'>
                <div onMouseEnter={() => setProfileToggle(true)}
                    onMouseLeave={() => setProfileToggle(false)}
                >
                    <div
                        className={`flex flex-col  py-3 cursor-pointer  ${profiletoggle && 'text-sky-500'}`}>
                        <UserIcon className='h-6' />
                        <p className=''>Profile</p>
                    </div>
                    <div className={` absolute text-sm space-y-1 text-gray-500
                 shadow-xl top-16 right-20 bg-white w-52 z-50 py-6 px-2 ${profiletoggle ? 'grid' : 'hidden'}`}>
                        <p className='cursor-pointer hover:text-black hover:font-medium'>Faculty Login</p>
                        <p className="border-t cursor-pointer hover:text-black hover:font-medium">Student Login</p>
                        <p className="border-t  cursor-pointer hover:text-black hover:font-medium" >Alumni Login</p>
                    </div>
                </div>

                <p className='border border-gray-300 cursor-pointer
                 text-sky-500 px-5 py-2 font-medium hover:border-sky-500'>Signup</p>
            </div>




        </div>
    )
}

export default Header