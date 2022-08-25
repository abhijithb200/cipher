import { SearchIcon, XIcon } from '@heroicons/react/outline'
import React, { useState, useEffect } from 'react'
import ExploreCard from './ExploreCard'

const courses = [
    {
        name: 'Engineering',
        programs: ['BTech', 'MTech'],
        specializations: ['Mechanical', 'Civil', 'Computer']
    },
    {
        name: 'Medical',
        programs: ['MBBS', 'MDS', 'BAMS'],


    },
    {
        name: 'Commerce',
        programs: ['BCom', 'MCom']
    },
    {
        name: 'Computer',
        programs: ['BCA', 'MCA']
    },
    {
        name: 'Science',
        programs: ['Bsc', 'Msc'],
        specializations: ['Physics', 'Chemistry', 'Biology', 'Botany', 'English']

    },
    {
        name: 'Architecture',
        programs: ['B.Arch', 'M.Arch', 'Architecture - Diploma']
    },
    {
        name: 'Arts & Humanities',
        programs: ['BA', 'MA', 'BFA', 'MFA']
    },
    {
        name: 'Pharmacy',
        programs: ['B.Pharm', 'M.Pharm']
    }

]



function Explore() {
    const [selectedCourse, setSelectedCourse] = useState('')
    const [selectedProgram, setSelectedProgram] = useState('')
    const [selectedSpecialization, setSelectedSpecialization] = useState('')

    const [filteredData, setFilteredData] = useState([]);
    const [currentList, setCurrentList] = useState([]);
    const [wordEntered, setWordEntered] = useState("")

    useEffect(() => {
        const currentList = courses.filter((value) => {
            if (value.name == selectedCourse) {
                return value.specializations
            }
        })
        setCurrentList(currentList[0]?.specializations)
        setFilteredData(currentList[0]?.specializations)
        setWordEntered('')
        setSelectedSpecialization('')
    }, [selectedProgram])


    const handleFilter = (e) => {
        setSelectedSpecialization('')
        const searchWord = e.target.value;
        setWordEntered(e.target.value)




        const newFilter = currentList?.filter((val) => {
            return val.toLowerCase().includes(searchWord.toLowerCase())
        })
        setFilteredData(newFilter)

    }
    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
        setSelectedSpecialization("")
    };

    const getdata = (specialization) => {
        console.log(selectedCourse, selectedProgram, specialization)
    }

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
            {
                selectedCourse && <> <p className='mx-72 text-xl my-5 font-semibold'>Programs</p>
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
                    </div></>
            }
            {
                selectedProgram && <>
                    <p className='mx-72 text-xl my-5 font-semibold'>Top specifications</p>
                    <div className="flex-col justify-left
            mx-72 ">
                        <div className='w-[100%] relative  '>
                            <div className='border flex items-center pr-5'>
                                <input type='text' className='  outline-0 w-full p-2'
                                    onChange={handleFilter} value={
                                        selectedSpecialization ? selectedSpecialization : wordEntered
                                    } />
                                {
                                    !selectedSpecialization ? <SearchIcon className='h-5' /> :
                                        <XIcon className='h-5 cursor-pointer' onClick={clearInput} />

                                }
                            </div>

                            <div className='absolute  bg-white w-full z-40 max-h-40  overflow-y-auto'>

                                {!selectedSpecialization &&
                                    filteredData?.map((value, key) => {

                                        return (
                                            <p className='p-2
                                cursor-pointer hover:bg-gray-200 border-x border-b'
                                                onClick={(e) => {
                                                    setSelectedSpecialization(value)
                                                    getdata(value)
                                                }}>{value}</p>

                                        );
                                    })}

                            </div>
                        </div>


                    </div></>
            }




        </div>
    )
}

export default Explore