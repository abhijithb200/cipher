import React from 'react'
import { StarIcon } from '@heroicons/react/outline'



function Progress({ style, value, num }) {
    return (
        <div className='flex w-fit items-center 
        space-x-2
        -mt-3'>
            <div className='flex items-center  '>
                <p>{value}</p>
                <StarIcon className='h-3' />
            </div>
            <div className="border h-[7px] rounded-xl w-44 bg-gray-200">
                <div className={` h-full rounded-xl ${style}`}></div>
                {/* {value} */}
            </div>
            <div className='flex items-center text-sm '>
                <p>{num}</p>
            </div>
        </div>

    )
}

function CatRate({ rate, cat }) {
    return (
        <div>
            <div className='flex items-end text-3xl'>
                <p>{rate}</p>
                <StarIcon className='h-7 text-yellow-400' />
            </div>
            <p className='text-center'>{cat}</p>
        </div>
    )
}


function Rating() {
    return (
        <div className='bg-cyan-700 '>
            <div className="flex justify-evenly p-10 
        text-white">
                {/* Left */}
                <div className="flex items-center space-x-10 pr-20 
            border-r-2">

                    <div className='flex w-fit flex-col '>
                        <div className='flex items-end text-5xl'>
                            <p>4.2</p>
                            <StarIcon className='h-7 text-yellow-400' />
                        </div>
                        <p className='text-xs justify-center
                         text-right'>2012 reviews</p>
                    </div>



                    {/* Rating */}
                    <div className="flex w-full flex-col gap-1">
                        <Progress style='w-[80%] bg-green-500' value={5} num={8900} />
                        <Progress style='w-[50%] bg-green-500' value={4} num={340} />
                        <Progress style='w-[40%] bg-orange-300' value={3} num={10} />
                        <Progress style='w-[30%] bg-orange-300' value={2} num={1} />
                        <Progress style='w-[30%] bg-red-500' value={1} num={1} />

                    </div>
                </div>

                {/* Right */}
                <div className='flex  space-x-20'>
                    <CatRate rate={5.0} cat='College' />
                    <CatRate rate={4.0} cat='Course' />
                    <CatRate rate={4.9} cat='Faculty' />
                    <CatRate rate={3.2} cat='Placement' />
                </div>
            </div >
        </div>
    )
}

export default Rating