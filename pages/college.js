import React, { useState, useRef, useEffect } from 'react'
import College from '../components/College'
import Courses from '../components/Courses'
import Faculty from '../components/Faculty'
import Header from '../components/Header'
import Overview from '../components/Overview'
import Rating from '../components/Rating'


function college() {
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
            <College college />

            <div ref={scroll} className="flex bg-white p-3  w-full shadow-md justify-evenly">
                <p onClick={(e) => setNow(e.target.innerHTML)} className="">Overview</p>
                <p onClick={(e) => setNow(e.target.innerHTML)} >Courses</p>
                <p onClick={(e) => setNow(e.target.innerHTML)} >Reviews</p>
                <p onClick={(e) => setNow(e.target.innerHTML)} >Faculty/Alumni</p>
            </div>

            <p ref={ref} className='mb-16 -mt-10'></p>

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
                now == 'Overview' && <Overview />
            }
            <p>sd</p>
        </div>
    )
}

export default college