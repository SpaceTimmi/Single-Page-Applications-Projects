import React from 'react'

function Hero() {
  return (
    <div className='bg-aliceBlue px-4 py-12'>
        <h1 className='text-[38.4px] font-light pb-6'>Say goodbye to chaotic financial operations.</h1>
        <div className='flex flex-col gap-4 [&>p]:text-[16px] [&>p]:text-gray-400'>
            <p>
                The financial visibility you need to be a data-driven decision maker.
            </p>
            <p>
                We take care of your financial operations so you can lead your startup more effectively.
            </p>
        </div>

        <div className='flex items-center pt-14 pb-10'>
          <span className='h-[1px] bg-black w-full'></span>
        </div>

        <div className='flex justify-center bg-red-100 '>
          <video className='rounded-3xl' autoPlay={true} muted loop >
            <source className='' src='https://cdn.prod.website-files.com/6448cf5dd9cba41a73db0e5f/644e8628a0c93f42d1928ce7_Masthead-transcode.mp4'/>
          </video>
        </div>
    </div>
  )
}

export default Hero;
