import React from 'react'
import Button from './Button';

function Header() {
  return (
    <div className='bg-aliceBlue px-4 py-6 lg:px-10 h-[69px] lg:h-[80px] border-solid border border-black flex items-center justify-between'>
        <img className='w-[177px] h-[25px] cursor-pointer' src="./logo.svg" alt="logo" />
        <div className='text-sm font-menu hidden lg:flex gap-4 lg:gap-2 border border-black pt-2 pb-2 pr-4 pl-4 rounded-lg shadow-2xl [&>a]:cursor-pointer'>
            <a className='border-solid border-aliceBlue border-s-4 hover:border-s-4 hover:border-amber-400 hover:bg-amber-100 px-2 py-0 my-0 rounded'>Learn</a>
            <a className='border-solid border-aliceBlue border-s-4 hover:border-s-4 hover:border-amber-400 hover:bg-amber-100 px-2 py-0 my-0 rounded'>Compare</a>
            <a className='border-solid border-aliceBlue border-s-4 hover:border-s-4 hover:border-amber-400 hover:bg-amber-100 px-2 py-0 my-0 rounded'>Services</a>
        </div>
        <img className='lg:hidden w-[45px] h-[45px] p-2 bg-white border-solid border border-black rounded-lg shadow-xl cursor-pointer' src="https://img.icons8.com/?size=100&id=36389&format=png&color=000000" alt="meun icon" />
        <div className='hidden lg:flex'>
            <Button text={'Contact Us'}  />
        </div>
    </div>
  )
}

export default Header