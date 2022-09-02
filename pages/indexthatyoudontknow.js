import Head from 'next/head'
import College from '../components/College'
import Explore from '../components/Explore'
import Footer from '../components/Footer'
import Header from '../components/Header'
import India from '../components/India'
import React, { useState, useEffect } from 'react'


export default function Home() {
  const [selectedItems, setSelectedItems] = useState({})


  return (
    <div className='bg-gray-100 '>
      <Head>
        <title>CIPHER</title>
      </Head>
      <Header />
      {/* <College /> */}
      <Explore dataCollector={setSelectedItems} />

      <India selectedItems={selectedItems} />

      <p className='mt-[40%]'>hi</p>

      <Footer />


    </div>
  )
}
