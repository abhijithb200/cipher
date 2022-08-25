import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline'
import React, { useRef, useState } from 'react'

function Overview() {
    const ref = useRef()
    const [toggle, setToggle] = useState(true)

    return (
        <div className='bg-white mx-28 p-5 shadow-lg rounded-lg '>
            <p className='font-medium text-xl '>Overview</p>
            <p ref={ref} className="college_about my-5">Poona College of Pharmacy is situated in Pune in Maharashtra state of India. Established in 1981, BVPCP is a Private college. The college is accredited by AICTE, NBA, NAAC, Pharmacy Council of India, ISO, UGC. Poona College of Pharmacy offers 15 courses across 2 streams namely Pharmacy, Medical. Popular degrees offered at Poona College of Pharmacy include B.Pharm, Pharm.D, M.Pharm. Besides a robust teaching pedagogy, Poona College of Pharmacy is also a leader in research and innovation. Focus is given to activities beyond academics at Poona College of Pharmacy, which is evident from its infrastructure, extracurricular activities and national & international collaborations. The placement at Poona College of Pharmacy is varied, with recruitment options both in corporates and
                public sector as well as entrepreneurship</p>

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