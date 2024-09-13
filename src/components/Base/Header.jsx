import React from 'react'

const Header = () => {
  return (
    <>

      <nav className='justify-center w-48 md:w-64 text-center flex mt-6 text-white rounded-full bg-gray-800 shadow-md shadow-gray-500/50'>
        <ul className='flex space-x-3 p-1 text-base'>
          <li><a href="/">Home</a></li>
          <li><a href="../About">About</a></li>
          <li><a href="../Connect">Connect</a></li>
        </ul>
      </nav>

    </>
  )
}

export default Header