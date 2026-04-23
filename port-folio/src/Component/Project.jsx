import React from 'react'
import { FaDiamond } from "react-icons/fa6";
function Project() {
 
  return (
    <div className = "bg-linear-to-bl px-10 to-blue-700 from-black flex flex-col items-center w-full flex-1 scroll">
            <div className=' w-6/12 border-2 mt-20 p-10 justify-center-safe flex flex-col rounded-3xl  shadow-lg shadow-black'>
            <h1 className='font-bold text-white text-3xl underline pb-3'>Authentication System</h1>
            <p className='flex items-center gap-3 text-2xl text-gray-300 font-medium'><FaDiamond className='text-amber-300'/> Implemented user registration and login functionality </p>
            <p className='flex items-center gap-3 text-2xl text-gray-300 font-medium'><FaDiamond className='text-amber-300'/>Used JWT (JSON Web Token) for secure authentication </p>
            <p className='flex items-center gap-3 text-2xl text-gray-300 font-medium'><FaDiamond className='text-amber-300'/>Integrated Spring Security for role-based access control (User,Admin)</p>
            <p className='flex items-center gap-3 text-2xl text-gray-300 font-medium'><FaDiamond className='text-amber-300'/>Connected simple React frontend with backend REST APIs </p>
            
            <div className="mt-auto flex gap-4 pt-4">
              <span className="bg-gray-700 px-3 py-1 rounded text-cyan-300">Springboot</span>
              <span className="bg-gray-700 px-3 py-1 rounded text-cyan-300">JWT</span>
              <span className="bg-gray-700 px-3 py-1 rounded text-cyan-300">React</span>
              <span className="bg-gray-700 px-3 py-1 rounded text-cyan-300">MySQL</span>
           </div>
          </div>


          <div className=' w-6/12 border-2 mt-20 p-10 justify-center-safe flex flex-col rounded-3xl shadow-lg shadow-black'>
            <h1 className='font-bold text-white text-3xl underline pb-3'>E-Commerce Application</h1>
            <p className='flex items-center gap-3 text-2xl text-gray-300 font-medium'><FaDiamond className='text-amber-300'/>Developed REST APIs for Product, Category, User, Cart, and  </p>
            <p className='flex items-center gap-3 text-2xl text-gray-300 font-medium'>Order management</p>
            <p className='flex items-center gap-3 text-2xl text-gray-300 font-medium'><FaDiamond className='text-amber-300'/>Implemented relationships between entities using JPA</p>
            <p className='flex items-center gap-3 text-2xl text-gray-300 font-medium'><FaDiamond className='text-amber-300'/>Integrated JWT authentication and role-based authorization  </p>
            <p className='flex items-center gap-3 text-2xl text-gray-300 font-medium'><FaDiamond className='text-amber-300'/>Performed API testing using Postman </p>
            
            <div className="mt-auto flex gap-4 pt-4">
              <span className="bg-gray-700 px-3 py-1 rounded text-cyan-300">Springboot</span>
              <span className="bg-gray-700 px-3 py-1 rounded text-cyan-300">JWT</span>
              <span className="bg-gray-700 px-3 py-1 rounded text-cyan-300">React</span>
              <span className="bg-gray-700 px-3 py-1 rounded text-cyan-300">MySQL</span>
          </div>
           </div>

            <div className=' w-6/12 border-2 mt-20 p-10 justify-center-safe flex flex-col rounded-3xl shadow-lg shadow-black'>
            <h1 className='font-bold text-white text-3xl underline pb-3'>Blog Application</h1>
            <p className='flex items-center gap-3 text-2xl text-gray-300 font-medium'><FaDiamond className='text-amber-300'/>Built APIs for User, Post, Comment, and Like features </p>
            <p className='flex items-center gap-3 text-2xl text-gray-300 font-medium'><FaDiamond className='text-amber-300'/>Implemented entity relationships using JPA mappings </p>
            <p className='flex items-center gap-3 text-2xl text-gray-300 font-medium'><FaDiamond className='text-amber-300'/>Added authentication and authorization using JWT </p>
            <p className='flex items-center gap-3 text-2xl text-gray-300 font-medium'><FaDiamond className='text-amber-300'/>Enabled users to create posts, add comments, and like posts  </p>
            
            <div className="mt-auto flex gap-4 pt-4">
              <span className="bg-gray-700 px-3 py-1 rounded text-cyan-300">Springboot</span>
              <span className="bg-gray-700 px-3 py-1 rounded text-cyan-300">JWT</span>
              <span className="bg-gray-700 px-3 py-1 rounded text-cyan-300">MySQL</span>
          </div>
           </div>

          <div className=' w-6/12 border-2 mt-20 p-10 justify-center-safe flex flex-col rounded-3xl shadow-lg shadow-black mb-12'>
            <h1 className='font-bold text-white text-3xl underline pb-3'>Expense Tracker</h1>
            <p className='flex items-center gap-3 text-2xl text-gray-300 font-medium'><FaDiamond className='text-amber-300'/>Developed application to track income and expenses</p>
            <p className='flex items-center gap-3 text-2xl text-gray-300 font-medium'><FaDiamond className='text-amber-300'/>Implemented CRUD operations</p>
            <p className='flex items-center gap-3 text-2xl text-gray-300 font-medium'><FaDiamond className='text-amber-300'/>Connected frontend UI with backend APIs </p>
            
            <div className="mt-auto flex gap-4 pt-4">
              <span className="bg-gray-700 px-3 py-1 rounded text-cyan-300">Springboot</span>
              <span className="bg-gray-700 px-3 py-1 rounded text-cyan-300">React</span>
              <span className="bg-gray-700 px-3 py-1 rounded text-cyan-300">MySQL</span>
          </div>
           </div>

     
     
    </div>
  )
}

export default Project