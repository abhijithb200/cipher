import React, { useState, useRef, useEffect } from 'react'
import College from '../components/College'
import Courses from '../components/Courses'
import Faculty from '../components/Faculty'
import Header from '../components/Header'
import Overview from '../components/Overview'
import Rating from '../components/Rating'
import Colleges from '../colleges.json'
import { useRouter } from 'next/router'


function college() {
    const router = useRouter()
    const { id } = router.query
    const [currentCollege, setCurrentCollege] = useState(Colleges[id])



    const [now, setNow] = useState('Overview')
    const scroll = useRef()
    const ref = useRef()


    useEffect(() => {
        const initial = ref.current?.getBoundingClientRect().top
        window.addEventListener('scroll', () => {
            if (ref.current?.getBoundingClientRect().top <= 0) {
                scroll.current.className = scroll.current.className + ' fixed top-0'
            } else {
                scroll.current.className = 'flex bg-white p-3  w-full shadow-md justify-evenly'

            }

        });

    }, [])



    return (
        <div className="bg-gray-100 ">
            <Header />
            <College college currentCollege={currentCollege} />

            <div ref={scroll} className="flex bg-white p-3  w-full shadow-md justify-evenly">
                <p onClick={(e) => setNow(e.target.innerHTML)} className="">Overview</p>
                <p onClick={(e) => setNow(e.target.innerHTML)} >Courses</p>
                <p onClick={(e) => setNow(e.target.innerHTML)} >Reviews</p>
                <p onClick={(e) => setNow(e.target.innerHTML)} >Faculty/Alumni</p>
            </div>

            <p ref={ref} className='mb-16 -mt-10'></p>
            <div className="mb-5">
                {
                    now == 'Reviews' && <Rating />
                }
                {
                    now == 'Faculty/Alumni' && <Faculty />
                }
                {
                    now == 'Courses' && <Courses />
                }
                {
                    now == 'Overview' && <Overview currentCollege={currentCollege} />
                }
            </div>
        </div>
    )
}

export default college