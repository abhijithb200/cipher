import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import React, { useState, useRef } from "react";

import ReactDatamaps from "react-india-states-map";
import CollegeCard from "./CollegeCard";

const STATES = {
    Maharashtra: {
        value: 50,
        content: {
            txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A quisquam quae laboriosam sed magni aliquam dolore sequi libero harum, hic nihil. Omnis eos deserunt molestiae harum, cum nemo et temporibus?",
        },
    },
};

const India = () => {
    const [activeState, setactiveState] = useState({
        data: STATES.Maharashtra,
        name: "India",
    });

    const [stateLists, setStateLists] = useState(STATES);
    const [hoverstate, setHoverstate] = useState(null);

    const scrollItem = useRef(null)

    const stateOnClick = (data, name) => {
        setactiveState({ data, name });

        if (name == activeState.name) {
            clear()
        }
        // console.log(data, name)
    };

    const clear = () => {
        setactiveState({
            data: STATES.Maharashtra,
            name: "India",
        });
    }

    function scrollLeft(element, change, duration) {
        var start = element.scrollLeft,
            currentTime = 0,
            increment = 20;

        console.log(start)

        var animateScroll = function () {
            currentTime += increment;
            var val = Math.easeInOutQuad(currentTime, start, change, duration);
            element.scrollLeft = val;
            if (currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };
        animateScroll();
    }

    //t = current time
    //b = start value
    //c = change in value
    //d = duration
    Math.easeInOutQuad = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };


    return (
        <div>
            <p className="text-center  text-3xl pt-8 pb-4">Medical Colleges in {activeState.name != 'India' ?
                activeState.name : hoverstate ? hoverstate : activeState.name}</p>
            <div className="relative">

                <div className="absolute w-[45%] left-0 ">
                    <ReactDatamaps
                        regionData={stateLists}
                        mapLayout={{
                            hoverTitle: "Count",
                            noDataColor: "gray",
                            borderColor: "white",
                            hoverBorderColor: "pink",
                            hoverColor: "skyblue",
                        }}
                        hoverComponent={({ value }) => {
                            setHoverstate(value.name)

                        }}
                        onClick={stateOnClick}
                        activeState={activeState}
                    />
                </div>

                <div className="absolute p-4   right-4 h-auto max-w-[60%] w-[60%] bg-white">

                    <p className="font-bold text-xl">{activeState.name}</p>
                    <div className="flex space-x-8 ">
                        <div className="w-1/2 p-2 my-5 h-fit border">
                            <div className="flex justify-between">
                                <p>Private</p>
                                <p>32</p>
                            </div>

                            <div className="flex justify-between">
                                <p>Government</p>
                                <p>10</p>
                            </div>

                        </div>
                        <div className="w-full">
                            <p>Popular state universities</p>
                            <div className=" p-2 my-2 border flex flex-wrap ">
                                <p className="university_name ">Kerala University
                                    <ChevronRightIcon className="h-4" /></p>
                                <p className="university_name">MG University
                                    <ChevronRightIcon className="h-4" /></p>
                                <p className="university_name">Calicut University
                                    <ChevronRightIcon className="h-4" /></p>
                                <p className="university_name">Kannur University
                                    <ChevronRightIcon className="h-4" /></p>
                                <p className="university_name">Kerala University of Health Sciences
                                    <ChevronRightIcon className="h-4" /></p>

                            </div>
                        </div>
                    </div>
                    <p className="font-bold text-xl ">Top Colleges</p>
                    <div className="flex justify-between py-5">
                        <div className="  bg-gray-100
                         rounded-full p-2  shadow-xl z-20 " onClick={() =>
                                scrollLeft(scrollItem.current, -700, 1000)
                            }>
                            <ChevronLeftIcon className="h-6" />
                        </div>
                        <div className=" bg-gray-100
                         rounded-full p-2  shadow-xl" onClick={() =>
                                scrollLeft(scrollItem.current, 700, 1000)
                            }>
                            <ChevronRightIcon className="h-6" />
                        </div>
                    </div>
                    <div className="flex  p-3 space-x-2  overflow-x-scroll scrollbar-hide" ref={scrollItem}>
                        <CollegeCard />
                        <CollegeCard />
                        <CollegeCard />
                        <CollegeCard />
                        <CollegeCard />
                        <CollegeCard />
                        <CollegeCard />
                        <CollegeCard />
                        <CollegeCard />
                        <CollegeCard />
                        <CollegeCard />


                    </div>

                </div>


            </div >
        </div >
    );
};

export default India