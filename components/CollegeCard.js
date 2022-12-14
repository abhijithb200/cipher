import { StarIcon } from '@heroicons/react/outline'
import React from 'react'
import { useRouter } from 'next/router'

function CollegeCard({ name, place, rating, image, nirf }) {
    const router = useRouter()
    return (
        <div onClick={(e) => {
            e.preventDefault()
            router.push(`college?id=${nirf}`)
        }} className='h-48 border w-[32%] max-w-[32%] min-w-[32%]  rounded-xl shadow-lg hover:scale-105
        transition duration-300 cursor-pointer  m-3'>
            <div className='h-[73%] border-b rounded-t-xl'
                style={{ background: `url(${image})`, backgroundSize: 'cover' }}>
                <div className=' bottom-0 text-white pl-2
                 bg-black bg-opacity-40  w-full h-full pt-14 rounded-t-xl
                '>
                    <p className='font-bold text-sm'>{name}</p>
                    <p className='text-xs    '>{place}</p>
                </div>

            </div>
            <div className='flex justify-between items-center'>
                <div className='text-xs pl-2 text-gray-500'>
                    <p>Approved by: NAAC</p>
                    <p>Type: Private</p>
                </div>

                <div className='flex flex-col pr-2 '>
                    <div className="flex 
                     items-center justify-end ">
                        <StarIcon className='h-6  text-yellow-400' />
                        <p className="font-semibold text-base">{rating}</p>

                    </div>
                    <p className="text-right font-thin text-xs">23 faculty reviews</p>
                </div>
            </div>
        </div>
    )
}

export default CollegeCard