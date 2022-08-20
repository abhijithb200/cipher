import React from 'react'
import CollegeCard from '../components/CollegeCard'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LeftOptions from '../components/LeftOptions'

function colleges() {
    return (
        <div className='bg-gray-100'>
            <Header />
            <div className='my-10 bg-white mx-[10%]'>
                <p className='text-center py-10 text-xl font-medium '>
                    Top colleges offering <span className='text-cyan-500'>Computer Science</span></p>
                <div className='flex justify-center 
                 space-x-6 pb-4 text-gray-500 font-semibold
                 
                 '>
                    <p className='text-black'>Sort By:</p>
                    <p className=' cursor-pointer' onClick={(e) => {
                        if (e.target.classList.contains('text-cyan-500')) {
                            e.target.className = e.target.className.replace(' text-cyan-500', '')
                            // alert(e.target.className)
                            return
                        }

                        e.target.className = e.target.className + ' text-cyan-500'

                    }}>NIRF Ranking</p>
                    <p className=''>Alumni Rating</p>
                    <p className=''>Fee</p>
                    <p className=''>Place</p>
                </div>
                <div className='flex items-start'>
                    <div className=" w-[40%] ">
                        <LeftOptions />
                        {/* <LeftOptions /> */}
                        {/* <LeftOptions /> */}
                    </div>
                    <div className='flex flex-wrap justify-center pb-10'>
                        <CollegeCard />
                        <CollegeCard />
                        <CollegeCard />
                        <CollegeCard />
                        <CollegeCard />
                        <CollegeCard />
                    </div>
                </div>

            </div>

            <p>hi</p>
            <Footer />
        </div>

    )
}

export default colleges