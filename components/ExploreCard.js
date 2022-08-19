import React from 'react'

function ExploreCard({ course, program, selected, coursefun, programfun }) {
    return (
        <>
            {
                program ?

                    <div className={`border cursor-pointer  
                hover:border-sky-500 border-gray-300  mr-3 mb-3  group ${selected && 'border-sky-500'}`}
                        onClick={() => programfun(course)}
                        programfun
                    >
                        <p className={`text-center px-14 py-1 group-hover:text-sky-500  
                    text-gray-500 ${selected && 'text-sky-500'}`}>{course}</p>
                    </div>


                    :

                    <div className={`border cursor-pointer mr-3 mb-3 
            hover:border-sky-500 border-gray-300  w-44  group ${selected && 'border-sky-500'}`}
                        onClick={() => coursefun(course)}>
                        <p className={`text-center  group-hover:text-sky-500  p-9
                text-gray-500  ${selected && 'text-sky-500'}`}>{course}</p>

                    </div>
            }
        </>

    )
}

export default ExploreCard