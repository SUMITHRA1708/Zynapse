import React from 'react'

function Navbar() {
  return (
    <div  className='flex justify-between px-8 py-5'>
        <div>
            <p className="text-2xl font-semibold">Zynapse</p>
        </div>
        <div className='flex items-center gap-4'>
            <p>About</p>
            <p>Contact</p>
            <p className="bg-blue-600 cursor-pointer text-white rounded-lg px-5 py-2">Get Started</p>
        </div>
    </div>
  )
}

export default Navbar