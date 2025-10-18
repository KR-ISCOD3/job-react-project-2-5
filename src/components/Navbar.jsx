import React from 'react'

function Navbar() {
  return (
    <nav className='w-full'>
        <div className='flex justify-between items-center px-2'>
            <div>
                <img src="./logo.png" alt="" className='w-[150px]' />
            </div>

            <div>
                <button className='px-4 py-1 '>
                    Login
                </button>
                <button className='px-5 py-1 rounded-3xl border border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white transition'>
                    Register Now
                </button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
