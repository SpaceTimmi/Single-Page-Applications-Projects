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
    </div>
  )
}

export default Hero