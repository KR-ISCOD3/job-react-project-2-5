import React from 'react'

function Navbar() {
  return (
    <nav className='w-full py-2'>
        <div className='flex justify-between items-center px-3 md:px-5 lg:px-30'>
            <div className='flex items-center'>
                <img src="./logo.png" alt="" className='w-[150px]' />
                <ul className='ms-5 hidden md:flex'>
                    <a href="" className='hover:scale-110 transition'>
                        <li className='md:px-3 lg:px-4'>Home</li>
                    </a>
                     <a href="" className='hover:scale-110 transition'>
                        <li className='md:px-3 lg:px-4'>Solution</li>
                    </a>
                    <a href="" className='hover:scale-110 transition'>
                        <li className='md:px-3 lg:px-4'>Jobs</li>
                    </a>
                     <a href="" className='hover:scale-110 transition'>
                        <li className='md:px-3 lg:px-4'>Contact</li>
                    </a>
                </ul>
            </div>

            <div>
                <button className='px-4 py-1 ' tabIndex={-1}>
                    Login
                </button>
                <button className='px-4 py-1 rounded-3xl border border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white transition'>
                    Register
                </button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
