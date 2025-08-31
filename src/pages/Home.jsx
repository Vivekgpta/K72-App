import React from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeButtonText'

const Home = () => {
  return (
   <div >
     <div className='h-screen w-screen fixed'>
     <Video />
    </div>
    <div className='p-2 text-white h-screen w-screen relative justify-between flex flex-col'>
      <HomeHeroText />
      <HomeBottomText/>
    </div>
   </div>
  )
}

export default Home
