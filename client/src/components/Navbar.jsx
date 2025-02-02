import React from 'react'

const Navbar = () => {
  return (
    
    <nav className=" bg-gradient-to-r from-blue-900 to-blue-500 absolute top-0 left-0 w-full p-4 flex justify-between items-center bg-transparent text-white">
    <h1 className="text-2xl font-bold">My Website</h1>
    <button className="px-4 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200">Sign Up</button>
    
   
  </nav>
  
  )
}

export default Navbar
