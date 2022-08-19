import React, { useState } from 'react'
import ExploreCard from './ExploreCard'

const courses = [
    {
        name: 'Engineering',
        programs: ['BTech', 'MTech']
    },
    {
        name: 'Medical',
        programs: ['MBBS', 'MDS', 'BAMS']
    },
    {
        name: 'Commerce',
        programs: ['BCom', 'MCom']
    }
]

function Explore() {
    const [selectedCourse, setSelectedCourse] = useState('')
    const [selectedProgram, setSelectedProgram] = useState('')

    return (
        <div className="my-8 pb-10  bg-white">
            <p className='text-center  text-3xl pt-8 pb-4'>Explore your dream college</p>
            <p className='text-center mx-72 mb-10'>Select the course you would like to choose from the
                whole collection of colleges and universities</p>

            <div className="flex flex-wrap justify-left
            mx-72 ">
                {
                    courses.map(course => (
                        <ExploreCard course={course.name} coursefun={setSelectedCourse}
                            selected={selectedCourse == course.name && true}
                        />
                    ))
                }

            </div>
            <p className='mx-72 text-xl my-5 font-semibold'>Programs</p>
            <div className="flex flex-wrap justify-left
            mx-72 ">
                {
                    courses.map((course) => {
                        if (course.name == selectedCourse) {
                            return (
                                <>{
                                    course.programs.map((prog) => (

                                        <ExploreCard course={prog} programfun={setSelectedProgram}
                                            program
                                            selected={prog == selectedProgram && true}
                                        />
                                    )
                                    )
                                }</>
                            )
                        }

                    })
                }
                {/* <ExploreCard course='Bsc' program />
                <ExploreCard course='Msc' program />
                <ExploreCard course='Doctorate' program />
                <ExploreCard course='Fashion Desgining UG' program />
                <ExploreCard course='Fashion ' program />
                <ExploreCard course='Fashion Desgining UG' program /> */}
            </div>

        </div>
    )
}

export default Explore