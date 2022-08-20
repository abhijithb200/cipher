import React from 'react'

function LeftOptions() {
    return (
        <div className="relative mb-3 p-3 
        left-5 bottom-5 border-r border-t 
        rounded-xl shadow-xl">
            <p className="font-medium pb-2
            ">Specifications</p>
            <div className="h-32  overflow-y-scroll">
                <div className="flex">
                    <input type="radio"
                        value="option1" checked={true} />
                    <p className='pl-3'>Option 1</p>
                </div>
                <div className="flex">
                    <input type="radio"
                        value="option2" />
                    <p className='pl-3'>Option 2</p>
                </div>
                <div className="flex">
                    <input type="radio"
                        value="option2" />
                    <p className='pl-3'>Option 2</p>
                </div>
                <div className="flex">
                    <input type="radio"
                        value="option2" />
                    <p className='pl-3'>Option 2</p>
                </div>
                <div className="flex">
                    <input type="radio"
                        value="option2" />
                    <p className='pl-3'>Option 2</p>
                </div>
                <div className="flex">
                    <input type="radio"
                        value="option2" />
                    <p className='pl-3'>Option 2</p>
                </div>
                <div className="flex">
                    <input type="radio"
                        value="option2" />
                    <p className='pl-3'>Option 2</p>
                </div>
                <div className="flex">
                    <input type="radio"
                        value="option2" />
                    <p className='pl-3'>Option 2</p>
                </div>
            </div>




        </div>
    )
}

export default LeftOptions