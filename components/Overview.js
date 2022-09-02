import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline'
import React, { useRef, useState } from 'react'

function Overview({ currentCollege }) {
    const ref = useRef()
    const [toggle, setToggle] = useState(true)

    return (
        <div className='bg-white mx-28 p-5 shadow-lg rounded-lg '>
            <p className='font-medium text-xl '>Overview</p>
            <p ref={ref} className="college_about my-5">{currentCollege?.Introduction}</p>

            <div>
                {
                    toggle ?
                        <div className="flex items-end cursor-pointer text-sky-500" onClick={(e) => {
                            ref.current.className = 'my-5'
                            setToggle(false)
                        }} >
                            <p >Show more</p>
                            <ChevronDownIcon className='h-5' />
                        </div>
                        :
                        <div className="flex items-end cursor-pointer text-sky-500" onClick={(e) => {
                            ref.current.className = 'college_about my-5'
                            setToggle(true)
                        }}>
                            <p >Show less</p>
                            <ChevronUpIcon className='h-5' />

                        </div>

                }


            </div>


        </div>
    )
}

export default Overview