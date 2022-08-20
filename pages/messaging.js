import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'
import Header from '../components/Header'

function LeftChat() {
    return (
        <div className="flex space-x-1 p-2 hover:bg-gray-100 cursor-pointer">
            <img className='h-12
             rounded-full' src="https://i.pinimg.com/originals/4a/3b/1a/4a3b1abae4f1f97688d1250222552bef.png" />
            <div>
                <p className='pt-2 text-sm font-medium' >Thomas Shelby</p>
                <p className='text-xs text-gray-500' >How are you my boy?</p>
            </div>

        </div>
    )
}

function Message({ me }) {
    return (
        <>
            {
                !me ?
                    <div className='m-3 w-fit'>
                        <div className='flex space-x-1'>
                            <img className='h-5 rounded-full' src="https://i.pinimg.com/originals/4a/3b/1a/4a3b1abae4f1f97688d1250222552bef.png" />
                            <p className="bg-gray-300  w-fit px-3 py-1 rounded-full">Hello</p>
                        </div>

                        <p className="text-[10px] text-right">13:90 pm</p>
                    </div> :
                    <div className='m-3 w-fit float-right'>
                        <p className="border border-sky-500  w-fit px-3 py-1 rounded-full">Hello</p>
                        <p className="text-[10px]">13:90 pm</p>
                    </div>
            }
        </>

    )
}

function messaging() {
    return (
        <div className='bg-gray-100  h-[100vh] '>
            <Header />
            <div className='w-[70vw] mx-auto 
             m-10 h-[71vh] bg-white border-cyan-500 border
            flex  rounded-lg '>
                {/* Left */}
                <div className=' w-[45%] h-[61vh]'>
                    <p className='border-b text-lg font-semibold border-r
                     border-cyan-500 p-[1.11rem]'>Messaging</p>
                    <div className='flex-col overflow-y-auto 
                    h-full'>
                        <LeftChat />
                        <LeftChat />
                        <LeftChat />
                        <LeftChat />
                        <LeftChat />
                        <LeftChat />
                        <LeftChat />
                        <LeftChat />
                        <LeftChat />
                        <LeftChat />
                    </div>
                </div>

                {/* Right */}
                <div className=' w-full relative'>
                    <div className='flex space-x-1 p-2 border-cyan-500 border-b'>
                        <img className='h-12 rounded-full' src="https://i.pinimg.com/originals/4a/3b/1a/4a3b1abae4f1f97688d1250222552bef.png" />
                        <div>
                            <p className='pt-2 text-sm font-medium' >Thomas Shelby</p>
                            <p className='text-xs text-gray-500' >Professor DUK</p>
                        </div>
                    </div>
                    <Message />
                    <Message />
                    <Message />
                    <Message me />


                    <div >
                        <form>
                            <input type='text' placeholder='Enter a message'
                                className='absolute mb-3  bottom-0 left-5 right-10 
                                p-3 outline-none bg-gray-200 rounded-2xl' />
                            <button type='submit' onClick={(e) => {
                                e.preventDefault()
                                alert(1)
                            }}></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default messaging