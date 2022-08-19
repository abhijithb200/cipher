import Head from 'next/head'
import College from '../components/College'
import Explore from '../components/Explore'
import Header from '../components/Header'
import India from '../components/India'


export default function Home() {
  return (
    <div className='bg-gray-100 '>
      <Head>
        <title>CIPHER</title>
      </Head>
      <Header />
      <College />
      <Explore />

      <India />

      <p className='mt-[40%]'>hi</p>


    </div>
  )
}
