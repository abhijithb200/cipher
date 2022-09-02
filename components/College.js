import { ChevronRightIcon, StarIcon } from '@heroicons/react/outline'
import React from 'react'

function College({ currentCollege, college }) {
    return (
        <>
            <div class="college_item">

                <img className="college_image object-center " src={currentCollege ? currentCollege['Cover'] : `https://images.collegedunia.com/public/asset/img/homepage/banner/Shri1642233244.webp?mode=stretch`} />
                <div class="college_desc items-center flex justify-between p-5 text-white">
                    <div>
                        <p class="text-2xl font-semibold">{currentCollege["Name of the institute"]}</p>
                        <p className='text-lg'>{currentCollege['State']}</p>
                    </div>
                    <div className='flex items-center'>
                        <div className='mr-10'>
                            <div className="flex items-center justify-end ">
                                <StarIcon className='h-6  text-yellow-400' />
                                <p className="font-semibold ">{currentCollege["rateTag"]} </p>

                            </div>
                            <p>{currentCollege["reviewTot"]}</p>
                        </div>
                        {
                            !college && <div className='flex items-center cursor-pointer'>
                                <p>Load more</p>
                                <ChevronRightIcon className='h-12  ml-0 transition duration-150 hover:scale-110' />
                            </div>
                        }


                    </div>
                </div>
            </div>
        </>
    )
}

export default College