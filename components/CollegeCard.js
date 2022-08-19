import { StarIcon } from '@heroicons/react/outline'
import React from 'react'

function CollegeCard() {
    return (
        <div className='h-48 border w-[32%] max-w-[32%] min-w-[32%]  rounded-xl shadow-lg hover:scale-105
        transition duration-300 cursor-pointer'>
            <div className='h-[73%] border-b rounded-t-xl'
                style={{ background: `url(https://images.collegedunia.com/public/college_data/images/appImage/1620192479desk.png?)`, backgroundSize: 'cover' }}>
                <div className=' bottom-0 text-white pl-2
                 bg-black bg-opacity-40  w-full h-full pt-20 rounded-t-xl
                '>
                    <p className='font-bold'>Digital University of Kerala</p>
                    <p className='text-sm'>Trivandrum</p>
                </div>

            </div>
            <div>

                <div className='flex flex-col pr-2 '>
                    <div className="flex 
                     items-center justify-end ">
                        <StarIcon className='h-6  text-yellow-400' />
                        <p className="font-semibold text-base">4.5/5</p>

                    </div>
                    <p className="text-right font-thin text-xs">23 faculty reviews</p>
                </div>
            </div>
        </div>
    )
}

export default CollegeCard