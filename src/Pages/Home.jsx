import React from 'react'
import Navbar from '../Components/Navbar'
import LouisImg from '../Imgs/LouisMain.jpg'
import video from '../Imgs/video.mp4'

const Home = () => {
  return (
    <>
    <div id ='outer-container'>
      <Navbar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} /> 
      <section className="relative h-screen flex  text-white " id='page-wrap'>
       
        <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
            <video className="min-w-full min-h-full absolute object-cover" src={video} type="video/mp4" autoPlay muted loop></video>
        </div>
        <div className="video-content">
          <div className='flex flex-col'> 
            <div className='flex flex-col mt-[10vh] text-center md:mt-[35vh] md:ml-[20vw] md:text-start'>
              <h1 className ="font-bold text-[2.5rem] lg:text-[5rem] ">Hi it's Me!</h1>
              <h1 className='font-bold text-7xl text-purple-400 xlg:text-8xl'>Louis Win</h1>
              <h2 className='font-semibold text-3xl my-2 '>Web Developer</h2>
              <h3 className="font-normal text-xl md:w-[50%]">High level experience in web design and development knowledge, producing quality work.</h3>
            </div>
            <div className='flex justify-center items-center'>
              <img src={LouisImg} alt="louis" className='fixed bottom-[0px] h-[60%] lg:h-[85%] md:h-[50%] md:left-[50%]' />
            </div>
          </div>
         
        </div>
      </section>
    </div>

    </>

  )
}

export default Home


// <div className='grid grid-cols-2'>
// {/* MAIN SIDE */}
// <div className='bg-[#301934] h-screen flex flex-col'>
//     <img src={LouisImg} height={'300px'} width={'300px'} alt="Louis" className='mx-auto mb-10 mt-10 bg-neutral-900 rounded-4' />
//     <h1 className='font-bold text-black text-5xl ml-5'>Hi, I'm Louis</h1>
//     <h2 className='font-semibold text-yellow-500 text-6xl text-end mr-5 mt-[5rem]'>Web developer</h2>
//     <h3 className='text-black text-xl w-[50%] ml-5 mt-[5rem]'>High level experience in web design and development knowledge, producing quality work.</h3>
// </div>
// {/* FUN SIDE */}
// <div className='bg-purple-400 h-screen'>  
//     <img src={Cat} alt="cat" className='w-full h-full' />
// </div>
// </div>  