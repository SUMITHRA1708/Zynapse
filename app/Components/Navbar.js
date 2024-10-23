import React from 'react'

function Navbar() {
  return (
    <div  className='flex justify-between px-8 py-5'>
        <div>
            <p className="text-2xl font-semibold">Zynapse</p>
        </div>
        <div className='flex gap-3'>
            <p>About</p>
            <p>Contact</p>
            <p>Get Started</p>
        </div>
    </div>
  )
}

export default Navbar