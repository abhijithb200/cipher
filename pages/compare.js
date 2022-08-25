import { StarIcon } from '@heroicons/react/outline'
import React from 'react'
import Header from '../components/Header'


const colleges = [
    {
        name: 'IITMK',
        ranking: 10,
        type: 'public',
        totalStudents: 1000,
        review: 4.5,
        averagePlacementSalary: 15

    },
    {
        name: 'DUK',
        ranking: 5,
        type: 'public',
        totalStudents: 200,
        review: 4.8,
        averagePlacementSalary: 15

    },
    {
        name: 'DUK',
        ranking: 5,
        type: 'public',
        totalStudents: 200,
        review: 4.8,
        averagePlacementSalary: 15

    },
    {
        name: 'DUK',
        ranking: 5,
        type: 'public',
        totalStudents: 200,
        review: 4.8,
        averagePlacementSalary: 15

    },
    {
        name: 'DUK',
        ranking: 5,
        type: 'public',
        totalStudents: 200,
        review: 4.8,
        averagePlacementSalary: 15

    },
    {
        name: 'DUK',
        ranking: 5,
        type: 'public',
        totalStudents: 200,
        review: 4.8,
        averagePlacementSalary: 15

    },

]

function compare() {
    return (
        <div className='bg-gray-100  '>
            <Header />

            <div className='bg-white mx-28 p-5 m-10 shadow-lg rounded-lg'>
                <p className='font-medium text-xl'>Compare College</p>

                <div className='compare pt-14'><table style={{ 'direction': 'ltr' }}>
                    <tbody >
                        <tr className='compare_row compare_row_special border table-cell'>

                            <td className=' block'>Name</td>
                            <td className=' block'>Ranking</td>
                            <td className=' block'>Type</td>
                            <td className=' block'>Total Students</td>
                            <td className=' block'>Review</td>
                            <td className=' block'>Average Salary</td>

                        </tr>
                        {
                            colleges.map((col => (
                                <><tr className='compare_row border table-cell'>

                                    <td className=' block'>{col.name}</td>
                                    <td className=' block'>{col.ranking}</td>
                                    <td className=' block'>{col.type}</td>
                                    <td className=' block'>{col.totalStudents}</td>
                                    <td className=' block'>
                                        <div className='flex justify-center items-center space-x-0'>
                                            <StarIcon className='h-6 text-yellow-400' />
                                            <p className=' ml-auto'>{col.review}</p>
                                        </div></td>
                                    <td className=' block'>{col.averagePlacementSalary}</td>

                                </tr>
                                </>
                            )))
                        }
                    </tbody>
                </table></div>

            </div>

        </div>
    )
}

export default compare