import React, { useState } from 'react'

function Button({ text }) {
  const [hover, setHover] = useState(false);

  return (
    <div className={`flex border rounded cursor-pointer`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <div className={
        `text-sm font-menu py-2 px-6 bg-white flex items-center rounded-l border-r
        ${hover ? 'transition-colors duration-300 bg-sky-400' : ''}`}>
        {text}
      </div>
      <div className='py-2 px-4 flex items-center bg-sky-400 h-full rounded-r'>
        <img className='bg-sky-400 w-[24px] h-[24px]' src="https://cdn.prod.website-files.com/6448cf5dd9cba41a73db0e5f/644e7c39c76d49ca3d32b52b_WaitList.svg" alt="" />
      </div>
    </div>
  )
}

export default Button
