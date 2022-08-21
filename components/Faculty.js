import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import React, { useRef, useState } from 'react'
import { scrollLeft } from '../components/India'
import db from '../firebase'
import firebase from 'firebase'



function FacultyCard({ toggle, name }) {
    return (
        <div className='shadow-lg w-full m-3 mt-0 min-w-fit max-w-fit max-h-72 h-72
         p-10 text-center group ' >
            <img className='h-28 border-4  group-hover:border-cyan-500
             rounded-full' src="https://i.pinimg.com/originals/4a/3b/1a/4a3b1abae4f1f97688d1250222552bef.png" />
            <p className='pt-2 text-lg font-medium' >{name}</p>
            <p className='text-sm text-gray-500'>Professor DUK</p>
            <button className='mt-4
            bg-cyan-500 text-white w-full p-2 hidden
            group-hover:inline-flex rounded-full  
            ' onClick={() => toggle({ status: true, name: name })}>Send Message</button>
        </div>
    )
}

function AlumniCard() {
    return (
        <div className='shadow-lg w-full m-3 mt-0 min-w-fit max-w-fit
         max-h-80 h-80
         p-10 text-center group '>
            <img className='h-28 border-4 group-hover:border-cyan-500 
             rounded-full' src="https://i.pinimg.com/originals/4a/3b/1a/4a3b1abae4f1f97688d1250222552bef.png" />
            <p className='pt-2 text-lg font-medium' >Thomas Shelby</p>
            <hr />
            <p className='text-sm text-gray-500'>Pass out year : 2020</p>
            <p className='text-sm text-gray-500'>Course : MSc</p>
            <p className='mt-4
                bg-cyan-500 text-white p-2 w-fit hidden
                group-hover:inline-flex rounded-full 
            '>Send Message</p>
        </div >
    )
}
function randomString(len, charSet) {
    charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var randomString = '';
    for (var i = 0; i < len; i++) {
        var randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz, randomPoz + 1);
    }
    return randomString;
}

function ChatModal({ name, toggle }) {
    const [input, setInput] = useState(null)
    const [username, setUsername] = useState(localStorage.getItem('username'))


    const sendMessage = (e) => {
        e.preventDefault();

        const key = randomString(30)
        db.collection('messages').doc('inbox').collection(key).add(
            {
                message: input,
                name: username,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            }
        ).then(doc => {
            db.collection("user").doc(username).set({
                contacts: firebase.firestore.FieldValue.arrayUnion({
                    name: name,
                    id: key
                })
            }, { merge: true })

            db.collection("user").doc(name).set({
                contacts: firebase.firestore.FieldValue.arrayUnion({
                    name: username,
                    id: key
                })
            }, { merge: true })
        })




        setInput('');
        toggle({ status: false })
    }

    return (
        <div className=' fixed top-[30%] left-[40%] h-auto w-[30%]
         bg-white shadow-2xl border border-cyan-500 rounded-xl'>
            <div className='flex items-end border-b border-cyan-500 px-10 py-3'>
                <img className='h-20 border-4 border-cyan-500 
             rounded-full' src="https://i.pinimg.com/originals/4a/3b/1a/4a3b1abae4f1f97688d1250222552bef.png" />
                <p className='pt-2 text-lg font-medium
                ' >{name}</p>
            </div>
            <p className='w-[80%] m-2 border border-red-500
            text-red-500 font-bold text-xs mx-auto p-2'>Be responsible before sending the message.
                Irrelavant/spam message may lock you out.
            </p>

            <div className='mr-auto  text-center'>
                <input type='text' placeholder='Write a message'
                    className='my-3 outline-none
                    border border-black p-2 w-[80%] pb-10 mb-2' value={input}
                    onChange={e => setInput(e.target.value)} />
            </div>
            <div className='flex justify-center space-x-10'>
                <p className='text-center my-4 bg-green-400
                text-white cursor-pointer w-32 py-2' onClick={sendMessage}>Send</p>
                <p className='text-center my-4 bg-red-400
                text-white cursor-pointer w-32 py-2' onClick={() => toggle({ status: false })}>Cancel</p>
            </div>

        </div>
    )
}

function Faculty() {
    const scrollItem = useRef(null)
    const [toggle, setToggle] = useState({
        status: false,
        name: null
    })


    return (
        <div>
            <div className="bg-white p-5 w-[80%] mx-auto">
                <p className=" font-medium text-xl">
                    Faculty</p>
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
                {
                    toggle.status && <ChatModal name={toggle.name} toggle={setToggle} />

                }

                <div className="flex overflow-x-scroll scrollbar-hide" ref={scrollItem}>

                    <FacultyCard toggle={setToggle} name="Thomas Shelby" />
                    <FacultyCard toggle={setToggle} name="Pranav" />



                </div>
            </div>
            <div className="bg-white p-5 w-[80%] mx-auto mt-5">
                <p className=" font-medium text-xl pb-5">
                    Alumni</p>
                <div className="flex flex-wrap justify-center">
                    <AlumniCard />
                    <AlumniCard />
                    <AlumniCard />
                    <AlumniCard />
                    <AlumniCard />
                    <AlumniCard />
                    <AlumniCard />
                    <AlumniCard />
                    <AlumniCard />
                    <AlumniCard />
                    <AlumniCard />
                    <AlumniCard />
                    <AlumniCard />
                    <AlumniCard />
                </div>
            </div>
        </div>

    )
}

export default Faculty