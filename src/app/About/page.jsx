import Fooder from '@/components/Base/Fooder'
import React from 'react'

const AboutPg = () => {
  return (
   <>
   <div className='min-h-screen content-center justify-center bg-yellow-100'>
    <h2 className='text-base font-mono md:text-3xl font-semibold flex text-center justify-center'>About</h2>
    <p className='text-[10px] font-serif font-normal md:text-lg md:px-[200px] flex text-center justify-center'>Hi, I'm Arijit Roy, and I created this website for fun as a simple way to share and dump files. Sometimes, sharing files between devices can be tricky, especially when you don’t have access to your main device. This site makes it easier to upload and store files online, so you can access them from anywhere without hassle. Whether it's a quick file transfer or a place to temporarily store something, this platform was built to help streamline that process. Feel free to use it and make file sharing a breeze!</p>
   </div>
   <Fooder/>
   </>
  )
}

export default AboutPg