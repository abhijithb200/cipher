import React, { useState } from 'react'
import College from '../components/College'
import Faculty from '../components/Faculty'
import Header from '../components/Header'
import Rating from '../components/Rating'


function college() {
    const [now, setNow] = useState()
    return (
        <div className="bg-gray-100 ">
            <Header />
            <College college />

            <div className="flex bg-white p-3  shadow-md justify-evenly">
                <p onClick={(e) => setNow(e.target.innerHTML)} className="">Overview</p>
                <p onClick={(e) => setNow(e.target.innerHTML)} >Courses</p>
                <p onClick={(e) => setNow(e.target.innerHTML)} >Reviews</p>
                <p onClick={(e) => setNow(e.target.innerHTML)} >Faculty/Alumni</p>
            </div>

            <p>sd</p>

            {
                now == 'Reviews' && <Rating />
            }
            {
                now == 'Faculty/Alumni' && <Faculty />
            }
            <p>sd</p>
        </div>
    )
}

export default college