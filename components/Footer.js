import React from 'react'

function Footer() {
    return (
        <div className='relative bottom-0 '>

            <div className='flex   h-20 p-8 justify-between items-center bg-cyan-700'>
                <div className='flex  space-x-2 '>
                    <p className='text-2xl  font-medium text-white'>CIPHER</p>
                    <p className='text-sm font-thin w-56  text-white'>Common Integrated Platform for HigherEducation and Research</p>
                </div>


                <div className='flex space-x-2 cursor-pointer'>
                    <img className='h-10 bg-white p-2
                    rounded-full' src="https://cdn.pixabay.com/photo/2015/05/17/10/51/facebook-770688_960_720.png" />
                    <img className='h-10 bg-white p-2
                    rounded-full' src="https://cdn.pixabay.com/photo/2017/06/22/14/23/twitter-2430933_960_720.png" />
                    <img className='h-10 bg-white p-2
                    rounded-full' src="https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_960_720.jpg" />
                </div>


            </div>

        </div>

    )
}

export default Footer