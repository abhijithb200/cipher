import React from 'react'
import Header from '../components/Header'


function login() {
    return (
        <div>
            <Header />
            <div className="grid place-items-center mt-[10%]  max-h-screen ">
                <form className='flex flex-col gap-3 border w-[30%] p-10 pt-5'>
                    <p className='text-center text-3xl font-thin my-5'>Welcome to <span
                        className='font-medium text-cyan-700'>cipher</span></p>
                    <input type="text" className='outline-0 border
                    border-black w-full p-2' placeholder="Email" />
                    <input type="password" className='outline-0 border
                    border-black w-full p-2' placeholder="Password" />
                    <p className='w-full mt-5 text-center cursor-pointer
                     bg-cyan-700 text-white p-2 rounded-3xl'>Sign In</p>

                </form>
            </div>
        </div>
    )
}

export default login