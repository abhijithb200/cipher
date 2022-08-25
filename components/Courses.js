import React, { useState } from 'react'
import ExploreCard from './ExploreCard'

const courses = [
    {
        name: 'BSc',
        subjects: ['Physics', 'Computer Science', 'Chemistry']
    },
    {
        name: 'MSc',
        subjects: ['Biotechnology', 'Blockchain', 'Cyber Security']
    },
    {
        name: 'BTech',
        subjects: ['Mechanical', 'Civil']
    }
]

function Courses() {
    const [selectedCourse, setSelectedCourse] = useState(null)
    const [selectedProgram, setSelectedProgram] = useState('')


    return (
        <div>
            <div className='bg-white mx-28 p-5 shadow-lg rounded-lg '>
                <p className='font-medium text-xl '> Courses offered by the college</p>
                <div className="flex flex-wrap justify-left p-5">
                    {
                        courses.map(course => (
                            <div>
                                <ExploreCard course={course.name}
                                    programfun={setSelectedCourse}
                                    selected={course.name == selectedCourse && true}
                                    program />
                            </div>
                        ))
                    }

                </div>

                <p className='font-medium text-base '>Select your preference</p>
                <div className='flex flex-wrap justify-left p-5 '>
                    {
                        courses.map((course) => {
                            if (course.name == selectedCourse) {
                                return (
                                    <>{
                                        course.subjects.map((prog) => (

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
                </div>


            </div>
            <div className='bg-white mt-4 shadow-lg rounded-lg 
         overflow-hidden mx-28 p-5'>
                <p className='font-medium text-xl '> Bsc Physics</p>
            </div>
            <div className='bg-white mt-4 shadow-lg rounded-lg 
         overflow-hidden mx-28 p-5'>
                <p className='font-medium text-base '> Eligibility criteria</p>
                <p><span className='px-3'>&bull;</span>Bachelor’s degree is a must with at least 50% grades for applying participants.</p>
            </div>
            <div className='bg-white mt-4 shadow-lg rounded-lg 
         overflow-hidden mx-28 p-5'>
                <p className='font-medium text-base pb-5'> Other Details</p>
                <table className='course_row_table '>
                    <tbody >
                        <tr className=' course_row course_row_special border table-cell'>

                            <td className=' block'>Fee</td>
                            <td className=' block'>Seats</td>


                        </tr>

                        <tr className='course_row border table-cell'>

                            <td className=' block text-green-500 font-bold'>2 Lakh</td>
                            <td className=' block'>30</td>



                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Courses