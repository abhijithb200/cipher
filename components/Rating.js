import React, { useRef } from 'react'
import { ChevronDoubleDownIcon, ChevronDownIcon, StarIcon } from '@heroicons/react/outline'



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
function ReviewCard({ head }) {
    return (
        <div className='px-10 py-2 flex'>

            <p className='font-bold'>{head}:
                <span className='font-normal'>The cover is made up of rubber material and feels sturdy and nice in the hands.
                    The sleep and wake feature is working fine. when closed, the magnet stick to the skin and remains closed well. It's looking nice with my 10th gen 2019 basic kindle (white model) and feels premium with respect to the touch and overall weight the cover and kindle gets combined. I am very happy right now, let's see how well the
                    cover holds up in the long run.</span></p>
        </div>
    )
}

function RatingCard() {
    const toggle = useRef(null)
    const toggle2 = useRef(null)
    return (
        <div className='bg-white mt-4 shadow-lg rounded-lg 
         overflow-hidden mx-28 p-5'>
            <div className='flex items-center px-10 py-3 justify-between'>
                <div className='flex items-center '>
                    <img className='h-20 border-4 border-cyan-500 
             rounded-full mr-2' src="https://i.pinimg.com/originals/4a/3b/1a/4a3b1abae4f1f97688d1250222552bef.png" />
                    <div >
                        <p className='pt-2  text-lg font-medium' >Jonathan</p>
                        <p className='text-xs ' >Former Student</p>
                    </div>
                </div>
                <div className='flex items-end text-3xl'>
                    <p>4.3</p>
                    <StarIcon className='h-6 text-yellow-400' />
                </div>
            </div>
            <ReviewCard head="Overall" />
            <div className='hidden' ref={toggle}>
                <div>
                    <ReviewCard head="College" />
                    <ReviewCard head="Course" />
                    <ReviewCard head="Faculty" />
                    <ReviewCard head="Placement" />
                </div>
                <div className='flex  space-x-20 justify-center'>
                    <CatRate rate={5.0} cat='College' />
                    <CatRate rate={4.0} cat='Course' />
                    <CatRate rate={4.9} cat='Faculty' />
                    <CatRate rate={3.2} cat='Placement' />
                </div>
            </div>
            <div ref={toggle2} className='text-center cursor-pointer'
                onClick={(e) => {
                    toggle.current.className = toggle.current.className.replace('hidden', '')
                    toggle2.current.className = 'text-center cursor-pointer hidden'
                }}>
                <p>Show more</p>
                <ChevronDownIcon className='h-3 mx-auto' />
            </div>

        </div>

    )
}


function Rating() {
    return (
        <div className=' '>
            <div className='bg-white mx-28 p-5 shadow-lg rounded-lg '>
                <div className='flex justify-between '>
                    <p className='font-medium text-xl '>Rating</p>
                    <p className='bg-cyan-700 px-8 py-2
                     text-white shadow-lg rounded-lg cursor-pointer p-5 mb-7' >Write a review</p>
                </div>

                <div className="flex justify-evenly ">
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

            <div>
                <RatingCard />
                <RatingCard />
                <RatingCard />
                <RatingCard />
                <RatingCard />

            </div>
        </div>
    )
}

export default Rating